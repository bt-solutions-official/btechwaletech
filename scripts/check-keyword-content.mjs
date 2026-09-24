// Quality gate for src/data/keywords/content/*.ts (/{keyword}/ pages, rendered by FreelancePage.astro).
// Overlap is measured against every keyword page plus the /freelancers/ and /freelancing/ pages.
// Usage: node scripts/check-keyword-content.mjs [slug ...]   (no args = check all)
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { buildSync } from "esbuild";

const MIN_PAGE_WORDS = 5500; // rendered <main> words, template included
const TEMPLATE_WORDS = 650; // shared FreelancePage words (price table, quote card, CTA links); ~700 measured on /freelance-web-developer/
const MAX_OVERLAP = 0.12; // share of a page's 8-word phrases also found in any other single page
const root = process.cwd();
const plans = readFileSync(join(root, "src", "data", "pricing", "plans.ts"), "utf8");
const dir = join(root, "src", "data", "keywords", "content");
const keywordSlugs = new Set(JSON.parse(readFileSync(join(root, "src", "data", "keywords", "keywords.json"), "utf8")).map((k) => k.slug));
const citySlugs = new Set(readdirSync(join(root, "src", "data", "cities", "content")).map((f) => f.replace(/\.ts$/, "")));

// Bundle each file so the @data aliases (price helpers, regions) resolve through tsconfig paths.
async function load(file) {
  const { outputFiles } = buildSync({ entryPoints: [file], bundle: true, format: "esm", platform: "node", write: false, logLevel: "silent" });
  return (await import(`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString("base64")}`)).default;
}

