# Brief: /{slug}/ website-development pages across India (batch 3, BtechWaleTech)

Repo: E:\BtechWaleService (Astro, https://btechwaletech.in). You write ONE content file per assigned slug:
`src/data/keywords/content/{slug}.ts` → rendered at `/{slug}/` by FreelancePage.astro (same design as the city, country,
Bhiwadi and Gujarat pages; the template adds breadcrumbs, schema, the INR price card and price table).
The plan is the 100 entries in `src/data/keywords/keywords.json` with `"batch": 3` (group `india-website-development`):
`slug`, `keyword` (primary query), `angle` (the one question this page answers) and `place` (the city, or "India").
Every page is about WEBSITE DEVELOPMENT (websites, web design, ecommerce sites, web apps, website SEO, maintenance). Other
services (apps, ERP, AI) may appear only as short "also available" mentions with links.
Goal: the single most useful page on the web for that keyword in that place, so it can rank in Google and be quoted by AI
search, and it turns the reader into a WhatsApp enquiry.

## Base rules
Read `scripts/keyword-brief-v2.md` fully and follow "The business", "India pages: extra rules", "Field-by-field spec",
"Links you may use", "SEO / AEO / GEO rules", "Size and uniqueness" and "Writing", using the **India page skeleton**
(INR `P.*` helpers, optional USD equivalents). Read `src/data/freelance/types.ts`, skim
`src/components/freelance/FreelancePage.astro`, and read ONE existing page for format:
`src/data/gujarat/content/website-development-services-surat.ts` (a city page of the same kind; its path and links are
Gujarat-specific, yours are `/{slug}/`). Never reuse its sentences. The overrides below win over keyword-brief-v2.md.

## Overrides
1. **No team member names** anywhere (not Ankur, Santosh, Vedansh or any surname), even though keyword-brief-v2.md lists
   them. Use "the BtechWaleTech team"; describe roles without names (full-stack developer, AI/cloud/SEO engineer, project
   lead). Include a facts card such as ["Who builds it", "The BtechWaleTech team"] (the checker requires that phrase).
2. **We are freelancers, NOT a company** (owner's instruction). BtechWaleTech is three freelance developers working
   remotely from India. Never call it a company, agency, firm or studio, and never write a "we are not a company"
   disclaimer. Never use service-company phrases at all, not even about others: "website development company",
   "web development company", "web design company", "website design company", "software company", "IT company",
   "app development company", "ecommerce company", "SEO company" (also plural "companies"); the checker fails them.
   Say "freelance web developers", "freelance team", "website development services", "the BtechWaleTech team"; call
   alternatives "an agency" or "a large agency". "Company" is fine only for the CLIENT's business ("your company profile",
   "a logistics company website").
3. **Remote team, no office.** No office, branch, address or staff in any city; no site visits. Work runs over WhatsApp,
   phone and video calls, screen-share reviews and a staging link. Say it positively. Never write "our office in…",
   "we are based in {city}", "visit us" (the checker fails these).
4. **Maintenance is 2 months free after launch**, then optional care from `P.care` (from the third month). Never 5 months.
5. **Languages.** The team writes English and Hindi. For Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, Odia,
   Assamese, Punjabi, Urdu or Gujarati sites: we build the typography (Unicode, Google Fonts such as the Noto Sans family),
   layout, language switcher, separate URLs and SEO; **the client or their translator supplies or approves the copy**.
   Never imply native copywriting in those languages and never write non-Latin script on the page.
6. **No legal/compliance sign-off** (GST, RERA, FSSAI, NMC, DPDP Act, consumer rules): we build what the rules require to
   be shown; the client's lawyer or CA confirms. Never claim certifications.
7. **Never guarantee rankings** or "top 1" positions. You may say plainly that nobody can; explain what we do instead.

## Fact discipline
- Use WebSearch for every city: "website developer in {City}" (see what ranks and what "People also ask" shows) and
  "{City} industries economy" (or the industry + city). Optionally WebFetch 1–2 useful non-directory results. Cover their
  questions and fill their gaps (honest cost drivers, process, ownership, risks, checklists, decision tables).
- The angle's local hints (markets, areas, industries) are starting points: verify anything specific before stating it;
  if unsure, keep it general or leave it out. Name the source in the sentence when you use a figure. Never invent
  statistics, rankings, business counts, client names, reviews, results or local competitor names.
- City name variants searchers use (mention naturally): Bangalore/Bengaluru, Gurgaon/Gurugram, Prayagraj/Allahabad,
  Trivandrum/Thiruvananthapuram, Mysore/Mysuru, Mangalore/Mangaluru, Trichy/Tiruchirappalli, Hubli/Hubballi,
  Visakhapatnam/Vizag, Pondicherry/Puducherry, Kozhikode/Calicut, Kochi/Cochin, Aurangabad/Chhatrapati Sambhajinagar.
- Allowed external links (max 3 per page, only if useful): official government portals (gst.gov.in, state portals,
  RERA sites), fonts.google.com, Google Search Central / Business Profile help, developer docs (WordPress, Shopify,
  Next.js, React). Format `<a href='https://…' rel='noopener'>…</a>`, HTML fields only.

## Linking (every internal href ends with "/"; the checker rejects broken ones)
- Batch-3 siblings: `/{slug}/` for any batch-3 slug in keywords.json (all 100 are being written now, so they are valid).
- City pages (general IT services) `/{city}/`: ONLY slugs that exist as files in `src/data/cities/content/` (check with
  Glob). Their slugs differ from yours: `/bengaluru/`, `/gurgaon/`, `/allahabad/`, `/thiruvananthapuram/`, `/mysore/`,
  `/mangaluru/`, `/tiruchirappalli/`, `/hubli-dharwad/`, `/visakhapatnam/`, `/kozhikode/`, `/kochi/`, `/aurangabad/`,
  `/panaji/`, `/margao/`. There is NO city page for Ghaziabad, Kota, Kolhapur, Bareilly, Gorakhpur or Navi Mumbai.
- Other India keyword pages `/{slug}/`: only slugs with a file in `src/data/keywords/content/` (e.g.
  /website-developer-near-me/, /web-developer-near-me/, /freelance-web-developer-india/, /website-making-cost-in-india/,
  /ecommerce-website-cost-in-india/, /shopify-store-setup/, /freelance-wordpress-developer/, /website-redesign-freelancer/,
  /seo-website-developer/, /website-maintenance-freelancer/, /freelancer-vs-agency-for-website/; Glob to confirm others).
- Also: /services/web-development/, /services/seo-services/, /pricing/, /contact/, /portfolio/, /india/ and the state
  pages under /india/{state}/ that exist in src/pages/india/ (check with Glob).
- In HTML fields: 4–7 internal links per 1,000 words: the city page, 3–6 batch-3 siblings (same city's other intents,
  nearby cities), 1–3 India keyword pages.
- related: 12–14 links: same-city batch-3 siblings, nearby-city batch-3 pages, the city page if it exists, 2–3 India
  keyword pages, and /services/web-development/ or /pricing/.

## Field spec differences from keyword-brief-v2.md
- path `/{slug}/`; crumb: the keyword in sentence case INCLUDING the place ("Website developer in Delhi",
  "Ecommerce website development in Pune"); updated: "2026-10-02".
- meta.title ≤ 54 chars: keyword first, plus a hook (P.* starting price or a benefit). meta.description 120–165 chars
  with the keyword, a P.* starting price and a reason to click.
- meta.keywords 22–30: exact keyword, "near me", company/developer/designer/services variants as searchers type them,
  cost and price forms, localities, name variants, Hindi/Hinglish forms.
- hero.origin: e.g. "Three freelance developers in India · websites for {City} businesses · WhatsApp 7 days a week".
- facts: 6 pairs incl. ["Who builds it", "The BtechWaleTech team"] (vary the label), starting price, timeline,
  languages, billing (INR · UPI or bank transfer), after launch ("2 months of maintenance free").
- areas: 14–16 cards. City pages: the city's localities, markets, business districts, industrial areas and nearby towns
  (20–35 word note each on which businesses there need this kind of website); hrefs only where a valid page exists
  (a nearby city's /{city}/ page or a batch-3 sibling), otherwise no href. India-wide pages: cities across India linking
  batch-3 city pages (e.g. /website-developer-pune/) or /{city}/ pages.
- guide: 15 sections, 200–260 words each. ≥ 6 headings contain the keyword or a close variant with the place; ≥ 6 are
  real "People also ask" questions. Must include, written fresh for this angle: what it is / who in {place} needs it;
  the {place} market (industries, buyers, competition, language) from verified facts; cost and cost drivers (P.*);
  process and timeline (remote, step by step); how to choose and vet; tech choices; a feature checklist for this angle;
  regional-language / bilingual content (Override 5); mobile, WhatsApp, UPI; SEO and AI-search visibility for {place}
  searches (Google Business Profile, local landing pages, schema, speed, Core Web Vitals); ownership and handover;
  risks and red flags; a clearly hypothetical worked example set in {place} ("Say a three-chair dental clinic in
  Kothrud…"; never a real or fake client, never invented results); maintenance (2 months free); serving nearby areas,
  with sibling links.
- tables: 3 (cost by scope with P.*, a decision/feature comparison, a timeline or checklist), 5–8 rows each.
- process: 6 steps. faqs: 19–21, answers 55–85 words, self-contained plain text.
- Exact keyword 15–30 times; the place name (the `place` value, exact spelling) 40–90 times (checker minimum 30).
- website-banane-wala is Hinglish: follow keyword-brief-v2.md's Hinglish rule (lede, answer, 3–4 guide sections and 6+
  FAQs in natural Latin-script Hinglish; the rest in simple Indian English).

## Size and uniqueness (checker)
Reported total ≥ 5,700 words (it adds 650 template words): aim for 6,000–6,600 (about 5,400–6,000 words of your own).
8-word-phrase overlap ≤ 12% with EVERY other page, including ~1,600 existing pages (300 Gujarat pages on this same
topic) and 99 sibling batch-3 pages written in parallel by 19 other writers. This is the hardest rule: the generic parts
(process, ownership, pricing, maintenance, FAQs) must be written from scratch on every page with different structure,
examples, sentence rhythm and order. Never reuse a paragraph from your previous page and never let two of your pages
share a template. Same-city pages must each answer THEIR angle only (developer ≠ designer ≠ ecommerce ≠ freelance ≠
cost) so they don't compete with each other.

## Rules for you as a parallel writer
- Write ONLY your assigned files in src/data/keywords/content/. Do NOT edit any other repo file (not keywords.json, not
  the checker, not other pages). No astro build, npm scripts or git. If your file exists (a previous run stopped),
  finish or fix it.
- Put any helper scripts in your own folder: the scratchpad path + `/india-writer-{your number}/`.
- After EACH file: `cd /e/BtechWaleService && node scripts/check-keyword-content.mjs {slug}` (takes ~20–60 s) and fix
  every FAIL. If overlap with another page is reported, rewrite YOUR sentences only.
- Inside TS strings use backtick template literals when text contains ${P.x} or apostrophes; curly quotes “ ” in prose.
- Finish by running the checker on all your slugs together and report the PASS lines plus any facts you left out.
