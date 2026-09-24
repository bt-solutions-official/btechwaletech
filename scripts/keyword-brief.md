# Brief: write /{keyword}/ SEO landing pages for BtechWaleTech

Repo: E:\BtechWaleService (Astro site, https://btechwaletech.in). You write ONE content file per assigned keyword slug.
Each page lives at https://btechwaletech.in/{slug}/ and must be the single best answer on the web for its keyword, for
searchers anywhere in India (and, where the angle says so, abroad).

## Setup
1. Read E:\BtechWaleService\src\data\freelance\types.ts (FreelanceContent interface) and skim
   E:\BtechWaleService\src\components\freelance\FreelancePage.astro to see how each field renders. Read
   E:\BtechWaleService\src\data\freelance\freelancing.ts as the format reference (the `P` price object, HTML in strings).
   NEVER reuse its sentences: the checker rejects a page sharing >12% of its 8-word phrases with ANY other page.
2. Read E:\BtechWaleService\src\data\keywords\keywords.json: every slug with its ANGLE. Your page must follow its own angle,
   so it answers a different question from its sibling pages (this avoids keyword cannibalisation and duplicate content).
3. Load web tools: ToolSearch query "select:WebSearch,WebFetch". For EACH keyword:
   - WebSearch the keyword as typed (e.g. "freelance web developer near me", "hire flutter developer india").
   - WebFetch 2–3 of the top non-marketplace results plus one marketplace (Upwork/Fiverr/Internshala/Truelancer) to see
     which subtopics, questions and tables they cover. Note the "People also ask"-style questions.
   - Your page must cover everything they cover AND fill the gaps they leave (honest costs, process, ownership, risks,
     checklists, decision tables). Never copy their text. Never name or disparage a competitor site except well-known
     marketplaces (Upwork, Fiverr, Freelancer.com, Toptal, Internshala, Truelancer) described factually.
   - If WebSearch hits a usage limit, continue with WebFetch and your own knowledge; never invent facts.
4. Write E:\BtechWaleService\src\data\keywords\content\{slug}.ts. If the file already exists (a previous run stopped),
   finish/fix it instead of starting over. Do NOT edit any other file. Do NOT run astro build or npm scripts.

File skeleton (copy the price helpers exactly; always use P.* for prices, never hard-code amounts):
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

## The business (never contradict)
BtechWaleTech is a group of three freelance developers working remotely from India. Describe it as "three freelance
developers", "a small freelance team", "freelance group". NEVER call it a company, agency or firm, and do NOT write any
"we are not a company" disclaimer either: simply present the freelance team positively. No office in any city; never invent
an address, office, staff count, client names, reviews, ratings, awards, years in business or project counts.
Team: Ankur Kumar (full-stack development), Santosh Sharma (AI, ML, AWS, data, technical SEO), Vedansh Shrivastava
(project management, data science, automation). Replies on WhatsApp 7 days a week, IST. Client owns domain, hosting,
code and app store accounts. Itemised quote in ~2 working days; nothing billed before written approval. Payments in India
by UPI or bank transfer; international by Wise, bank wire or PayPal. Never promise #1 or guaranteed rankings (you may
say honestly that nobody can guarantee rankings).
Do NOT invent business policies beyond this section (NDA terms, notice periods, lock-ins, turnaround times for edits,
rush fees, capacity limits, licence policies, refund terms). If a FAQ needs one, say "ask us / agreed in your written
quote" and link /terms/ or /refund-policy/ instead of stating a rule.
SERVICES: website design/development, SEO/local SEO, ecommerce (UPI and card checkout — never name payment gateway
brands like Razorpay/Paytm/Stripe/PayU), Android & iOS apps (Flutter or React Native, published on Google Play and the
App Store), custom software/web apps, AI automation & AI agents, WhatsApp automation, data analysis/dashboards, maintenance.
STARTING PRICES (use P.*): static website up to 100 pages from P.site (1–2 weeks); SEO website 700+ pages from P.seoSite
(3–5 weeks); Android & iOS app from P.app (6–10 weeks); AI automation from P.ai (2–4 weeks); ecommerce from P.shop
(4–8 weeks); custom web app/software from P.software (6–12 weeks); monthly SEO from P.seo; maintenance from P.care after
5 months of free maintenance post-launch. USD equivalents: P.siteUsd etc.
PRICE RULE: every price is a starting price: "from", "starts at", "onwards". Never "fixed price", "flat", "package price".
Market rates of other freelancers: say only that quotes vary widely and explain what drives the difference; never state
competitor price figures.

## Field-by-field spec (sizes are what gets you past the checker)
- path "/{slug}/"; crumb: the keyword in Title Case (e.g. "Freelance web developer"); updated: "2026-09-24".
- meta.title: primary keyword first, ≤ 54 characters (brand suffix " | BtechWaleTech" is added; checker limit 70 total).
  e.g. "Freelance Web Developer in India | Sites from ₹10,000" — count characters.
- meta.description: 120–165 characters, contains the keyword, a starting price and a reason to click.
- meta.keywords: 22–30 entries: exact keyword, "in India", "near me", "for hire", "cost/price", "best", Hinglish
  variant, city variants (Delhi, Mumbai, Bangalore, Pune, Hyderabad...), close synonyms relevant to THIS angle only.
- hero: eyebrow (short), h1 containing the exact keyword naturally (not only the keyword), lede 60–90 words with the
  keyword in the first sentence, 6–7 pills, origin line.
- facts: 6 [label, value] pairs. stats: 4 items (only true numbers: 3 developers, 2 working days quote, 5 months free
  maintenance, 7 days a week WhatsApp, 0 platform fees, 100 pages in the static plan, etc.).
