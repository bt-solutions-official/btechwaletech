// Quality gate for keyword pages rendered by FreelancePage.astro:
//   src/data/keywords/content/{slug}.ts             -> /{slug}/            (listed in keywords.json)
//   src/data/keywords/countries/{country}/{slug}.ts -> /{country}/{slug}/  (listed in countries.json)
// Overlap is measured against every keyword page plus the /freelancers/ and /freelancing/ pages.
// Compiled pages are cached by mtime in node_modules/.cache/keyword-check, so re-runs only rebuild edited files.
// Usage: node scripts/check-keyword-content.mjs [slug | country/slug ...]   (no args = check all)
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { buildSync } from "esbuild";

const MIN_PAGE_WORDS = 5500; // rendered <main> words, template included
const MIN_NEW_PAGE_WORDS = 6300; // batch-2 India pages and every country page (~5,650 unique words + template)
const TEMPLATE_WORDS = 650; // shared FreelancePage words (price table, quote card, CTA links); ~700 measured on /freelance-web-developer/
const MAX_OVERLAP = 0.12; // share of a page's 8-word phrases also found in any other single page
const root = process.cwd();
const kwDir = join(root, "src", "data", "keywords");
const plans = readFileSync(join(root, "src", "data", "pricing", "plans.ts"), "utf8");
const keywordList = JSON.parse(readFileSync(join(kwDir, "keywords.json"), "utf8"));
const keywordSlugs = new Map(keywordList.map((k) => [k.slug, k]));
const countryList = existsSync(join(kwDir, "countries.json")) ? JSON.parse(readFileSync(join(kwDir, "countries.json"), "utf8")) : {};
const countryIds = new Set(Object.entries(countryList).flatMap(([country, list]) => list.map((k) => `${country}/${k.slug}`)));
const citySlugs = new Set(readdirSync(join(root, "src", "data", "cities", "content")).map((f) => f.replace(/\.ts$/, "")));
const planInr = new Set([...plans.matchAll(/price: "(₹[\d,]+)"/g)].map((m) => m[1]));
const inrToUsd = Number(plans.match(/INR_TO_USD = ([\d.]+)/)[1]);
const planUsd = new Set([...planInr].map((p) => `US$${Math.round(Number(p.replace(/[^\d]/g, "")) * inrToUsd).toLocaleString("en-US")}`));
const storeFees = new Set(["US$25", "US$99"]); // Google Play one-time registration, Apple Developer Program per year

