import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const ACM = `<a href='https://www.acm.nl/nl/toegankelijkheid/toegankelijkheid-van-e-handelsdiensten-en-elektronische-communicatiediensten' rel='noopener'>ACM's guidance on e-commerce accessibility</a>`;
const LAW = `<a href='https://wetten.overheid.nl/BWBR0049571/2025-06-28/0' rel='noopener'>Implementatiewet toegankelijkheidsvoorschriften producten en diensten</a>`;
const W3C = `<a href='https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/' rel='noopener'>W3C's summary of what is new in WCAG 2.2</a>`;

const content: FreelanceContent = {
  path: "/netherlands/european-accessibility-act-website-compliance/",
  crumb: "European Accessibility Act website compliance",
  updated: "2026-09-25",
  meta: {
    title: "European Accessibility Act Website Compliance Fixes",
    description: `European Accessibility Act website compliance for Dutch webshops: WCAG 2.1 AA audit, checkout fixes, accessibility statement. Rebuilds from ${P.shop}.`,
    keywords: [
      "european accessibility act website compliance", "european accessibility act netherlands", "eaa website compliance",
      "eaa compliance webshop", "european accessibility act webshop", "does the european accessibility act apply to my website",
      "european accessibility act microenterprise exemption", "wcag 2.1 aa audit netherlands", "en 301 549 website audit",
      "toegankelijkheidsverklaring webshop", "toegankelijkheid webshop acm", "implementatiewet toegankelijkheidsvoorschriften",
      "accessibility statement european accessibility act", "accessible checkout ideal", "eaa compliance cost",
      "how much does eaa compliance cost", "wcag 2.2 webshop", "accessibility overlay eaa", "shopify european accessibility act",
      "woocommerce accessibility netherlands", "website accessibility amsterdam", "website accessibility rotterdam",
      "website accessibility utrecht", "accessibility audit the hague", "eaa remediation developer", "eaa fix or rebuild",
      "european accessibility act deadline 28 june 2025",
    ],
  },
  hero: {
    eyebrow: "EAA compliance for Dutch webshops and online services",
    h1: "European Accessibility Act website compliance for Dutch webshops: find out if it applies, then fix it properly",
    lede: `European Accessibility Act website compliance became a live question for Dutch webshops on 28 June 2025, when the ${LAW} took effect and ACM began supervising e-commerce accessibility. BtechWaleTech is three freelance developers in India who test your site against WCAG 2.1 AA, fix checkout, forms and templates in your own code, and help you draft the accessibility statement. Where a rebuild is cheaper than patching, an accessible webshop starts from ${P.shop}; see how it ties in with <a href='/netherlands/gdpr-compliant-website-development/'>GDPR-compliant website development</a>.`,
    pills: ["Scope check: in or exempt?", "WCAG 2.1 AA / EN 301 549 testing", "Keyboard and screen-reader passes", "Checkout and form repair", "Accessibility statement draft", "Fix-vs-rebuild costing", "No overlay widgets"],
    origin: "Three freelance developers in India · fixes made in your code · replies on WhatsApp, 7 days a week",
  },
  facts: [
    ["Applies in NL since", "28 June 2025"],
    ["Supervisor for webshops", "ACM (Autoriteit Consument & Markt)"],
    ["Test benchmark", "WCAG 2.1 AA, via EN 301 549"],
    ["Accessible webshop rebuild from", `${P.shop}, 4–8 weeks`],
    ["Upkeep after launch", `5 months free, then from ${P.care}`],
    ["Quote turnaround", "About 2 working days, in USD"],
  ],
  stats: [
    { value: "4", label: "WCAG principles every page is tested against" },
    { value: "2", label: "Working days to an itemised remediation quote" },
    { value: "5", label: "Months of free maintenance after a rebuild goes live" },
    { value: "0", label: "Overlay widgets installed as a shortcut" },
  ],
  answer: {
    heading: "What does European Accessibility Act website compliance require from a Dutch webshop?",
    text: `If you sell to consumers online and are not a microenterprise, your webshop and app must meet WCAG 2.1 level AA through EN 301 549, carry an easy-to-find accessibility statement, and be reported to ACM when serious problems stay unfixed. BtechWaleTech audits and repairs existing sites; accessible rebuilds start from ${P.shop}, static sites from ${P.site}.`,
    more: `Weighing budget first? Our <a href='/netherlands/webshop-cost/'>webshop cost guide</a> shows what a rebuild involves, and <a href='/netherlands/ideal-payment-integration/'>iDEAL payment integration</a> covers the checkout step where many accessibility failures sit.`,
  },
  snapshot: {
    caption: "European Accessibility Act website compliance at a glance",
    rows: [
      { label: "Who is covered", value: "Businesses letting consumers conclude contracts online: webshops, booking sites, ordering apps" },
      { label: "Who is exempt", value: "Microenterprises: fewer than 10 staff and annual turnover of at most 2 million euros (ACM's wording)" },
      { label: "Standard used", value: "WCAG 2.1 AA via EN 301 549; ACM expects WCAG 2.2 AA to become the benchmark during 2026" },
      { label: "Must publish", value: "An accessibility statement, easy to find, itself accessible, also offered in spoken form" },
      { label: "Our work", value: "Scope check, audit, code fixes, statement draft, regression tests" },
      { label: "Rebuild pricing", value: `Webshop from ${P.shop}; static site from ${P.site}` },
      { label: "Not included", value: "Legal sign-off, formal certification, overlay plug-ins" },
    ],
  },
  services: {
    eyebrow: "What the compliance work covers",
    heading: "European Accessibility Act website compliance, split into jobs you can buy separately",
    note: "Some shops need only the scope check and a short fix list. Others need the whole chain. You choose after seeing the audit.",
    cards: [
      { name: "Scope and exemption check", note: "We walk through whether consumers conclude contracts on your site, your headcount and turnover band, and which channels (site, app, booking tool) count, so you know what is in play before spending on fixes.", size: "lg" },
      { name: "WCAG 2.1 AA audit of real templates", note: "Home, category, product, cart, checkout, account, search and contact pages tested with keyboard, screen readers, zoom and automated scans, logged with impact levels matching ACM's categories.", size: "lg" },
      { name: "Checkout and form remediation", note: "Labels, error messages, autocomplete tokens, focus order and payment-step handling rebuilt so a keyboard or screen-reader user can finish an order.", href: "/netherlands/ideal-payment-integration/", size: "md" },
      { name: "Theme and component fixes", note: "Menus, filters, carousels, modals, cookie banners and size pickers rewritten in your Shopify theme, WooCommerce child theme or custom front end.", href: "/netherlands/shopify-developer/", size: "md" },
      { name: "Accessibility statement draft", note: "A plain-language statement built from the audit log: what conforms, what does not yet, the fix plan and a contact route. Your counsel approves the final text.", size: "md" },
      { name: "Accessible rebuild", note: `When the old platform fights every fix, a fresh webshop built to WCAG from the first template, starting from ${P.shop}.`, href: "/netherlands/webshop-cost/", size: "sm" },
      { name: "App accessibility pass", note: "Flutter or React Native apps checked for screen-reader labels, text scaling, contrast and touch target sizes.", href: "/netherlands/app-development-company/", size: "sm" },
      { name: "Regression checks after launch", note: `New products, banners and plug-ins re-tested monthly as part of maintenance from ${P.care}.`, size: "sm" },
    ],
  },
  comparison: {
    heading: "Three ways Dutch shops respond to the EAA, compared",
    note: "Plenty of shops reach for the fastest option first. This table shows what each route actually changes on the page a customer uses.",
    columns: ["What matters", "Overlay widget", "Audit report only", "BtechWaleTech: audit plus code fixes"],
    rows: [
      ["Changes the underlying HTML", "No, adds a script on top", "No, lists problems", "Yes, templates and components are edited"],
      ["ACM's view", "ACM warns overlays can make access worse", "Useful input, but nothing is fixed yet", "Addresses problems at the source, as ACM advises"],
      ["Checkout usable by keyboard", "Rarely changes", "Tells you it fails", "Tested and repaired end to end"],
      ["Accessibility statement", "Often a generic vendor text", "Findings you must turn into a statement", "Draft written from the actual audit log"],
      ["Who edits your theme", "Nobody", "Your own developer, later", "Us, in your repository or store"],
      ["Screen-reader testing", "Not part of the product", "Usually included", "NVDA and VoiceOver passes on key flows"],
      ["Ongoing cost shape", "Recurring subscription", "One-off, repeated each year", `Fix quote, then maintenance from ${P.care}`],
      ["Works for your app too", "No", "Only if scoped", "Yes, if the app is in scope"],
      ["Legal sign-off", "Not provided", "Not provided", "Not provided: your lawyer confirms"],
    ],
    fine: "No developer can certify you as EAA-compliant; conformance is something you assess and state yourself, ideally with your own legal adviser reviewing the statement.",
  },
  pricing: {
    heading: "What European Accessibility Act website compliance costs",
    note: `There is no single price for EAA compliance because two shops with the same theme can fail in very different places. We quote remediation after the audit, itemised per template and component, so you can see whether fixing checkout alone costs more than rebuilding. As reference points, an accessible webshop rebuild starts from ${P.shop} and takes 4 to 8 weeks, a brochure site built to WCAG from scratch starts from ${P.site}, and an app starts from ${P.app}. After any rebuild you get 5 months of free maintenance, then upkeep from ${P.care}, which is where monthly regression checks live. Quotes are in USD and nothing is billed before you approve the written quote.`,
  },
  guideLabel: "EAA compliance guide for Dutch webshops",
  guide: [
    {
      id: "what-it-means",
      heading: "What does European Accessibility Act website compliance mean for a Dutch business?",
      paragraphs: [
        `It means your consumer-facing webshop, booking flow or ordering app must be usable by people with disabilities, measured against a published technical standard, and that you tell customers how well it meets that standard. In the Netherlands the EU directive was brought into national law through the ${LAW}, which applies from 28 June 2025 and amends, among others, the Burgerlijk Wetboek and the consumer-protection enforcement act that ACM works under.`,
        `For most private businesses the relevant category is what the law calls an <strong>e-handelsdienst</strong>: an online service where consumers can conclude a contract over the internet. According to ${ACM}, that includes webshops selling clothing, groceries, books or electronics, platforms for booking hotels, flights or concert tickets, and apps for ordering meals, a taxi or a babysitter. ACM is the supervisor for this group; other regulators handle banking, e-books, audiovisual media and passenger transport.`,
        `European Accessibility Act website compliance therefore has three moving parts. The first is technical: pages, forms and components that a keyboard user, screen-reader user or someone zoomed to 200% can operate. The second is informational: a published statement that describes conformance honestly. The third is procedural: knowing when a known problem has to be reported to ACM and fixed on a plan.`,
      ],
      after: [
        `None of this is exotic engineering. It is careful front-end work, and it is exactly the kind of work a small team can do inside your existing codebase, which is what the rest of this guide covers.`,
      ],
    },
    {
      id: "does-it-apply",
      heading: "Does the European Accessibility Act apply to my webshop?",
      paragraphs: [
        `It applies if consumers can buy, book, order, subscribe or reserve through your site or app and you are larger than a microenterprise. If both are true, treat European Accessibility Act website compliance as a current obligation, not a future project.`,
        `Run through these questions in order. Most Dutch owners have an answer within ten minutes:`,
      ],
      list: [
        `<strong>Do consumers conclude a contract online?</strong> A cart and checkout, a table reservation, a ticket purchase or a subscription sign-up all count. A brochure site with only a phone number generally does not fall under the e-commerce category.`,
        `<strong>Is it business-to-consumer?</strong> ACM's page is framed around services offered to consumers. A pure trade portal where only registered companies order on account is a different situation; ask your lawyer if you sell to both.`,
        `<strong>How big are you?</strong> Fewer than 10 people and annual turnover of at most 2 million euros is the microenterprise band ACM describes as exempt for services.`,
        `<strong>Which channels are involved?</strong> The website, the iOS and Android app, and any embedded booking or ordering widget each form part of the service.`,
        `<strong>Who operates the checkout?</strong> If a platform like a marketplace runs the transaction, some responsibility sits with them, but your own storefront pages remain yours.`,
      ],
      after: [
        `If you land in scope, the next section on exemptions is worth reading before you budget anything, and if you are still deciding on a platform, our note on <a href='/netherlands/woocommerce-developer/'>WooCommerce development in the Netherlands</a> explains how theme choice affects later accessibility work.`,
      ],
    },
    {
      id: "microenterprise",
      heading: "Who is exempt? The microenterprise rule and the disproportionate burden route",
      paragraphs: [
        `Microenterprises that provide services are exempt from the EAA service requirements. ACM describes them as businesses with fewer than 10 people employed and an annual turnover of at most 2 million euros. Both limits matter: a nine-person shop turning over more than that band is not a microenterprise under ACM's description.`,
        `A second, narrower route is the disproportionate burden assessment. If meeting a specific requirement would cost unreasonably much compared with the benefit to disabled users, the law allows an exception, but ACM says you must report it, justify it carefully, name the parts affected, and have your written assessment ready even though you do not have to send it at once. This is not a general opt-out; it is a documented, part-by-part judgement that your lawyer should review.`,
        `Three practical warnings from our side of the keyboard:`,
      ],
      list: [
        `Growth moves you out of the exemption. A shop that hires its tenth person or crosses the turnover band needs a plan, and fixing an old theme under time pressure costs more than building accessibly from the start.`,
        `Exemption from the law is not exemption from customers. Keyboard traps and unreadable contrast lose orders regardless of headcount.`,
        `Suppliers matter. If you build a platform that larger shops use, your clients will ask for accessibility even if you are small.`,
      ],
      after: [
        `Small and exempt but planning a new site anyway? Building to WCAG from the first template adds little to a fresh build. A static site starts from ${P.site} and a webshop from ${P.shop}.`,
      ],
    },
    {
      id: "wcag-en-301-549",
      heading: "Which standard proves EAA website compliance: WCAG 2.1 AA, WCAG 2.2 or EN 301 549?",
      paragraphs: [
        `Test against WCAG 2.1 level AA now and design new work to WCAG 2.2 level AA. ACM states that your website and app must meet level AA of WCAG 2.1, that the European standard EN 301 549 is the technical reference, and that during 2026 WCAG 2.2 level AA becomes the new standard.`,
        `EN 301 549 is the European harmonised standard for ICT accessibility, and its web chapter points to WCAG success criteria. In practice, a website auditor works from the WCAG criteria list and records results against it; the EN reference is what connects that work to European law.`,
        `What changes with 2.2? According to ${W3C}, WCAG 2.2 adds nine success criteria and removes 4.1.1 Parsing. The ones that land at level A or AA, and therefore matter for European Accessibility Act website compliance, are:`,
      ],
      list: [
        `<strong>2.4.11 Focus Not Obscured (Minimum)</strong>: a sticky header or cookie bar must not hide the element that has keyboard focus.`,
        `<strong>2.5.7 Dragging Movements</strong>: a price slider needs a non-drag alternative, such as two number fields.`,
        `<strong>2.5.8 Target Size (Minimum)</strong>: small tap targets such as quantity buttons need enough size or spacing.`,
        `<strong>3.2.6 Consistent Help</strong>: help links or chat should sit in the same place across pages.`,
        `<strong>3.3.7 Redundant Entry</strong>: do not make shoppers retype the address they already entered.`,
        `<strong>3.3.8 Accessible Authentication (Minimum)</strong>: log-in should not rely on a memory or puzzle test without an alternative.`,
      ],
      after: [
        `Our rule: we log every issue against its 2.1 criterion, flag which 2.2 additions also fail, and fix both together, so you are not paying twice when the benchmark moves.`,
      ],
    },
    {
      id: "audit-method",
      heading: "How a European Accessibility Act website compliance audit works",
      paragraphs: [
        `A proper audit tests representative templates by hand, not just with a scanner. Automated tools catch missing alt text and contrast failures quickly, but they cannot tell whether a filter menu makes sense to a screen-reader user or whether focus disappears behind a modal.`,
        `Our audit follows the same pattern on every shop, adjusted to its size:`,
      ],
      subs: [
        { heading: "1. Pick the sample", text: `We choose one example of every template and every interactive component: home, category with filters, product with variants, cart, each checkout step, account, search results, contact and the cookie banner. A 40-page brochure site and a 20,000-product shop often have a similar number of templates.` },
        { heading: "2. Automated sweep", text: `An automated scan runs across the sample and a wider crawl to catch mechanical failures: contrast, missing labels, empty buttons, duplicate IDs, missing page language.` },
        { heading: "3. Keyboard-only pass", text: `Every flow is completed with Tab, Shift+Tab, Enter, Space and arrow keys. We note focus visibility, traps, skipped elements and illogical order.` },
        { heading: "4. Screen-reader pass", text: `NVDA on Windows and VoiceOver on macOS and iOS read the key journeys: find a product, choose a size, add to cart, pay, read the confirmation.` },
        { heading: "5. Zoom, reflow and motion", text: `Pages are checked at 200% text zoom and at narrow widths for reflow, and carousels and animations are checked for pause controls.` },
      ],
      after: [
        `The output is an issue log in a spreadsheet: criterion, page, element, impact level, suggested fix and effort estimate. Impact levels use the same four words ACM uses (critical, serious, moderate, minor) so the log doubles as your evidence if you ever need to report. For a combined view with crawl and speed problems, pair it with our <a href='/netherlands/technical-seo-services/'>technical SEO services</a>.`,
      ],
    },
    {
      id: "checkout-forms",
      heading: "Why checkout and forms fail EAA website compliance most often",
      paragraphs: [
        `Checkout is where the contract is concluded, so it is the part of the service the law cares about most, and it is usually the least tested. A shop can have perfect product pages and still exclude a blind customer at the postcode field.`,
        `The recurring failures we look for in Dutch checkouts:`,
      ],
      list: [
        `<strong>Postcode and house-number lookups</strong> that fill the street silently. Screen-reader users need the result announced and editable.`,
        `<strong>Error messages that only turn a border red.</strong> ACM's own example of a good message is specific text such as “dit is geen geldige postcode” placed next to the field.`,
        `<strong>Placeholder text used instead of labels</strong>, which disappears as soon as someone types.`,
        `<strong>Missing autocomplete attributes</strong> on name, email, address and phone, which ACM lists as a robustness problem and which also slows every mobile shopper.`,
        `<strong>Payment method selection built from styled divs</strong> rather than real radio buttons, so iDEAL, card and other options cannot be chosen by keyboard.`,
        `<strong>Redirects to the bank or payment page without warning</strong>, and a return page that does not state clearly whether the order succeeded.`,
        `<strong>CAPTCHAs on account creation</strong> with no accessible alternative, another item on ACM's list of common problems.`,
        `<strong>Session time-outs</strong> that wipe the cart without warning or a way to extend.`,
      ],
      after: [
        `The hosted payment page from your provider is largely their responsibility, but the step before it and the return page are yours. If you are rebuilding the payment step anyway, our guide to <a href='/netherlands/ideal-payment-integration/'>iDEAL payment integration</a> explains the flow we build, and we make it keyboard- and screen-reader-safe as part of the same job.`,
      ],
    },
    {
      id: "platforms",
      heading: "EAA compliance on Shopify, WooCommerce, Magento, custom builds and apps",
      paragraphs: [
        `The platform rarely decides whether you pass; the theme, the apps or plug-ins you added, and the content your team publishes decide it. Each stack has its own typical weak spots.`,
      ],
      subs: [
        { heading: "Shopify", text: `Recent official themes are a reasonable base, but third-party apps inject review widgets, upsell pop-ups and size charts that ignore focus and labels. We fix what lives in the theme and flag apps that cannot be fixed so you can replace them. Our <a href='/netherlands/shopify-developer/'>Shopify developer page</a> covers theme work more broadly.` },
        { heading: "WooCommerce and WordPress", text: `Page builders often output deep nests of divs with no headings structure, and checkout plug-ins vary widely. A child theme with corrected templates and a trimmed plug-in list usually beats stacking more plug-ins. See <a href='/netherlands/wordpress-website-development/'>WordPress website development</a> for how we structure builds.` },
        { heading: "Magento", text: `Older Magento themes carry years of custom JavaScript. When most of the audit log sits in core templates, replatforming can be the cheaper path to compliance, which our <a href='/netherlands/magento-to-shopify-migration/'>Magento to Shopify migration</a> guide weighs up.` },
        { heading: "Custom front ends", text: `React, Vue or server-rendered builds give full control. Fixes are fast once components are corrected at source, because every page that reuses a component inherits the fix.` },
        { heading: "Mobile apps", text: `Where your app lets consumers order or book, it is part of the service too. In Flutter and React Native we add semantic labels, respect system text size, check contrast and size touch targets. New accessible apps start from ${P.app}.` },
      ],
    },
    {
      id: "overlays",
      heading: "Will an accessibility overlay make my website EAA compliant?",
      paragraphs: [
        `No. An overlay is a script that adds a toolbar or tries to repair pages in the browser, and it does not change the code your customers actually rely on. ACM lists accessibility overlays among common problems in practice, noting they can make accessibility worse, and advises tackling problems on your website at the source.`,
        `We see why overlays sell: they install in minutes and promise European Accessibility Act website compliance for a monthly fee. The trouble is structural. Screen-reader users already have their own settings; a second layer of controls can conflict with them. Automated repair guesses at labels it cannot know, such as what an unlabelled icon button in your cart actually does. And a checkout built from non-semantic elements stays non-semantic underneath.`,
        `If you already run an overlay, you do not need to remove it on day one. We audit with it switched off, fix the underlying issues, and then you decide whether it still adds anything. In most cases it no longer does, and cancelling saves a subscription.`,
      ],
      after: [
        `Decision rule: choose a fix in the code whenever the same component appears on more than one page, which is nearly always. Keep an overlay only if a customer has told you it helps them, and never treat it as your compliance evidence.`,
      ],
    },
    {
      id: "statement",
      heading: "How to write the accessibility statement the EAA requires",
      paragraphs: [
        `Publish a statement on your website and in your app explaining how your service meets the accessibility requirements. ACM says it must be easy for consumers to find, must itself be accessible, and must also be offered orally, for example as an audio clip of the text being read out.`,
        `A statement that holds up is built from evidence rather than adjectives. We draft ours from the audit log, and the structure looks like this:`,
      ],
      list: [
        `Which service it covers: the webshop domain, the app names and versions, any booking subdomain.`,
        `The standard used, WCAG 2.1 level AA via EN 301 549, and the date and method of the last evaluation.`,
        `What conforms, in plain words: for example, “all checkout steps can be completed by keyboard and screen reader”.`,
        `What does not conform yet, per part, with the planned fix date.`,
        `Any disproportionate burden claim, described in outline, where your lawyer has agreed one applies.`,
        `How customers can report a barrier or order another way, with a contact route that is itself accessible.`,
        `The supervisor, ACM, for complaints.`,
      ],
      after: [
        `Dutch government bodies use a model statement published on digitoegankelijk.nl under their own separate rules; its layout is a useful reference, but the EAA statement for a business is a different document. We supply the English draft; you or your translator supply the Dutch version, and your lawyer approves both before publication.`,
      ],
    },
    {
      id: "reporting",
      heading: "When do you have to report accessibility problems to ACM?",
      paragraphs: [
        `ACM asks you to report accessibility problems you know about and have not fixed: critical and serious problems within one week, moderate and minor ones within one month. If you solve the problem inside that window, ACM says you do not need to report it.`,
        `A report names the parts that are not accessible and the impact level of each problem, and you send a plan with it for making the service fully accessible. That is why we score issues with ACM's four impact words from the first audit. When the log is ready, you can see at a glance which items sit on the one-week clock.`,
        `This timing shapes how we schedule remediation. In a typical project:`,
      ],
      list: [
        `Days 1–3 after the audit: critical items, such as a checkout that cannot be completed by keyboard, are fixed first, often within the week.`,
        `Week 2: serious items such as missing form labels and focus hidden behind sticky headers.`,
        `Weeks 3–4: moderate and minor items, such as contrast tweaks, heading order and link text.`,
        `Anything that genuinely cannot be finished in time goes into the plan with a date, which you can attach to a report.`,
      ],
      after: [
        `We do not file reports on your behalf; that is your communication with your regulator. We give you the evidence and the fix plan in a form that is easy to attach.`,
      ],
    },
    {
      id: "fix-or-rebuild",
      heading: "Fix or rebuild: budgeting European Accessibility Act website compliance",
      paragraphs: [
        `Fix the existing site when problems cluster in a handful of shared components; rebuild when they sit in the page structure itself. The audit log tells you which case you are in, which is why we price remediation only after seeing it.`,
        `What pushes the cost of fixes up:`,
      ],
      list: [
        `Number of distinct templates and interactive components, not number of pages.`,
        `Third-party widgets you cannot edit, which must be replaced or wrapped.`,
        `Custom JavaScript for filters, variant pickers and mini-carts.`,
        `Content volume that needs editorial work: thousands of product images with no alt text, PDFs, videos without captions.`,
        `A theme that has been patched by several developers over the years.`,
      ],
      after: [
        `Rules of thumb we use when advising: if more than half of the log items live in core layout templates, or the theme is several major versions behind, get a rebuild quote alongside the fix quote and compare. An accessible webshop rebuild starts from ${P.shop}; an SEO-heavy site of 299+ pages from ${P.seoSite}; a custom ordering or booking web app from ${P.software}. Every quote is itemised in USD, and nothing is billed until you approve it in writing. For broader budget context, see <a href='/netherlands/website-development-cost/'>website development cost in the Netherlands</a>.`,
      ],
    },
    {
      id: "timeline",
      heading: "How long does EAA website remediation take?",
      paragraphs: [
        `A focused fix of a mid-sized webshop usually takes two to five weeks from audit to retest; an accessible rebuild takes 4 to 8 weeks, like any webshop build. The spread depends mostly on how quickly your side reviews changes and supplies content such as alt text.`,
        `The phases, and who does what:`,
      ],
      subs: [
        { heading: "Scope and access (days 1–2)", text: `You share the URL, staging access and admin rights. We confirm the template sample and the channels in scope.` },
        { heading: "Audit (about one week)", text: `Automated, keyboard, screen-reader and zoom passes, producing the issue log with impact levels.` },
        { heading: "Quote and approval (about 2 working days)", text: `Itemised fix quote, plus a rebuild comparison when the log suggests it.` },
        { heading: "Remediation (one to three weeks)", text: `Critical items first, then serious, then the rest, all on a staging copy.` },
        { heading: "Retest and statement (a few days)", text: `Every logged item retested, the statement drafted from the final state, and remaining items given dates.` },
      ],
      after: [
        `Content fixes run in parallel. Your team writes alt text and captions using a short guide we provide, because only you know what a product photo needs to say.`,
      ],
    },
    {
      id: "seo-ai",
      heading: "Does EAA website compliance help SEO and AI search visibility?",
      paragraphs: [
        `Yes, indirectly and in useful ways. Much of what makes a page accessible, such as a clear heading outline, real text instead of text in images, descriptive link text, labelled forms and a declared page language, is also what search engines and AI answer engines use to understand a page.`,
        `Accessibility work does not guarantee rankings, and nobody can honestly promise those. What it does is remove friction that hurts both audiences. A few overlaps we see on almost every Dutch webshop:`,
      ],
      list: [
        `<strong>Page language</strong>: an html lang attribute set to nl on Dutch pages and en on English pages helps screen readers pronounce text correctly, a problem ACM calls out, and supports correct language targeting in search.`,
        `<strong>Headings</strong>: one h1 and a logical h2/h3 outline lets screen-reader users jump through the page and helps search engines see structure.`,
        `<strong>Alt text</strong>: meaningful product image descriptions help blind shoppers and give image search real text.`,
        `<strong>Performance</strong>: removing heavy overlay and pop-up scripts often improves Core Web Vitals.`,
      ],
      after: [
        `If search visibility is a parallel goal, monthly SEO from ${P.seo} can run alongside the accessibility fixes, handled by the same three people, so nothing one person fixes is undone by another.`,
      ],
    },
    {
      id: "after-launch",
      heading: "Keeping European Accessibility Act website compliance after the fixes go live",
      paragraphs: [
        `Compliance decays as soon as new content goes up. A marketing banner with text baked into an image, a new review plug-in or a product added without alt text can reopen issues you paid to close.`,
        `The habits that keep a shop compliant are small and repeatable:`,
      ],
      list: [
        `A one-page editor guide for your team: alt text, link text, heading levels, video captions.`,
        `A short checklist before installing any new app or plug-in: can it be used by keyboard, does it trap focus, is it labelled.`,
        `A monthly regression pass on the checkout and the templates changed that month.`,
        `A quarterly look at the statement, updated whenever a known issue is fixed or a new one appears.`,
        `A named person on your side who receives accessibility feedback from customers.`,
      ],
      after: [
        `After an accessible rebuild you get 5 months of free maintenance, which covers these regression passes. After that, maintenance starts from ${P.care}. You own the code, the hosting account and the domain throughout, so any developer can take over later using the issue log and the notes we leave in the repository.`,
      ],
    },
    {
      id: "working-from-nl",
      heading: "Working with a team in India on EAA compliance from the Netherlands",
      paragraphs: [
        `It works well because accessibility remediation is asynchronous by nature: an issue log, a staging site and a retest list travel across time zones easily. India is 3.5 hours ahead of the Netherlands in summer and 4.5 hours in winter, so the European business day overlaps with ours from late morning onward.`,
        `How the practical side runs:`,
      ],
      list: [
        `<strong>Calls</strong>: a kick-off video call in your late morning or early afternoon, then short calls as needed. WhatsApp replies 7 days a week, in English.`,
        `<strong>Access</strong>: staging environment, theme or repository access, and an admin account without payment rights.`,
        `<strong>Payments</strong>: quotes in USD, paid by Wise, bank wire or PayPal. Invoices come from India; your accountant advises on your side of the paperwork.`,
        `<strong>Contracts</strong>: the written quote sets scope and milestones; if you need an NDA or a data processing agreement, raise it before access is shared. See our <a href='/terms/'>terms</a>.`,
        `<strong>Ownership</strong>: every fix is committed to your repository or theme; nothing runs on our accounts.`,
        `<strong>Languages</strong>: we write English. Dutch labels, error messages and statement text are supplied or approved by you.`,
      ],
      after: [
        `The first two weeks usually look like this: scope call and access on days 1–2, audit through day 7, quote on days 8–9, and critical checkout fixes on staging by the end of week two. More on this model on our <a href='/outsource-web-development-to-india/'>outsourcing to India</a> page.`,
      ],
    },
    {
      id: "worked-example",
      heading: "Worked example: a hypothetical Utrecht kitchenware webshop checks its EAA position",
      paragraphs: [
        `Say a kitchenware webshop in Utrecht has 14 staff, sells to consumers across the Netherlands and Belgium on WooCommerce, and runs an overlay widget it installed in 2024. It is not a microenterprise, and consumers conclude contracts online, so European Accessibility Act website compliance applies to it. This is an illustration, not a client story.`,
        `The audit samples 11 templates and 9 components. The log shows the pattern we would expect for a shop like this: the checkout's payment options are styled divs, the postcode lookup gives no feedback, the mega-menu traps keyboard focus, product images lack alt text, and a sticky header hides the focused element on scroll. Two issues are critical, six serious, the rest moderate or minor.`,
        `The decision: the problems sit in components, not the whole layout, so fixing beats rebuilding. Critical items are fixed on staging in the first week, removing the need to report them. The overlay is switched off during testing and later cancelled. The shop's team writes alt text for its top 300 products using the editor guide, and we draft the statement listing the remaining minor items with dates.`,
      ],
      after: [
        `Had the log shown failures across every template of an old theme, the comparison would have pointed towards an accessible rebuild from ${P.shop}. The audit is what makes that call, not a guess.`,
      ],
    },
    {
      id: "checklist",
      heading: "European Accessibility Act website compliance checklist before you sign off",
      paragraphs: [
        `Use this list to judge whether your site is ready for a statement. Every item should be true on your live site, not just on staging.`,
      ],
      list: [
        `Scope confirmed: consumers conclude contracts online, and you are above the microenterprise band.`,
        `Every checkout step completed with keyboard only, focus always visible.`,
        `Every checkout step completed with NVDA and VoiceOver, with the order confirmation read out.`,
        `All form fields have visible labels, specific error messages and autocomplete attributes.`,
        `Links distinguishable by more than colour; text contrast meets AA ratios.`,
        `Pages readable at 200% zoom and at mobile width without horizontal scrolling.`,
        `Page language set correctly on Dutch and English pages.`,
        `Carousels and videos can be paused; videos carry captions.`,
        `Cookie banner operable by keyboard and not hiding focused elements.`,
        `Accessibility statement published, linked from every page footer, accessible, with a spoken version.`,
        `Known remaining issues logged with impact levels and dates, and reported to ACM where the windows require it.`,
        `An owner on your team for customer accessibility feedback.`,
      ],
      after: [
        `If you tick most items but not all, that is normal; the statement exists to describe exactly that honestly. Want the list checked for you? <a href='/contact/'>Send us your URL</a> and we will scope the audit.`,
      ],
    },
  ],
  tables: [
    {
      id: "scope-triage",
      eyebrow: "Scope triage",
      heading: "Does the EAA cover your Dutch website? Common situations",
      note: `Based on ${ACM}. Borderline cases belong with your own lawyer.`,
      columns: ["Situation", "Likely covered?", "Why", "Sensible next step"],
      rows: [
        ["Webshop selling to consumers, 25 staff", "Yes", "Consumers conclude contracts online; not a microenterprise", "Audit checkout and templates now"],
        ["Webshop, 6 staff, turnover under 2 million euros", "Exempt as a microenterprise", "Fewer than 10 people and within the turnover limit", "Build accessibly anyway at the next redesign"],
        ["Restaurant ordering site or app, 15 staff", "Yes", "ACM lists meal-ordering apps as e-commerce services", "Test ordering flow and app"],
        ["B2B portal, registered trade customers only", "Unclear, ask your lawyer", "ACM's guidance is framed around consumers", "Confirm scope before spending"],
        ["Brochure site with contact form only", "Generally not e-commerce", "No contract is concluded online", "Good practice; no statement duty as e-commerce"],
        ["Hotel or event booking platform", "Yes", "Booking hotels and tickets is on ACM's example list", "Prioritise date pickers and seat maps"],
      ],
      hideSm: [2],
    },
    {
      id: "route-cost",
      eyebrow: "Fix or rebuild",
      heading: "European Accessibility Act website compliance routes and starting points",
      note: "Starting prices come from our standard plans; remediation of an existing site is always quoted after the audit.",
      columns: ["Starting point", "Usual route", "Starting price", "Typical timeline"],
      rows: [
        ["Modern theme, issues in a few components", "Audit plus targeted fixes", "Itemised after audit", "2–5 weeks"],
        ["Old or heavily patched webshop theme", "Accessible webshop rebuild", `From ${P.shop}`, "4–8 weeks"],
        ["Brochure site up to 100 pages", "Rebuild to WCAG from scratch", `From ${P.site}`, "1–2 weeks"],
        ["Large content site, 299+ pages", "Accessible SEO site build", `From ${P.seoSite}`, "3–5 weeks"],
        ["Custom booking or ordering web app", "Component fixes or rebuild", `From ${P.software}`, "6–12 weeks for a rebuild"],
        ["Consumer ordering app", "App accessibility pass or new app", `From ${P.app} for a new app`, "6–10 weeks for a new app"],
        ["After any rebuild", "Monthly regression checks", `5 months free, then from ${P.care}`, "Ongoing"],
      ],
      hideSm: [3],
    },
    {
      id: "impact-levels",
      eyebrow: "Triage by impact",
      heading: "How we order fixes against ACM's reporting windows",
      note: "ACM's windows apply to known problems you have not yet solved; fixing within the window means no report is needed, according to ACM.",
      columns: ["Impact level", "Example on a webshop", "ACM window if unresolved", "Our fix order"],
      rows: [
        ["Critical", "Payment method cannot be selected by keyboard", "Report within 1 week", "First, usually days 1–3"],
        ["Serious", "Form fields without labels; focus hidden by sticky header", "Report within 1 week", "First week"],
        ["Moderate", "Heading levels skipped; vague link text", "Report within 1 month", "Weeks 2–3"],
        ["Minor", "Decorative image announced by screen reader", "Report within 1 month", "Weeks 3–4"],
        ["Content (any level)", "Product photos without alt text", "Depends on impact", "Your team, with our guide"],
      ],
    },
  ],
  areas: {
    eyebrow: "Across the Netherlands",
    heading: "EAA website compliance for businesses across Dutch cities",
    note: "We work remotely for every region; these are the kinds of consumer-facing businesses in each place that most often need the work.",
    cards: [
      { name: "Amsterdam", note: "Fashion and lifestyle webshops, ticketing and experience platforms, and startups with booking apps, many selling across the EU and needing checkout and app flows tested before scaling." },
      { name: "Rotterdam", note: "Online retailers and consumer services around a large port-city economy, where webshops tied to warehouses and delivery tools need accessible order and tracking pages." },
      { name: "The Hague", note: "Service providers near government and international bodies, plus local retailers, often asked by partners to show accessibility evidence alongside privacy documentation." },
      { name: "Utrecht", note: "Central location for many national retailers and subscription services, where account sign-up and recurring payment flows need keyboard and screen-reader testing." },
      { name: "Eindhoven", note: "Technology-led consumer brands in the Brainport region whose product configurators and custom front ends need component-level accessibility fixes rather than theme tweaks." },
      { name: "Groningen", note: "Student-heavy city with food ordering, housing and event platforms, where mobile booking flows and small touch targets are the usual weak spots." },
      { name: "Tilburg", note: "Logistics-linked webshops and consumer brands in Brabant, often on WooCommerce or Shopify, needing theme audits and plug-in clean-up for compliance." },
      { name: "Breda", note: "Retail and hospitality businesses near the Belgian border selling to both countries, needing Dutch and Flemish-facing pages with correct language settings." },
      { name: "Almere", note: "Growing local businesses launching their first webshops, where building accessibly from day one is cheaper than retrofitting after the microenterprise threshold is passed." },
      { name: "Haarlem", note: "Independent retailers and restaurants with online ordering or table booking, where reservation widgets and date pickers need to work without a mouse." },
      { name: "Nijmegen", note: "Consumer services, healthcare-adjacent shops and education platforms whose sign-up forms and account areas need clear labels and error messages." },
      { name: "Arnhem", note: "Fashion and design labels and regional retailers whose image-heavy product pages need alt text workflows and contrast checks on brand colours." },
      { name: "Maastricht", note: "Cross-border sellers reaching Belgian and German customers, where multilingual storefronts must declare page language correctly for screen readers." },
      { name: "Zwolle", note: "Regional webshops and service businesses on older platforms, often facing the fix-or-rebuild decision when their theme fails across most templates." },
    ],
  },
  process: {
    heading: "From first message to published statement",
    steps: [
      ["Share the basics", "Send your URL, platform, staff band and whether you have an app. We confirm on WhatsApp whether the EAA likely applies and what the audit sample will include."],
      ["Audit the sample", "Automated scans plus keyboard, NVDA, VoiceOver and zoom passes over each template and component, logged with WCAG criteria and ACM's four impact levels."],
      ["Compare fix and rebuild", "You receive an itemised USD quote in about two working days, with a rebuild comparison when the log suggests the theme is the real problem."],
      ["Fix on staging", "Critical and serious items first, so nothing sits on the one-week clock longer than needed, then moderate and minor items, all committed to your repository."],
      ["Retest and draft the statement", "Every item is retested, the accessibility statement drafted from the final log, and open items given dates for your lawyer to review."],
      ["Keep it compliant", "Monthly regression checks on checkout and changed templates, free for 5 months after a rebuild and then part of maintenance."],
    ],
  },
  faqHeading: "European Accessibility Act website compliance: questions Dutch owners ask",
  faqs: [
    { question: "What is European Accessibility Act website compliance?", answer: "It means a consumer-facing website or app meets the accessibility requirements that EU law sets for covered services, tested in practice against WCAG 2.1 level AA through the European standard EN 301 549, with a published statement explaining conformance. In the Netherlands it applies from 28 June 2025 through the Implementatiewet toegankelijkheidsvoorschriften producten en diensten, with ACM supervising e-commerce services." },
    { question: "Does the European Accessibility Act apply to my Dutch webshop?", answer: "It likely does if consumers can buy, book, order or subscribe through your site and your business is not a microenterprise. ACM describes microenterprises as having fewer than 10 people employed and annual turnover of at most 2 million euros. If you meet both conditions you are exempt for services; if you do not, plan an audit and statement now." },
    { question: "When did the European Accessibility Act start applying in the Netherlands?", answer: "It has applied since 28 June 2025. That is the date the Dutch implementing law took effect for services, and ACM treats it as the point from which e-commerce services must meet the accessibility requirements. If your site has not been checked since then, the first step is a scope check followed by an audit of your checkout and main templates." },
    { question: "Who enforces EAA compliance for websites in the Netherlands?", answer: "For e-commerce services and electronic communications services, the supervisor is ACM, the Authority for Consumers and Markets. Other sectors have their own regulators, for example the AFM for financial services. ACM publishes guidance on what webshops must do, including the accessibility statement and the time limits for reporting known problems that you have not fixed." },
    { question: "Is my small business exempt from the European Accessibility Act?", answer: "You are exempt as a service provider if you are a microenterprise: fewer than 10 people and annual turnover of at most 2 million euros, as ACM puts it. Both conditions have to hold. Being exempt is not a reason to ignore accessibility completely, because growth can end the exemption and inaccessible checkouts lose orders either way." },
    { question: "Which WCAG level do I need for EAA compliance?", answer: "Level AA of WCAG 2.1 is the current benchmark named by ACM, linked through EN 301 549. ACM also says WCAG 2.2 level AA becomes the new standard during 2026, so any new design or rebuild should target 2.2 AA now. Our audits log 2.1 failures and flag the 2.2 additions, so the fixes cover both." },
    { question: "How much does European Accessibility Act website compliance cost?", answer: `It depends on how many templates and components fail and why, so we quote remediation only after the audit, itemised in USD. As reference points, an accessible webshop rebuild starts from ${P.shop}, a static site from ${P.site} and a new app from ${P.app}. Maintenance with monthly regression checks starts from ${P.care} after 5 free months.` },
    { question: "How long does it take to make a webshop EAA compliant?", answer: "A targeted fix of a mid-sized webshop typically takes two to five weeks from the start of the audit to the final retest. An accessible rebuild takes 4 to 8 weeks. The main variables are how many components fail, how fast you approve changes on staging, and how quickly your team can write alt text and captions for existing content." },
    { question: "Is an accessibility overlay enough for the European Accessibility Act?", answer: "No. ACM lists overlays among common accessibility problems, saying they can make access worse, and advises fixing problems at the source. An overlay does not change the HTML of your checkout or components. We audit with any overlay switched off, fix the real issues in your code, and then you can decide whether to keep paying for it." },
    { question: "What must an EAA accessibility statement contain?", answer: "It should explain how your service meets the accessibility requirements: the standard used, what conforms, what does not yet and when it will, and how customers can report barriers. ACM says it must be easy to find, accessible itself and also available orally, for instance as an audio recording. We draft it from the audit log; your lawyer approves it." },
    { question: "Do I have to report accessibility problems to ACM?", answer: "According to ACM, known critical and serious problems must be reported within one week and moderate or minor ones within one month, unless you fix them inside that period. The report lists the inaccessible parts and their impact, with a plan to fix them. We score every issue with those impact levels so you can see what needs fixing first." },
    { question: "Does the European Accessibility Act cover mobile apps as well as websites?", answer: `Yes, when the app is part of a covered service, such as ordering meals or booking tickets, which ACM lists among e-commerce services. Apps need screen-reader labels, support for system text size, adequate contrast and large enough touch targets. We test and fix Flutter and React Native apps, and new accessible apps start from ${P.app}.` },
    { question: "Should I fix my current site or rebuild it for EAA compliance?", answer: `Fix it when problems cluster in shared components such as menus, filters and checkout steps. Consider rebuilding when failures run through the core layout of an old or heavily patched theme. We give you both numbers side by side after the audit, with rebuilds starting from ${P.shop} for a webshop, so the decision rests on evidence.` },
    { question: "Can a remote team in India handle EAA compliance for a Dutch website?", answer: "Yes. Accessibility work runs on an issue log, a staging site and retests, all of which work well across time zones. India is 3.5 to 4.5 hours ahead of the Netherlands, so there is solid overlap from your late morning. We cannot visit your premises or give legal advice, and your own lawyer should review the statement." },
    { question: "Do you certify that my website complies with the European Accessibility Act?", answer: "No, and be careful with anyone who offers a certificate. Conformance is something you assess and declare in your accessibility statement. We provide the audit evidence, the fixes, retest results and a draft statement. Legal confirmation that your position is correct, including any disproportionate burden claim, should come from your own legal adviser." },
    { question: "Does accessibility work help my SEO?", answer: `It often helps, because clear headings, labelled forms, meaningful alt text, correct page language and lighter pages help both screen readers and search engines. It will not guarantee rankings; nobody can honestly promise that. If search growth is also a goal, monthly SEO from ${P.seo} can run alongside the accessibility fixes with the same team.` },
    { question: "Who owns the code after the accessibility fixes?", answer: "You do. Every change is committed to your own repository, theme or store, on hosting and accounts registered to you. We leave the issue log, retest notes and an editor guide behind, so any developer can continue the work later. Nothing runs on our accounts and there is no proprietary layer to keep paying for." },
    { question: "How do payments and contracts work from the Netherlands?", answer: "You receive a written, itemised quote in USD in about two working days, and nothing is billed until you approve it. Payment is by Wise, bank wire or PayPal, and invoices come from India. If you need an NDA or data processing agreement, raise it before you share access; other terms are agreed in the written quote." },
    { question: "Do B2B webshops fall under the European Accessibility Act?", answer: "ACM frames its e-commerce guidance around services offered to consumers. A portal used only by registered business customers ordering on account may fall outside, but many wholesalers also sell to consumers or run mixed sites. Because the answer depends on how you actually trade, confirm your position with your lawyer before you spend on a full audit." },
    { question: "Can you write the Dutch version of my accessibility statement?", answer: "We write the statement draft in English based on the audit results. The Dutch version should be written or approved by you or a translator you trust, because the statement is a public commitment and must read naturally for Dutch customers. We then publish both versions on accessible pages and set up the spoken version, such as an audio clip." },
    { question: "What happens to accessibility when we add new products or plug-ins?", answer: `New content and plug-ins are the main way compliance slips. We give your team a short editor guide and a plug-in checklist, and run monthly regression checks on checkout and changed templates. After a rebuild that is covered for 5 months free, then through maintenance starting from ${P.care}.` },
  ],
  related: {
    heading: "Related services for Dutch businesses",
    links: [
      { name: "GDPR-compliant website development", href: "/netherlands/gdpr-compliant-website-development/" },
      { name: "iDEAL payment integration", href: "/netherlands/ideal-payment-integration/" },
      { name: "Shopify developer Netherlands", href: "/netherlands/shopify-developer/" },
      { name: "WooCommerce developer Netherlands", href: "/netherlands/woocommerce-developer/" },
      { name: "Magento to Shopify migration", href: "/netherlands/magento-to-shopify-migration/" },
      { name: "How much does a webshop cost", href: "/netherlands/webshop-cost/" },
      { name: "Website development cost in the Netherlands", href: "/netherlands/website-development-cost/" },
      { name: "App development company Netherlands", href: "/netherlands/app-development-company/" },
      { name: "WordPress website development Netherlands", href: "/netherlands/wordpress-website-development/" },
      { name: "Technical SEO services Netherlands", href: "/netherlands/technical-seo-services/" },
      { name: "All services for the Netherlands", href: "/netherlands/" },
      { name: "Outsource web development to India", href: "/outsource-web-development-to-india/" },
      { name: "Pricing", href: "/pricing/" },
    ],
  },
  cta: {
    heading: "Not sure whether the EAA applies to your webshop?",
    note: "Send your URL, platform, staff band and whether you run an app. We reply on WhatsApp with a scope view, then an itemised USD audit and fix quote in about two working days. Nothing is billed before you approve it.",
  },
};

export default content;
