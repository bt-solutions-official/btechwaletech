import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const WEB_VITALS = "https://web.dev/articles/vitals";
const FTC_COMPARATIVE = "https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-14/section-14.15";
const GOOGLE_AI = "https://developers.google.com/search/docs/appearance/ai-features";

const content: FreelanceContent = {
  path: "/usa/saas-website-design/",
  crumb: "SaaS website design agency",
  updated: "2026-09-25",
  meta: {
    title: `SaaS Website Design Agency Work, from ${P.site}`,
    description: `SaaS website design agency alternative for US startups: positioning, pricing pages, signup flows, Webflow or Next.js builds. Marketing sites from ${P.site}.`,
    keywords: [
      "saas website design agency", "saas website design", "saas web design agency", "saas marketing website design",
      "b2b saas website design", "saas landing page design", "saas pricing page design", "saas website redesign",
      "webflow saas website", "next.js saas marketing site", "saas website design cost", "how much does a saas website cost",
      "best saas website design agency", "saas website design for startups", "product led growth website", "saas signup flow design",
      "saas comparison page", "saas alternatives page", "saas docs and changelog site", "saas website developer usa",
      "saas website design agency san francisco", "saas website design agency new york", "saas website design agency austin",
      "saas website design agency seattle", "saas website design agency boston", "hire saas web designer",
    ],
  },
  hero: {
    eyebrow: "Marketing sites for US software startups · built by three freelance developers",
    h1: "SaaS website design agency work, done by a small team that also writes the code",
    lede: `Hiring a SaaS website design agency usually means you want three things: a homepage that explains the product in one screen, a pricing page that does not scare buyers off, and a signup path that gets people into the product fast. BtechWaleTech is three freelance developers in India who design and build exactly that for US founders, in Webflow or Next.js, with docs, changelog and comparison pages planned from day one. Marketing sites start at ${P.site}; larger content builds with integration and comparison pages start at ${P.seoSite}. If you still need the product itself, see our <a href='/usa/saas-development-company/'>SaaS development</a> page.`,
    pills: ["Positioning workshop first", "Pricing page that converts", "Signup flow into your app", "Webflow or Next.js", "Docs and changelog", "Comparison pages done honestly", `Sites from ${P.site}`],
    origin: "Three freelance developers in India · WhatsApp replies 7 days a week · calls in US Eastern mornings",
  },
  facts: [
    ["Marketing site (up to 100 pages)", `From ${P.site} · 1–2 weeks`],
    ["Content-heavy site (299+ pages)", `From ${P.seoSite} · 3–5 weeks`],
    ["Custom signup, onboarding or app screens", `From ${P.software} · 6–12 weeks`],
    ["Stacks", "Webflow, Next.js, Astro, headless CMS"],
    ["Billing", "USD · wire, Wise, PayPal"],
    ["After launch", `5 months free fixes, then from ${P.care}`],
  ],
  stats: [
    { value: "3", label: "Freelance developers who design and ship" },
    { value: "2", label: "Working days to an itemized quote" },
    { value: "100", label: "Pages included in the starting marketing-site plan" },
    { value: "5", label: "Months of free fixes after launch" },
  ],
  answer: {
    heading: "What does a SaaS website design agency do, and what does it cost?",
    text: `A SaaS website design agency turns your positioning into a marketing site: homepage, product and feature pages, pricing, signup flow, docs, changelog and comparison pages, built on a stack your marketers can edit. With our freelance team, marketing sites start at ${P.site}, content-heavy builds at ${P.seoSite}, and custom signup or onboarding screens at ${P.software}. Every figure is a starting price.`,
    more: `Only need one high-converting page for a launch? Our <a href='/usa/landing-page-design-services/'>landing page design</a> page covers that. Weighing Webflow specifically? Read about hiring a <a href='/usa/webflow-developer/'>Webflow developer</a>.`,
  },
  snapshot: {
    caption: "SaaS marketing site builds with us, at a glance",
    rows: [
      { label: "Best fit", value: "Pre-seed to Series B software startups selling to US businesses" },
      { label: "First deliverable", value: "A one-page positioning brief and a sitemap you approve" },
      { label: "Core pages", value: "Home, product, pricing, signup, docs, changelog, comparisons, security" },
      { label: "Stack choice", value: "Webflow when marketers edit daily; Next.js or Astro when the site shares code with the app" },
      { label: "Who edits after launch", value: "Your team, through the CMS, with a short recorded walkthrough" },
      { label: "Starting prices", value: `Marketing site from ${P.site}; large content build from ${P.seoSite}` },
      { label: "Ownership", value: "Your domain, Webflow workspace or repo, analytics and design files" },
    ],
  },
  services: {
    eyebrow: "What we build for SaaS teams",
    heading: "The pieces a SaaS website design agency would normally quote, one by one",
    note: "Pick the parts you need. A founder with a strong product and weak site usually needs positioning, pricing and signup first; a scaling team usually needs comparison, integration and docs pages.",
    cards: [
      { name: "Positioning and homepage", note: "We interview you and two or three customers, write a one-screen value statement, then design the hero, proof section and primary call to action around it.", size: "lg" },
      { name: "Pricing page design", note: "Plan cards, a feature matrix that does not overwhelm, annual vs monthly toggle, FAQ block and a clear route to sales for enterprise buyers.", size: "lg" },
      { name: "Signup and onboarding flow", note: `Signup form, email verification screens and first-run onboarding wired into your app's auth provider. Custom screens from ${P.software}.`, href: "/usa/custom-software-development/", size: "md" },
      { name: "Webflow build", note: "Components, CMS collections for blog, changelog and customers, plus interactions that stay fast on mobile.", href: "/usa/webflow-developer/", size: "md" },
      { name: "Next.js or Astro build", note: "A code-first marketing site in your repo, sharing design tokens with the product and deployed to your own hosting.", href: "/usa/dedicated-react-developer/", size: "md" },
      { name: "Comparison and integration pages", note: `Templated pages for “X vs Y”, alternatives and each integration you support, built as a content system. Large builds from ${P.seoSite}.`, size: "md" },
      { name: "Docs and changelog", note: "A docs site with search and versioning, plus a changelog that doubles as release notes and an SEO asset.", size: "sm" },
      { name: "Technical SEO and care", note: `Schema, sitemaps, redirects and Core Web Vitals checks; monthly SEO from ${P.seo}, care plans from ${P.care}.`, href: "/usa/technical-seo-services/", size: "sm" },
    ],
  },
  comparison: {
    heading: "SaaS website design agency, solo marketplace designer or our freelance team",
    note: "Three honest routes for a US software startup. Each suits a different stage and budget.",
    columns: ["Aspect", "US SaaS website design agency", "Solo designer from a marketplace", "BtechWaleTech"],
    rows: [
      ["Strategy and positioning", "Usually a paid discovery phase", "Rarely included", "Short positioning brief included before design"],
      ["Design and code", "Separate designers and developers", "Design only, or template build", "The same three people design and build"],
      ["Brand-new illustration and motion", "Strong, often in-house", "Varies by person", "Limited; we use your assets or a licensed library"],
      ["Signup flow into the product", "Often handed to your engineers", "Out of scope", "Built and tested against your auth provider"],
      ["Time zone", "Your own", "Anywhere", "US Eastern mornings overlap IST evenings"],
      ["Who owns the files", "Check the contract", "Check the platform terms", "You own the workspace, repo and design files"],
      ["Starting price", "Quotes vary widely", "Quotes vary widely", `Marketing site from ${P.site}`],
      ["After launch", "Retainer", "Ad hoc", `5 months free fixes, then from ${P.care}`],
    ],
    fine: "If you need a full brand identity, custom 3D illustration or a large in-person workshop, a specialist brand studio will serve you better than we will.",
  },
  pricing: {
    heading: "SaaS website starting prices",
    note: `For SaaS work, most founders fall into one of three bands. A focused marketing site with homepage, product, pricing, about, security, blog and legal pages fits the static plan from ${P.site}. A content-driven site with hundreds of integration, template, comparison or use-case pages fits the SEO website plan from ${P.seoSite}. Custom signup, onboarding or in-app screens that talk to your backend sit in the custom web app plan from ${P.software}. Webflow, hosting and font licenses are billed to you directly by those vendors. Every number is a starting point; the itemized quote shows exactly what moves it.`,
  },
  guideLabel: "SaaS website design guide",
  guide: [
    {
      id: "what-it-delivers",
      heading: "What does a SaaS website design agency actually deliver?",
      paragraphs: [
        `A SaaS website design agency delivers a marketing site whose single job is to move a visitor from “what is this?” to a trial, demo or signup. That means strategy, page design, copy structure, a build your team can edit, and analytics that show which pages produce signups.`,
        `Brochure websites describe a business. SaaS marketing sites have to explain something the visitor cannot touch, often to two audiences at once: the person who will use the product and the person who will pay for it. So the deliverables look different. You get a homepage built around one clear claim, product pages organized by job-to-be-done rather than by menu item, a pricing page, a signup flow, a security or trust page for procurement, docs and a changelog, and usually a set of comparison and integration pages.`,
        `When you evaluate any SaaS website design agency or freelance team, ask for the deliverable list in writing. The items people forget are the ones that hurt later: a component library so new pages do not need a designer, redirects from your old URLs, event tracking on the signup button, Open Graph images for social sharing, and a written handover. We include all of those in our quotes by name, so you can compare like with like.`,
      ],
      list: [
        "Positioning brief and sitemap",
        "Homepage, product, pricing, security and about pages",
        "Signup, demo-request and contact routes",
        "Blog, changelog, docs and customer-story templates",
        "Comparison, alternatives and integration page templates",
        "Analytics events, redirects, schema and a handover document",
      ],
    },
    {
      id: "positioning",
      heading: "Positioning first: why SaaS website design starts with one sentence",
      paragraphs: [
        `Good SaaS website design starts with a positioning sentence, not a mood board: who the product is for, what it replaces, and the one outcome it improves. Every section of the homepage should support that sentence.`,
        `Most weak SaaS sites fail here. The hero says something like “the all-in-one platform for modern teams”, which could describe hundreds of products. Buyers skim for three seconds, cannot tell whether it fits, and leave. We fix that with a short working session: you tell us about your best-fit customers, the tool or spreadsheet they used before, and the moment they realized your product was better. If you can, we also listen to two or three recorded sales calls or read support tickets, because customers describe the product better than founders do.`,
        `From that we write a one-page brief with the category, the audience, the alternative you replace, three proof points and the primary call to action. You approve it before we open a design file. That brief then drives everything else: the homepage headline, the order of feature sections, what goes on the pricing page and which comparison pages are worth building. We are developers who design, not copywriters with a brand practice, so for tone and final wording we will draft and you edit, or you bring your own writer and we structure the pages around their copy.`,
      ],
    },
    {
      id: "pricing-page",
      heading: "How should a SaaS pricing page be designed?",
      paragraphs: [
        `A SaaS pricing page should let a buyer find their plan in under a minute: two to four plans, the metric you charge on stated plainly, a recommended plan highlighted, and a short list of what actually differs between tiers, with the full feature matrix below for people who want detail.`,
        `The pricing page is usually the second most visited page on a SaaS site, and it is where procurement-minded buyers make up their minds. Common problems we see are a feature matrix with sixty rows that all say “yes”, a value metric nobody understands (“credits”, “units”), and an enterprise tier with no explanation beyond “contact us”. We design for three kinds of reader: the self-serve buyer who wants to start now, the team lead who needs to justify a plan to a manager, and the enterprise buyer looking for SSO, audit logs, data residency and invoicing terms.`,
      ],
      subs: [
        { heading: "Plan cards", text: "Name, who it is for, the price or “talk to us”, the three differences that matter, and one button. Nothing more." },
        { heading: "Toggle and currency", text: "Monthly vs annual with the saving stated in words. We show prices in USD unless you sell in other currencies." },
        { heading: "Feature matrix", text: "Grouped by job, collapsible on mobile, and only rows that actually differ between plans." },
        { heading: "Pricing FAQ", text: "Trials, seat changes, cancellation, refunds and security questions, written by you and structured by us so search engines can read them." },
      ],
      after: [
        `If your pricing changes often, we keep the plans in a CMS collection or a single config file so a price change is one edit, not a redesign. Read more about <a href='/usa/landing-page-design-services/'>landing page design</a> for campaign-specific pricing pages.`,
      ],
    },
    {
      id: "product-led-signup",
      heading: "Product-led signup flows: the part most SaaS website design agencies hand off",
      paragraphs: [
        `A product-led signup flow takes a visitor from the “Start free” button to their first useful moment in the product with as few screens as possible. The marketing site owns the first half of that path, and it is where many redesigns quietly lose signups.`,
        `Plenty of SaaS website design agency projects end at the button. The designer hands a link to your engineers, and the signup form, email verification and first-run screens keep the old look, the old copy and the old bugs. Because we write application code too, we can design and build that stretch: signup with email or Google or Microsoft sign-in through your existing auth provider, clear password rules, a verification screen that tells people what to do next, and a short onboarding sequence that asks only for what the product needs.`,
        `We also connect the pieces that growth teams rely on. UTM parameters and the referring page are carried into the signup event, so your analytics can tell which comparison page or blog post produced a paying account. Error states are designed, not left to default browser messages. And we test the whole flow on a slow phone connection, because a founder on office Wi-Fi rarely sees the delays a real visitor sees. When the work reaches into your product's backend, it moves into the custom web app plan from ${P.software}, and we agree the boundary with your engineering lead in writing before starting.`,
      ],
    },
    {
      id: "webflow-vs-nextjs",
      heading: "Webflow vs Next.js for a SaaS marketing site: which should you pick?",
      paragraphs: [
        `Choose Webflow when your marketing team publishes pages every week and has no engineer to spare; choose Next.js (or Astro) when the marketing site needs to share components, auth or data with the product, or when you want everything in one repo with code review.`,
        `Both are good choices, and a capable SaaS website design agency should be comfortable with either. Webflow gives marketers a visual editor, CMS collections and hosting in one subscription. The trade-offs are subscription cost that grows with CMS items and locales, less control over the build output, and occasional friction when you want logic the platform does not support. Next.js gives engineers full control, easy reuse of your product's design system, and hosting wherever you like. The trade-off is that non-technical teammates need a headless CMS to edit content, and every structural change goes through a developer.`,
        `A third path is often right for early-stage companies: Astro or Next.js with a lightweight headless CMS, deployed to your own hosting account. It is fast by default and cheap to run. We compare the three in the table below on this page. Whatever you choose, the workspace, repo and hosting account are created in your company's name, and we are invited as collaborators. If you already run Webflow and just need help with it, the <a href='/usa/webflow-developer/'>Webflow developer</a> page is a better starting point.`,
      ],
    },
    {
      id: "docs-changelog",
      heading: "Where should docs and a changelog live on a SaaS website?",
      paragraphs: [
        `Docs usually live on a subdomain or a /docs path built with a docs framework, and the changelog lives on the main marketing site as a CMS collection. Both should share the same navigation, fonts and colors so users never feel they have left your product.`,
        `Documentation is a sales asset for technical buyers. Developers evaluating an API product read the quick-start guide before they read the homepage. For docs we typically use a static docs framework with search, code blocks with copy buttons, versioning if your API has versions, and an “edit this page” link to your repo so engineers can fix typos without a ticket. If you already use a hosted docs platform, we theme it to match the new site instead of migrating.`,
        `The changelog is underrated. A dated, well-titled entry for every release shows buyers the product is alive, gives sales something to send, and earns search traffic for feature names. We build it as a CMS collection with categories (new, improved, fixed), an RSS feed and optional email subscription through the tool you already use. Keeping the path choice clean matters for SEO: a subfolder on the main domain usually consolidates authority better than a separate domain, although subdomains work fine when docs need a different stack. We explain the trade-off for your setup rather than applying one rule to every project.`,
      ],
    },
    {
      id: "comparison-pages",
      heading: "Competitor comparison and alternatives pages, done honestly",
      paragraphs: [
        `Comparison pages (“your product vs a named rival”) and alternatives pages (“alternatives to a named tool”) capture buyers who are already shopping. They work when they are factual, dated and fair, and they backfire when they read as attack ads.`,
        `In the US, truthful comparative advertising is lawful and even encouraged: the FTC's <a href='${FTC_COMPARATIVE}' rel='noopener'>policy statement on comparative advertising</a> says it encourages naming or referring to competitors, provided the comparison is clear and not deceptive. That still leaves the claims themselves to you and your counsel. What we build is the system: a page template with a summary table, “who each product suits best”, a dated “last checked” line, sources for each factual claim, and a clear section on where the other product is the better choice. That last part feels counterintuitive, but buyers trust pages that admit trade-offs.`,
        `Structurally we create comparison, alternatives and integration pages as CMS collections, so your team can add a new one by filling fields rather than asking a designer. For large sets, for example one page per integration across a hundred integrations, that becomes a content system that fits the SEO website plan from ${P.seoSite}. Each page still needs genuinely different content: templated shells with only the name swapped are thin content, and search engines treat them that way.`,
      ],
    },
    {
      id: "cost",
      heading: "How much does a SaaS website design agency cost?",
      paragraphs: [
        `Quotes from a SaaS website design agency vary widely because scope varies widely; with our freelance team, a marketing site starts at ${P.site}, a large content build starts at ${P.seoSite}, and custom signup or onboarding work starts at ${P.software}.`,
        `Rather than quote other providers' rates, it is more useful to know what moves any quote. The biggest drivers in SaaS website design are: how much strategy and copy work is included; whether the design is fully custom or adapted from a component system; the number of unique page templates (not the number of pages); custom illustration, motion and 3D; integrations such as your CRM, product analytics and auth provider; migration of an existing blog with redirects; and the size of the comparison, integration or use-case page system.`,
        `A practical way to control cost is to fund the pages that sell first. For a seed-stage product, homepage, one product page, pricing, security, signup and a blog template usually carry the load. Comparison and integration pages come next, once you know which competitors show up in sales calls. For a general view of what drives website budgets in the US, our <a href='/usa/small-business-website-cost/'>website cost</a> guide covers the non-SaaS baseline, and the table below breaks SaaS scopes into bands.`,
      ],
    },
    {
      id: "choosing",
      heading: "How to choose a SaaS website design agency or freelance team",
      paragraphs: [
        `Choose the team that asks the most about your customers and your signup data before showing you a design. Portfolio polish matters less than whether they can explain how the new site will produce more qualified signups and how you will measure it.`,
        `Questions worth asking any SaaS website design agency or freelancer: Who writes the headline copy? Which stack do you recommend for us and why? Who builds the signup flow, and how do you test it? What happens to our current URLs? Which analytics events will exist on launch day? Who owns the Webflow workspace or repo? What does editing a pricing plan look like after handover? How many rounds of revision are included, and what counts as a new request?`,
      ],
      list: [
        "Ask to see a live SaaS site they built, then run it through PageSpeed Insights yourself",
        "Ask how they would structure your pricing page before they are paid",
        "Check that design and development are handled by people who talk to each other",
        "Confirm in writing that you own design files, code and accounts",
        "Make sure someone is available during your working hours for launch week",
      ],
      after: [
        `Our honest limits: we are three people, so we do not run large in-person brand workshops, produce custom 3D animation or staff a twenty-person redesign. If your project needs those, an established studio is a better fit. If it needs a fast, well-built site with a working signup path, we are a strong option. See how we compare with offshore teams on the <a href='/outsource-web-development-to-india/'>outsourcing web development to India</a> page.`,
      ],
    },
    {
      id: "timeline",
      heading: "How long does a SaaS website redesign take?",
      paragraphs: [
        `A focused SaaS marketing site takes about 1–2 weeks of build time once positioning and copy are approved; a content-heavy site with hundreds of pages takes 3–5 weeks; custom signup and onboarding screens add 6–12 weeks depending on how much backend work is involved.`,
        `The calendar is usually set by decisions, not code. Approving positioning, gathering customer logos and permission to show them, writing pricing FAQs and getting legal sign-off on comparison claims take longer than building pages. So we plan the project in overlapping tracks. While you gather assets, we design the component system; while you review copy, we build templates; while your counsel reviews comparison claims, we finish the integration pages that need no legal review.`,
        `Typical sequence: positioning brief and sitemap in the first days; homepage and pricing design next, because they set the visual language; component build and CMS setup; remaining pages; migration and redirects; analytics events and QA on real devices; launch with a freeze on content edits for a day so redirects can be checked. If you are launching around a funding announcement or a conference, tell us the date up front and we will scope what is realistic rather than promising everything by then.`,
      ],
    },
    {
      id: "seo-ai",
      heading: "SEO and AI search visibility for SaaS websites",
      paragraphs: [
        `SaaS websites earn search traffic from three places: product and category terms, comparison and alternatives queries, and problem-led content. The site structure and speed decide whether that content can rank at all, which is why SEO belongs in the design phase.`,
        `On the technical side we build to Google's Core Web Vitals. According to <a href='${WEB_VITALS}' rel='noopener'>web.dev</a>, a good experience means Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads. Heavy hero videos, chat widgets and tag managers loaded before the headline are the usual reasons SaaS sites miss those numbers, so we load them after the main content. We add clean URLs, a sitemap, canonical tags, Organization and SoftwareApplication structured data where it fits, and redirects for every old URL.`,
        `AI search is the newer question. Google's own <a href='${GOOGLE_AI}' rel='noopener'>guidance on AI features</a> says there are no additional requirements or special markup to appear in AI Overviews or AI Mode; the same people-first content and technical basics apply. In practice, answer engines quote pages with plain definitions, clear comparison tables and specific facts, which is how we structure pricing FAQs, comparison pages and docs. Nobody can guarantee rankings or AI citations, and we will not claim to. For ongoing work after launch, see <a href='/usa/technical-seo-services/'>technical SEO services</a>.`,
      ],
    },
    {
      id: "analytics",
      heading: "Measuring a SaaS website: events, funnels and experiments",
      paragraphs: [
        `Measure the site by signups and qualified demo requests per visitor, not by traffic. That needs a small, named set of analytics events on launch day and a place where marketing can see them.`,
        `We agree an event plan before building: page views, clicks on primary calls to action, pricing toggle changes, demo form starts and submissions, signup started, signup completed, and verification completed. Each event carries the page and campaign parameters so you can see that, for example, the integration pages bring fewer visitors than the blog but more completed signups. We connect the events to the analytics and product-analytics tools you already pay for, and to your CRM for demo requests, rather than adding new tools.`,
        `For experiments, the honest advice for most early-stage SaaS sites is patience. Without meaningful weekly traffic, an A/B test on button color will not reach a reliable answer. Bigger swings, such as a new headline built on a different positioning sentence or a pricing page with fewer plans, are easier to read. We set up the testing hooks, but we will also tell you when your traffic is too low for a test to mean anything and a simple before-and-after comparison is the better tool.`,
      ],
    },
    {
      id: "ownership",
      heading: "Who owns the site after a SaaS website design project?",
      paragraphs: [
        `You should own everything: domain, DNS, Webflow workspace or code repository, hosting, CMS, analytics properties, font and image licenses, and the design source files. We work inside accounts your company creates and leave with nothing that you need.`,
        `Ownership problems usually appear a year later, when a startup wants to switch providers and discovers that the Webflow site sits in the old contractor's workspace, or the domain was registered on a personal card. We avoid that from the first day by asking you to create the accounts and invite us. Design files live in your team's design tool. Code lives in your GitHub or GitLab organization with a readme that explains how to run it locally and deploy it.`,
        `The handover pack includes a recorded walkthrough of the CMS, a list of every third-party service with its owner and billing contact, the analytics event plan, the redirect map and notes on anything we would do differently with more time. After launch you get five months of free fixes for anything we built that does not work as agreed; after that, care plans start at ${P.care}. Contract and IP wording goes into your written quote and our <a href='/terms/'>terms</a>, which your counsel can review before you sign.`,
      ],
    },
    {
      id: "red-flags",
      heading: "Red flags when hiring a SaaS website design agency",
      paragraphs: [
        `The clearest red flag is a proposal that talks about aesthetics and animations but never mentions your signup rate, your pricing page or who owns the accounts. A SaaS marketing site is a funnel; a pitch that ignores the funnel is selling decoration.`,
      ],
      list: [
        "The provider wants the Webflow site or domain in its own account “for simplicity”",
        "Unlimited revisions promised without a defined scope, which usually ends in a stalled project",
        "No plan for redirects from your current URLs, which can wipe out existing search traffic",
        "A heavy animation library on every page, with no speed budget",
        "Comparison pages that make unsourced claims about competitors",
        "Guaranteed rankings or “guaranteed AI citations”, which nobody can honestly offer",
        "The person who sold the project disappears once work starts",
      ],
      after: [
        `On the other side, do not dismiss a team just because it is small or remote. What matters is that you can speak to the people doing the work, see progress every week on a staging link, and read a quote that lists each deliverable. That is how we run every SaaS website design project, whether the client is a two-person startup or a funded scale-up.`,
      ],
    },
    {
      id: "working-from-us",
      heading: "Working with a SaaS website design team in India from the US",
      paragraphs: [
        `It works best as a morning routine for you: a short call in US Eastern mornings, which is evening in India, then you wake up the next day to a staging link with the changes you discussed. Pacific-time founders usually take an early call once a week and use written updates the rest of the time.`,
        `Payments are in USD by bank wire, Wise or PayPal, against an itemized quote you approve in writing; nothing is billed before that approval. Invoices come from India and we have no US office or entity, so treat us as an overseas contractor and ask your accountant about any paperwork your company needs. Contracts, NDAs and IP assignment are handled in the written quote and our terms; if your company has its own contractor agreement, send it and we will review it with you.`,
        `The first two weeks look like this. Days one to three: positioning session, review of your current analytics and signup data, and a sitemap. Days four to seven: homepage and pricing designs, shared in your design tool for comments. Week two: component build in Webflow or your repo, CMS structure, and the first staging link. Every Friday you get a written summary of what shipped, what is blocked, and what we need from you. Communication runs on WhatsApp, email or your team's Slack, whichever you prefer.`,
      ],
    },
    {
      id: "worked-example",
      heading: "Worked example: a seed-stage B2B SaaS in Austin (hypothetical)",
      paragraphs: [
        `Say a six-person Austin startup sells scheduling software to physical therapy clinics. It has a Webflow template site, a pricing page with five plans and sixty feature rows, and signups that stall at email verification. Here is how a project might be shaped; this is an illustration, not a past client.`,
        `Week one: we listen to three sales calls and find that clinic owners compare the product with spreadsheets and with the scheduling module inside their EHR. The positioning sentence becomes “scheduling built for PT clinics that fills cancelled slots automatically”. The homepage is rebuilt around that claim, with a proof section showing the waitlist feature. Pricing drops to three plans charged per location, with a short matrix of the eight rows that actually differ.`,
        `Week two: we rebuild signup with Google sign-in through the startup's existing auth provider, rewrite the verification screen, and add a two-question onboarding step. Analytics events track each stage. Later, two comparison pages are added (against spreadsheets and against EHR scheduling modules), plus one page per EHR integration. The marketing site fits the static plan from ${P.site}; the signup rebuild is quoted separately under custom work from ${P.software}. Results would be measured on completed signups per pricing-page visitor, compared over the same weeks before and after launch.`,
      ],
    },
    {
      id: "checklist",
      heading: "SaaS website design launch checklist",
      paragraphs: [
        `Before you switch DNS on a new SaaS site, run through this list with whoever built it. Each item is quick to check and expensive to discover a month later.`,
      ],
      list: [
        "Positioning sentence visible in the homepage hero without scrolling on mobile",
        "Pricing page tested with a real buyer: can they pick a plan in a minute?",
        "Signup completed end to end on iPhone and Android, on mobile data",
        "Every old URL redirected; no redirect chains",
        "Analytics events firing for pricing, demo and signup steps",
        "Core Web Vitals checked on the homepage, pricing and a blog post",
        "Security page, privacy policy and terms linked in the footer",
        "Comparison pages dated, sourced and reviewed by your counsel",
        "Accessibility basics: keyboard navigation, color contrast, form labels, alt text",
        "Accounts, files and credentials listed in the handover document",
      ],
      after: [
        `Accessibility deserves more than one line if you sell to enterprise or public-sector buyers who ask for conformance reports; our <a href='/usa/website-accessibility-remediation/'>accessibility remediation</a> page explains how we test and fix sites against WCAG.`,
      ],
    },
  ],
  tables: [
    {
      id: "saas-scope-cost",
      eyebrow: "Budget",
      heading: "SaaS website scopes and starting prices",
      note: "Starting prices from our plans. Third-party subscriptions (Webflow, hosting, CMS, fonts) are paid by you directly.",
      columns: ["Scope", "Typical pages", "Plan", "Starts at", "Build time"],
      rows: [
        ["Launch site for a new product", "Home, product, pricing, signup link, legal", "Static", `${P.site}`, "1–2 weeks"],
        ["Seed-stage marketing site", "Plus security, about, blog, changelog, customer stories", "Static", `${P.site}`, "1–2 weeks"],
        ["Redesign with blog migration", "Existing posts moved, redirects mapped", "Static or SEO website", `${P.site}`, "2–4 weeks"],
        ["Integration and comparison system", "Hundreds of templated but distinct pages", "SEO website", `${P.seoSite}`, "3–5 weeks"],
        ["Custom signup and onboarding", "Auth, verification, first-run screens", "Custom web app", `${P.software}`, "6–12 weeks"],
        ["Ongoing SEO and content", "Monthly technical and content work", "Monthly SEO", `${P.seo}`, "Ongoing"],
      ],
      hideSm: [1],
    },
    {
      id: "stack-compare",
      eyebrow: "Stack",
      heading: "Webflow vs Next.js vs Astro for SaaS marketing sites",
      note: "There is no single right answer; this is how we match the stack to your team.",
      columns: ["Question", "Webflow", "Next.js", "Astro + headless CMS"],
      rows: [
        ["Who edits pages day to day", "Marketers, visually", "Developers, or marketers via a CMS", "Marketers via the CMS"],
        ["Shares components with the product", "No", "Yes, if the product uses React", "Partly, can use React components"],
        ["Hosting", "Included in the Webflow plan", "Your cloud or a frontend host", "Any static host or CDN"],
        ["Speed out of the box", "Good with discipline", "Good, depends on setup", "Very good for content pages"],
        ["Running cost drivers", "Site plan, CMS items, locales", "Hosting usage", "CMS plan and hosting"],
        ["Best for", "Marketing-led teams shipping weekly", "Engineering-led teams, app-like pages", "Content-heavy, speed-first sites"],
      ],
    },
    {
      id: "pages-by-stage",
      eyebrow: "Priorities",
      heading: "Which SaaS pages to build at each stage",
      note: "A rough order of priority. Build what your sales conversations ask for first.",
      columns: ["Stage", "Build first", "Add next", "Can wait"],
      rows: [
        ["Pre-launch", "Homepage, waitlist or signup, one product page", "Pricing (even if “free beta”)", "Docs, comparisons"],
        ["Seed", "Pricing, security page, signup flow", "Changelog, 2–3 comparison pages", "Integration directory"],
        ["Series A", "Use-case pages, customer stories", "Integration pages, docs overhaul", "Localized versions"],
        ["Scaling", "Comparison and alternatives system", "Enterprise and procurement pages", "Microsites for campaigns"],
        ["API-first product", "Docs quick-start, API reference", "Pricing with usage examples", "Heavy brand pages"],
      ],
    },
  ],
  areas: {
    eyebrow: "SaaS teams across the US",
    heading: "Where US software startups look for SaaS website design",
    note: "We work remotely with founders anywhere in the country. These metros have large clusters of software companies that commission marketing sites, pricing pages and docs.",
    cards: [
      { name: "San Francisco Bay Area, California", note: "The densest cluster of venture-backed software startups, where founders often need a credible site before a fundraise and a pricing page that holds up to enterprise buyers." },
      { name: "New York City, New York", note: "Fintech, media and B2B software teams here sell to demanding enterprise buyers, so security pages, procurement details and comparison content carry real weight." },
      { name: "Seattle, Washington", note: "Cloud and developer-tool startups often need docs, API quick-starts and changelogs that engineers trust as much as the marketing pages." },
      { name: "Austin, Texas", note: "A growing mix of B2B SaaS, health-tech and creator tools, many at seed stage and looking for a fast marketing site that can grow with them." },
      { name: "Boston, Massachusetts", note: "Health-tech, edtech and data software companies here often need careful trust pages and clear explanations of technical products for non-technical buyers." },
      { name: "Denver and Boulder, Colorado", note: "Startups in these metros frequently run lean marketing teams, which makes an easily edited CMS and templated landing pages especially useful." },
      { name: "Salt Lake City and Lehi, Utah", note: "The software corridor here includes many sales-led B2B companies that need demo-request flows connected cleanly to their CRM." },
      { name: "Los Angeles, California", note: "Creator economy, commerce and media software teams need sites with strong visuals that still load quickly on mobile for consumer-facing audiences." },
      { name: "Atlanta, Georgia", note: "Fintech, logistics and B2B software firms here often sell into established industries, so comparison pages against legacy tools are useful." },
      { name: "Chicago, Illinois", note: "Vertical SaaS for logistics, insurance and professional services is common, with buyers who read pricing and security pages carefully before a demo." },
      { name: "Raleigh-Durham, North Carolina", note: "Research Triangle software and life-science tech companies often need docs and technical explainers alongside their marketing pages." },
      { name: "Washington DC and Northern Virginia", note: "GovTech and security software teams need accessible sites and clear compliance pages for public-sector buyers who review them closely." },
      { name: "Miami, Florida", note: "Newer fintech and remote-first startups here often need a fast launch site and a signup flow before their first funding announcement." },
      { name: "Minneapolis, Minnesota", note: "Health, retail and B2B software companies here commonly need integration pages that show how the product connects with the tools buyers already use." },
    ],
  },
  process: {
    heading: "How a SaaS website design project runs with us",
    steps: [
      ["Share your site and numbers", "Send your current site, your pricing and whatever signup data you have. We reply on WhatsApp with first observations and a few questions, often the same day."],
      ["Positioning brief", "A short call in your morning, then a one-page brief covering audience, the alternative you replace, proof points and primary action. You approve it before design begins."],
      ["Itemized quote", "Within about two working days you get a USD quote listing every page template, integration and deliverable. Nothing is billed until you approve it in writing."],
      ["Design the homepage and pricing", "These two set the visual system. You comment in your design tool; we revise until the direction is agreed, then design the remaining templates from the same components."],
      ["Build, wire and test", "We build in Webflow or your repo, connect analytics events and the signup flow, migrate content and redirects, and test on real phones and slow connections."],
      ["Launch and hand over", "DNS switch, redirect checks, a recorded CMS walkthrough and a handover document. Free fixes run for five months after launch, then optional care plans."],
    ],
  },
  faqHeading: "SaaS website design agency: questions US founders ask",
  faqs: [
    { question: "What does a SaaS website design agency do?", answer: "It plans, designs and builds the marketing site for a software product: homepage, product and feature pages, pricing, signup or demo routes, docs, changelog, security and comparison pages. The better ones also handle positioning, analytics events and SEO structure, because the site's job is to produce qualified signups, not just look polished. Our freelance team covers the same ground with three developers who design and code." },
    { question: "How much does a SaaS website design agency cost?", answer: `Quotes vary widely with scope, strategy work, custom illustration and the number of page templates. With our team, a SaaS marketing site starts at ${P.site}, a content-heavy build with hundreds of integration or comparison pages starts at ${P.seoSite}, and custom signup or onboarding screens start at ${P.software}. Each figure is a starting price, and the itemized quote shows what moves it.` },
    { question: "How long does a SaaS website design agency take to build a site?", answer: "Once positioning and copy are approved, a focused marketing site takes about one to two weeks to build, and a large content site takes three to five weeks. Custom signup and onboarding work runs six to twelve weeks. Most delays come from approvals, assets and legal review of comparison claims, so we plan those tasks in parallel with the build." },
    { question: "Should my SaaS website be built in Webflow or Next.js?", answer: "Pick Webflow when marketers need to publish and edit pages without developers. Pick Next.js when the marketing site should share components or authentication with your React product, or when you want all code reviewed in one repo. For content-heavy sites where speed matters most, Astro with a headless CMS is a strong third option. We build all three." },
    { question: "Is a freelance team a good alternative to a SaaS website design agency?", answer: "It can be, when the team both designs and builds, communicates during your working hours and puts ownership in writing. A small team is usually faster to start and easier to reach. It is a weaker fit when you need a full brand identity, custom motion design or a large team working in parallel, which is where established studios earn their fees." },
    { question: "What pages does a SaaS marketing website need?", answer: "At minimum: a homepage built on one clear positioning sentence, at least one product page, pricing, a signup or demo route, a security or trust page, privacy policy and terms. As you grow, add a changelog, customer stories, docs, integration pages and comparison or alternatives pages. Build the ones your sales conversations ask for first." },
    { question: "How do you design a SaaS pricing page that converts?", answer: "Keep it to two to four plans, name who each plan is for, state the value metric plainly, highlight a recommended plan and show only the differences that matter in the plan cards. Put the full feature matrix below, add a pricing FAQ covering trials, cancellation and security, and give enterprise buyers a clear route to talk to sales." },
    { question: "Can you build our signup and onboarding flow too?", answer: `Yes. Because we write application code, we can build the signup form, social sign-in through your existing auth provider, email verification screens and first-run onboarding, then track each step in analytics. Work that touches your product's backend is quoted under the custom web app plan, which starts at ${P.software}, with the boundary agreed with your engineering lead in writing.` },
    { question: "Are competitor comparison pages legal in the US?", answer: "The FTC's policy statement on comparative advertising says it encourages naming or referring to competitors, as long as comparisons are clear and not deceptive. So truthful, sourced and dated comparisons are generally fine, but the specific claims are your company's responsibility. We build the page system and structure; have your own counsel review the claims before publishing." },
    { question: "Where should SaaS documentation live?", answer: "Most teams host docs on a /docs path or a docs subdomain, built with a static docs framework that supports search, code samples and versioning. A subfolder keeps search authority on the main domain; a subdomain is fine when docs need a different stack. Either way, docs should share navigation and styling with the marketing site so users never feel lost." },
    { question: "Do we own the files after a SaaS website design agency project?", answer: "Yes. We ask you to create the domain, Webflow workspace or code repository, hosting, CMS and analytics accounts in your company's name, then invite us as collaborators. Design files live in your design tool. At handover you receive a list of every service, its owner and billing contact, plus a recorded walkthrough, so nothing depends on us afterward." },
    { question: "Will a new SaaS website hurt our search rankings?", answer: "It should not, if every old URL is redirected to its closest new page, content that ranks is kept or improved, and the new site is at least as fast. Rankings can fluctuate for a few weeks after any migration. We map redirects before launch, check them on launch day and monitor Search Console afterward. Nobody can honestly guarantee rankings." },
    { question: "How do SaaS websites get cited in AI answers?", answer: "Google says there are no special requirements or markup needed to appear in AI Overviews or AI Mode, so the basics apply: fast, crawlable pages and clear, people-first content. In practice, answer engines tend to quote short definitions, comparison tables and specific facts. We structure pricing FAQs, docs and comparison pages that way, without promising citations." },
    { question: "Can you redesign our existing SaaS website instead of starting over?", answer: `Often that is the better choice. If your stack is sound, we can rework positioning, the homepage, pricing and signup flow while keeping the CMS and URLs intact. A redesign on the existing platform usually fits the static plan from ${P.site}. If the old stack blocks you, we explain why and quote a rebuild so you can compare the two options.` },
    { question: "How do we work with a team in India from the US?", answer: "Most US founders take a short call in their morning, which is evening in India, and review a staging link the next day. Pacific-time teams often do one early call a week plus written updates. We reply on WhatsApp seven days a week, send a Friday progress summary, and can join your Slack if you prefer." },
    { question: "How do payments and contracts work for US clients?", answer: "You receive an itemized quote in USD and nothing is billed until you approve it in writing. Payment is by bank wire, Wise or PayPal, and invoices come from India. IP and confidentiality terms are set out in the written quote and our published terms; if your company uses its own contractor agreement or NDA, send it over and we will review it together." },
    { question: "Do you write the copy for our SaaS website?", answer: "We draft structure and working copy from the positioning brief, and we are good at clear, specific product explanations. Final voice and messaging decisions belong to you. Many founders edit our drafts; others bring a copywriter, and we design the pages around their words. We do not claim to replace a dedicated brand copywriter." },
    { question: "What should a SaaS website design agency provide after launch?", answer: `You get five months of free fixes for anything we built that does not work as agreed. After that, optional care plans start at ${P.care} for updates, new pages and technical checks, and monthly SEO starts at ${P.seo}. Your team can also run the site alone through the CMS, since all accounts are yours.` },
    { question: "Can you build integration pages for every tool we connect to?", answer: `Yes. We create an integration template and a CMS collection, so each page shares a layout but carries its own description, setup steps, screenshots and use cases. Large sets with hundreds of distinct pages fit the SEO website plan from ${P.seoSite}. Pages must have genuinely different content; name-swapped shells tend to be treated as thin content.` },
    { question: "Is our SaaS website accessible, and does it matter?", answer: "It matters for users and increasingly for enterprise and public-sector buyers, who may ask about conformance with WCAG. We build with semantic HTML, keyboard navigation, visible focus, sufficient color contrast, labelled forms and alt text, then test with automated tools and manual keyboard and screen reader checks. For formal audits and fixes on an existing site, see our remediation page." },
    { question: "Can you also build the SaaS product itself?", answer: `Yes, as a separate project. Our custom web app work starts at ${P.software} and typically takes six to twelve weeks for a first version, depending on scope. Many founders start with the marketing site and signup flow, then move product work to us once they have seen how we communicate and deliver. See our SaaS development page for that side.` },
  ],
  related: {
    heading: "Related pages for US software teams",
    links: [
      { name: "SaaS development company", href: "/usa/saas-development-company/" },
      { name: "MVP development for startups", href: "/usa/mvp-development-for-startups/" },
      { name: "Webflow developer", href: "/usa/webflow-developer/" },
      { name: "Landing page design services", href: "/usa/landing-page-design-services/" },
      { name: "Website redesign services", href: "/usa/website-redesign-services/" },
      { name: "Technical SEO services", href: "/usa/technical-seo-services/" },
      { name: "Dedicated React developer", href: "/usa/dedicated-react-developer/" },
      { name: "Website accessibility remediation", href: "/usa/website-accessibility-remediation/" },
      { name: "Telehealth app development", href: "/usa/telehealth-app-development/" },
      { name: "CCPA compliant website", href: "/usa/ccpa-compliant-website/" },
      { name: "All services for US businesses", href: "/usa/" },
      { name: "Outsource web development to India", href: "/outsource-web-development-to-india/" },
      { name: "Pricing", href: "/pricing/" },
    ],
  },
  cta: {
    heading: "Send us your SaaS site and your signup numbers",
    note: "Share your current website, pricing page and whatever signup data you have on WhatsApp. We reply with first observations, then an itemized USD quote in about two working days.",
  },
};

export default content;
