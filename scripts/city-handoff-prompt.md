# Handoff: finish the remaining city pages for BtechWaleTech

Paste everything below the line into Claude Code, opened in E:\BtechWaleService.

---

Continue the city landing-page project in E:\BtechWaleService (Astro site, btechwaletech.in). 701 of 1,210 city pages are
done and pass every check. Write the remaining ~509 cities to the same standard, using parallel subagents.

## How the project works (read these first)
- City list: src/data/cities/cities.json (1,210 cities, each with slug/name/state).
- One content file per city: src/data/cities/content/{slug}.ts (type in src/data/cities/types.ts). A page is only built
  once its file exists. The route is src/pages/[city].astro, rendered by src/components/city/CityPage.astro.
- Writing brief for every agent: scripts/city-brief.md. It covers prices, the starting-price rule, IT-services scope,
  Android & iOS apps, SEO keyword rules, word count and uniqueness. Follow it exactly and don't weaken it.
- Quality gate: `node scripts/check-city-content.mjs [slug ...]`. Every page must PASS. It checks for:
  - 4,500+ words
  - ≤12% shared 8-word phrases with any other page
  - title ≤70 characters including the brand
  - description 120–165 characters
  - 12+ FAQs
  - valid nearby slugs
  - starting-price wording only
  - no payment gateway names on location pages

## Use these skills while working
Load and apply: seo-local, programmatic-seo (or seo-programmatic), ai-seo / seo-geo (AEO/GEO answer blocks), seo-schema,
seo-content / content-writer. Summarise the relevant guidance into the agent prompts where it adds something. Don't
contradict scripts/city-brief.md.

## Orchestration (do exactly this)
1. Build the queue of cities that have no content file (run `mkdir -p .tmp` first):
   ```
   python -c "import json,os;d=json.load(open('src/data/cities/cities.json',encoding='utf-8'));done={f[:-3] for f in os.listdir('src/data/cities/content')};q=[f\"{c['name']} ({c['state']}) slug={c['slug']}\" for c in d if c['slug'] not in done and c['slug']!='ranibennur'];json.dump(q,open('.tmp/queue.json','w',encoding='utf-8'),ensure_ascii=False);print(len(q))"
   ```
2. Split the queue into groups of 5 cities. Launch one background general-purpose Agent per group, up to the concurrent
   subagent limit (20 by default; raise CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS for more). Prompt per agent:
   "Read and follow exactly the brief at E:\BtechWaleService\scripts\city-brief.md. Your cities: <5 cities with slugs>"
3. Each time an agent finishes, launch the next group straight away so every slot stays busy. Keep the Claude Code
   window open the whole time; agents die if the session ends. If it does end, rebuild the queue (step 1) and relaunch.
   The brief tells agents to finish any half-written file they find.
4. After each wave, run the checker on all files. Any FAIL, usually one agent's cities overlapping each other at >12%,
   goes to a fix agent: "rewrite the shared generic passages in genuinely different structure/wording until all pass at
   4,650+ checker words; edit only these files".
5. At the end, run `node scripts/check-city-content.mjs` (0 failing), then `npx astro build`. Confirm every city slug
   has dist/{slug}/index.html and appears in dist/sitemap-0.xml.

## Special cases in the remaining list
- These slugs have garbled names from the PDF. Tell the agent the real name and use it in the page text:
  - farooenagar = Farooqnagar (Telangana)
  - manjlegaon = Majalgaon (Beed, Maharashtra)
- These cities already have a related page, so write them with a clearly different angle:
  - jalandhar-cantt: write about the cantonment area itself, since jalandhar.ts exists.
  - mathura: vrindavan.ts exists; cover city trade, the refinery and the Janmabhoomi pilgrim economy instead.
- Skip ranibennur. It is the same town as the existing ranebennuru page.

## Rules
- Commit only when the user asks. Commits go under the user's name only: never add a "Co-Authored-By: Claude" line or any
  Claude attribution.
- Don't change prices, CityPage.astro or the checker unless the user asks. Prices live in src/data/pricing/plans.ts.
- Report progress as "X of 1,210 done, Y passing", and list any facts agents flagged as unverified.
