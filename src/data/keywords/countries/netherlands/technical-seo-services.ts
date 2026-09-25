import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const content: FreelanceContent = {
  path: "/netherlands/technical-seo-services/",
  crumb: "Technical SEO services Netherlands",
  updated: "2026-09-25",
  meta: {
    title: `Technical SEO Services Netherlands, from ${P.seo}/mo`,
    description: `Technical SEO services for Dutch sites and webshops: hreflang nl-NL/nl-BE/en, Core Web Vitals, faceted crawl fixes, schema. Monthly from ${P.seo}.`,
    keywords: [
      "technical seo services netherlands", "technical seo netherlands", "technische seo", "technical seo audit netherlands",
      "technical seo agency netherlands", "technical seo consultant amsterdam", "technical seo rotterdam", "technical seo utrecht",
      "hreflang nl-nl nl-be en", "hreflang netherlands belgium", "core web vitals shopify", "core web vitals magento",
      "core web vitals woocommerce", "faceted navigation seo", "crawl budget webshop", "product schema webshop",
      "organization schema", "seo for google.nl", "ai overviews seo", "technical seo cost netherlands",
      "monthly technical seo", "search console audit", "seo migration netherlands", "remote technical seo india",
      "technical seo freelancer", "inp optimisation",
    ],
  },
  hero: {
    eyebrow: "Technical SEO for Dutch sites and webshops",
    h1: "Technical SEO services for the Netherlands: fix what stops Google from ranking your pages",
    lede: `Technical SEO services for the Netherlands cover the parts of search that live in code, not copy: hreflang between nl-NL, nl-BE and English versions, Core Web Vitals on Shopify, Magento and WooCommerce, crawl waste from faceted filters, and product and organisation schema. BtechWaleTech is three freelance developers in India who find these problems and fix them in your codebase, while your Dutch copy stays with your own writers. Monthly technical SEO starts from ${P.seo}; our <a href='/netherlands/wordpress-website-development/'>WordPress builds</a> ship with the basics done.`,
    pills: ["Crawl and index audits", "hreflang nl-NL / nl-BE / en", "Core Web Vitals fixes", "Faceted navigation control", "Product & Organization schema", "Monthly reports", "No Dutch copywriting"],
    origin: "Three freelance developers in India · technical SEO led by Santosh Sharma · fixes shipped, not just reported",
  },
  facts: [
    ["Monthly technical SEO from", `${P.seo}`],
    ["SEO site build (299+ pages) from", `${P.seoSite}, 3–5 weeks`],
    ["Platforms", "Shopify, Magento, WooCommerce, WordPress, custom"],
    ["Search engines", "google.nl, google.be and AI Overviews"],
    ["Copy", "You or your writers supply Dutch text"],
    ["Reports", "Monthly, in English, tied to Search Console"],
  ],
  stats: [
    { value: "3", label: "Developers who can ship the fixes themselves" },
    { value: "2", label: "Working days to a scoped quote" },
    { value: "0", label: "Ranking guarantees, because nobody can honestly give one" },
    { value: "7", label: "Days a week we reply on WhatsApp" },
  ],
  answer: {
    heading: "What technical SEO does a Dutch website or webshop need to rank on google.nl and in AI Overviews?",
    text: `A Dutch site needs pages Google can crawl, index and understand: correct hreflang across nl-NL, nl-BE and English, fast templates that pass Core Web Vitals, faceted filters kept out of the crawl, and schema that matches visible content. Technical SEO services from BtechWaleTech start from ${P.seo} a month, with fixes shipped in your code.`,
    more: `Building fresh rather than fixing? Start with <a href='/netherlands/wordpress-website-development/'>WordPress website development</a> or, for shops, our <a href='/netherlands/magento-to-shopify-migration/'>Magento to Shopify migration</a> guide.`,
  },
  snapshot: {
    caption: "Technical SEO services for Dutch sites, summarised",
    rows: [
      { label: "Who it is for", value: "Webshops, multi-language B2B sites, large content sites, replatforming projects" },
      { label: "Monthly technical SEO", value: `From ${P.seo}` },
      { label: "Typical first month", value: "Crawl audit, Search Console review, prioritised fix list, first fixes live" },
      { label: "Languages", value: "nl-NL, nl-BE and English linked with hreflang" },
      { label: "Platforms", value: "Shopify, Magento, WooCommerce, WordPress, custom stacks" },
      { label: "What we do not do", value: "Dutch copywriting, link buying, ranking promises" },
      { label: "Billing", value: "USD, Wise, wire or PayPal, monthly" },
    ],
  },
  services: {
    eyebrow: "What the work covers",
    heading: "Technical SEO services for Dutch websites and webshops",
    note: "Each line below is a workstream. The audit decides which ones your site needs first.",
    cards: [
      { name: "Crawl and index audit", note: "A full crawl compared with Search Console's page indexing report: what Google finds, what it ignores and why, turned into a ranked fix list.", href: "/seo-audit-services/", size: "lg" },
      { name: "hreflang for NL, BE and English", note: "Language and region annotations that point both ways, with x-default, validated per template and in the sitemap.", size: "lg" },
      { name: "Core Web Vitals repair", note: "LCP, INP and CLS measured on real templates and fixed in theme code: images, fonts, scripts, apps and third-party tags.", href: "/core-web-vitals-assessment-failed/", size: "md" },
      { name: "Faceted navigation control", note: "Filter URLs for colour, size and brand kept from flooding the crawl, with chosen facets left indexable where search demand exists.", size: "md" },
      { name: "Structured data", note: "Product, Offer, BreadcrumbList and Organization schema generated from real data and matching what the page shows.", href: "/schema-markup-services/", size: "md" },
      { name: "Migrations and relaunches", note: "Redirect maps, pre-launch crawls of staging and post-launch monitoring when you change platform, domain or URL structure.", href: "/change-domain-without-losing-seo/", size: "sm" },
      { name: "Monthly technical SEO", note: `Ongoing monitoring, fixes and a monthly report tied to Search Console data, from ${P.seo}.`, size: "sm" },
      { name: "AI-search readiness", note: "Indexability, snippet eligibility, schema accuracy and answer-first page structure for Google's AI features.", size: "sm" },
    ],
  },
  comparison: {
    heading: "Who should handle technical SEO for a Dutch site?",
    note: "Three common set-ups. The question is whether someone can both diagnose the problem and change the code.",
    columns: ["Criterion", "Content-led SEO bureau", "SEO plugin or audit tool alone", "BtechWaleTech"],
    rows: [
      ["Dutch keyword research and copy", "Usually strong", "Not included", "Not offered; your writers or bureau do it"],
      ["Diagnosing crawl and index issues", "Varies", "Flags symptoms", "Yes, with Search Console and crawl data"],
      ["Shipping fixes in theme or app code", "Often handed to your developer", "No", "Yes, we change the code"],
      ["hreflang across nl-NL, nl-BE, en", "Advice", "Partial checks", "Implemented and validated"],
      ["Core Web Vitals work", "Recommendations", "Scores only", "Template-level fixes"],
      ["Link building", "Often offered", "No", "Not offered"],
      ["Cost pattern", "Monthly retainer", "Tool subscription", `From ${P.seo} a month`],
      ["Language of reports", "Dutch or English", "Tool's language", "English"],
    ],
    fine: "If your main gap is Dutch content, keyword strategy or digital PR, a Dutch content bureau is the better first hire; we work well alongside one on the technical side.",
  },
  pricing: {
    heading: "What technical SEO services cost for a Dutch site",
    note: `Monthly technical SEO starts from ${P.seo} and covers monitoring, the fixes agreed in your scope and a written monthly report. The first month is usually heavier: a full crawl, a Search Console review and the fixes with the biggest effect. Larger jobs, such as rebuilding a slow Shopify theme section, restructuring faceted navigation on Magento or a full replatform, are quoted as separate projects; a new SEO-first site of 299+ pages starts from ${P.seoSite}. Quotes are itemised in USD, and nothing starts before you approve them in writing.`,
  },
  guideLabel: "Technical SEO services in the Netherlands: the complete guide",
  guide: [
    {
      id: "what-it-is",
      heading: "What are technical SEO services, and how do they differ from content SEO?",
      paragraphs: [
        "Technical SEO services make sure search engines can crawl, render, index and understand your pages; content SEO decides what those pages say. One without the other stalls: brilliant Dutch copy on a page Google never indexes earns nothing.",
        "The technical side lives in templates, server responses, sitemaps, robots rules, redirects, structured data and performance. It is usually invisible to visitors until it fails: a relaunch that drops traffic, filters that create a million URLs, a Belgian page ranking in the Netherlands instead of the Dutch one.",
        "For a Dutch business this split has a practical upside. Your Dutch copy can stay with the people who write it best, in-house or at a local bureau, while a technical team fixes the machinery underneath. That is how we work: we never write Dutch copy, and we do not pretend to.",
      ],
      list: [
        "Crawling: can Googlebot reach the pages that matter, without wasting time on those that do not?",
        "Indexing: are the right versions indexed, with canonical signals that agree?",
        "Understanding: do headings, internal links and schema describe the page clearly?",
        "Experience: do templates load fast and stay stable on a mid-range phone?",
      ],
    },
    {
      id: "when-needed",
      heading: "When does a Dutch business need technical SEO services?",
      paragraphs: [
        "You need technical SEO when traffic drops without a content change, when Search Console shows many pages “crawled, not indexed”, before a replatform, or when you add a second country or language. Those are the moments where code, not copy, decides results.",
        "Webshops hit these problems first because catalogues multiply URLs. A fashion shop with filters for size, colour, brand and price can expose more filter combinations than it has products. Multi-language B2B sites hit the hreflang wall: the English page outranks the Dutch one in the Netherlands, or Belgian visitors land on nl-NL prices.",
      ],
      list: [
        "Organic traffic fell after a theme, app or platform change.",
        "Search Console shows large numbers of excluded or duplicate pages.",
        "You are moving from Magento, WooCommerce or a custom build to a new platform.",
        "You are adding Belgium or an English market to a Dutch site.",
        "Mobile Core Web Vitals fail in the Search Console report.",
        "Products show wrong prices or no rich results in search.",
      ],
      after: [
        "If none of these apply and your site is small, a one-off audit may be enough. We say so in the quote rather than selling a monthly plan you do not need.",
      ],
    },
    {
      id: "hreflang",
      heading: "How should hreflang be set up for nl-NL, nl-BE and English versions?",
      paragraphs: [
        "Every page version must list itself and all its alternates, in both directions, with valid codes and an x-default; if the pages do not point at each other, Google ignores the tags. That rule, taken from Google's documentation on localised versions, is where most Dutch–Belgian set-ups break.",
        "Google accepts hreflang in HTML link tags, HTTP headers or XML sitemaps. Language codes follow ISO 639-1 and optional region codes follow ISO 3166-1 Alpha 2, so nl-NL and nl-BE are valid and so is plain en. For a large webshop we usually move annotations into the sitemap, because it keeps page heads light and is easier to generate from the catalogue.",
      ],
      subs: [
        { heading: "When to use nl-BE", text: "Only when the Belgian version genuinely differs: prices, delivery terms, VAT display, assortment or wording. Duplicating nl-NL pages under a Belgian path adds maintenance without benefit." },
        { heading: "When plain nl is enough", text: "When one Dutch version serves both countries, use nl rather than splitting by region. Belgian searchers can still find it." },
        { heading: "English", text: "Usually en without a region for expats and international buyers, plus x-default on the English or language-selector page." },
      ],
      after: [
        "We validate by crawling every language version and matching return links template by template. Google's own <a href='https://developers.google.com/search/docs/specialty/international/localized-versions' rel='noopener'>localised versions guidance</a> is the reference we test against.",
      ],
    },
    {
      id: "cwv",
      heading: "What are Core Web Vitals, and what counts as a pass?",
      paragraphs: [
        "Core Web Vitals are Google's three user-experience metrics: Largest Contentful Paint for loading, Interaction to Next Paint for responsiveness and Cumulative Layout Shift for visual stability. According to web.dev, good means LCP within 2.5 seconds, INP of 200 milliseconds or less and CLS of 0.1 or less, measured at the 75th percentile of page loads.",
        "INP replaced First Input Delay as a stable Core Web Vital in 2024, which changed where many shops failed. Pages that loaded quickly but froze when a visitor opened a filter or added to cart now show up as problems. On Dutch webshops the culprits are often heavy review widgets, chat bubbles, personalisation scripts and tag managers stacked with marketing tags.",
      ],
      list: [
        "LCP: hero images too large, fonts blocking render, slow server response.",
        "INP: long JavaScript tasks from apps, sliders and third-party tags.",
        "CLS: banners, cookie bars and images without reserved space.",
      ],
      after: [
        "We work from field data first, because that is what Google uses, then reproduce problems in lab tools to fix them. The thresholds come from web.dev's Web Vitals overview.",
      ],
    },
    {
      id: "platforms",
      heading: "How do technical SEO services differ on Shopify, Magento and WooCommerce?",
      paragraphs: [
        "The goals are identical, but each platform hides its problems in different places: Shopify in apps and theme sections, Magento in layered navigation and server set-up, WooCommerce in plugins and hosting. Good technical SEO services adapt the fix to the platform instead of applying one checklist.",
      ],
      subs: [
        { heading: "Shopify", text: "Apps inject scripts on every page, even where unused; theme sections load oversized images; collection-aware product URLs create duplicate paths. Fixes happen in theme code, app choices and robots.txt.liquid, within what the platform allows." },
        { heading: "Magento (Adobe Commerce)", text: "Layered navigation generates huge numbers of filter URLs, full-page cache and server tuning decide response times, and extensions add their own markup. We control facets, review cache behaviour and clean up duplicate category paths." },
        { heading: "WooCommerce", text: "Plugin count and hosting quality dominate. We trim plugins, fix database bloat, set up object caching, and make filter plugins produce crawl-friendly URLs." },
        { heading: "Custom and headless", text: "Rendering strategy becomes the main question: server-side or static output for indexable pages, stable canonical tags, and sitemaps generated from the source of truth." },
      ],
      after: [
        "Platform-specific build work sits on our sibling pages for a <a href='/netherlands/shopify-developer/'>Shopify developer in the Netherlands</a> and a <a href='/netherlands/woocommerce-developer/'>WooCommerce developer</a>.",
      ],
    },
    {
      id: "faceted",
      heading: "How do you fix crawl-budget problems from faceted navigation in a webshop?",
      paragraphs: [
        "Decide which filter pages deserve to rank, keep those as clean indexable URLs, and stop crawlers from wandering through the rest. Google's own guidance on faceted navigation prefers preventing crawl of unwanted facet URLs, for example with robots.txt or URL fragments, over relying on canonical tags alone.",
        "Google warns that faceted navigation can generate infinite URL spaces, leading to over-crawling and slower discovery of new content. It recommends standard & separators for parameters, a consistent filter order, and an HTTP 404 status when a filter combination returns no results. It describes rel=canonical and rel=nofollow on facet links as generally less effective in the long term.",
      ],
      list: [
        "Map facets against search demand: “zwarte sneakers dames” may deserve a page; “size 38 + blue + under a price band + on sale” does not.",
        "Give chosen facets static, readable URLs with their own title, heading and intro text written by your team.",
        "Block the remaining parameter combinations in robots.txt or move them to fragments.",
        "Return 404 for empty combinations instead of an empty 200 page.",
        "Keep internal links pointing at canonical category URLs only.",
      ],
      after: [
        "Read Google's <a href='https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation' rel='noopener'>faceted navigation documentation</a> for the full list. Wholesale catalogues face the same issue; see our <a href='/netherlands/b2b-webshop-development/'>B2B webshop development</a> page.",
      ],
    },
    {
      id: "schema",
      heading: "Which schema should technical SEO services add to a Dutch webshop?",
      paragraphs: [
        "Most webshops need Product with Offer, BreadcrumbList and Organization; service businesses need Organization or LocalBusiness plus BreadcrumbList. The rule that matters more than the type list: the structured data must match what visitors see on the page.",
        "Google's guidance on AI features repeats that point, asking site owners to ensure structured data matches visible text. Mismatches are common on Dutch shops: schema still showing an old price, availability hard-coded as in stock, or a review rating pulled from a widget that is not on the page.",
      ],
      list: [
        "Product: name, image, description, SKU or GTIN, brand.",
        "Offer: price and currency as displayed, availability from live stock.",
        "BreadcrumbList: mirrors the visible breadcrumb trail in each language.",
        "Organization: legal name, logo, contact points, matching your footer.",
        "No markup for content that is not visible to users.",
      ],
      after: [
        "We generate schema from the same data that renders the page, so it cannot drift. For details of our markup work outside the Netherlands, see <a href='/schema-markup-services/'>schema markup services</a>.",
      ],
    },
    {
      id: "ai-overviews",
      heading: "How do technical SEO services help with Google AI Overviews?",
      paragraphs: [
        "They make your pages eligible, which is the part you can control. Google states there are no additional requirements or special optimisations for AI Overviews or AI Mode; a page must be indexed and eligible to show with a snippet, meeting Google Search's technical requirements.",
        "So the work is ordinary technical SEO done well. No accidental noindex tags. No robots rules blocking key sections. No snippet restrictions set carelessly. Canonicals that point at the version you want cited. Schema that matches visible content. Then, on the content side, answer-first paragraphs your writers produce in Dutch.",
      ],
      list: [
        "Check indexing status for the pages you want cited.",
        "Remove nosnippet or restrictive max-snippet settings where they are unintended.",
        "Keep canonical, hreflang and internal links consistent.",
        "Structure pages with clear question headings and concise answers.",
      ],
      after: [
        "Whether Google chooses to show your page in an AI answer is its decision, not ours. Google's page on <a href='https://developers.google.com/search/docs/appearance/ai-features' rel='noopener'>AI features and your website</a> sets out what site owners can do.",
      ],
    },
    {
      id: "audit",
      heading: "What does a technical SEO audit for a Dutch site include?",
      paragraphs: [
        "Within technical SEO services, a useful audit ends with a ranked fix list, each item tied to evidence and an estimated effort, not a two-hundred-page PDF of warnings. Ours combines a full crawl, Search Console data, field performance data and a manual review of key templates.",
        "We crawl the site as Googlebot would, per language, and compare what we find with what Search Console says is indexed. Differences tell the story: pages crawled but not indexed, pages indexed that should not be, duplicate clusters, redirect chains, orphaned products, and hreflang errors.",
      ],
      subs: [
        { heading: "Crawl and index", text: "Status codes, redirect chains, canonicals, robots directives, sitemaps, orphan pages, duplicate clusters." },
        { heading: "International", text: "hreflang return links, language and region codes, x-default, cross-language canonicals." },
        { heading: "Performance", text: "Core Web Vitals by template, heaviest scripts and apps, image and font delivery." },
        { heading: "Understanding", text: "Heading structure, internal linking depth, schema validity and match with visible content." },
      ],
      after: [
        "Each finding gets a priority, an owner (us, your developer or your content team) and an effort estimate. See how audits work in general on our <a href='/seo-audit-services/'>SEO audit services</a> page.",
      ],
    },
    {
      id: "cost",
      heading: "How much do technical SEO services cost in the Netherlands?",
      paragraphs: [
        `With BtechWaleTech, monthly technical SEO starts from ${P.seo}; larger one-off projects are quoted separately. Quotes for technical SEO vary widely across the Netherlands, and the spread comes from whether the provider only reports problems or also fixes them.`,
        "What drives the price is the size of the site, the number of languages, the platform's flexibility and how much code needs to change. A 60-page WordPress site with one language needs far less than a Magento catalogue with three language versions and thousands of filter combinations.",
      ],
      list: [
        "Number of URLs and templates.",
        "Languages and regions (nl-NL, nl-BE, en and more).",
        "Platform constraints, such as what a hosted platform lets you change.",
        "Whether fixes are shipped by us or handed to your developer.",
        "Migration or replatforming work on top of routine monitoring.",
      ],
      after: [
        "Our quote lists the first-month audit, the monthly scope and any projects as separate lines in USD. Full price bands for all services are on <a href='/pricing/'>our pricing page</a>.",
      ],
    },
    {
      id: "reporting",
      heading: "What should a monthly report from technical SEO services show?",
      paragraphs: [
        "A monthly report should say what changed on the site, what changed in Search Console and what you should decide next, in a few pages. Charts without decisions waste your time.",
        "Ours is written in English and structured the same way every month so you can compare. It covers work shipped, index coverage trends, Core Web Vitals status by template, crawl stats, hreflang and schema errors, and a short list of priorities for the coming month with effort estimates.",
      ],
      list: [
        "Fixes shipped, with links to the pages or commits.",
        "Indexed and excluded pages by reason, compared with last month.",
        "Core Web Vitals pass or fail per template group, mobile first.",
        "Impressions and clicks for key page groups in google.nl and google.be.",
        "New errors: redirects, 404s, schema warnings, hreflang mismatches.",
        "Next month's plan and anything needing your approval.",
      ],
      after: [
        "We do not report vanity metrics such as generic domain scores. Search Console, field data and your own analytics tell you what Google actually sees.",
        "If a month brings a sharp drop, the report opens with it: what we saw, what we checked, the likely cause and what has already been done. You should never learn about a problem from your sales figures before you hear it from us.",
      ],
    },
    {
      id: "migrations",
      heading: "How do technical SEO services protect google.nl rankings during a migration?",
      paragraphs: [
        "Map every old URL to its best new equivalent with a 301 redirect, crawl the staging site before launch, and monitor Search Console daily for the first weeks. Most ranking losses during relaunches come from missing redirects and changed templates, not from the new platform itself.",
        "Dutch shops moving from Magento to Shopify face URL pattern changes on every product and category. Multi-language sites often lose hreflang during a move because the new theme outputs it differently. We build the redirect map from a crawl plus Search Console and analytics data, so pages with links or traffic are never forgotten.",
      ],
      list: [
        "Pre-launch: crawl old site, build redirect map, crawl staging, compare.",
        "Launch day: redirects live, sitemaps submitted, robots rules checked.",
        "Weeks 1–4: daily index and error checks, fixes for any missed URL.",
      ],
      after: [
        "Our <a href='/netherlands/magento-to-shopify-migration/'>Magento to Shopify migration</a> page covers the data side of that move in detail.",
      ],
    },
    {
      id: "working-from-nl",
      heading: "How does a remote technical SEO team in India work with a Dutch business?",
      paragraphs: [
        "You grant access to Search Console, analytics and your code or theme, we work in your systems, and we meet over video during your morning, which is our afternoon. India is three and a half hours ahead of the Netherlands in summer and four and a half in winter.",
        "Technical SEO suits remote work because the evidence is digital: crawls, logs, Search Console, field data and code. What does not suit it is Dutch copywriting, which is why we leave that to your team or bureau and coordinate through a shared task list.",
      ],
      subs: [
        { heading: "Access", text: "Named user accounts in Search Console, analytics, your platform and code repository; no shared passwords, all removable by you." },
        { heading: "Payments", text: "Monthly USD invoice from India, paid by Wise, bank wire or PayPal. Your accountant advises on booking it." },
        { heading: "Agreements", text: "Scope and deliverables are in the written quote; wider terms are on our terms page." },
        { heading: "The first two weeks", text: "Week 1: access, full crawl, Search Console and field data review. Week 2: ranked fix list, first quick fixes shipped, monthly plan agreed." },
      ],
    },
    {
      id: "choose",
      heading: "How do you choose a technical SEO services provider in the Netherlands?",
      paragraphs: [
        "Pick someone who can show you exactly how they would fix your top three issues in your platform, who reports from Search Console rather than proprietary scores, and who says clearly what they cannot promise.",
      ],
      list: [
        "Can you ship fixes in our theme or codebase, or only recommend them?",
        "How do you validate hreflang across nl-NL, nl-BE and English?",
        "Which data source do you use for Core Web Vitals: field or lab?",
        "How do you decide which filter pages stay indexable?",
        "What does your monthly report contain, and can we see an example structure?",
        "What do you not do? (Good answer: guarantees, link schemes, anything in a language you do not speak.)",
      ],
      after: [
        "Red flags: promises of first-page positions, bulk link packages, reports built on third-party scores alone, and audits with no effort estimates. Nobody can guarantee rankings on google.nl.",
      ],
    },
    {
      id: "example",
      heading: "Example: technical SEO for a Dutch–Belgian furniture webshop",
      paragraphs: [
        "Consider a hypothetical furniture webshop on Magento serving the Netherlands and Flanders, with separate nl-NL and nl-BE stores and an English store for expats. Organic traffic is flat, and Belgian visitors often land on Dutch pages with Dutch delivery terms.",
        "An audit would likely find three things. First, hreflang only on product pages, missing from categories, and without return links from the English store. Second, layered navigation exposing every combination of material, colour, width and price, with Googlebot spending much of its crawl there. Third, a slow LCP on category pages caused by uncompressed lifestyle images and a render-blocking font.",
        `The fix plan: sitemap-based hreflang for all page types, a facet strategy keeping a few high-demand filter pages indexable and blocking the rest, and image and font changes in the theme. Monthly technical SEO from ${P.seo} would then track index coverage and Core Web Vitals as the changes land.`,
      ],
      after: [
        "This is a worked illustration, not a real client or result. Your site will have its own mix of issues, which the first-month audit reveals.",
      ],
    },
    {
      id: "checklist",
      heading: "Technical SEO services checklist for Dutch websites and webshops",
      paragraphs: [
        "Use this list to spot-check your own site before you hire anyone. If more than three items fail, technical SEO services will likely pay for themselves in saved crawl and recovered visibility.",
      ],
      list: [
        "Search Console verified for every language version and property.",
        "XML sitemaps list only indexable, canonical, 200-status URLs.",
        "hreflang present on all page types, with return links and x-default.",
        "Filter and sort URLs do not flood the crawl.",
        "Core Web Vitals pass on mobile for your key templates.",
        "Product schema price and availability match the page.",
        "Organization schema matches your footer and contact details.",
        "No redirect chains longer than one hop on internal links.",
        "No important page blocked by robots.txt or tagged noindex.",
        "A redirect map exists for any recent or planned relaunch.",
      ],
    },
  ],
  tables: [
    {
      id: "issue-matrix",
      eyebrow: "Diagnosis",
      heading: "Common technical SEO issues on Dutch sites, with symptoms and fixes",
      note: "Patterns we look for first in an audit. The platform decides how each fix is shipped.",
      columns: ["Issue", "Symptom in Search Console", "Fix"],
      rows: [
        ["Missing hreflang return links", "Wrong country version ranking; alternate pages flagged", "Generate reciprocal annotations per template or in the sitemap"],
        ["Facet URL explosion", "Many “crawled, not indexed” and duplicate URLs", "Indexable facet shortlist, robots rules for the rest"],
        ["Slow LCP on category pages", "Core Web Vitals report shows poor URLs", "Resize and preload hero images, fix font loading"],
        ["Poor INP on product pages", "Poor interaction metrics on mobile", "Remove or defer heavy apps and tags"],
        ["Schema price mismatch", "Product snippet warnings", "Generate schema from live price and stock data"],
        ["Redirect chains after relaunch", "Redirect errors, slow discovery of new URLs", "Update internal links and collapse chains"],
        ["Thin duplicate nl-BE pages", "Duplicate without user-selected canonical", "Merge into nl, or differentiate genuinely"],
      ],
      hideSm: [1],
    },
    {
      id: "hreflang-matrix",
      eyebrow: "hreflang example",
      heading: "hreflang set-up for a Dutch, Belgian and English site",
      note: "Every version lists all alternates, including itself. Paths are illustrative.",
      columns: ["Page version", "hreflang value", "Lists these alternates"],
      rows: [
        ["/nl/bank-velvet/", "nl-NL", "nl-NL, nl-BE, en, x-default"],
        ["/be/bank-velvet/", "nl-BE", "nl-NL, nl-BE, en, x-default"],
        ["/en/velvet-sofa/", "en", "nl-NL, nl-BE, en, x-default"],
        ["/ (language selector)", "x-default", "nl-NL, nl-BE, en, x-default"],
        ["Category pages", "Same pattern per language", "All category equivalents"],
      ],
    },
    {
      id: "engagement",
      eyebrow: "Scope and starting price",
      heading: "Technical SEO engagements for Dutch businesses",
      note: "Starting prices in USD for technical SEO services. The monthly scope is agreed in your quote; larger changes are quoted separately.",
      columns: ["Engagement", "Includes", "Starts from", "Duration"],
      rows: [
        ["Monthly technical SEO", "Monitoring, fixes, monthly report", `${P.seo} a month`, "Ongoing"],
        ["First-month audit", "Crawl, Search Console, field data, ranked fix list", "Scoped in your quote", "Weeks 1–2"],
        ["Migration protection", "Redirect map, staging crawl, launch monitoring", "Quoted per project", "2–6 weeks"],
        ["SEO-first site build", "299+ page site with templates and schema", P.seoSite, "3–5 weeks"],
        ["Custom faceted search rebuild", "New filter and URL logic in code", P.software, "6–12 weeks"],
        ["Post-launch care", "Updates, uptime, small fixes", P.care, "Monthly, after 5 free months"],
      ],
      hideSm: [3],
    },
  ],
  areas: {
    eyebrow: "Remote technical SEO services, nationwide",
    heading: "Technical SEO services across the Netherlands",
    note: "We work from India with no Dutch office and no site visits; audits and fixes happen through your accounts. These are the technical SEO problems typical of sites from each area.",
    cards: [
      { name: "Amsterdam", note: "International brands and SaaS companies often run Dutch and English versions in parallel, where hreflang errors and duplicate content quietly split visibility." },
      { name: "Rotterdam", note: "Logistics and industrial B2B sites tend to carry large technical catalogues and PDF libraries that need clean crawl paths and indexable product pages." },
      { name: "The Hague", note: "Organisations serving international audiences often need careful language targeting and accessibility-friendly templates that also help crawlability." },
      { name: "Utrecht", note: "Growing webshops and service platforms commonly hit Core Web Vitals issues as apps, tags and personalisation scripts pile up on their templates." },
      { name: "Eindhoven", note: "Technology suppliers publish specification-heavy product pages in English and Dutch, where schema and faceted search need careful control." },
      { name: "Groningen", note: "Regional webshops and education providers often need a technical clean-up after years of plugins and theme changes on WordPress or WooCommerce." },
      { name: "Tilburg", note: "E-commerce and fulfilment-linked sellers with big catalogues benefit from facet control and sitemaps generated straight from product data." },
      { name: "Breda", note: "Retail and hospitality groups with multiple locations need structured data and location pages that search engines can crawl and understand." },
      { name: "Arnhem", note: "Energy, construction and installation businesses often run service-area pages that need consolidation to avoid thin, near-duplicate content." },
      { name: "Nijmegen", note: "Healthcare and education sites need fast, stable templates and precise indexing rules for the many informational pages they publish." },
      { name: "Maastricht", note: "Businesses selling into Belgium and Germany need correct multi-country hreflang and region-aware canonicals across several language versions." },
      { name: "Venlo", note: "Webshops and logistics-connected sellers near the German border often run cross-border catalogues where language and region targeting must be exact." },
      { name: "Zwolle", note: "Regional B2B firms and wholesalers moving to new platforms need migration planning so existing google.nl visibility is kept." },
      { name: "Haarlem", note: "Fashion, interior and lifestyle webshops typically face filter-driven crawl waste and heavy imagery that slows category pages on mobile." },
    ],
  },
  process: {
    heading: "How our technical SEO services in the Netherlands run, step by step",
    steps: [
      ["Share access and goals", "Send your site, platform, languages and the problem you see. Read access to Search Console lets us look at real data before quoting."],
      ["Quote in two working days", "An itemised USD quote splitting the first-month audit, the monthly scope and any larger projects, with nothing billed before approval."],
      ["Crawl and diagnose", "Full crawl per language, Search Console and field data review, and a manual check of key templates on your platform."],
      ["Ranked fix list", "Every issue with evidence, priority, owner and effort. Your content team gets the items that need Dutch text; we take the code."],
      ["Ship fixes", "Changes deployed through your normal process, on staging first where possible, each one logged with the affected URLs."],
      ["Monitor and report", "Monthly report tied to Search Console and field data, plus a short plan for the next month and any decisions needed from you."],
    ],
  },
  faqHeading: "Technical SEO services in the Netherlands: common questions",
  faqs: [
    { question: "How much do technical SEO services cost in the Netherlands?", answer: `With BtechWaleTech, monthly technical SEO starts from ${P.seo} and includes monitoring, the fixes agreed in your scope and a monthly report. Larger projects such as migrations or faceted search rebuilds are quoted separately. Prices elsewhere vary widely, mostly depending on whether a provider only reports issues or also changes the code. Our quotes are itemised in USD.` },
    { question: "What is included in technical SEO services?", answer: "Technical SEO covers crawlability, indexing, canonical and hreflang signals, redirects, sitemaps, robots rules, page speed and Core Web Vitals, structured data and rendering. It excludes keyword research, copywriting and link building, which are content and off-page SEO. We focus on the technical side and ship fixes in your platform's code." },
    { question: "Do you write Dutch content or do Dutch keyword research?", answer: "No. We work in English and handle the technical side. Your in-house team or a Dutch content bureau writes the copy and researches Dutch keywords. We tell them which pages need text, such as intros for indexable filter pages, and make sure those pages are crawlable, fast and correctly marked up." },
    { question: "How long do technical SEO services take to show results?", answer: "Fixes like removing a noindex tag or repairing hreflang can show effects within weeks, once Google recrawls. Crawl-budget and Core Web Vitals improvements take longer because Google needs time to process changes and field data covers a rolling period. Plan on a few months for clear trends, and remember no one can guarantee rankings." },
    { question: "Can you guarantee first-page rankings on google.nl?", answer: "No, and nobody can honestly do so. Rankings depend on competition, content, links and Google's own systems. What technical SEO can do is remove barriers: pages that are not indexed, slow templates, wrong language versions ranking, and confusing signals. We report progress from Search Console so you can judge the effect yourself." },
    { question: "How should hreflang work for the Netherlands and Belgium?", answer: "Use nl-NL for the Dutch version, nl-BE only where Belgian pages genuinely differ, en for English, and an x-default. Every version must list itself and all alternates, and each alternate must link back, otherwise Google ignores the tags. For large shops we usually put annotations in the XML sitemap." },
    { question: "What are the Core Web Vitals thresholds?", answer: "According to web.dev, a good experience means Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads. INP replaced First Input Delay as a stable metric in 2024." },
    { question: "Can you improve Core Web Vitals on Shopify?", answer: "Usually, within what Shopify allows. The biggest gains come from removing or replacing heavy apps, trimming theme sections, sizing and preloading images correctly, and controlling third-party tags. Server response is Shopify's responsibility, so our work focuses on theme code, app choices and scripts. We measure with field data before and after." },
    { question: "How do you fix faceted navigation on a Magento or WooCommerce shop?", answer: "We choose a shortlist of filter pages with real search demand and make them clean, indexable URLs with their own titles. Other combinations are kept out of the crawl, usually with robots.txt rules or URL fragments, and empty combinations return 404. Google's faceted navigation guidance recommends preventing crawl of unwanted facets over relying on canonicals." },
    { question: "Which schema does a webshop need?", answer: "Most webshops need Product with Offer, BreadcrumbList and Organization. The data must match what is visible: the displayed price, currency and real stock status. We generate schema from the same source that renders the page, so it cannot drift out of date when prices change." },
    { question: "How do I get my pages into Google AI Overviews?", answer: "Google says there are no special requirements for AI Overviews or AI Mode beyond being indexed and eligible to show with a snippet. Make sure key pages are indexable, avoid unintended snippet restrictions, keep structured data matched to visible text, and structure content with clear answers. Inclusion is Google's decision." },
    { question: "Do your technical SEO services include link building?", answer: "No. We do not buy, sell or arrange links. Our work is technical: making sure your site can be crawled, indexed and understood, and that it performs well. If you want digital PR or outreach, a specialist bureau is the right partner, and we are happy to coordinate with them on the technical side." },
    { question: "Can you help us migrate platforms without losing rankings?", answer: "Yes. We crawl the old site, build a redirect map using crawl, Search Console and analytics data, crawl the staging site before launch, then monitor daily for the first weeks. Missing redirects and changed templates cause most losses, so we focus there. Migration protection is quoted per project." },
    { question: "What access do technical SEO services need?", answer: "Read access to Search Console and analytics to start, then access to your platform, theme or code repository to ship fixes. We ask for named user accounts, never shared passwords, and you can remove our access at any time. For hosted platforms like Shopify, a collaborator account is usually enough." },
    { question: "How do you report progress?", answer: "A monthly report in English covering fixes shipped, indexed and excluded pages by reason, Core Web Vitals by template group, impressions and clicks for key page groups on google.nl and google.be, new errors, and next month's plan. It uses Search Console and field data rather than third-party scores." },
    { question: "Is it practical to hire a technical SEO team in India from the Netherlands?", answer: "Yes. Technical SEO relies on data and code, both accessible remotely. Your mornings overlap with our working day, so calls are easy to schedule, and WhatsApp messages are answered seven days a week. You keep ownership of every account; we work through named users you control." },
    { question: "How do we pay for technical SEO services from India?", answer: "We invoice monthly in USD from India, payable by Wise, bank wire or PayPal. The monthly scope and any separate projects are listed in your written quote, and nothing starts before you approve it. How you book invoices from abroad is a question for your accountant; our general terms are published on this site." },
    { question: "Should I choose a Dutch SEO bureau or a technical team like yours?", answer: "Choose a Dutch bureau if your biggest gap is Dutch content, keyword strategy or PR. Choose a technical team when crawling, indexing, speed, hreflang or migrations are holding you back and you need someone who can change the code. Many businesses use both, with each side doing what it does best." },
    { question: "Do you work on WordPress sites as well as webshops?", answer: `Yes. Many Dutch business sites run on WordPress, and technical SEO for them covers plugin clean-up, caching, hreflang with WPML or Polylang, schema and speed. If a rebuild makes more sense than a repair, our WordPress website development service starts from ${P.site}; we will compare both options in the quote.` },
    { question: "How is technical SEO different for a Belgian audience?", answer: "The main differences are language and region targeting. Flemish visitors should reach Belgian pages where they exist, with the right prices and delivery terms, and Google needs clear hreflang to show them. Monitor google.be separately in Search Console, and only create nl-BE pages when their content genuinely differs from nl-NL." },
  ],
  related: {
    heading: "Related services for Dutch businesses",
    links: [
      { name: "WordPress website development Netherlands", href: "/netherlands/wordpress-website-development/" },
      { name: "Shopify developer Netherlands", href: "/netherlands/shopify-developer/" },
      { name: "WooCommerce developer Netherlands", href: "/netherlands/woocommerce-developer/" },
      { name: "Magento to Shopify migration", href: "/netherlands/magento-to-shopify-migration/" },
      { name: "B2B webshop development", href: "/netherlands/b2b-webshop-development/" },
      { name: "MVP development for startups", href: "/netherlands/mvp-development-for-startups/" },
      { name: "WhatsApp chatbot for business", href: "/netherlands/whatsapp-chatbot-for-business/" },
      { name: "European Accessibility Act website compliance", href: "/netherlands/european-accessibility-act-website-compliance/" },
      { name: "Webshop cost in the Netherlands", href: "/netherlands/webshop-cost/" },
      { name: "All services for the Netherlands", href: "/netherlands/" },
      { name: "White-label web development", href: "/white-label-web-development/" },
      { name: "Pricing", href: "/pricing/" },
    ],
  },
  cta: {
    heading: "Is your Dutch site hard for Google to crawl or slow on mobile?",
    note: "Send your URL, platform and languages, and grant read access to Search Console if you can. You will get an itemised USD quote in about two working days, and nothing is billed before you approve it.",
  },
};

export default content;
