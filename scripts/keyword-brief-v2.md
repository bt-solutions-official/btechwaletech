# Brief v2: write SEO lead-generation landing pages for BtechWaleTech (India + country pages)

Repo: E:\BtechWaleService (Astro site, https://btechwaletech.in). You write ONE content file per assigned page id.
Two kinds of page, same template (FreelancePage.astro, same design as the city pages):

| Kind | Page id | File | URL | Planned in |
|---|---|---|---|---|
| India | `{slug}` | src/data/keywords/content/{slug}.ts | /{slug}/ | src/data/keywords/keywords.json (entries with `"batch": 2`) |
| Country | `{country}/{slug}` | src/data/keywords/countries/{country}/{slug}.ts | /{country}/{slug}/ | src/data/keywords/countries.json (`{ "usa": [ ... ] }`) |

Each planned entry has `slug`, `keyword` (the primary query as people type it) and `angle` (the unique question this page
answers). The page must be the single most useful answer on the web for that keyword, for that market, and it exists to
turn the searcher into a WhatsApp enquiry.

## Setup (once per batch)
1. Read src/data/freelance/types.ts (FreelanceContent) and skim src/components/freelance/FreelancePage.astro to see how
   each field renders. Read ONE existing page as a format reference: src/data/keywords/content/freelance-web-developer.ts.
   NEVER reuse its sentences: the checker rejects a page sharing >12% of its 8-word phrases with ANY other page (1,200 pages).
2. Read your market's plan file (keywords.json or countries.json) so you know every sibling slug and angle: your page answers
   its own angle, not a sibling's (avoids cannibalisation), and you link siblings by their exact slugs.
3. Load web tools: ToolSearch query "select:WebSearch,WebFetch". For EACH page:
   - WebSearch the keyword as typed (for country pages, as a buyer in that country types it, e.g. "roofing website design").
   - WebFetch 2–3 top non-marketplace results (plus one marketplace/directory result if present) to see which subtopics,
     questions, tables and "People also ask" questions they cover. Your page covers all of that AND fills their gaps
     (honest cost drivers, process, ownership, risks, checklists, decision tables). Never copy their text; never name or
     disparage a competitor, except well-known marketplaces (Upwork, Fiverr, Freelancer.com, Toptal, Internshala,
     Truelancer) described factually.
   - Collect 3–6 verifiable facts with their source (official regulator, standards body, platform documentation, e.g.
     "Google Play charges a one-time US$25 registration fee", "the ICO requires consent for non-essential cookies under
     PECR"). Use them with the source named in the sentence. Never invent statistics, market sizes, percentages or quotes.
   - If WebSearch hits a usage limit, continue with WebFetch and solid knowledge; when unsure of a fact, leave it out.
4. Write the file. If it already exists (a previous run stopped), finish/fix it instead of starting over.
   Do NOT edit any other file. Do NOT run astro build or npm scripts. Do NOT run git.

## File skeletons (copy the price helpers exactly; always use P.* for prices, never hard-code amounts)
India page:
```ts
import { inr, usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: inr("Static"), siteUsd: usd("Static"), seoSite: inr("SEO website"), seoSiteUsd: usd("SEO website"),
  shop: inr("Ecommerce"), shopUsd: usd("Ecommerce"), app: inr("Android"), appUsd: usd("Android"),
  software: inr("Custom web app"), softwareUsd: usd("Custom web app"), ai: inr("AI automation"), aiUsd: usd("AI automation"),
  seo: inr("Monthly SEO"), seoUsd: usd("Monthly SEO"), care: inr("Maintenance"), careUsd: usd("Maintenance"),
};

const content: FreelanceContent = { path: "/{slug}/", ... };
export default content;
```
Country page (USD only; the checker rejects any ₹ amount on a country page):
```ts
import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const content: FreelanceContent = { path: "/{country}/{slug}/", ... };
export default content;
```

## The business (never contradict)
BtechWaleTech is a group of three freelance developers working remotely from India. Describe it as "three freelance
developers", "a small freelance team", "freelance group". NEVER call it a company, agency or firm, and do NOT write any
"we are not a company" disclaimer either: simply present the freelance team positively. No office anywhere (not in India's
cities, not abroad); never invent an address, office, local entity, staff count, client names, reviews, ratings, awards,
years in business, project counts or case studies.
Team: Ankur Kumar (full-stack development), Santosh Sharma (AI, ML, AWS, data, technical SEO), Vedansh Shrivastava
(project management, data science, automation). They work in English and Hindi. Replies on WhatsApp 7 days a week, IST.
Client owns domain, hosting, code and app store accounts. Itemised quote in ~2 working days; nothing billed before written
approval. Payments in India by UPI or bank transfer; international by Wise, bank wire or PayPal (quoted in USD).
Never promise #1 or guaranteed rankings (you may say honestly that nobody can guarantee rankings).
Do NOT invent business policies beyond this section (NDA terms, notice periods, lock-ins, edit turnaround, rush fees,
capacity limits, licence policies, refund terms, SLAs, warranties). If a FAQ needs one, say "ask us / agreed in your written
quote" and link /terms/ or /refund-policy/ instead of stating a rule.
SERVICES: website design/development, SEO/local SEO, ecommerce (UPI and card checkout in India, card/wallet checkout abroad
— never name payment gateway brands such as Razorpay, Paytm, PayU, Cashfree, Instamojo, CCAvenue or Stripe; exception:
a country page whose planned keyword itself names a local payment method or processor (iDEAL, PayNow, konbini, Moneris)
may name that one factually, without implying any partnership), Android & iOS
apps (Flutter or React Native, published on Google Play and the App Store), custom software/web apps, AI automation & AI
agents, WhatsApp automation, data analysis/dashboards, cloud hosting setup, maintenance.
STARTING PRICES (use P.*): static website up to 100 pages from P.site (1–2 weeks); SEO website of 299+ pages from P.seoSite
(3–5 weeks); Android & iOS app from P.app (6–10 weeks); AI automation from P.ai (2–4 weeks); ecommerce from P.shop
(4–8 weeks); custom web app/software from P.software (6–12 weeks); monthly SEO from P.seo; maintenance from P.care after
5 months of free maintenance post-launch. On India pages you may add USD equivalents (P.siteUsd etc.).
PRICE RULE: every price is a starting price: "from", "starts at", "onwards". Never "fixed price", "flat", "package price".
Other freelancers'/agencies' rates: say only that quotes vary widely and explain what drives the difference; never state
competitor price figures. No money amounts other than P.* (the checker rejects them), except legal thresholds/fines written
with "million/billion/lakh/crore" and the US$25 Google Play / US$99 Apple developer fees.

## Country pages: extra rules
- Write for a buyer in that country: their spelling (US vs UK/AU/NZ/CA English), their business types, their platforms and
  laws. The page must answer "why hire a remote team in India for this, and how does it work from {country}?" honestly.
- Time-zone overlap and billing: use the `regions` list in src/data/countries/international.ts (e.g. US Eastern mornings =
  IST evenings; "USD or GBP · Wise, wire, PayPal"). Quotes are in USD; never state local-currency prices.
- Local law / compliance sections (privacy, cookies, accessibility, e-invoicing, consumer law, language laws) must be
  verified in this session via WebSearch/WebFetch against the official source (regulator or government site). Describe
  what the build does to support compliance ("we build the cookie banner so non-essential cookies stay off until consent");
  never give legal or tax advice and never claim certification, registration or a local licence. Suggest the client's own
  lawyer/accountant for legal sign-off. You may add up to 3 external links to official sources (government, regulator,
  standards body, Google/Apple documentation) as <a href='https://...' rel='noopener'>…</a> in HTML fields.
- Regulated-data pages (HIPAA, GDPR, PDPA, PIPEDA and similar): explain how the build supports the client's obligations
  (hosting with providers that sign the required agreements, access control, encryption, audit logs, data minimisation)
  and say plainly that compliance is the client's responsibility, confirmed by their own counsel; never call the team or
  its work "HIPAA-compliant/GDPR-certified" and never claim to sign a BAA or act as a certified processor.
- Languages: the team writes English. Bilingual/RTL/multilingual builds are fine ("you supply or approve the translated
  copy"); never imply native copywriting in another language.
- No local office, no site visits, no local entity; invoices come from India. Don't advise on the client's tax treatment.
- areas: 12–16 cards, each a real city/state/region of that country (for Singapore: business districts/areas) with a 20–35
  word note about which businesses there need this service and why (verify anything specific). No href on area cards.
- One guide section on working with a team in India from that country: overlap hours, calls, payments, contracts,
  ownership, what the first two weeks look like — written fresh for this page's service.
- related: 12–14 links: 8–10 sibling pages of the SAME country from countries.json (href "/{country}/{sibling-slug}/"),
  the country hub "/{country}/", and 1–3 of: /hire-indian-developers/, /outsource-web-development-to-india/,
  /offshore-web-development-team/, /white-label-web-development/, /pricing/, /contact/.

## India pages: extra rules
- One section "{service} across India" linking at least 8 city pages; areas: 14–16 cards, each an Indian city page
  (href "/{city}/", name like "Dental clinic websites in Pune", note 20–35 words genuinely about that city's businesses).
  Pick a varied mix across regions and tiers — only slugs that exist as files in src/data/cities/content/ (check with Glob).
- India-specific points where relevant: UPI, GST invoices, Hindi/regional languages, mobile-first, low-end Android, WhatsApp.
- Hinglish (Latin script): if the keyword itself is Hinglish, write the hero lede, answer block, 3–4 guide sections and 6+
  FAQs in natural Hinglish and the rest in simple Indian English. Otherwise include at most one Hinglish FAQ, only if natural.
- related: 12–14 links: 9–11 sibling pages from keywords.json closest to this topic (any batch), plus 2–3 service pages.

## Field-by-field spec (sizes are what gets you past the checker)
- path; crumb: the keyword in sentence case (e.g. "Roofing website design"); updated: "2026-09-25".
- meta.title: primary keyword first, ≤ 54 characters (brand suffix " | BtechWaleTech" is added; checker limit 70 total).
  Include a hook: a starting price (P.*) or a concrete benefit. Count characters.
- meta.description: 120–165 characters: keyword, a starting price, and a reason to click.
- meta.keywords: 22–30 entries: exact keyword, close variants, question forms, cost/price, "near me"/"for {business}"
  variants, and (country pages) the country and 3–5 of its big cities, (India pages) Hinglish and city variants.
- hero: eyebrow (short), h1 containing the exact keyword naturally, lede 60–90 words with the keyword in the first sentence,
  6–7 pills, origin line (e.g. "Three freelance developers in India · replies on WhatsApp, 7 days a week").
- facts: 6 [label, value] pairs. stats: 4 items (only true numbers: 3 developers, 2 working days to quote, 5 months free
  maintenance, 7 days a week WhatsApp, 0 platform fees, 100 pages in the static plan, etc.).
- answer.heading: the searcher's core question, phrased as a question. answer.text: 45–65 words, self-contained, direct
  answer first, includes starting price(s) — this is the AI Overview / featured-snippet block. answer.more: 1–2 sentences
  with 1–2 internal links.
- snapshot: caption + 7 rows.
- services: 7–8 cards (1–2 "lg", rest "md"/"sm"), each note specific to this page's angle; hrefs from the link list.
- comparison: 4 columns [Aspect, alternative A, alternative B, BtechWaleTech] relevant to the angle (e.g. "Local agency",
  "Marketplace freelancer", "DIY builder"), 8–9 rows, plus `fine` (one honest caveat sentence).
- pricing: heading + note (80–120 words, angle-specific; the price table itself is rendered by the template).
- guideLabel; guide: 15–17 sections, 200–300 words each (paragraphs + optional list/subs/after). This is the bulk.
  Headings: at least 6 contain the exact keyword or a close variant; at least 6 are questions people actually search
  (from "People also ask"). Every section opens with a direct 1–2 sentence answer, then detail. Cover, in fresh words for
  this angle: what it is / when you need it; how to choose and vet; costs and what drives them; process and timeline;
  ownership and handover; risks and red flags; tech choices; SEO/performance/AI-search visibility; market-specific points;
  a checklist; a worked example scenario (clearly hypothetical, e.g. "Say a three-chair dental clinic in Leeds wants…" —
  never a fake client or fake result).
- tables: 3 tables with real decision value (cost by project scope using P.*, feature/platform comparison, timeline by
  phase, checklist, compliance checklist). 5–8 rows each; `hideSm` optional.
- process: heading + 6 steps [title, 25–45 word detail] in fresh wording.
- faqHeading; faqs: 20–22 items, answers 50–90 words, mirroring real "People also ask" questions: cost, time, how to
  choose, freelancer vs agency, remote vs local, ownership, maintenance, payments, contracts/NDA, SEO, AI search, apps,
  market-specific questions. Every answer self-contained (AI engines quote single answers).
- cta: heading + note.

## Links you may use (checker rejects broken internal links; every internal href ends with "/")
/{any slug in keywords.json}/, /{country}/{any slug in countries.json under that country}/, /{any city file in
src/data/cities/content}/ (India pages only), /services/, /services/web-development/, /services/seo-services/,
/it-services/android-ios-app/, /it-services/, /pricing/, /portfolio/, /about/, /contact/, /freelancers/, /freelancing/,
/india/, /countries/, /usa/, /uk/, /canada/, /australia/, /uae/, /singapore/, /germany/, /netherlands/, /new-zealand/,
/saudi-arabia/, /japan/.
HTML is rendered ONLY in: hero.lede, answer.more, guide paragraphs/list/subs text/after, tables[].note and table cells.
Everything else (answer.text, FAQs, service/area notes, comparison, snapshot, process, pricing.note, cta) is PLAIN TEXT.
In HTML fields use <a href='/path/'>anchor</a> (single quotes inside strings) and <strong>. 4–7 internal links per 1,000
words, varied descriptive anchors (never "click here").

## SEO / AEO / GEO rules (heavily optimised, natural, never stuffed)
- Exact keyword in: title, h1, lede first sentence, answer.heading or answer.text, ≥ 6 guide headings (or close variants),
  several FAQs, meta.description. Aim for the exact phrase roughly 35–60 times across the page (~0.6–1% of words), spread
  naturally; use synonyms and entities (frameworks, platforms, Google Search Console, Core Web Vitals, Play Console, App
  Store Connect, local regulators and laws) for topical depth.
- GEO/AEO: short self-contained answer paragraphs, question headings, definitions in one sentence, numbered steps,
  comparison tables, named sources for facts, concrete true numbers (our prices/timelines), decision rules ("choose X when…").
- E-E-A-T: first-hand process detail from the team's side; honest limits (what we don't do: on-site visits, hardware,
  20-developer teams, legal advice); no fabricated experience claims.

## Size and uniqueness (enforced by the checker)
- Page total 6,300+ words as reported by the checker (it adds 650 template words): aim for 6,600–7,200.
- Your pages must NOT resemble each other or any other page: write the generic parts (team, ownership, maintenance,
  payments, process, FAQs) from scratch with different structure, examples and sentence rhythm on every page. Never paste or
  lightly edit a paragraph from your previous page. Check after EACH page.

## Writing
Natural expert English (Indian English on India pages; the buyer's variant on country pages), concrete, varied sentence
length, second person. Banned: "cutting-edge", "seamless", "leverage", "in today's digital age", "unlock", "elevate",
"delve", "tapestry", "bustling", "vibrant", "nestled", "robust". Inside TS strings use backtick template literals when the
text contains ${P.x} or apostrophes; use curly quotes “ ”.

## Verify
After each file: cd /e/BtechWaleService && node scripts/check-keyword-content.mjs {page id} (e.g. `dental-clinic-website-design`
or `usa/roofing-website-design`). Fix every FAIL until PASS. If it reports overlap with another page, rewrite YOUR sentences
(never edit the other page). Also type-check the shape mentally against types.ts (tuples: facts [string,string][],
comparison.columns 4 strings, rows 4 strings each, process.steps [string,string][]). Finish by running the checker on all
your page ids together.