// Bundle each file so the @data aliases (price helpers, regions) resolve through tsconfig paths.
const cacheDir = join(root, "node_modules", ".cache", "keyword-check");
mkdirSync(cacheDir, { recursive: true });
const depsStamp = ["src/data/pricing/plans.ts", "src/data/countries/international.ts"].map((f) => statSync(join(root, f)).mtimeMs).join(":");
async function load(file, id) {
  const st = statSync(file);
  const stamp = `v2:${st.mtimeMs}:${st.size}:${depsStamp}`;
  const cacheFile = join(cacheDir, `${id.replace(/[\\/~]/g, "__")}.json`);
  try {
    const hit = JSON.parse(readFileSync(cacheFile, "utf8"));
    if (hit.stamp === stamp) return hit;
  } catch {}
  const { outputFiles } = buildSync({ entryPoints: [file], bundle: true, format: "esm", platform: "node", write: false, logLevel: "silent" });
  const c = (await import(`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString("base64")}`)).default;
  const entry = { stamp, c, h: [...shingles(renderedText(c))] };
  const tmp = `${cacheFile}.${process.pid}.tmp`;
  writeFileSync(tmp, JSON.stringify(entry));
  try { renameSync(tmp, cacheFile); } catch {} // another checker won the race; its entry is equivalent
  return entry;
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
// 32-bit FNV-1a of each 8-word phrase; collisions are rare enough not to move a ratio.
function shingles(t) {
  const w = words(t.toLowerCase().replace(/[^\p{L}\p{N}₹ ]/gu, " "));
  const set = new Set();
  for (let i = 0; i + 8 <= w.length; i++) {
    const s = w.slice(i, i + 8).join(" ");
    let h = 0x811c9dc5;
    for (let j = 0; j < s.length; j++) h = Math.imul(h ^ s.charCodeAt(j), 0x01000193);
    set.add(h >>> 0);
  }
  return set;
}
function validHref(href) {
  const p = href.split(/[?#]/)[0];
  if (!p.startsWith("/") || p === "/") return true;
  const segs = p.split("/").filter(Boolean);
  if (segs.length === 1 && (keywordSlugs.has(segs[0]) || citySlugs.has(segs[0]))) return true;
  if (segs.length === 2 && countryIds.has(`${segs[0]}/${segs[1]}`)) return true;
  if (["india", "it-services", "countries"].includes(segs[0])) return true;
  const base = join(root, "src", "pages", ...segs);
  return existsSync(join(base, "index.astro")) || existsSync(`${base}.astro`);
}

const files = readdirSync(join(kwDir, "content")).filter((f) => f.endsWith(".ts")).map((f) => ({ id: f.replace(/\.ts$/, ""), file: join(kwDir, "content", f) }));
const countriesDir = join(kwDir, "countries");
if (existsSync(countriesDir)) for (const country of readdirSync(countriesDir)) {
  for (const f of readdirSync(join(countriesDir, country)).filter((f) => f.endsWith(".ts"))) files.push({ id: `${country}/${f.replace(/\.ts$/, "")}`, file: join(countriesDir, country, f) });
}
const pages = [];
for (const { id, file } of files) {
  try { pages.push({ id, ...(await load(file, id)) }); }
  catch (e) { pages.push({ id, error: e.message }); }
}
const peers = pages.filter((p) => p.c);
for (const f of ["freelancers", "freelancing"]) peers.push({ id: `~${f}`, ...(await load(join(root, "src", "data", "freelance", `${f}.ts`), `~${f}`)) });

const targets = process.argv.slice(2).map((t) => t.replace(/^\/+|\/+$/g, ""));
const isTarget = (id) => !targets.length || targets.includes(id);

// Shared-phrase counts between each target page and every other page: sort (hash, page) pairs, then walk equal-hash runs.
const N = peers.length;
const M = 4096; // > N; hash * M + page stays below 2^53
let total = 0;
for (const p of peers) total += p.h.length;
const flat = new Float64Array(total);
let k = 0;
peers.forEach((p, i) => { for (const h of p.h) flat[k++] = h * M + i; });
flat.sort();
const shared = new Uint32Array(N * N);
const targetIdx = peers.map((p) => isTarget(p.id));
for (let a = 0; a < total;) {
  const h = Math.floor(flat[a] / M);
  let b = a + 1;
  while (b < total && Math.floor(flat[b] / M) === h) b++;
  if (b - a > 1) {
    for (let x = a; x < b; x++) {
      const i = flat[x] % M;
      if (!targetIdx[i]) continue;
      for (let y = a; y < b; y++) if (y !== x) shared[i * N + (flat[y] % M)]++;
    }
  }
  a = b;
}

let failed = 0, checked = 0;
for (const { id, c, h, error } of pages) {
  if (!isTarget(id)) continue;
  checked++;
  const problems = [];
  const intl = id.includes("/");
  if (error) problems.push(`does not compile: ${error}`);
  else {
    const text = renderedText(c);
    const raw = JSON.stringify(c);
    const entry = intl ? null : keywordSlugs.get(id);
    if (intl ? !countryIds.has(id) : !entry) problems.push(`"${id}" is not in ${intl ? "countries.json" : "keywords.json"}`);
    if (c.path !== `/${id}/`) problems.push(`path "${c.path}" must be "/${id}/"`);
    const total = words(text).length + TEMPLATE_WORDS;
    const min = intl || entry?.batch === 2 ? MIN_NEW_PAGE_WORDS : MIN_PAGE_WORDS;
    if (total < min) problems.push(`~${total} page words, need ${min}+ (add ~${min - total} unique words)`);
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
    if (c.areas.cards.length < (intl ? 12 : 14)) problems.push(`${c.areas.cards.length} area cards, need ${intl ? 12 : 14}+`);
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
    // Only plan prices may appear as money figures; everything else must come from P.* or be worded without amounts.
    // Legal thresholds and fines ("AUD 3 million", "₹40 lakh") are facts, not prices, so amounts with a magnitude word pass.
    const amounts = (re) => [...new Set([...text.matchAll(re)]
      .filter((m) => !/^\s?(?:million|billion|crore|lakh)\b/i.test(text.slice(m.index + m[0].length)))
      .map((m) => m[0].replace(/\s/g, "").replace(/[,.]$/, "")))];
    const rupees = amounts(/₹\s?\d[\d,]*/g);
    if (intl && rupees.length) problems.push(`country pages quote USD only (P.*Usd), found rupee amounts: ${rupees.join(", ")}`);
    else if (rupees.some((p) => !planInr.has(p))) problems.push(`rupee amounts not from the pricing plans: ${rupees.filter((p) => !planInr.has(p)).join(", ")}`);
    const dollars = amounts(/US\$\s?\d[\d,]*/g).filter((p) => !planUsd.has(p) && !storeFees.has(p));
    if (dollars.length) problems.push(`USD amounts not from the pricing plans (use P.*Usd): ${dollars.join(", ")}`);
    const foreign = amounts(/(?:(?<!US)\$|[£€¥]|\b(?:AED|SAR|SGD|AUD|CAD|NZD|GBP|EUR|JPY|INR|Rs\.?)\s?)\s?\d[\d,.]*/g);
    if (foreign.length) problems.push(`money amounts in other currencies or bare "$" (only P.* plan prices allowed), found: ${foreign.join(", ")}`);
    // These fields render as plain text, so HTML in them shows up as raw tags.
    const plain = [c.answer.text, c.hero.origin, ...c.hero.pills, ...c.facts.flat(), ...c.snapshot.rows.flatMap((r) => [r.label, r.value]), ...c.services.cards.map((x) => x.note), ...c.comparison.rows.flat(), c.comparison.fine, c.pricing.note, ...c.areas.cards.map((a) => a.note), ...c.process.steps.flat(), ...c.faqs.flatMap((q) => [q.question, q.answer]), c.cta.note];
    if (plain.some((t) => /<[a-z/][^>]*>/i.test(t))) problems.push("HTML inside a plain-text field (answer.text, FAQs, cards, comparison, snapshot, process, cta)");
    const hrefs = [...raw.matchAll(/href=\\?['"](\/[^'"\\]*)\\?['"]|"href":"(\/[^"]*)"/g)].map((m) => m[1] ?? m[2]);
    const bad = [...new Set(hrefs.filter((h) => !validHref(h)))];
    if (bad.length) problems.push(`broken internal links: ${bad.join(", ")}`);
    const noSlash = [...new Set(hrefs.filter((h) => !h.split(/[?#]/)[0].endsWith("/")))];
    if (noSlash.length) problems.push(`internal links must end with "/": ${noSlash.join(", ")}`);
    const i = peers.findIndex((p) => p.id === id);
    for (let j = 0; j < N; j++) {
      const ratio = shared[i * N + j] / Math.max(h.length, 1);
      if (j !== i && ratio > MAX_OVERLAP) problems.push(`${(ratio * 100).toFixed(1)}% of phrases shared with ${peers[j].id}, max ${MAX_OVERLAP * 100}%`);
    }
    if (!problems.length) console.log(`PASS ${id}: ~${total} words`);
  }
  if (problems.length) {
    failed++;
    console.log(`FAIL ${id}${c ? ` (~${words(renderedText(c)).length + TEMPLATE_WORDS} words)` : ""}\n  - ${problems.join("\n  - ")}`);
  }
}
const missing = targets.filter((t) => !pages.some((p) => p.id === t));
if (missing.length) { failed += missing.length; console.log(`FAIL no content file for: ${missing.join(", ")}`); }
console.log(`\n${pages.length} keyword files (${checked} checked), ${failed} failing`);
process.exit(failed ? 1 : 0);
