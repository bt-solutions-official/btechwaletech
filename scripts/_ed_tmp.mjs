import { readFileSync, writeFileSync } from "node:fs";
const [file, jsonPath] = process.argv.slice(2);
let t = readFileSync(file, "utf8");
const pairs = JSON.parse(readFileSync(jsonPath, "utf8"));
for (const [a, b] of pairs) { const n = t.split(a).length - 1; if (n !== 1) { console.error("MATCH " + n + ": " + a.slice(0, 70)); process.exit(1); } t = t.replace(a, () => b); }
writeFileSync(file, t); console.log("ok", pairs.length);
