# Brief: make place pages word-for-word unique (batch-3 India pages and /gujarat/ pages)

Google Search Console shows hundreds of these pages as "Discovered/Crawled – currently not indexed". One cause we can fix:
`scripts/check-keyword-content.mjs` only compares pages in pairs, so writers reused stock passages (CTA notes, pricing
notes, ownership and maintenance lines, process steps, FAQ answers, a Hinglish FAQ) across dozens of pages. About 10% of
each page repeats word for word somewhere else. Every assigned page must be rewritten until no passage of 14+ words
repeats on any other page of the site.

## Page ids and files
- `{slug}` (batch-3 India page) → `src/data/keywords/content/{slug}.ts`
- `gujarat/{slug}` → `src/data/gujarat/content/{slug}.ts`

## Tools (run from E:\BtechWaleService)
- `node scripts/check-keyword-content.mjs {id ...}`: the quality gate (~30–60 s; it also refreshes the cache the next tool
  reads, so always run it after editing and before the next tool).
- `node scripts/find-repeated-passages.mjs {id ...}`: lists each repeated passage with its field path (e.g.
  `faqs[7].answer`, `guide[3].paragraphs[1]`, `cta.note`), its words and the other pages that contain it.

## For each assigned page
1. Run the checker for the id, then find-repeated-passages for it.
2. Rewrite every listed passage in fresh words written for THIS page: its place, angle and reader. Don't just swap
   synonyms: change sentence structure and order, and tie it to the page's own place or business type where it fits
   (only facts already on the page or plainly true; no new statistics, client names or claims). Keep the meaning, the P.*
   prices (as `${P.x}`), links and facts. Keep the field's type and roughly its length. Rewrite the whole sentence around
   a passage, not just the matched words, so the new text doesn't share a shorter run either.
3. In `meta.keywords`, delete entries that call US a company ("website development company {City}", "web design company
   …"); keep entries about the client's business ("pharma company website"). Keep 22–30 entries.
4. Set `updated: "2026-10-07"` (the sitemap's lastmod comes from this field, so it tells Google the page changed).
5. Re-run the checker and find-repeated-passages. Repeat until the checker PASSes and the page shows
   **0 repeated passages**. If a passage is shared with a page outside your list, rewrite YOUR copy only.
Work through pages in batches of 3–5 (one checker run covers several ids) to save time, and vary your wording between
your own pages: two of your rewrites must never match each other.

## Rules (unchanged; scripts/india-web-brief.md and scripts/gujarat-brief.md still apply)
No team member names (say "the BtechWaleTech team"); never call BtechWaleTech a company, agency, firm or studio and never
use service-company phrases in visible text; remote team, no office or site visits; 2 months free maintenance then
`P.care`; regional-language copy is supplied or approved by the client; no ranking guarantees (even in red-flag lists,
write "promises of first-page rankings", not "guaranteed…"); only P.* money figures; banned filler words (cutting-edge,
seamless, leverage, unlock, elevate, delve, robust, vibrant, bustling, nestled, tapestry). HTML only in the fields
keyword-brief-v2.md allows. Gujarat pages keep their place-name counts and "Gujarat" 8+ times (the checker enforces it).
Edit ONLY your assigned files. No astro build, npm scripts or git. Helper scripts go in your scratchpad folder.

## Report
The checker's PASS/FAIL lines for all your ids, and the number of repeated passages left per id (should be 0).
