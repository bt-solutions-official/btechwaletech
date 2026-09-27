# Brief: /bhiwadi-rajasthan/{slug}/ local landing pages (BtechWaleTech)

Repo: E:\BtechWaleService (Astro, https://btechwaletech.in). You write ONE content file per assigned slug:
`src/data/bhiwadi/content/{slug}.ts` → rendered at `/bhiwadi-rajasthan/{slug}/` by FreelancePage.astro (same design as the
city and country pages, with Bhiwadi breadcrumbs, City schema and a "Book a one-to-one meeting in Bhiwadi" button added by
the template). The plan is `src/data/bhiwadi/pages.json`: each entry has `slug`, `keyword` (primary query), `angle` (the one
question this page answers) and `group`. Goal: be the single most useful page on the web for that keyword in Bhiwadi, and
turn the reader into a WhatsApp enquiry or a booked one-to-one meeting in Bhiwadi.

## Base rules
Read `scripts/keyword-brief-v2.md` fully and follow its sections "The business", "India pages: extra rules" (UPI, Hindi,
Hinglish handling), "Field-by-field spec", "Links you may use", "SEO / AEO / GEO rules", "Size and uniqueness" and
"Writing", using the **India page skeleton** (INR `P.*` helpers with optional USD equivalents). Read
`src/data/freelance/types.ts` and skim `src/components/freelance/FreelancePage.astro`. Read ONE existing page for format
(e.g. `src/data/keywords/content/freelance-web-developer.ts`) and never reuse its sentences.
The overrides below WIN wherever they differ from keyword-brief-v2.md.

## Override 1: one-to-one meetings in Bhiwadi (the core promise of every page)
- We MEET CLIENTS FACE TO FACE IN BHIWADI. Say it clearly and often (the checker needs 6+ uses of "face to face",
  "one to one" or "in person" and a facts card whose label contains "Meet"): we come to you in Bhiwadi and meet one to one
  at your office, factory, shop, clinic, school or site, or a place you choose. Book the meeting on WhatsApp or by phone.
- Make the meeting useful and specific to THIS service: e.g. walking the shop floor before scoping an ERP, seeing how the
  gate register works before a gate pass system, photographing machines for a manufacturer site, sitting with the
  accountant to see the Tally data, testing an app on the supervisors' actual phones. Between meetings the work runs over
  WhatsApp, calls and email, and you can ask for more meetings at key steps (scope sign-off, staging review, launch/training).
- NEVER claim an office, branch, address or staff in Bhiwadi (or anywhere). Don't say where the team travels from. Don't
  invent meeting policies: no "free visit", no fees, no response times, no "within 24 hours", no visit frequency. If a
  FAQ needs it: "tell us a date and place on WhatsApp and we fix a time that suits both sides" / "agreed in your written quote".
- One guide section per page is about the meeting for this service (what we look at, who should attend, what to keep
  ready, what you get after it). Also mention it in hero lede or origin, answer.more or answer.text, facts, the process
  steps, 3+ FAQs and the CTA. Write it fresh on every page; never repeat another page's meeting paragraph.

## Override 1b: no team member names
Never name team members (Ankur, Santosh, Vedansh or their surnames) anywhere on a Bhiwadi page: not in facts, origin,
stats, guide text or FAQs. Say "the BtechWaleTech team" (e.g. facts ["Who builds it", "The BtechWaleTech team"]) and
describe roles without names ("within the BtechWaleTech team, one developer leads the full-stack build, another handles
cloud, data and technical SEO, the third runs planning and training"). The checker fails any page that contains the names.

## Override 2: honest scope in a factory town
We build software; we don't sell or install hardware (biometric machines, RFID readers, scanners, CCTV, networking,
servers, PLC/SCADA). For attendance, gate, canteen, maintenance or warehouse systems say we work with devices you choose
or integrate with existing ones where the device exposes data. No legal/tax/compliance sign-off (labour law, PF/ESI, GST,
RERA, NMC, IATF, ISO): we build the records and reports, your consultant/CA signs off. Never claim certifications.

## Bhiwadi fact sheet (verified 2026-09-27; paraphrase, never paste these lines verbatim; name the source in the sentence)
- Bhiwadi is a planned industrial city in **Khairthal-Tijara district**, Rajasthan, and part of the **National Capital
  Region (NCR)**. Khairthal-Tijara district was carved out of Alwar district on 4 August 2023 and was retained when the
  state reviewed the new districts in December 2024. Older records and many addresses still say "District Alwar".
- **BIDA** (Bhiwadi Integrated Development Authority, bida.rajasthan.gov.in) governs the Bhiwadi Integrated Township; it
  was set up under the Rajasthan Special Investment Region Act, 2016, with headquarters in Bhiwadi. BIDA's region covers
  370 villages in the Behror, Neemrana, Mundawar, Harsoli, Tapukara, Kotkasim, Bansur and Tijara tehsils across
  Khairthal-Tijara and Kotputli-Behror districts. BIDA describes Bhiwadi as having about 14 industrial clusters with
  around 5,000 industrial units.
- Distances (per BIDA): about 40 km from Gurugram via NH-48, about 60 km from New Delhi, about 200 km from Jaipur,
  about 50 km from Indira Gandhi International Airport; nearest railway station Rewari (Haryana), about 20 km.
- RIICO develops the industrial areas. The belt includes Bhiwadi's own RIICO industrial area (several phases), Chopanki,
  Khushkhera, Tapukara, Kaharani and Pathredi; Neemrana (Kotputli-Behror district) has RIICO's Japanese Zone, and
  Ghiloth is a newer RIICO area. Dharuhera (Rewari district, Haryana) sits just across the state border.
- Honda Cars India's Tapukara plant was Rajasthan's first car plant, operating since 2008; Honda Motorcycle & Scooter
  India's Tapukara plant was set up in 2011 (Honda's own sites). You may mention Honda only as part of the area's
  industrial profile, never as a client or reference.
