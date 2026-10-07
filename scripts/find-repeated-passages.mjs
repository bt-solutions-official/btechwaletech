// Finds passages that repeat word for word (14+ words) on another page. check-keyword-content.mjs only compares pages
// in pairs (max 12% shared), so a stock paragraph copied onto 50 pages passes it; this script catches that.
// It reads the checker's compiled cache, so run `node scripts/check-keyword-content.mjs {id}` first (it refreshes every page).
// Usage: node scripts/find-repeated-passages.mjs {id ...}      passages of those pages (id as in the checker: slug, gujarat/slug, usa/slug)
//        node scripts/find-repeated-passages.mjs --set=batch3  one summary line per page (sets: batch3, keywords, gujarat, bhiwadi-rajasthan, countries)
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const MIN = 14;
const root = process.cwd();
const cacheDir = join(root, "node_modules", ".cache", "keyword-check");
const batch3 = new Set(JSON.parse(readFileSync(join(root, "src", "data", "keywords", "keywords.json"), "utf8")).filter((k) => k.batch === 3).map((k) => k.slug));
const setOf = (id) => id.startsWith("/") ? "other" : !id.includes("/") ? (batch3.has(id) ? "batch3" : "keywords") : ["gujarat", "bhiwadi-rajasthan"].includes(id.split("/")[0]) ? id.split("/")[0] : "countries";
const skipKeys = new Set(["path", "href", "id", "updated", "slug", "size", "hideSm", "keywords"]);

// Every visible string of a page as [field path, words], so a passage never spans two fields.
function texts(c) {
  const out = [];
  (function walk(v, path) {
    if (typeof v === "string") {
      const words = v.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean);
      if (words.length >= MIN) out.push([path, words, words.map((w) => w.toLowerCase().replace(/[^\p{L}\p{N}₹]/gu, ""))]);
    } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`));
    else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) if (!skipKeys.has(k)) walk(x, path ? `${path}.${k}` : k);
  })(c, "");
  return out;
}
// 52-bit hash of a MIN-word window (two 32-bit hashes combined; exact in a double).
function hash(norm, i) {
  let a = 0x811c9dc5, b = 0x01000193;
  for (let j = i; j < i + MIN; j++) {
    const s = norm[j] + " ";
    for (let k = 0; k < s.length; k++) { const ch = s.charCodeAt(k); a = Math.imul(a ^ ch, 0x01000193); b = Math.imul(b ^ ch, 0x5bd1e995) ^ (b >>> 13); }
  }
  return (a >>> 0) * 2097152 + ((b >>> 0) & 0x1fffff);
}

const args = process.argv.slice(2);
const set = args.find((a) => a.startsWith("--set="))?.slice(6);
const ids = args.filter((a) => !a.startsWith("--")).map((a) => a.replace(/^\/+|\/+$/g, ""));
// The cache keeps entries of renamed or deleted pages; only pages whose source file still exists count.
const dirs = { gujarat: "gujarat/content", "bhiwadi-rajasthan": "bhiwadi/content" };
const source = (id) => { const [a, b] = id.split("/"); return join(root, "src", "data", b ? (dirs[a] ?? `keywords/countries/${a}`) : "keywords/content", `${b ?? a}.ts`); };
const pages = readdirSync(cacheDir).filter((f) => f.endsWith(".json")).map((f) => {
  const id = f.replace(/\.json$/, "").replace(/__/g, "/");
  if (!id.startsWith("/") && !existsSync(source(id))) return null;
  try { return { id, t: texts(JSON.parse(readFileSync(join(cacheDir, f), "utf8")).c) }; } catch { return null; }
}).filter(Boolean);
const targets = pages.filter((p) => (set ? setOf(p.id) === set : ids.includes(p.id)));
if (!targets.length) { console.log("No matching pages in the checker cache. Run the checker first; ids look like slug, gujarat/slug, usa/slug."); process.exit(1); }

// window hash -> page index that owns it, or -1 once a second page has it; `others` only when listing passages.
const owner = new Map();
const others = set ? null : new Map();
targets.forEach((p) => { for (const [, , n] of p.t) for (let i = 0; i + MIN <= n.length; i++) { const h = hash(n, i); if (!owner.has(h)) owner.set(h, p.id); } });
for (const p of pages) for (const [, , n] of p.t) for (let i = 0; i + MIN <= n.length; i++) {
  const h = hash(n, i), o = owner.get(h);
  if (o === undefined || o === p.id) continue;
  owner.set(h, -1);
  if (others) {
    const list = others.get(h) ?? others.set(h, new Set()).get(h);
    if (o !== -1) list.add(o);
    list.add(p.id);
  }
}

function passages(p) {
  const found = [];
  for (const [path, w, n] of p.t) {
    for (let i = 0; i + MIN <= n.length;) {
      if (owner.get(hash(n, i)) !== -1) { i++; continue; }
      let j = i;
      const where = new Set();
      while (j + MIN <= n.length && owner.get(hash(n, j)) === -1) { others?.get(hash(n, j))?.forEach((o) => o !== p.id && where.add(o)); j++; }
      found.push({ path, text: w.slice(i, j + MIN - 1).join(" "), words: j + MIN - 1 - i, where: [...where] });
      i = j + MIN - 1;
    }
  }
  return found;
}

if (set) {
  const rows = targets.map((p) => { const r = passages(p); return [p.id, r.length, r.reduce((a, x) => a + x.words, 0), p.t.reduce((a, [, w]) => a + w.length, 0)]; }).sort((a, b) => b[2] - a[2]);
  for (const [id, n, w, total] of rows) console.log(`${String(w).padStart(5)} words (${String(Math.round(100 * w / total)).padStart(2)}%) in ${String(n).padStart(3)} passages  ${id}`);
  const sum = rows.reduce((a, r) => a + r[2], 0), all = rows.reduce((a, r) => a + r[3], 0);
  console.log(`\n${set}: ${rows.length} pages, ${rows.filter((r) => r[1] === 0).length} clean, ${sum} repeated words (${(100 * sum / all).toFixed(1)}% of their text)`);
} else {
  for (const p of targets) {
    const r = passages(p);
    console.log(`\n${p.id}: ${r.length} repeated passages, ${r.reduce((a, x) => a + x.words, 0)} words`);
    for (const x of r) console.log(`- ${x.path} (${x.words} words, also on ${x.where.length}: ${x.where.slice(0, 3).join(", ")}${x.where.length > 3 ? ", …" : ""})\n  "${x.text}"`);
  }
}
