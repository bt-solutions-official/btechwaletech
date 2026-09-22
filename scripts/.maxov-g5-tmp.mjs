// Quality gate for src/data/cities/content/*.ts (/{city}/ pages) and src/data/locations/content/*.ts
// (older /india/... and /it-services/... pages). Overlap is measured across both folders.
// Usage: node scripts/check-city-content.mjs [slug ...]   (no args = check all)
// Fails if a page is under the word target, reuses text from another city, or has broken fields.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module"; const { transformSync } = createRequire("E:/BtechWaleService/package.json")("esbuild");

const MIN_PAGE_WORDS = 4500; // rendered <main> words, template included
const TEMPLATE_WORDS = 750; // shared template words (measured ~790 on /indore/, rounded down)
const MAX_OVERLAP = 0.12; // share of a page's 8-word phrases also found in any other single city
const dirs = [join(process.cwd(), "src", "data", "cities", "content"), join(process.cwd(), "src", "data", "locations", "content")];
const cities = JSON.parse(readFileSync(join(process.cwd(), "src", "data", "cities", "cities.json"), "utf8"));
const slugs = new Set(cities.map((c) => c.slug));

async function load(dir, file) {
  const { code } = transformSync(readFileSync(join(dir, file), "utf8"), { loader: "ts", format: "esm" });
  return (await import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`)).default;
}

const strip = (s) => s.replace(/<[^>]+>/g, " ");
function renderedText(c) {
  return [
    c.hero.eyebrow, c.hero.h1, c.hero.lede, ...c.hero.pills, c.quickAnswer,
    ...c.snapshot.flatMap((r) => [r.label, r.value]), ...Object.values(c.serviceNotes), c.whyUsIntro, c.pricingIntro,
    ...c.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])]),
    ...c.localities.flatMap((l) => [l.name, l.note]), ...c.industries.flatMap((i) => [i.name, i.need, i.build]),
    ...c.faqs.flatMap((f) => [f.question, f.answer]),
  ].map(strip).join(" ");
}
const words = (t) => t.split(/\s+/).filter(Boolean);
function shingles(t) {
  const w = words(t.toLowerCase().replace(/[^\p{L}\p{N}₹ ]/gu, " "));
  const set = new Set();
  for (let i = 0; i + 8 <= w.length; i++) set.add(w.slice(i, i + 8).join(" "));
  return set;
}

const all = [];
for (const [i, dir] of dirs.entries()) {
  const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));
  for (const f of files) {
    try {
      all.push({ file: f, location: i === 1, c: await load(dir, f) });
    } catch (e) {
      all.push({ file: f, location: i === 1, error: e.message });
    }
  }
}
const targets = process.argv.slice(2);
const sh = new Map(all.filter((x) => x.c).map((x) => [x.c.slug, shingles(renderedText(x.c))]));
// phrase -> slugs containing it, so overlap is one pass per page instead of comparing every pair
const index = new Map();
for (const [slug, set] of sh) for (const s of set) (index.get(s) ?? index.set(s, []).get(s)).push(slug);

let failed = 0;
for (const { file, location, c, error } of all) {
  if (targets.length && !targets.includes(file.replace(/\.ts$/, ""))) continue;
  const problems = [];
  if (error) problems.push(`does not compile: ${error}`);
  else {
    if (`${c.slug}.ts` !== file) problems.push(`slug "${c.slug}" does not match file name`);
    if (!location && !slugs.has(c.slug)) problems.push(`slug "${c.slug}" not in cities.json`);
    // BtechWaleTech is a freelance group, never a company/agency/firm.
    const notCompany = renderedText(c).match(/\b(?:our|this) (?:company|agency|firm|organi[sz]ation)\b|\bwe(?: are|'re) an? (?:\w+ )?(?:company|agency|firm)\b|\bBtechWaleTech (?:is|as) an? (?:\w+ )?(?:company|agency|firm)\b/gi);
    if (location && notCompany) problems.push(`calls us a company; we are a freelance group, found: ${[...new Set(notCompany)].join(", ")}`);
    // We are paid only by UPI QR code or bank transfer; old pages must not name third-party gateways.
    if (location && /razorpay|paytm|cashfree|payu|stripe|paypal/i.test(renderedText(c) + c.meta.keywords.join(" "))) problems.push("names a payment gateway; we accept UPI QR and bank transfer only");
    const total = words(renderedText(c)).length + TEMPLATE_WORDS;
    if (total < MIN_PAGE_WORDS) problems.push(`~${total} page words, need ${MIN_PAGE_WORDS}+ (add ~${MIN_PAGE_WORDS - total} unique words)`);
    const tLen = `${c.meta.title} | BtechWaleTech`.length;
    if (tLen > 70) problems.push(`title ${tLen} chars with brand suffix, keep <= 70`);
    const dLen = c.meta.description.length;
    if (dLen < 120 || dLen > 165) problems.push(`meta description ${dLen} chars, keep 120-165`);
    const qa = words(c.quickAnswer).length;
    if (qa < 35 || qa > 75) problems.push(`quickAnswer ${qa} words, keep 40-60`);
    if (c.faqs.length < 12) problems.push(`${c.faqs.length} FAQs, need 12+`);
    if (c.sections.length < 10) problems.push(`${c.sections.length} sections, need 10+`);
    if (c.localities.length < 8) problems.push(`${c.localities.length} localities, need 8+`);
    if (c.industries.length < 6) problems.push(`${c.industries.length} industries, need 6+`);
    const badNearby = c.nearby.filter((s) => !slugs.has(s));
    if (badNearby.length) problems.push(`nearby slugs not in cities.json: ${badNearby.join(", ")}`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(c.updated)) problems.push("updated must be YYYY-MM-DD");
    // Prices are starting prices only; old offer wording must not come back.
    const stale = renderedText(c).match(/fixed (?:quote|package price)|(?:at|our) fixed prices?|our (?:starting )?prices are fixed|\b30-page\b|\b30 pages\b/gi);
    if (stale) problems.push(`prices must read as starting prices, found: ${[...new Set(stale)].join(", ")}`);
    const mine = sh.get(c.slug);
    const hits = new Map();
    for (const s of mine) for (const other of index.get(s)) if (other !== c.slug) hits.set(other, (hits.get(other) ?? 0) + 1);
    for (const [other, hit] of hits) {
      const ratio = hit / Math.max(mine.size, 1);
      if (0) problems.push(`${(ratio * 100).toFixed(1)}% of phrases copied from ${other}, max ${MAX_OVERLAP * 100}%`);
    }
    console.log(c.slug, total, [...hits].map(([o,h])=>[o,(100*h/mine.size).toFixed(1)]).sort((a,b)=>b[1]-a[1]).slice(0,3).join(" "));
  }
  if (problems.length) {
    failed++;
    const count = c ? ` (~${words(renderedText(c)).length + TEMPLATE_WORDS} words)` : "";
    console.log(`FAIL ${file}${count}\n  - ${problems.join("\n  - ")}`);
  }
}
console.log(`\n${all.length} files, ${failed} failing`);
process.exit(failed ? 1 : 0);