- Industry mix (industry directories; no numbers): auto components, engineering and machining, steel and metals,
  electronics and electrical goods, FMCG, chemicals and pharma, plastics and packaging, textiles, warehousing/logistics.
  Plus fast-growing housing along Alwar Bypass Road, schools, hospitals, hotels, restaurants and retail serving workers
  and families.
- Languages: Hindi is official; Rajasthani and Ahirwati are spoken locally; the factory workforce comes from many states,
  so Hindi-first, icon-heavy screens and WhatsApp matter on the shop floor, while buyers and head offices read English.
- Allowed external links (max 3 per page, only when relevant): https://bida.rajasthan.gov.in/ , https://riico.co.in/ ,
  official Google/Apple/Meta/GST portal documentation. Anything else about Bhiwadi you are not sure of: leave it out.

## Place names for the areas section (14–16 cards; note 20–35 words about which local businesses need THIS service)
Use a varied mix, never the same 14 in the same order as a sibling page: RIICO Industrial Area Bhiwadi (phases),
Chopanki, Khushkhera, Tapukara, Kaharani, Pathredi, Alwar Bypass Road, Bhiwadi residential sectors, Tijara, Khairthal,
Neemrana, Ghiloth, Behror, Kotkasim, Harsoli, Mundawar, Dharuhera, Manesar, plus city pages WITH href:
`/alwar/` (Alwar), `/rewari/` (Rewari), `/gurgaon/` (Gurugram), `/delhi/` (Delhi), `/faridabad/` (Faridabad),
`/jaipur/` (Jaipur), `/narnaul/` (Narnaul). Only those city cards get an href.

## Links (every internal href ends with "/"; the checker rejects broken ones)
- Sibling Bhiwadi pages: `/bhiwadi-rajasthan/{slug}/` for any slug in pages.json; the hub `/bhiwadi-rajasthan/`.
- India keyword pages `/{slug}/`: ONLY slugs that exist as files in src/data/keywords/content/ (check with Glob).
- City pages listed above, `/india/rajasthan/`, and the standard pages from keyword-brief-v2.md.
- In HTML fields (hero.lede, answer.more, guide text, table notes/cells): 4–7 internal links per 1,000 words, including the
  hub, 4–6 siblings (closest topics, from other groups too), 1–3 India keyword pages and 1–2 city pages.
- related: 12–14 links: the hub `/bhiwadi-rajasthan/` (required), 8–10 siblings closest to this topic, 1–3 India keyword
  pages or `/pricing/`, `/contact/`.

## Field spec differences from keyword-brief-v2.md
- path: `/bhiwadi-rajasthan/{slug}/`; crumb: the service in sentence case WITHOUT "in Bhiwadi" (e.g. "Website development");
  updated: "2026-09-27".
- meta.title ≤ 54 chars: keyword + Bhiwadi + hook (price via P.* or "meet in person"). meta.description 120–165 chars with
  keyword, a P.* starting price and the one-to-one meeting in Bhiwadi.