const strip = (s) => String(s).replace(/<[^>]+>/g, " ");
function renderedText(c) {
  return [
    c.hero.eyebrow, c.hero.h1, c.hero.lede, ...c.hero.pills, c.hero.origin, ...c.facts.flat(), ...c.stats.flatMap((s) => [s.value, s.label]),
    c.answer.heading, c.answer.text, c.answer.more, c.snapshot.caption, ...c.snapshot.rows.flatMap((r) => [r.label, r.value]),
    c.services.eyebrow, c.services.heading, c.services.note, ...c.services.cards.flatMap((s) => [s.name, s.note]),
    c.comparison.heading, c.comparison.note, ...c.comparison.columns, ...c.comparison.rows.flat(), c.comparison.fine,
    c.pricing.heading, c.pricing.note,
    ...c.guide.flatMap((g) => [g.heading, ...g.paragraphs, ...(g.list ?? []), ...(g.subs ?? []).flatMap((s) => [s.heading, s.text]), ...(g.after ?? [])]),
    ...c.tables.flatMap((t) => [t.eyebrow, t.heading, t.note, ...t.columns, ...t.rows.flat()]),
    c.areas.eyebrow, c.areas.heading, c.areas.note, ...c.areas.cards.flatMap((a) => [a.name, a.note]),
    c.process.heading, ...c.process.steps.flat(), c.faqHeading, ...c.faqs.flatMap((f) => [f.question, f.answer]),
    c.related.heading, ...c.related.links.map((l) => l.name), c.cta.heading, c.cta.note,
  ].map(strip).join(" ");
}
const words = (t) => t.split(/\s+/).filter(Boolean);
function shingles(t) {
  const w = words(t.toLowerCase().replace(/[^\p{L}\p{N}₹ ]/gu, " "));
  const set = new Set();
  for (let i = 0; i + 8 <= w.length; i++) set.add(w.slice(i, i + 8).join(" "));
  return set;
}
function validHref(href) {
  const p = href.split(/[?#]/)[0];
  if (!p.startsWith("/") || p === "/") return true;
  const segs = p.split("/").filter(Boolean);
  if (segs.length === 1 && (keywordSlugs.has(segs[0]) || citySlugs.has(segs[0]))) return true;
  if (["india", "it-services", "countries"].includes(segs[0])) return true;
  const base = join(root, "src", "pages", ...segs);
  return existsSync(join(base, "index.astro")) || existsSync(`${base}.astro`);
}

const pages = [];
for (const f of readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
  try { pages.push({ slug: f.replace(/\.ts$/, ""), c: await load(join(dir, f)) }); }
  catch (e) { pages.push({ slug: f.replace(/\.ts$/, ""), error: e.message }); }
}
const peers = [...pages.filter((p) => p.c)];
for (const f of ["freelancers", "freelancing"]) peers.push({ slug: `~${f}`, c: await load(join(root, "src", "data", "freelance", `${f}.ts`)) });
const sh = new Map(peers.map((p) => [p.slug, shingles(renderedText(p.c))]));
const index = new Map();
for (const [slug, set] of sh) for (const s of set) (index.get(s) ?? index.set(s, []).get(s)).push(slug);

const targets = process.argv.slice(2);
let failed = 0;
for (const { slug, c, error } of pages) {
  if (targets.length && !targets.includes(slug)) continue;
  const problems = [];
  if (error) problems.push(`does not compile: ${error}`);
  else {
    const text = renderedText(c);
    const raw = JSON.stringify(c);
    if (!keywordSlugs.has(slug)) problems.push(`"${slug}" is not in keywords.json`);
    if (c.path !== `/${slug}/`) problems.push(`path "${c.path}" must be "/${slug}/"`);
    const total = words(text).length + TEMPLATE_WORDS;
    if (total < MIN_PAGE_WORDS) problems.push(`~${total} page words, need ${MIN_PAGE_WORDS}+ (add ~${MIN_PAGE_WORDS - total} unique words)`);
    const tLen = `${c.meta.title} | BtechWaleTech`.length;
    if (tLen > 70) problems.push(`title ${tLen} chars with brand suffix, keep <= 70`);
    const dLen = c.meta.description.length;
    if (dLen < 120 || dLen > 165) problems.push(`meta description ${dLen} chars, keep 120-165`);
    const qa = words(strip(c.answer.text)).length;
    if (qa < 40 || qa > 75) problems.push(`answer.text ${qa} words, keep 40-70`);
    if (c.meta.keywords.length < 20) problems.push(`${c.meta.keywords.length} meta keywords, need 20+`);
    if (c.faqs.length < 18) problems.push(`${c.faqs.length} FAQs, need 18+`);
    if (c.guide.length < 14) problems.push(`${c.guide.length} guide sections, need 14+`);
    if (c.tables.length < 2) problems.push(`${c.tables.length} tables, need 2+`);
    if (c.areas.cards.length < 14) problems.push(`${c.areas.cards.length} area cards, need 14+`);
    if (c.related.links.length < 12) problems.push(`${c.related.links.length} related links, need 12+`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(c.updated)) problems.push("updated must be YYYY-MM-DD");
    // We are a freelance group: never call ourselves a company/agency, and don't run a "we are not a company" disclaimer either.
    const company = text.match(/\bnot an? (?:company|agency|firm)\b|\b(?:our|this) (?:company|agency|firm|organi[sz]ation)\b|\bwe(?: are|'re) an? (?:\w+ )?(?:company|agency|firm)\b|\bBtechWaleTech (?:is|as) an? (?:\w+ )?(?:company|agency|firm)\b/gi);
    if (company) problems.push(`company wording, found: ${[...new Set(company)].join(", ")}`);
    if (/razorpay|paytm|cashfree|payu|stripe|instamojo|ccavenue/i.test(raw)) problems.push("names a payment gateway brand");
    const stale = text.match(/fixed (?:quote|package price)|(?:at|our) fixed prices?|prices are fixed|\b30-page\b|₹5,000|₹15,000|₹25,000|₹2,000/gi);
    if (stale) problems.push(`prices must read as starting prices, found: ${[...new Set(stale)].join(", ")}`);
    const promise = text.match(/guarantee[ds]? (?:#1|number one|first|top) (?:rank|position|page)|\bguaranteed (?:#1|top|first)/gi);
    if (promise) problems.push(`ranking guarantee, found: ${[...new Set(promise)].join(", ")}`);
    const filler = text.match(/\b(?:cutting-edge|seamless(?:ly)?|leverag(?:e|ing)|in today's digital age|unlock|elevate|delve|tapestry|bustling|vibrant|nestled|robust)\b/gi);
    if (filler) problems.push(`filler words: ${[...new Set(filler.map((w) => w.toLowerCase()))].join(", ")}`);
    // Only plan prices may appear as rupee figures; everything else must come from P.* or be worded without amounts.
    const planPrices = new Set([...plans.matchAll(/price: "(₹[\d,]+)"/g)].map((m) => m[1]));
    const oddPrices = [...new Set(text.match(/₹\s?\d[\d,]*/g) ?? [])].map((p) => p.replace(/\s/, "").replace(/,$/, "")).filter((p) => !planPrices.has(p));
    if (oddPrices.length) problems.push(`rupee amounts not from the pricing plans: ${oddPrices.join(", ")}`);
    // These fields render as plain text, so HTML in them shows up as raw tags.
    const plain = [c.answer.text, c.hero.origin, ...c.hero.pills, ...c.facts.flat(), ...c.snapshot.rows.flatMap((r) => [r.label, r.value]), ...c.services.cards.map((x) => x.note), ...c.comparison.rows.flat(), c.comparison.fine, c.pricing.note, ...c.areas.cards.map((a) => a.note), ...c.process.steps.flat(), ...c.faqs.flatMap((q) => [q.question, q.answer]), c.cta.note];
    if (plain.some((t) => /<[a-z/][^>]*>/i.test(t))) problems.push("HTML inside a plain-text field (answer.text, FAQs, cards, comparison, snapshot, process, cta)");
    const hrefs = [...raw.matchAll(/href=\\?['"](\/[^'"\\]*)\\?['"]|"href":"(\/[^"]*)"/g)].map((m) => m[1] ?? m[2]);
    const bad = [...new Set(hrefs.filter((h) => !validHref(h)))];
    if (bad.length) problems.push(`broken internal links: ${bad.join(", ")}`);
    const mine = sh.get(slug);
    const hits = new Map();
    for (const s of mine) for (const other of index.get(s)) if (other !== slug) hits.set(other, (hits.get(other) ?? 0) + 1);
    for (const [other, hit] of hits) {
      const ratio = hit / Math.max(mine.size, 1);
      if (ratio > MAX_OVERLAP) problems.push(`${(ratio * 100).toFixed(1)}% of phrases shared with ${other}, max ${MAX_OVERLAP * 100}%`);
    }
    if (!problems.length) console.log(`PASS ${slug}: ~${total} words`);
  }
  if (problems.length) {
    failed++;
    console.log(`FAIL ${slug}${c ? ` (~${words(renderedText(c)).length + TEMPLATE_WORDS} words)` : ""}\n  - ${problems.join("\n  - ")}`);
  }
}
console.log(`\n${pages.length} keyword files, ${failed} failing`);
process.exit(failed ? 1 : 0);
