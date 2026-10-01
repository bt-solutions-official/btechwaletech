# Brief: /gujarat/{slug}/ website-development landing pages (BtechWaleTech)

Repo: E:\BtechWaleService (Astro, https://btechwaletech.in). You write ONE content file per assigned slug:
`src/data/gujarat/content/{slug}.ts` → rendered at `/gujarat/{slug}/` by FreelancePage.astro (the same design as the city,
country and Bhiwadi pages; the template adds Gujarat breadcrumbs, State areaServed schema, INR price card and price table).
The plan is `src/data/gujarat/pages.json` (300 entries): `slug`, `keyword` (primary query), `angle` (the one question this
page answers), `group`, and `place` (the city, town or area the page is about; "Gujarat" for state-wide pages).
Every page is about WEBSITE DEVELOPMENT (websites, web design, ecommerce sites, web apps, website SEO, maintenance). Other
services (apps, ERP, AI) may appear only as short "also available" mentions with links.
Goal: the single most useful page on the web for that keyword in that place, turning the reader into a WhatsApp enquiry.

## Base rules
Read `scripts/keyword-brief-v2.md` fully and follow "The business", "India pages: extra rules", "Field-by-field spec",
"Links you may use", "SEO / AEO / GEO rules", "Size and uniqueness" and "Writing", using the **India page skeleton**
(INR `P.*` helpers, optional USD equivalents). Read `src/data/freelance/types.ts`, skim
`src/components/freelance/FreelancePage.astro`, and read ONE existing page for format
(`src/data/bhiwadi/content/website-development.ts`). Never reuse its sentences. The overrides below win.

## Overrides
1. **Remote team, no office.** BtechWaleTech is three freelance developers working remotely from India. No office, branch,
   address or staff in Gujarat; no site visits. Work runs over WhatsApp, phone and video calls, screen-share reviews and a
   staging link. Say this positively, never as a disclaimer. Never write "our office in…", "we are based in Ahmedabad",
   "visit us" (the checker fails these).
2. **No team member names** anywhere (Ankur, Santosh, Vedansh or surnames). Use "the BtechWaleTech team"; describe roles
   without names. Include a facts card such as ["Who builds it", "The BtechWaleTech team"] (the checker requires the phrase).
3. **Maintenance is 2 months free after launch**, then optional care from `P.care` (from the third month). Never 5 months.
4. **Gujarati.** The team writes English and Hindi, not Gujarati. Offer Gujarati and bilingual sites honestly: we build
   Gujarati typography (Unicode, web fonts such as Noto Sans Gujarati / Hind Vadodara / Mukta Vaani / Baloo Bhai 2 from
   Google Fonts), layout, language switcher, separate URLs and SEO; **you or your translator supply or approve the Gujarati
   copy**. Never imply native Gujarati copywriting. Do not write Gujarati-script text on the page (Latin-script brand or
   place names are fine).
5. **No legal/compliance sign-off** (RERA, GST, FSSAI, NMC/IMC, ICAI, IFSCA, drug rules): we build what the rules require
   to be shown; the client's lawyer, CA or consultant confirms. Never claim certifications.
6. **Never guarantee rankings.** You may say plainly that nobody can.
7. **We are freelancers, NOT a company** (owner's instruction). Never describe BtechWaleTech as a company, agency, firm or
   studio, and never use service-company phrases at all: "website development company", "web development company",
   "web design company", "software company", "IT company", "app development company" (also plural "companies"). The
   checker fails them on every Gujarat page. Say "freelance web developers", "freelance team", "website development
   services", "the BtechWaleTech team". When you compare alternatives, call them "an agency" or "a large agency".
   "Company" is fine only for the CLIENT's business (e.g. "a pharma company website", "your company profile").
   The 18 city pages were renamed: `website-development-services-{city}` with keyword "website development services in
   {City}"; link those slugs, never the old `website-development-company-*` ones.

## Gujarat fact sheet (verified 2026-10-01; paraphrase, never paste; name the source in the sentence when you use a figure)
- Gujarat has 34 districts after Vav-Tharad district was carved out of Banaskantha (state government, 2025). Gujarati is
  the official language; Hindi and English are widely used in business.
- GIDC (Gujarat Industrial Development Corporation, gidc.gujarat.gov.in) says it has developed 239 industrial estates.
- Surat: diamond cutting and polishing and man-made textiles (weaving, processing, the Ring Road textile markets). The
  Surat Diamond Bourse was inaugurated on 17 December 2023.
- GIFT City, Gandhinagar, is India's first International Financial Services Centre (IFSC), regulated by IFSCA (ifsca.gov.in).
- Morbi is India's best-known ceramic tile and sanitaryware cluster (industry bodies such as the Morbi Ceramic Manufacturers
  Association call it the ceramic capital); also known for wall clocks.
- Rajkot: large engineering MSME cluster: pumps, foundry and forging, machine tools, auto components, diesel engines
  (cluster profiles by SAMEEEKSHA / BEE). Also silver and gold jewellery.
- Jamnagar: "Brass City" brass-parts cluster; also a major oil refining centre.
- Anand: home of the Amul dairy cooperative movement (GCMMF / Amul are headquartered in Anand).
- Ports: Deendayal Port (Kandla, renamed in 2017) and Mundra, both in Kutch; Gandhidham is the commercial town beside Kandla.
- Bhavnagar district: Alang ship-recycling yard. Vapi, Ankleshwar, Dahej, Vatva: chemical and dye belts. Vadodara:
  engineering, chemicals, pharma. Ahmedabad: textiles heritage, pharma, auto (Sanand), startups, real estate, education.
- Tourism: Statue of Unity at Ekta Nagar (Kevadia, Narmada district); Somnath and Dwarka temples; Gir (Asiatic lions,
  Sasan Gir); Rann Utsav in Kutch; Saputara hill station; Ambaji temple; Navratri garba across the state.
- City name variants searchers use: Vadodara/Baroda, Morbi/Morvi, Mehsana/Mahesana, Kutch/Kachchh, Ekta Nagar/Kevadia.
- Anything else (town economy, district, local industries) must be checked by WebSearch before you state it; if unsure,
  leave it out or keep it general. Never invent statistics, rankings, business counts or local company names.
- Allowed external links (max 3 per page, only if useful): gidc.gujarat.gov.in, ifsca.gov.in, official government
  portals (gujaratindia.gov.in, gst.gov.in, rera.gujarat.gov.in), fonts.google.com, Google Search Central / Business Profile
  help, developer docs (WordPress, Shopify, Next.js, React).

## Linking (every internal href ends with "/"; the checker rejects broken ones)
- Hub: `/gujarat/` (required in related). Siblings: `/gujarat/{slug}/` for any slug in pages.json.
- Existing city pages (general IT services): `/ahmedabad/ /surat/ /vadodara/ /rajkot/ /bhavnagar/ /jamnagar/ /nadiad/
  /porbandar/ /anand/ /morvi/ /mahesana/ /bharuch/ /vapi/ /navsari/ /veraval/ /bhuj/ /godhra/ /palanpur/ /valsad/
  /patan/ /deesa/ /amreli/ /anjar/ /dhoraji/ /khambhat/ /mahuva/ /keshod/ /wadhwan/ /ankleshwar/ /savarkundla/ /kadi/
  /visnagar/ /upleta/ /una/ /sidhpur/ /unjha/ /mangrol/ /viramgam/ /modasa/ /palitana/ /petlad/ /kapadvanj/ /sihor/
  /wankaner/ /limbdi/ /mandvi/` — only these. Also `/india/gujarat/`, `/india/gujarat/ahmedabad/`, `/it-services/gujarat/`,
  `/it-services/gujarat/ahmedabad/`, `/it-services/gujarat/surat/`, `/it-services/gujarat/vadodara/`,
  `/it-services/gujarat/rajkot/`, `/it-services/gujarat/gandhinagar/`.
- India keyword pages `/{slug}/`: ONLY slugs that exist as files in src/data/keywords/content/ (check with Glob).
- In HTML fields: 4–7 internal links per 1,000 words: the hub, 4–8 siblings (same city's other intents, nearby towns,
  related industries), the place's general city page if it exists, 1–3 India keyword pages.
- related: 12–14 links: `/gujarat/` (required), 8–10 closest siblings, plus the city page or `/india/gujarat/`, `/pricing/`
  or `/contact/`.

## Field spec differences from keyword-brief-v2.md
- path `/gujarat/{slug}/`; crumb: the keyword in sentence case INCLUDING the place (e.g. "Website developer in Surat",
  "Gujarati website development"); updated: "2026-10-01".
- meta.title ≤ 54 chars: keyword first, plus a hook (P.* price or benefit). meta.description 120–165 chars with keyword,
  a P.* starting price and a reason to click.
- meta.keywords 22–30: exact keyword, "near me", "{place} Gujarat", company/developer/designer/services variants, cost and
  price forms, nearby localities or towns, Baroda/Morvi-type name variants where relevant, Hindi/Hinglish forms.
- hero.origin: e.g. "Three freelance developers in India · building websites for {place} businesses · WhatsApp 7 days a week".
- facts: 6 pairs incl. ["Who builds it", "The BtechWaleTech team"] (vary the label), starting price, timeline, languages
  ("English, Hindi; Gujarati sites with your copy"), billing (INR · UPI or bank transfer), after launch ("2 months of
  maintenance free").
- areas: 14–16 cards. Town/city/area pages: its localities, markets, industrial estates and nearby towns (20–35 word note
  each on which businesses there need this kind of website); hrefs only to the allowed city pages or `/gujarat/` siblings.
  State-wide pages: cities across Gujarat, linking `/gujarat/website-development-services-{city}/` or
  `/gujarat/website-developer-{town}/` siblings.
- guide: 15 sections, 200–260 words each. ≥ 6 headings contain the keyword or a close variant with the place; ≥ 6 are real
  "People also ask" questions. Must include, written fresh for this angle: what it is / who in {place} needs it; the
  {place} market (industries, buyers, competition, language) from verified facts; cost and cost drivers (P.*); process
  and timeline (remote, step by step); how to choose and vet; tech choices; a feature checklist for this angle; Gujarati /
  bilingual content (Override 4); mobile, WhatsApp, UPI; SEO and AI-search visibility for {place} searches (Google
  Business Profile, local pages, schema, speed); ownership and handover; risks and red flags; a clearly hypothetical
  worked example ("Say a 12-loom unit in Bhiwandi Road…" style, set in {place}; never a real or fake client, never
  invented results); maintenance (2 months free); serving nearby towns, with sibling links.
- tables: 3 (cost by scope with P.*, a decision/feature comparison, a timeline or checklist), 5–8 rows each.
- process: 6 steps. faqs: 19–21, answers 55–85 words, self-contained plain text.
- Exact keyword 12–25 times; the place name 40–90 times (checker minimum 30); "Gujarat" at least 10 times (minimum 8).

## Size and uniqueness (checker)
Reported total ≥ 5,700 words (it adds 650 template words): aim for 6,000–6,600. 8-word-phrase overlap ≤ 12% with EVERY
other page, including 299 sibling Gujarat pages written in parallel by 19 other writers on the same topic. This is the
hardest rule: the generic parts (process, ownership, pricing, maintenance, FAQs) must be written from scratch on every page
with different structure, examples, sentence rhythm and order. Never reuse a paragraph from your previous page, and never
let two of your own pages share a template. Each city intent page must answer ITS angle only (cost page ≠ company page ≠
designer page) so pages don't compete with each other.

## Research (per page, short)
Load tools: ToolSearch "select:WebSearch,WebFetch". WebSearch the keyword as a Gujarat buyer types it, and for town/area
pages also "{place} Gujarat industries economy" (or the industry + place). Optionally WebFetch 1–2 useful non-directory
results. Cover their questions and fill their gaps. Never copy text or name local competitors. If search fails, continue
from the fact sheet and general knowledge, leaving out anything uncertain.

## Rules for you as a parallel writer
- Write ONLY your assigned files in src/data/gujarat/content/. Do NOT edit any other repo file. No astro build, npm
  scripts or git. If your file exists (a previous run stopped), finish or fix it.
- Put any helper scripts in your own folder: the scratchpad path + `/gujarat-writer-{your number}/`. Never touch other
  writers' files there.
- After EACH file: `cd /e/BtechWaleService && node scripts/check-keyword-content.mjs gujarat/{slug}` and fix every FAIL.
  If overlap with another page is reported, rewrite YOUR sentences only.
- Inside TS strings use backtick template literals when text contains ${P.x} or apostrophes; curly quotes “ ” in prose.
- Finish by running the checker on all your ids together and report the PASS lines plus any facts you left out.