- meta.keywords 22–30: exact keyword, "near me", "in Bhiwadi Rajasthan", "Bhiwadi Alwar", industrial-area variants
  (Chopanki, Khushkhera, Tapukara, Neemrana), cost/price, Hindi/Hinglish variants, "company"/"developer"/"services" forms.
- hero.origin: e.g. "Three freelance developers · we meet you one to one in Bhiwadi · WhatsApp 7 days a week" (vary it).
- facts: 6 pairs, one label containing "Meet" (e.g. ["Meetings", "Face to face in Bhiwadi, at your unit"]); others from:
  team, starting price (P.*), languages (Hindi and English), billing (INR · UPI or bank transfer), after launch
  (2 months maintenance free), timeline. Vary labels and wording across your pages.
- snapshot: 7 rows about this service in Bhiwadi (who needs it, starting price, timeline, meeting, languages, ownership,
  support).
- comparison columns: [Aspect, a realistic alternative (e.g. "Local agency", "Walk-in computer shop", "Packaged software
  vendor", "Marketplace freelancer", "In-house hire", "DIY builder"), another alternative, "BtechWaleTech"]; one row must
  be about meeting face to face in Bhiwadi. Never name or disparage a real local business.
- guide: 14–15 sections, 190–250 words each (Hinglish pages: same size). Headings: ≥ 6 contain the keyword or a close
  variant with "Bhiwadi"; ≥ 6 are real "People also ask"-style questions. Must include, written fresh for this angle:
  what it is / when a Bhiwadi business needs it; why it matters in Bhiwadi's economy (use the fact sheet); the one-to-one
  meeting section (Override 1); cost and cost drivers (P.*); process and timeline; how to choose and vet; tech choices;
  a feature checklist; ownership and handover; risks and red flags; SEO / AI-search visibility (or for internal software:
  data security, backups and access control); Hindi/English, mobile, WhatsApp, UPI; a clearly hypothetical worked example
  ("Say a 60-worker sheet-metal unit in Chopanki wants…" — never a real or fake client, never fake results); serving the
  wider belt (Tapukara, Khushkhera, Neemrana, Dharuhera, Rewari, Alwar) with 1–2 city page links.
- tables: 3 tables (cost by scope using P.*, a decision/feature comparison, a timeline or checklist), 5–8 rows each.
- process: 6 steps, one of which is the in-person meeting in Bhiwadi.
- faqs: 18–20, answers 50–80 words, self-contained, plain text. Include: cost, time, "do you meet in Bhiwadi / can you
  come to our factory", remote vs local, ownership, maintenance, payment (UPI/bank transfer), Hindi support, SEO or data
  security, and angle-specific questions from "People also ask".
- Exact keyword phrase 12–25 times across the page, spread naturally; "Bhiwadi" 45–90 times (checker minimum 40); use
  variants ("in Bhiwadi, Rajasthan", "Bhiwadi's industrial belt", "units in Chopanki and Khushkhera").

## Size (checker)
Reported total ≥ 5,300 words (it adds 650 template words): aim for 5,600–6,200. 8-word-phrase overlap ≤ 12% with EVERY
other page, including the 99 sibling Bhiwadi pages other writers are producing in parallel right now: the shared Bhiwadi
facts are the biggest risk, so phrase them differently each time, change structure, examples and sentence rhythm, and
never re-use a paragraph from your previous page.

## Research (per page, keep it short)
Load tools with ToolSearch "select:WebSearch,WebFetch". WebSearch the keyword as a Bhiwadi buyer types it (e.g. "website
development company in bhiwadi") and the generic keyword; optionally WebFetch 1–2 useful non-directory results to see which
questions and subtopics they cover. Cover those and fill their gaps. Never copy text, never name local competitors. If
search is unavailable, continue from the fact sheet and solid knowledge; leave out anything uncertain.

## Rules for you as a parallel writer
- Write ONLY your assigned files in src/data/bhiwadi/content/. Do NOT edit any other file. Do NOT run astro build,
  npm scripts or git. If your file already exists (a previous run stopped), finish or fix it instead of starting over.
- After EACH file: `cd /e/BtechWaleService && node scripts/check-keyword-content.mjs bhiwadi-rajasthan/{slug}` and fix every
  FAIL until PASS. If overlap with another page is reported, rewrite YOUR sentences only.
- Inside TS strings use backtick template literals when the text contains ${P.x} or apostrophes; curly quotes “ ” in prose.
- Finish by running the checker on all your ids together and report the PASS lines.