- answer.heading: the searcher's core question as a question ("How much does a freelance web developer cost in India?").
  answer.text: 45–65 words, self-contained, direct answer first, includes starting price(s) — this is the AI Overview /
  featured-snippet block. answer.more: 1–2 sentences with 1–2 internal links.
- snapshot: caption + 7 rows.
- services: 7–8 cards (sizes: 1–2 "lg", rest "md"/"sm"), each note specific to this keyword's angle; hrefs from the link list.
- comparison: 4 columns [Aspect, alternative A, alternative B, BtechWaleTech] relevant to the angle (e.g. "Marketplace
  freelancer", "Large agency"), 8–9 rows, plus `fine` (one honest caveat sentence).
- pricing: heading + note (80–120 words, angle-specific; the price table itself is rendered by the template).
- guideLabel: short label. guide: 14–16 sections, 180–280 words each (paragraphs + optional list/subs/after). This is the
  bulk of the page. Headings: at least 6 contain the exact keyword or a close variant; at least 5 are phrased as questions
  people actually search. Cover, in fresh words for this angle: what it is/when you need it; how to choose/vet; costs and
  what drives them; process and timeline; ownership and handover; risks and red flags; tech choices; SEO/performance;
  India-specific points (UPI, Hindi/regional languages, mobile-first, low-end Android, GST invoices where relevant);
  a checklist; a worked example scenario (clearly a hypothetical example, not a fake client). One section
  "Freelance {service} across India" linking at least 8 city pages (see links). Include 1 section answering in simple
  Hinglish (Latin script) only if you can write it naturally.
- tables: 2–3 tables with real decision value (cost by project type using P.*, feature comparison, checklist,
  timeline by phase, platform comparison). 5–8 rows each; `hideSm` optional.
- areas: 14–16 cards. Each card = one Indian city page: name like "Freelance web developer in Pune", href "/pune/",
  note 20–35 words that is genuinely about that city's businesses (verify anything specific). Pick a varied mix across
  regions and tiers (metros + tier-2/3), different from what sibling pages likely use — only slugs that exist as
  files in E:\BtechWaleService\src\data\cities\content\ (check with Glob).
- process: heading + 6 steps [title, 25–45 word detail] in fresh wording.
- faqHeading; faqs: 18–20 items, answers 50–90 words. Mirror real "People also ask" questions for the keyword: cost,
  time, how to hire/choose, freelancer vs agency, near me/remote, ownership, maintenance, payments, contracts/NDA, SEO,
  apps, one Hinglish FAQ if natural. Every answer self-contained (AI engines quote single answers).
- related: heading + 12–14 links: 9–11 sibling keyword pages from keywords.json that are closest to this topic
  (href "/{sibling-slug}/", name = natural anchor text, varied), plus 2–3 service pages.
- cta: heading + note.

## Links you may use (checker rejects broken internal links)
/{any slug in keywords.json}/, /{any city file in src/data/cities/content}/, /services/, /services/web-development/,
/services/seo-services/, /it-services/android-ios-app/, /it-services/, /pricing/, /portfolio/, /about/, /contact/,
/freelancers/, /freelancing/, /india/, /countries/, /usa/, /uk/, /canada/, /australia/, /uae/, /singapore/, /japan/.
HTML is rendered ONLY in: hero.lede, answer.more, guide paragraphs/list/subs text/after, tables[].note and table cells.
Everything else (answer.text, FAQs, service/area notes, comparison, snapshot, process, pricing.note, cta) is PLAIN TEXT: no tags.
No rupee figures other than the plan prices via P.* (checker rejects e.g. "a ₹7,000 phone"; write "a budget phone").
In HTML fields use <a href='/path/'>anchor</a> (single quotes inside strings) and <strong>. 3–6 links per 1,000 words.

## SEO / AEO rules (heavily optimised, but natural and never stuffed)
- Exact keyword in: title, h1, lede first sentence, answer.heading or answer.text, ≥ 6 guide headings (or close
  variants), several FAQs, meta.description. Aim for the exact phrase roughly 35–60 times across a 6,000-word page (~0.6–1% of words), spread naturally, never forced; use synonyms and entities
  (languages, frameworks, Google Search Console, Core Web Vitals, Play Console, App Store Connect, UPI, GST) for depth.
- Write like an expert practitioner: concrete numbers that are true (our prices/timelines), step lists, checklists,
  decision rules ("choose X when..."). Each section should open with a direct 1–2 sentence answer, then detail.
- E-E-A-T: first-hand process detail from the team's side; honest limits (what we don't do, e.g. no on-site visits,
  no hardware, large 20-developer teams); no fabricated experience claims.

## Size and uniqueness (enforced by the checker)
- Page total 5,500+ words: aim for the checker to report 5,800–6,400 (it adds 650 template words to your text).
- Your 4 pages must NOT resemble each other or other pages: write the generic parts (team, ownership, maintenance,
  payments, process, FAQs) from scratch with a different structure, examples and sentence rhythm on every page. Never
  paste or lightly edit a paragraph from your previous page. Check after EACH page.

## Writing
Natural Indian-English, concrete, varied sentence length, second person. Banned: "cutting-edge", "seamless",
"leverage", "in today's digital age", "unlock", "elevate", "delve", "tapestry", "bustling", "vibrant", "nestled", "robust".
Inside TS strings use backtick template literals when the text contains ${P.x} or apostrophes; use curly quotes “ ”.

## Verify
After each file: cd /e/BtechWaleService && node scripts/check-keyword-content.mjs {slug}. Fix every FAIL until PASS.
Also type-check the shape mentally against types.ts (tuples: facts [string,string][], comparison.columns 4 strings, rows
4 strings each, process.steps [string,string][]). Finish by running the checker on all your slugs together.

Final reply (short): one line per slug with PASS word count; then any facts you stated without verifying.
