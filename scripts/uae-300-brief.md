# UAE 300 — authoring brief

The plan lives in `scripts/uae-300-plan.json`: 300 entries, each with `slug`, `path`,
`title`, `keyword`, `angle`, `cluster`, `intent`. One entry = one file at
`src/data/keywords/countries/uae/<slug>.ts`. The route, layout, schema, breadcrumbs and
styling already exist — you only write the content object.

## Non-negotiables

**Never invent facts about the business.** BtechWaleTech is three freelance engineers in
India. It has **no UAE office, no UAE trade licence, no UAE phone number and no local
staff**, and every page says so plainly. There are no client names, no case studies with
numbers, no awards, no star ratings, no "500+ projects delivered". If a claim cannot be
traced to something already true on the site, it does not go on the page.

**Prices come from the helper, never hardcoded.** Start every file with:

```ts
import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};
```

Then interpolate `${P.site}` etc. A literal `US$150` anywhere is a bug.

**Every page must be genuinely different.** These 300 pages sit in one folder and Google
will compare them to each other. Two pages in the same cluster must not share paragraphs,
FAQ answers, table rows or section headings. If you find yourself adapting a sentence from
a sibling page, write a different sentence about a different thing. The `angle` field in
the plan exists to force that difference — build the page around it.

**Say where we are the wrong choice.** Every page carries at least one honest limitation:
no local entity, no in-person meetings, three people cannot staff an enterprise rollout,
nobody guarantees rankings. This is what makes the pages citable rather than promotional.

## Shape

Fill the `FreelanceContent` interface in `src/data/freelance/types.ts` completely.
Read `src/data/keywords/countries/uae/website-development-dubai.ts` first and match its
register: concrete, specific, decision-led, no superlatives, no filler.

Target **~9,000 words of source**, which renders to roughly 4,500–6,800 words. The bulk
belongs in `guide[]` (8–14 sections of real substance) and `tables[]` (2–4 comparison or
breakdown tables). Thin pages are worse than no pages.

Required for SEO/AEO/GEO:

- `answer.text` — a 40–60 word direct answer to the page's exact query. It is rendered as
  the speakable passage and is what an AI assistant will quote. Make it standalone.
- `faqs` — 8–12 questions phrased the way a UAE buyer types them, each answered in 40–80
  words without needing the rest of the page for context.
- `meta.title` ≤ 60 characters, `meta.description` 150–160, both containing the primary
  keyword naturally.
- `hero.h1` must differ from `meta.title`.
- `updated` — today's date, `YYYY-MM-DD`.

## Internal linking

Three to six contextual links per page, inside prose, with descriptive anchor text. Link
to pages that **exist**: anything in `src/data/keywords/countries/uae/` (check the folder),
plus `/uae/`, `/pricing/`, `/contact/`, `/services/web-development/`, `/services/seo-services/`.
Fill `related.links` with 4–6 genuinely adjacent pages. Never link to a slug from the plan
that has not been written yet.

## UAE specifics worth using

Real, checkable detail is what separates these from generic copy: mainland vs free-zone
licence wording, trade licence and TRN on the site, `.ae` registration rules, 5% VAT,
Monday–Friday working week, Arabic and RTL, dirham pricing, UAE PASS, local payment rails
(Telr, PayTabs, Network International, Tabby, Tamara), marketplaces (Noon, Amazon.ae),
Dubai REST and Ejari for property, WPS for payroll, UAE PDPL for data. Use only what the
page's own topic actually calls for.

## Done means

`npx astro check` passes, the file exports `default content`, prices interpolate, no slug
collides, and the page reads like someone who has done the work wrote it.
