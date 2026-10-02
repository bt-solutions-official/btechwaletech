# Brief: make batch-3 India website pages word-for-word unique

The 100 batch-3 pages in `src/data/keywords/content/` (planned in keywords.json with `"batch": 3`) pass
`scripts/check-keyword-content.mjs`, but its overlap test is pairwise. Writers copied stock passages from each other, so the
same 14–65-word passages (CTA notes, pricing notes, ownership and maintenance lines, process steps, FAQ answers, a Hinglish
FAQ) now sit on dozens of pages. The owner asked for fully unique content, so every page must be rewritten until no
passage of 14+ words repeats on any other page of the site.

## Tool
`node C:/Users/HP/AppData/Local/Temp/claude/e--BtechWaleService/59da8d71-23b9-4a11-a253-ab00060bad48/scratchpad/dedup.mjs {slug}`
lists each repeated passage: the field path (e.g. `faqs[7].answer`, `guide[3].paragraphs[1]`, `cta.note`), its words, and
which other pages contain it. It reads the checker's cache, so always run the checker first:
`cd /e/BtechWaleService && node scripts/check-keyword-content.mjs {slug}` (refreshes every page, ~30 s).

## For each assigned page
1. Run the checker, then dedup.mjs for the slug.
2. Rewrite every listed passage in fresh words written for THIS page: its city, angle and reader. Don't just swap synonyms:
   change sentence structure and order, and add a concrete local detail or example where it fits (only facts already on
   the page or plainly true; no new statistics, client names or claims). Keep the meaning, the P.* prices (as `${P.x}`),
   links and facts. Keep the field's type and roughly its length. Rewrite the whole sentence around a passage, not just
   the matched words, so the new text doesn't share a shorter run either.
3. In `meta.keywords`, delete every entry containing "company" or "companies" (the owner's rule: we are freelancers), and
   add non-company variants so there are still 22–30 entries.
4. Re-run the checker and dedup.mjs. Repeat until the checker PASSes and dedup.mjs reports **0 repeated passages**.
   If a passage is shared with a page outside your list, rewrite YOUR copy only; never edit another page.

## Rules (unchanged from scripts/india-web-brief.md, which still applies)
No team member names (say "the BtechWaleTech team"); never call BtechWaleTech a company, agency, firm or studio and never
use service-company phrases; remote team, no office or site visits; 2 months free maintenance then `P.care`; regional-
language copy is supplied or approved by the client; no ranking guarantees (even in red-flag lists, write "promises of
first-page rankings", not "guaranteed…"); only P.* money figures; banned filler words (cutting-edge, seamless, leverage,
unlock, elevate, delve, robust, vibrant, bustling, nestled, tapestry). HTML only in the fields keyword-brief-v2.md allows.
Edit ONLY your assigned files. No build, npm scripts or git. Helper scripts go in the scratchpad under `dedup-{number}/`.

## Report
Final run of the checker on all your slugs (PASS lines) plus `dedup.mjs` output for each slug (should show 0 passages).
