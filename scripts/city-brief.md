# Brief: write /{city}/ local SEO pages for BtechWaleTech

Repo: E:\BtechWaleService. You write ONE content file per assigned city. ~380 approved cities already exist in
E:\BtechWaleService\src\data\cities\content\ — they define the quality bar.

## Setup
1. Read E:\BtechWaleService\src\data\cities\types.ts (CityContent interface), then two existing city files (e.g. indore.ts and
   one recent small-town file such as gokak.ts). Reference only — NEVER reuse their sentences: the checker rejects a page sharing
   >12% of its 8-word phrases with ANY other page. Skim E:\BtechWaleService\src\components\city\CityPage.astro to see rendering.
2. Load web tools: ToolSearch query "select:WebSearch,WebFetch". Verify local facts for each city: business districts, markets,
   localities, industries/clusters, industrial estates (MIDC/SIDCO/RIICO/GIDC etc.), IT parks, institutions, trades/crafts/GI
   products, tourism. If WebSearch hits a usage limit, use WebFetch on Wikipedia and official district (*.nic.in) sites.
   Use only facts you can verify; if unsure, leave it out. Never invent statistics, rankings, awards, company names, addresses,
   or competitor price figures/quote ranges (say only that local quotes vary widely and what to compare).
3. Write E:\BtechWaleService\src\data\cities\content\{slug}.ts exporting `const x: CityContent = {...}; export default x;` with
   `import type { CityContent } from "../types";`. If the file already exists (a previous run may have stopped mid-way),
   finish/fix it instead of starting over. Do NOT edit any other file. Do NOT run astro build or npm scripts.

## Smaller towns
If the town has few verifiable facts, widen the lens honestly: its district, the region's economy (crops, mandis, mining,
textiles, pilgrimage, tourism), nearby industrial areas and markets, colleges/coaching, local shops/clinics/schools and how their
customers search. Never pad with made-up detail or generic filler.

## The business (don't contradict)
Remote team of three engineers, no office in any city (say so honestly; never invent an address). Ankur Kumar: full-stack
development. Santosh Sharma: AI, ML, AWS, data. Vedansh Shrivastava: project management, data science, automation. Replies on
WhatsApp 7 days a week, IST. Client owns domain, hosting, code and app store accounts. Itemised quote in ~2 working days; nothing
billed before written approval. Never promise #1 rankings.
SERVICES: website design/development, SEO/local SEO, ecommerce (UPI and card checkout — never name payment gateway brands like Razorpay/Paytm/Stripe), ANDROID & iOS APP DEVELOPMENT (Flutter or React
Native, login, push notifications, admin panel, published on Google Play and the App Store), custom software/web apps,
AI automation & AI agents, WhatsApp automation, data analysis/dashboards, maintenance.
STARTING PRICES (INR): static website (up to 100 pages) from ₹10,000 (1–2 weeks); SEO website (700+ pages) from ₹20,000
(3–5 weeks); Android & iOS app from ₹40,000; AI automation from ₹40,000 (2–4 weeks); ecommerce store from ₹50,000 (4–8 weeks);
custom web app/software from ₹60,000 (6–12 weeks); monthly SEO from ₹10,000/month; maintenance from ₹8,000/month after
5 months free maintenance post-launch.
PRICE RULE: every price is a STARTING price. Write "from ₹X", "starts at ₹X", "₹X onwards" (or "₹X se shuru" etc. in regional
FAQs). Never call prices fixed, flat, final or a package price; never write "fixed price"/"fixed quote"/"prices are fixed".
Old prices (₹5,000 sites, 30-page ₹10,000 sites, ₹15,000, ₹25,000, ₹2,000) must never appear.

## SCOPE: IT-services pages, not web-only
meta.title and hero.h1 present the full range. meta.title MUST be ≤ 54 characters (the " | BtechWaleTech" suffix is added),
e.g. "IT Services in {City} | Web, Apps & AI from ₹10,000" or "IT Services in {City}: Websites, Apps, SEO & AI" — count the
characters for long city names and shorten if needed. hero.h1 like "Websites, Android & iOS apps, SEO and AI automation for
{City}'s <local audience>". hero.pills (5) must include one Android/iOS app pill. hero.lede must mention Android and iOS apps.
serviceNotes.app must describe Android & iOS apps (Play Store / App Store) for a local use case, from ₹40,000.
Include ONE full section on Android & iOS apps for that city's businesses (who needs one, what it does, cost from ₹40,000,
app store publishing, when a website is enough instead), and one FAQ "Do you build Android and iOS apps for {City} businesses?".

## SEO requirements (heavily SEO-rich, natural, never stuffed)
- Work these phrases into headings, body and FAQs: "IT services in {City}", "IT company in {City}", "website development
  company in {City}", "web design in {City}", "app development company in {City}", "Android app development in {City}",
  "software company in {City}", "SEO services in {City}", "digital marketing in {City}", "ecommerce website in {City}",
  "AI / WhatsApp automation in {City}", "website cost in {City}", plus the Hinglish/regional variant ("{City} me website/app
  banwana"). At least 5 section headings contain a service phrase + the city name.
- keywords array: 18–22 entries covering the above + locality and regional-language variants.
- FAQs mirror real "People Also Ask" questions: cost, time, best company, local SEO/Google Maps, app development, AI automation,
  maintenance, no office, nearby towns, one in Hinglish/regional language in Latin script (only if you can write it correctly).
- quickAnswer: 40–60 words, self-contained, names the city, websites AND apps, and starting prices.

## Size (enforced by the checker)
- Page total 4,500+ words: the checker must report ~4,650+ (file text ~3,950+ words; aim 4,050–4,350).
  ~13 sections of 280–380 words, 14 FAQs of 50–90 words, 12 localities, 8 industries, 6 snapshot rows.
- sections: 10+ (aim 13). At least 7 about city-specific industries/areas/buyer types. Also include: cost, local SEO,
  Android & iOS apps, AI/WhatsApp automation, remote team, ownership/maintenance — each in fresh words. Paragraphs may include
  <a href="/services/web-development/">, <a href="/services/seo-services/">, <a href="/it-services/android-ios-app/">,
  <a href="/pricing/">, <a href="/contact/"> and <strong>.
- meta.description 120–165 chars and mentions apps. hero.lede 45–65 words. geo: accurate lat/lng. updated: "2026-09-22".
- nearby: 6–8 slugs that exist in E:\BtechWaleService\src\data\cities\cities.json (exact match).
- serviceNotes: all 8 keys (web, seo, ecommerce, software, ai, data, app, maintenance), one city-specific sentence each.

## Biggest failure cause: copying YOURSELF
Most rejected pages share phrasing with the OTHER cities in the same batch, written by the same agent. For each of your 5 cities,
write the generic parts (cost, remote team, ownership/maintenance, app section, AI section, FAQs) from scratch with a different
structure, opening, examples and sentence rhythm. Never paste or lightly edit a paragraph from your previous city. Run the checker
after EACH city, not just at the end.

## Writing
Natural, grammatical Indian-English business prose; concrete and specific; varied sentence length. No hype/AI-filler words
("cutting-edge", "seamless", "leverage", "in today's digital age", "unlock", "elevate", "delve", "tapestry", "bustling",
"vibrant", "nestled", "robust"). Escape double quotes inside strings; use curly quotes “ ” for quoted phrases.

## Verify
After each file: cd /e/BtechWaleService && node scripts/check-city-content.mjs {slug}. Fix every FAIL until PASS.
Finish by running it on all your slugs together.

Final reply (short): one line per city with PASS word count, then facts you left out or stated from memory without a search.
