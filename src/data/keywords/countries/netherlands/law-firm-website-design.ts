import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const NOVA = "https://www.advocatenorde.nl/voor-advocaten/wet-en-regelgeving/gedragsregels/gedragsregels-advocatuur";
const GBP = "https://support.google.com/business/answer/3038177";
const COOKIES = "https://business.gov.nl/regulation/cookies/";

const content: FreelanceContent = {
  path: "/netherlands/law-firm-website-design/",
  crumb: "Law firm website design",
  updated: "2026-09-25",
  meta: {
    title: `Law Firm Website Design, NL and EN, from ${P.site}`,
    description: `Law firm website design for Dutch advocatenkantoren: practice-area pages, lawyer profiles, secure intake and bilingual NL/EN. From ${P.site}, quote in 2 days.`,
    keywords: [
      "law firm website design", "law firm website design netherlands", "law firm website", "lawyer website design netherlands",
      "advocatenkantoor website laten maken", "website advocaat", "website advocatenkantoor", "legal website design",
      "law firm web design amsterdam", "law firm website the hague", "law firm website rotterdam", "law firm website utrecht",
      "english law firm website for expats", "bilingual law firm website", "law firm website cost", "how much does a law firm website cost",
      "what should a law firm website include", "lawyer profile page design", "practice area pages law firm",
      "secure client intake form law firm", "nova gedragsregels website", "law firm local seo netherlands",
      "legalservice schema", "law firm website developer", "boutique law firm website", "immigration lawyer website netherlands",
      "law firm website redesign",
    ],
  },
  hero: {
    eyebrow: "Websites for advocatenkantoren and legal advisers",
    h1: "Law firm website design for Dutch practices with international clients",
    lede: `Law firm website design for a Dutch practice is mostly about trust under constraint: practice-area pages a worried client can understand in English or Dutch, lawyer profiles that show real expertise, an intake form that never leaks a confidential detail, and copy that stays within what the Nederlandse Orde van Advocaten expects. BtechWaleTech is three freelance developers in India who build these sites for Amsterdam, The Hague and other Dutch practices from ${P.site}. See the <a href='/netherlands/'>Netherlands hub</a> for everything else we build for Dutch clients.`,
    pills: ["Practice-area architecture", "Lawyer profiles with credentials", "Confidential intake forms", "Dutch and English versions", "Local SEO for legal searches", "EU hosting in your name", "WhatsApp replies 7 days a week"],
    origin: "Three freelance developers in India · you approve every word of legal copy · domain, hosting and code registered to your practice",
  },
  facts: [
    ["Law firm site from", `${P.site}, 1–2 weeks`],
    ["Content-heavy legal site from", `${P.seoSite}, 3–5 weeks`],
    ["Client portal or document room from", `${P.software}, 6–12 weeks`],
    ["Languages", "Dutch and English, copy supplied or approved by your lawyers"],
    ["Intake data", "Minimal fields, encrypted, stored on EU hosting you control"],
    ["After launch", `5 months of free maintenance, then from ${P.care}`],
  ],
  stats: [
    { value: "3", label: "Freelance developers on your project" },
    { value: "2", label: "Working days until your itemised quote" },
    { value: "5", label: "Months of free maintenance after launch" },
    { value: "0", label: "Client files we need to see" },
  ],
  answer: {
    heading: "What should law firm website design include for a Dutch practice?",
    text: `Law firm website design for a Dutch practice should include clear practice-area pages, a profile for every lawyer, a short confidential intake form, Dutch and English versions where clients need them, LegalService structured data and a Google Business Profile strategy for local searches. All copy must be accurate and approved by your lawyers. BtechWaleTech builds this from ${P.site}; larger content sites start from ${P.seoSite}.`,
    more: `Privacy detail sits in our <a href='/netherlands/gdpr-compliant-website-development/'>GDPR-compliant website development</a> guide, and ongoing visibility work is covered on <a href='/seo-for-lawyers/'>SEO for lawyers</a>.`,
  },
  snapshot: {
    caption: "Law firm website design in the Netherlands, at a glance",
    rows: [
      { label: "Who it suits", value: "Advocatenkantoren, boutiques, sole practitioners, in-house-style advisers" },
      { label: "Core pages", value: "Practice areas, lawyer profiles, insights, contact and intake" },
      { label: "Languages", value: "Dutch and English as separate, indexable pages" },
      { label: "Conduct rules", value: "Copy reviewed by your lawyers against NOvA rules before launch" },
      { label: "Intake", value: "Conflict-check fields first, case details only after contact" },
      { label: "Starting price", value: `From ${P.site}; content-heavy sites from ${P.seoSite}` },
      { label: "Who owns it", value: "Your practice: domain, hosting, code, Search Console" },
    ],
  },
  services: {
    eyebrow: "What we build for legal practices",
    heading: "The building blocks of law firm website design",
    note: "A legal website is read by people under stress who need to decide whether to call you. Every block below exists to help that decision without overpromising.",
    cards: [
      { name: "Practice-area architecture", note: "A hub per area of law with sub-pages for the matters people actually search for, each linking to the lawyers who handle them and to relevant insights.", size: "lg" },
      { name: "Lawyer profiles", note: "One page per lawyer with focus areas, languages, admission details you supply, publications and a direct contact route, marked up as a Person linked to your LegalService.", size: "lg" },
      { name: "Confidential intake form", note: "Asks for parties and matter type first so you can run a conflict check, keeps sensitive detail out of email notifications, and stores submissions encrypted on EU hosting.", href: "/website-security-freelancer/", size: "md" },
      { name: "Dutch and English versions", note: "Two full language trees with hreflang, so an expat searching in English and a Dutch client searching in Dutch each land on the right page.", href: "/international-seo-services/", size: "md" },
      { name: "Local SEO for legal searches", note: `LegalService schema, office pages, Google Business Profile set-up guidance and Search Console in your name. Monthly SEO from ${P.seo}.`, href: "/seo-for-lawyers/", size: "md" },
      { name: "Insights and knowledge base", note: "Articles on legal changes with author, date and review date shown, so readers and AI assistants can see how current the information is.", size: "sm" },
      { name: "Appointment booking", note: "Optional consultation booking tied to lawyers' calendars, with a short pre-screen so paid and free first calls are clear.", href: "/booking-app-developer/", size: "sm" },
      { name: "Client portal", note: `Secure document exchange and matter updates behind a login, built as a separate web app from ${P.software}.`, href: "/netherlands/custom-software-development/", size: "sm" },
    ],
  },
  comparison: {
    heading: "Three ways a Dutch practice gets a new website",
    note: "Most practices weigh a specialist legal-marketing bureau, a ready-made legal theme they fill themselves, or a remote development team. The right answer depends on who writes your copy and how much you want to own.",
    columns: ["Aspect", "Specialist legal-marketing bureau", "Legal theme you fill yourself", "BtechWaleTech"],
    rows: [
      ["Legal copywriting", "Often included, in Dutch", "You write everything", "You supply or approve; we structure and edit English"],
      ["Practice-area structure", "Planned with you", "Fixed by the theme", "Planned from your matter types and search demand"],
      ["Lawyer profile depth", "Varies", "Basic bio blocks", "Full profiles with structured data"],
      ["Intake confidentiality", "Depends on the tools used", "Usually a generic form plugin", "Minimal fields, encrypted storage, no details in email"],
      ["Dutch and English", "Usually offered", "Plugin-dependent", "Separate language trees with hreflang"],
      ["Meetings", "In person possible", "None", "Video calls in your late morning or early afternoon"],
      ["Ownership", "Check the contract", "Yours, on the theme's terms", "Domain, hosting and code in your name"],
      ["Cost pattern", "Quotes vary widely", "Low upfront, your time is the cost", `From ${P.site}, maintenance from ${P.care}`],
    ],
    fine: "If you want a partner who writes persuasive Dutch legal copy and meets you at the office, a local bureau fits better; we build and structure, and your lawyers own the words.",
  },
  pricing: {
    heading: "What law firm website design costs",
    note: `All figures are starting prices in USD, confirmed in an itemised quote within about two working days. A law firm site with practice-area pages, lawyer profiles, an intake form and a contact page starts from ${P.site}. Practices with many areas of law, two full language trees and a regular insights programme usually fit the content-heavy plan from ${P.seoSite}, because templates, internal linking and sitemaps are designed for scale. A client portal with secure document exchange starts from ${P.software}. Monthly SEO starts from ${P.seo}. Maintenance is free for five months after launch, then from ${P.care}. Copywriting and translation are not included unless quoted.`,
  },
  guideLabel: "Law firm website design guide",
  guide: [
    {
      id: "what-it-involves",
      heading: "What does law firm website design involve for a Dutch practice?",
      paragraphs: [
        "Law firm website design is the work of turning a practice's expertise into pages that help a prospective client decide to get in touch, while respecting the profession's conduct rules and the confidentiality clients expect. It covers structure, copy layout, lawyer profiles, forms, privacy, search visibility and the technical build.",
        "For a Dutch advocatenkantoor, three things make it different from designing a site for a consultancy or a shop. First, the audience arrives worried: someone facing a dismissal, a residence-permit refusal or a shareholder dispute wants to know quickly whether you handle their kind of matter. Second, the words are regulated: the title advocaat is legally protected, and what you say about yourselves has to be accurate. Third, the very first message a client sends may contain information covered by professional secrecy, so the form and its storage matter as much as the layout.",
        "In practice, a good build answers five questions on every important page: what is this area of law, who here handles it, what does a first step look like, how do I contact you safely, and in which language can we talk. Design supports those answers; it does not replace them.",
        `We build the site, the forms and the technical SEO. Your lawyers supply or approve every legal statement. If your practice is small and mainly needs a credible presence, our India-facing <a href='/lawyer-website-design/'>lawyer website design</a> page shows the same thinking at a simpler scale.`,
      ],
    },
    {
      id: "international-clients",
      heading: "Law firm website design for expat and international clients in Amsterdam and The Hague",
      paragraphs: [
        "If a large share of your clients are expats, international companies or foreign individuals, English should not be a single translated page tucked behind a flag icon. It should be a full, equal version of the site, with its own practice-area pages written for someone who does not know the Dutch legal system.",
        "That changes the content, not just the language. An English page on employment law for an expat in Amstelveen needs to explain concepts a Dutch reader takes for granted: what a vaststellingsovereenkomst is, how the UWV fits into dismissal, what the 30% ruling has to do with an employment contract if your practice advises on it. The Dutch page on the same topic can be shorter and more direct.",
      ],
      subs: [
        { heading: "Name the audience plainly", text: "Pages such as “Employment law for international employees” or “Immigration law for startups relocating to the Netherlands” tell visitors immediately that they are in the right place." },
        { heading: "Show languages per lawyer", text: "A profile that lists the languages each lawyer works in answers a question many international clients hesitate to ask." },
        { heading: "Explain the first step", text: "Say whether the first call is free or paid and how long it lasts, in both languages, if your practice is comfortable publishing it." },
      ],
      after: [
        `The team writes English. Dutch legal copy, and any legal translation, comes from your lawyers or a legal translator. For how Amsterdam businesses more generally run English-first sites, see our <a href='/netherlands/web-developer-for-amsterdam-businesses/'>web developer for Amsterdam businesses</a> page.`,
      ],
    },
    {
      id: "practice-areas",
      heading: "How should practice areas be structured on a law firm website?",
      paragraphs: [
        "In law firm website design, structure practice areas as hubs with focused sub-pages, one per type of matter people search for, rather than a single long page per area of law. A hub for employment law might link to dismissal, sickness and reintegration, non-compete clauses, and executive contracts, each on its own URL.",
        "This works better for clients and for search. A visitor who typed “ontslag op staande voet advocaat” or “dismissal lawyer Amsterdam” wants the page about exactly that, not a list of twelve topics. Search engines, and AI assistants that summarise legal pages, find it easier to understand a page with one clear subject.",
        "Each matter page follows the same pattern so your lawyers can write them quickly:",
      ],
      list: [
        "<strong>A one-paragraph answer</strong> to the situation the visitor is in, in plain language.",
        "<strong>What usually happens next</strong>: stages, typical documents, relevant deadlines if your lawyers want to mention them.",
        "<strong>Who handles it</strong>: linked profiles of the lawyers active in that matter type.",
        "<strong>Related questions</strong>: a short FAQ written by your team.",
        "<strong>A contact route</strong> that pre-selects the matter type in the intake form.",
      ],
      after: [
        "For law firm website design projects we map the structure from your actual caseload and from search data before any design starts, and we keep matter pages out of the menu clutter by listing them inside each hub. The practice-area architecture table further down shows how the page types fit together.",
      ],
    },
    {
      id: "lawyer-profiles",
      heading: "What belongs on a lawyer profile page?",
      paragraphs: [
        "In law firm website design, a lawyer profile should show who the person is, what matters they handle, how to reach them, and verifiable facts about their standing. For many clients the profile is the deciding page: they are choosing a person, not a logo.",
      ],
      subs: [
        { heading: "Focus areas, not a list of everything", text: "Three to five focus areas linked to the matching practice pages. A profile claiming expertise in fifteen fields reads as less credible, not more." },
        { heading: "Admission and memberships you can show", text: "Year of admission, specialist associations and roles you actually hold, as supplied by the lawyer. The NOvA's Advocatenzoeker lets clients check registration, so the details must match." },
        { heading: "Languages and location", text: "Working languages and the office the lawyer usually works from, useful for both clients and local search." },
        { heading: "Publications and talks", text: "Articles, lectures and contributions to legal journals, each with a date. This is strong evidence of expertise for readers and for search engines." },
        { heading: "A human photo and a direct route", text: "A recent portrait and a contact button that opens the intake form with that lawyer pre-selected, rather than a bare email address." },
      ],
      after: [
        "Technically, each profile carries Person structured data connected to your LegalService entity, with sameAs links to the lawyer's own professional profiles if they want them. We avoid client testimonials on profiles unless your practice has decided how it handles them under the conduct rules and client confidentiality.",
      ],
    },
    {
      id: "nova-rules",
      heading: "What do the NOvA conduct rules mean for law firm website design?",
      paragraphs: [
        `They mean every factual claim on the site must be accurate and every page must respect confidentiality. The NOvA's <a href='${NOVA}' rel='noopener'>Gedragsregels advocatuur</a> were adopted in 2018 and apply alongside the five core values in article 10a of the Advocatenwet: independence, partiality, expertise, integrity and confidentiality.`,
        "The 2018 rules do not contain a separate chapter of advertising rules, but several general rules apply directly to what you publish:",
      ],
      list: [
        "<strong>Rule 3, confidentiality:</strong> no client names, case details or recognisable situations on the site without the client's informed permission, including in “recent successes” sections.",
        "<strong>Rule 7, no unnecessarily hurtful statements:</strong> no copy that belittles opposing parties or other lawyers.",
        "<strong>Rule 8, no incorrect information:</strong> an advocaat must not provide factual information they know, or should know, to be incorrect. That covers win rates, “the best in the Netherlands” claims and outdated legal explanations.",
        "<strong>Rule 9, clarity of capacity:</strong> it must be clear in what role someone acts, which matters if non-lawyer advisers, mediators or legal consultants also appear on the site.",
      ],
      after: [
        "Because the title advocaat is legally protected, profiles should only use it for people registered as such, and job titles for paralegals, juridisch medewerkers and trainees should say exactly what they are.",
        "We are developers, not legal advisers on professional conduct. We build a review step into the project where a partner or your compliance contact signs off every page, and we flag copy that looks risky. The decision is always yours, and your dean (deken) or professional adviser is the right person for doubtful cases.",
      ],
    },
    {
      id: "intake",
      heading: "How do you build a secure intake form for a law firm website?",
      paragraphs: [
        "Good law firm website design asks for the minimum needed to run a conflict check and call back, and keep the sensitive part of the story out of the first message. A secure intake form protects the client and protects your practice from receiving detailed information before you know you can act.",
        "Our standard law firm intake flow looks like this:",
      ],
      list: [
        "Step one asks for name, contact details, matter type and the names of other parties involved, so you can run a conflict check first.",
        "A short free-text field carries a warning in plain language: “Please do not include confidential details yet; we will ask for them once we have confirmed we can help.”",
        "Submissions are encrypted in transit and stored in the site's database on EU hosting registered to your practice, not in a third-party form service with servers you have not assessed.",
        "The notification email to your office says only that a new enquiry has arrived and links to the secure record, so no personal details sit in email inboxes or on phones.",
        "Access is limited by role, every view is logged, and records are deleted on the schedule your practice sets.",
      ],
      after: [
        `If you use a practice-management system that accepts new matters by API, the intake can push the record there instead. Document upload is off by default: it is safer to ask for documents through your usual secure channel after engagement. The broader controls are described on our <a href='/website-security-freelancer/'>website security</a> page.`,
      ],
    },
    {
      id: "privacy-cookies",
      heading: "Cookies, analytics and privacy on a law firm website",
      paragraphs: [
        "A law firm site should work fully for a visitor who refuses every optional cookie, and it should never place tracking cookies before consent. That is both a legal expectation and a trust signal: people researching a divorce or a criminal matter do not want to be followed around the web by ads.",
        `The Dutch government's guidance on <a href='${COOKIES}' rel='noopener'>business.gov.nl</a> says consent must be given actively, is not valid with pre-checked boxes or a cookie wall that blocks normal use, and must be as easy to withdraw as to give. Functional cookies and analytical cookies with no or little impact on privacy do not need consent, and the Autoriteit Persoonsgegevens supervises the rules.`,
        "For most law firms we therefore recommend privacy-friendly analytics configured so it falls under that low-impact exemption, as confirmed by your privacy adviser, and no advertising pixels at all on practice-area pages about sensitive matters. If your practice runs paid campaigns, tags stay off until the visitor accepts, and a consent banner with equally visible accept and refuse buttons controls them.",
        "Embedded maps, videos and chat widgets also set cookies. We load them only after a click, with a placeholder that explains what will happen.",
      ],
      after: [
        `The privacy statement itself is your text. Our sister page on <a href='/netherlands/gdpr-compliant-website-development/'>building a GDPR-compliant website in the Netherlands</a> goes deeper into processor agreements and transfers.`,
      ],
    },
    {
      id: "bilingual",
      heading: "Bilingual law firm website design: Dutch and English done properly",
      paragraphs: [
        "Build Dutch and English as two parallel page trees, each page linked to its counterpart with hreflang annotations, and let visitors switch language on any page without landing back on the homepage. A translate plugin that rewrites text in the browser is not good enough for legal content.",
        "Legal terms do not always translate cleanly, so the two versions often differ in length and emphasis. The Dutch page on kort geding can assume the reader knows the court system; the English page needs a sentence explaining that it is summary proceedings for urgent matters. We design templates that allow this, rather than forcing identical layouts.",
        "Practical rules we follow on bilingual legal sites:",
      ],
      list: [
        "URLs in each language, such as /arbeidsrecht/ and /en/employment-law/, so both can rank.",
        "One shared record for each lawyer, with profile text in both languages, so contact details never drift apart.",
        "Language-specific intake confirmations and privacy statement links.",
        "A clear note on English pages if some services are only available in Dutch.",
      ],
      after: [
        `Your lawyers or a legal translator produce the second language; we never machine-translate legal copy and publish it. If you are unsure whether you need both languages, look at where your enquiries come from today. Our <a href='/international-seo-services/'>international SEO</a> page explains how search engines treat language versions.`,
      ],
    },
    {
      id: "local-seo",
      heading: "Local SEO for law firms: ranking for legal searches in your city",
      paragraphs: [
        "Local SEO is where law firm website design meets marketing: it means being found when someone searches for a type of lawyer plus a place, such as “arbeidsrecht advocaat Utrecht” or “immigration lawyer The Hague”. It rests on three things: well-structured practice and office pages, accurate structured data, and a correctly set-up Google Business Profile.",
      ],
      subs: [
        { heading: "Google Business Profile", text: `Google's <a href='${GBP}' rel='noopener'>Business Profile guidelines</a> list lawyers as individual practitioners who may have their own profile alongside the practice's, and require a real, staffed location; a co-working desk only qualifies with signage, staffed hours and clients received there. You manage the profile; we advise on categories, links and consistency with the site.` },
        { heading: "LegalService structured data", text: "Schema.org marks the older Attorney type as deprecated in favour of LegalService, so we mark up each office as a LegalService with address, opening hours and practice areas, and each lawyer as a Person who works for it." },
        { heading: "Office and city pages", text: "One page per real office, with directions, accessibility information and the lawyers based there. We do not build fake city pages for places where you have no presence." },
        { heading: "Reviews and ratings", text: "Only genuine reviews from platforms you choose, collected in line with your confidentiality approach. We never add rating markup you cannot substantiate." },
      ],
      after: [
        `Nobody can promise a position in the map pack. Good structure, accurate data and steady publishing improve your chances. Monthly SEO from ${P.seo} covers reporting and fixes; our <a href='/netherlands/technical-seo-services/'>technical SEO services for the Netherlands</a> page explains the technical side.`,
      ],
    },
    {
      id: "ai-search",
      heading: "How can a law firm website appear in AI answers and AI Overviews?",
      paragraphs: [
        "Write pages that answer one legal question clearly, show who wrote them and when, and keep them current. AI assistants and Google's AI features pull short, self-contained passages from pages they trust; vague marketing copy rarely gets quoted.",
        "On a law firm site, that means each matter page opens with a two-sentence answer to the visitor's situation, followed by detail. Insights carry an author box linked to the lawyer's profile, a publication date and a “last reviewed” date. When the law changes, the article is updated and the review date moves, rather than a new post contradicting an old one.",
        "Structured data helps machines connect the pieces: the LegalService, its lawyers, their publications and the areas they cover. A clear About page with the practice's history, offices and the NOvA registration of its lawyers gives assistants the facts they need to describe you correctly.",
        "Be careful with automated AI content on legal topics. A generated article with an outdated statement of law is a problem under Rule 8 as well as a quality problem. We can set up AI tools that help your lawyers draft outlines or summaries for review, but a lawyer checks and signs off every published sentence.",
        `Nobody controls which sources an assistant cites. What you control is whether your pages are the clearest, most accurate answer available, and that is what the build is designed for.`,
      ],
    },
    {
      id: "cost",
      heading: "How much does law firm website design cost in the Netherlands?",
      paragraphs: [
        `With BtechWaleTech, a law firm website starts from ${P.site} and a content-heavy legal site from ${P.seoSite}. Quotes from Dutch bureaus and freelancers vary widely, largely because some include Dutch legal copywriting, photography and brand work while others only build.`,
        "The lines that move a law firm quote most are these:",
      ],
      list: [
        "<strong>Number of practice and matter pages.</strong> Ten pages and eighty pages need very different template and linking work.",
        "<strong>Languages.</strong> A second full language tree adds templates, hreflang and review time, even when you supply the text.",
        "<strong>Lawyer count.</strong> Profiles are quick individually but add up across a practice of thirty lawyers, especially with publications feeds.",
        "<strong>Intake and integrations.</strong> A secure form is standard; pushing records into your practice-management system or booking consultations adds integration work.",
        "<strong>Migration.</strong> Moving years of insights from an old site with redirects takes careful mapping.",
        `<strong>Portals.</strong> Client logins and document exchange turn the website into a web application from ${P.software}.`,
      ],
      after: [
        `Every line appears separately in your quote so you can phase or drop items. For Dutch price context across site types, see <a href='/netherlands/website-development-cost/'>website development cost in the Netherlands</a>.`,
      ],
    },
    {
      id: "platform",
      heading: "Which platform is best for law firm website design?",
      paragraphs: [
        "For most Dutch practices, WordPress with a lean custom theme or a headless build on Astro or Next.js with a headless CMS is the best fit. Both let lawyers and marketing staff edit insights and profiles easily, both support proper bilingual structures, and both can be hosted in the EU under your own account.",
      ],
      subs: [
        { heading: "WordPress with the block editor", text: "Good when several people publish insights and want a familiar editor. We build profiles and practice areas as structured content types and avoid heavy page builders, which slow pages and complicate reviews." },
        { heading: "Headless CMS with a static front end", text: "Good for larger practices that care about speed and security. Pages are pre-built and served from a CDN, so there is no public admin login on the site itself." },
        { heading: "Hosted site builders", text: "Fine for a sole practitioner who wants a few pages and will maintain them personally. We will say so if that is all you need." },
      ],
      after: [
        `Whatever the platform, the intake form stores data in a database you control, and admin accounts use two-factor authentication. Our comparison of <a href='/nextjs-vs-wordpress/'>Next.js and WordPress</a> goes into the trade-offs, and the <a href='/netherlands/wordpress-website-development/'>WordPress development page for Dutch firms</a> covers editor set-up.`,
      ],
    },
    {
      id: "timeline",
      heading: "How long does law firm website design take?",
      paragraphs: [
        "Law firm website design takes two to five weeks of build time for most practices, with the real schedule set by how quickly partners review copy. Legal copy review is usually the slowest step, so we start it in the first week rather than at the end.",
      ],
      subs: [
        { heading: "Structure and review plan (first week)", text: "Practice-area map, matter-page list, profile template and a named reviewer for each area. Copy writing starts on your side straight away." },
        { heading: "Design and templates (second week)", text: "Homepage, hub, matter page, profile and intake designs on a staging site, in both languages." },
        { heading: "Build and content loading (third and fourth weeks)", text: "Templates built, profiles and approved pages loaded, intake form tested with dummy data, structured data validated." },
        { heading: "Sign-off and launch (fifth week)", text: "Partner sign-off on every page, redirects from the old site, Search Console submission and a final privacy check with cookies refused." },
      ],
      after: [
        "A sole practitioner with ready copy can launch in the first half of that range. A large practice with dozens of lawyers and two languages sits at the upper end, and a client portal is a separate project of six to twelve weeks.",
      ],
    },
    {
      id: "red-flags",
      heading: "Red flags when choosing a law firm website designer",
      paragraphs: [
        "Be wary of any law firm website design proposal that treats a legal practice like a generic small business. These are the warning signs we see most often in existing law firm websites and in pitches:",
      ],
      list: [
        "Offers to write “results” pages or success percentages without asking about confidentiality or accuracy.",
        "A contact form that emails the full enquiry, including case details, to a shared inbox.",
        "Analytics and ad pixels firing before the visitor has made any cookie choice.",
        "Templates that label every staff member as advocaat, regardless of their actual role.",
        "Stock photos of gavels and scales on every page, which say nothing about your people.",
        "English versions produced by automatic translation and published unchecked.",
        "The domain, hosting or Google Business Profile registered to the designer instead of to your practice.",
        "Promises that competitive legal terms will reach page one by a set date.",
      ],
      after: [
        `Ask any candidate, including us, to show how their intake form handles data and who will own each account. For a general view of the trade-offs between freelancers and bureaus, read <a href='/freelancer-vs-agency-for-website/'>freelancer vs agency for a website</a>.`,
      ],
    },
    {
      id: "working-remotely",
      heading: "Working with a law firm website team in India from the Netherlands",
      paragraphs: [
        "It works through scheduled video calls, a shared tracker and a staging site you can open at any time. India is 3.5 hours ahead of the Netherlands in summer and 4.5 hours in winter, so the overlap covers your late morning and early afternoon, which suits partners who keep mornings for court or clients.",
        "In the first two weeks you receive the itemised quote, hold a kick-off call with the partner who owns the website, agree the practice-area map and see the first templates on staging. Nothing is billed before you approve the quote in writing.",
        "Confidentiality is simple to manage because we never need client files. We work with your published copy, test data and access to your hosting and domain accounts, which stay registered to your practice. If you want a non-disclosure agreement, its terms are agreed in writing before the project starts.",
        "Quotes are in USD, invoices come from India, and payment runs by Wise, bank wire or PayPal against milestones such as approved templates and launch. Your accountant advises on how a non-EU invoice is treated for VAT.",
        `What we do not do: visit your office, attend partner meetings in person, write Dutch legal copy or advise on professional conduct. Our <a href='/outsource-web-development-to-india/'>guide to outsourcing web development to India</a> explains the general model.`,
      ],
    },
    {
      id: "example",
      heading: "Example: law firm website design for a boutique practice in The Hague",
      paragraphs: [
        "A hypothetical scenario to show how the pieces fit, not a past client. Say a six-lawyer boutique in The Hague handles immigration and employment law, with roughly half its clients being international employees and relocating companies.",
        "The plan: two full language trees, English and Dutch, with English as the default for the immigration hub. Two practice hubs with about eight matter pages each, such as highly skilled migrant permits, family reunification, dismissal and sickness, written by the lawyers and reviewed by the managing partner. Six profiles with working languages, admission years and publications, each marked up as a Person linked to a LegalService entity for the office.",
        "The intake form asks for names of all parties and the matter type, runs the practice's conflict check before anyone reads more, and stores records encrypted on EU hosting. A consultation booking step follows only after the practice confirms it can act. Analytics runs in a low-impact configuration, and no advertising tags appear on immigration pages.",
        `On price, the page count and two languages would put this on the ${P.seoSite} content-heavy plan, with booking itemised separately. If the practice later wants a portal for document exchange with relocating employees, that becomes a second project from ${P.software}. Build time around four to five weeks, depending on how quickly copy is approved.`,
      ],
    },
    {
      id: "checklist",
      heading: "Law firm website design checklist before launch",
      paragraphs: [
        "Walk through this law firm website design checklist on the staging site, ideally with a partner and whoever handles your privacy questions:",
      ],
      list: [
        "Every practice and matter page has been approved by a named lawyer.",
        "No client names or recognisable cases appear without written permission.",
        "The title advocaat appears only for registered lawyers; other roles are labelled accurately.",
        "Each lawyer profile matches the details a client would find in the Advocatenzoeker.",
        "The intake form asks for conflict-check details first and warns against sharing confidential facts.",
        "Notification emails contain no enquiry content.",
        "With all cookies refused, the site works and no tracking requests leave the browser.",
        "Dutch and English pages link to each other with hreflang and switch language in place.",
        "LegalService and Person structured data validate without errors.",
        "Your practice holds admin access to the domain, hosting, code, Search Console and Business Profile.",
      ],
      after: [
        `<a href='/contact/'>Send us your current site and a list of your practice areas</a> and we will reply with an itemised quote and a suggested structure.`,
      ],
    },
  ],
  tables: [
    {
      id: "architecture",
      eyebrow: "Site structure",
      heading: "Practice-area architecture for a law firm website",
      note: "A typical structure for a mid-sized practice. Page counts grow with your matter types and languages.",
      columns: ["Page type", "Purpose", "Example", "Links to"],
      rows: [
        ["Practice hub", "Overview of one area of law", "Employment law / Arbeidsrecht", "Matter pages, lawyers, insights"],
        ["Matter page", "One situation a client is in", "Dismissal for urgent cause", "Hub, handling lawyers, intake with matter pre-selected"],
        ["Lawyer profile", "Who the person is and what they handle", "Partner, immigration law", "Focus-area pages, publications, direct intake"],
        ["Insight article", "Explains a legal change or question", "New rules on permit renewals", "Author profile, related matter pages"],
        ["Office page", "Real location for local search", "The Hague office", "Lawyers based there, Business Profile"],
        ["Intake page", "Safe first contact", "Start a conflict check", "Privacy statement, booking after confirmation"],
        ["About and conduct page", "Registration, values, complaints route", "About the practice", "Profiles, privacy and terms"],
      ],
      hideSm: [2],
    },
    {
      id: "conduct-review",
      eyebrow: "Copy review",
      heading: "Website elements to review against the conduct rules",
      note: `Based on the NOvA's <a href='${NOVA}' rel='noopener'>Gedragsregels advocatuur</a>. This is a design checklist, not legal advice; your practice decides.`,
      columns: ["Website element", "What to watch", "How we build it", "Who signs off"],
      rows: [
        ["Case results", "Confidentiality (Rule 3) and accuracy (Rule 8)", "Section left out unless you supply approved, anonymised text", "Partner"],
        ["Comparisons with other lawyers", "Unnecessarily hurtful statements (Rule 7)", "No comparative claims in templates", "Partner"],
        ["Staff titles", "Clarity of capacity (Rule 9), protected title", "Role field per person with fixed options", "Office manager"],
        ["Legal explanations", "Outdated or incorrect statements (Rule 8)", "Author and last-reviewed date on every article", "Authoring lawyer"],
        ["Testimonials and reviews", "Confidentiality and accuracy", "Only from platforms you choose, never invented", "Partner"],
        ["Media mentions", "Disclosure of case information", "Link to the published article, no extra detail", "Partner"],
      ],
      hideSm: [3],
    },
    {
      id: "scope-price",
      eyebrow: "Budget",
      heading: "Law firm website scopes and starting prices",
      note: "Starting prices in USD. Copywriting, translation and photography are not included unless quoted.",
      columns: ["Scope", "Typical content", "Starts from", "Build time"],
      rows: [
        ["Law firm site", "Practice pages, profiles, intake, contact", P.site, "1–2 weeks"],
        ["Content-heavy legal site", "Many matter pages, two languages, insights", P.seoSite, "3–5 weeks"],
        ["Client portal", "Logins, document exchange, matter updates", P.software, "6–12 weeks"],
        ["AI drafting helpers", "Outlines and summaries for lawyer review", P.ai, "2–4 weeks"],
        ["Monthly SEO", "Local SEO, technical fixes, reporting", P.seo, "Monthly"],
        ["Maintenance", "Updates, backups, security, small edits", P.care, "Monthly, after 5 free months"],
      ],
    },
  ],
  areas: {
    eyebrow: "Across the Netherlands",
    heading: "Law firm websites for practices in Dutch cities",
    note: "We work remotely for legal practices anywhere in the Netherlands and never visit offices. Each city's legal market shapes what a practice's site needs.",
    cards: [
      { name: "Amsterdam", note: "Corporate, employment and tech practices, many around the Zuidas, serve international clients who expect a polished English site with detailed lawyer profiles and clear practice structures." },
      { name: "The Hague", note: "As seat of the Dutch government and international courts, The Hague hosts practices in public, international and immigration law that need precise bilingual pages." },
      { name: "Rotterdam", note: "Maritime, transport and commercial litigation practices benefit from matter pages written for business clients, with fast contact routes for urgent disputes." },
      { name: "Utrecht", note: "Central location and a broad mix of family, employment and corporate practices make local SEO and clear office pages especially useful here." },
      { name: "Amstelveen", note: "A large expat population means demand for English pages on employment, family and immigration law, with lawyer profiles that list working languages." },
      { name: "Eindhoven", note: "Technology and manufacturing clients need practices that explain contract and intellectual property work clearly, often in English for international teams." },
      { name: "Leiden", note: "Practices near the university and life-sciences businesses publish insights regularly, so author profiles and review dates matter for credibility." },
      { name: "Haarlem", note: "Family, employment and property practices serving the wider region rely on local searches and a well-kept Google Business Profile for each office." },
      { name: "'s-Hertogenbosch", note: "A court city for Brabant, where litigation and criminal law practices need confidential intake forms and quick routes for urgent enquiries." },
      { name: "Arnhem", note: "Regional practices in Gelderland handling employment, family and administrative law benefit from matter-level pages that answer common local questions." },
      { name: "Groningen", note: "Practices serving the northern provinces need office pages and regional content so clients find local lawyers instead of Randstad firms." },
      { name: "Maastricht", note: "Close to Belgium and Germany, practices here often handle cross-border matters and may need English pages alongside Dutch ones." },
      { name: "Zwolle", note: "Regional commercial and agricultural law practices benefit from clear practice hubs and lawyer profiles that build trust before the first call." },
      { name: "Breda", note: "Practices near the Belgian border serving business and private clients need clean local SEO and intake forms that route to the right lawyer." },
    ],
  },
  process: {
    heading: "How a law firm website project runs",
    steps: [
      ["Share your practice areas", "Send your current site, practice areas, lawyer list and languages. We come back with questions about intake, conflict checks and who reviews copy."],
      ["Get an itemised quote", "Within about two working days, with structure, templates, languages, intake and integrations as separate lines, all starting prices in USD."],
      ["Agree structure and reviewers", "We map hubs, matter pages and profiles, and you name a reviewing lawyer for each area so copy approval runs alongside the build."],
      ["Review templates on staging", "Homepage, hub, matter page, profile and intake designs in both languages, demoed on video calls during your late morning or early afternoon."],
      ["Load approved copy and test", "Only signed-off pages go in. We validate structured data, test intake with dummy records and check the site with every optional cookie refused."],
      ["Launch and maintain", `Redirects, Search Console submission and a final partner sign-off. Five months of maintenance are free, then from ${P.care} a month.`],
    ],
  },
  faqHeading: "Law firm website design: questions from Dutch practices",
  faqs: [
    { question: "How much does law firm website design cost?", answer: `With BtechWaleTech, law firm website design starts from ${P.site} for a site with practice pages, lawyer profiles, a secure intake form and contact details. Content-heavy sites with many matter pages and two languages start from ${P.seoSite}, and client portals from ${P.software}. Quotes from other providers vary widely, often because some include Dutch legal copywriting and photography, so compare what each quote covers.` },
    { question: "What should a law firm website include?", answer: "Clear practice-area hubs with matter pages, a profile for every lawyer with focus areas and languages, a confidential intake form, office pages for each real location, a privacy statement, and insights with author and review dates. Dutch practices with international clients should add a full English version. Everything factual should be approved by your lawyers before it goes live." },
    { question: "Can a Dutch lawyer advertise on their website?", answer: "Yes. Lawyers in the Netherlands may publish websites and promote their services, but the NOvA's Gedragsregels advocatuur still apply. Copy must not include information the lawyer knows or should know is incorrect, must not be unnecessarily hurtful, and must respect client confidentiality. We build a review step so a partner approves every page, and your dean or adviser can help with doubtful cases." },
    { question: "Can we publish case results or client testimonials?", answer: "Only if your practice is comfortable that doing so respects confidentiality and accuracy. Naming a client or describing a recognisable case needs the client's informed permission, and results presented without context can mislead. By default we leave results sections out of templates; if you supply approved, anonymised text, we add it. The final decision belongs to your partners." },
    { question: "How long does it take to design a law firm website?", answer: "Most builds take two to five weeks. A sole practitioner with ready copy can launch in about two weeks, while a practice with many lawyers and two languages usually needs four or five. Partner review of legal copy is often the longest step, so we start it in the first week. A client portal is a separate six to twelve week project." },
    { question: "Do you write the legal content for our website?", answer: "No. Your lawyers write or approve every legal statement, because accuracy is their professional responsibility. We plan the structure, create page templates with prompts for each section, edit English for clarity and layout, and load approved copy. For Dutch copywriting or legal translation, we work alongside whoever you choose." },
    { question: "Should our law firm website be in English as well as Dutch?", answer: "If a meaningful share of your clients are expats, international companies or foreign individuals, yes, and as a full version rather than a single translated page. Each English page should explain Dutch legal concepts a foreign reader will not know. We build both languages as parallel page trees with hreflang so each can rank in its own searches." },
    { question: "How do you keep intake forms confidential?", answer: "The form asks first for contact details, matter type and other parties so you can run a conflict check, and it warns visitors not to include confidential facts yet. Submissions are encrypted and stored on EU hosting registered to your practice, notification emails contain no enquiry content, access is role-based and logged, and records are deleted on your schedule." },
    { question: "Is a law firm website subject to the GDPR?", answer: "Yes. Any site that collects enquiries, runs analytics or sets cookies processes personal data, so the GDPR (AVG) and Dutch cookie rules apply. We build the technical side, such as consent that is active and easy to withdraw, minimal forms and EU hosting. Your practice remains responsible for compliance, confirmed by your own privacy adviser or counsel." },
    { question: "Can visitors refuse cookies and still use the site?", answer: "They should, and on our builds they can. Dutch government guidance says a cookie wall that blocks normal use makes consent invalid, pre-checked boxes do not count, and withdrawing consent must be as easy as giving it. We keep non-essential tags off until a visitor accepts, and test the whole site with every optional cookie refused." },
    { question: "How does local SEO work for a law firm?", answer: `Local SEO for law firms combines practice and office pages written for real searches, LegalService structured data, and a Google Business Profile for each staffed office. Google treats lawyers as individual practitioners who may also have their own profiles. Nobody can guarantee map rankings, but accurate, consistent information improves your chances. Monthly SEO starts from ${P.seo}.` },
    { question: "Which platform is best for a law firm website?", answer: "WordPress with a lean custom theme suits practices where several people publish insights and want a familiar editor. A headless CMS with a static front end suits larger practices that prioritise speed and security. A hosted builder can be enough for a sole practitioner. We choose based on who edits the site and how many pages you need." },
    { question: "Can our law firm website help us appear in AI answers?", answer: "It can improve your chances. AI assistants quote short, clear passages from trustworthy pages, so each matter page should open with a direct answer, show its author and last review date, and be kept current. Structured data connects lawyers, offices and practice areas. No one controls which sources an assistant cites, so treat this as good practice, not a promise." },
    { question: "Can you redesign our existing law firm website without losing traffic?", answer: "Yes. We crawl the old site, map every URL with traffic or links to its new equivalent, set 301 redirects, keep insights at stable addresses where possible and resubmit sitemaps in Search Console after launch. Old practice pages are merged into the new hub structure rather than deleted, so links that point to them still land somewhere useful." },
    { question: "Do we own the website and its accounts?", answer: "Yes. The domain, hosting, code repository, Search Console, analytics and Google Business Profile are registered to your practice from the start. We work through access you grant and hand over every login at the end, with a short guide to editing profiles, adding matter pages and changing intake routing." },
    { question: "Is it safe to hire a web team in India for a law firm website?", answer: "The main confidentiality risk in a website project is client data, and we never need any. We work with published copy, dummy test records and access to accounts you own. The intake form stores enquiries on EU hosting you control. If you want an NDA, its terms are agreed in writing before the project starts." },
    { question: "How do meetings work with a team in India?", answer: "India is 3.5 hours ahead of the Netherlands in summer and 4.5 hours in winter, so video calls happen during your late morning and early afternoon. Each week ends with a demo on the staging site, decisions go into a shared tracker, and quick questions are answered on WhatsApp seven days a week." },
    { question: "How do we pay for law firm website design from India?", answer: "Quotes are in USD and invoices come from India. You pay by Wise, bank wire or PayPal against milestones such as approved templates and launch, and nothing is billed before you approve the quote in writing. Your accountant can advise on how a non-EU invoice is treated for Dutch VAT." },
    { question: "Can you add online consultation booking?", answer: "Yes. We can add booking tied to lawyers' calendars, ideally shown only after the conflict check, so you do not book a meeting with a party you cannot represent. The booking step can make clear whether a first consultation is paid or free, using wording your practice approves." },
    { question: "Can you build a client portal for document exchange?", answer: `Yes, as a separate web application starting from ${P.software}. A portal can offer secure logins, document upload and download, matter status updates and audit logs, hosted in the EU under your account. It usually takes six to twelve weeks and is often best as a second phase after the public website is live.` },
    { question: "What maintenance does a law firm website need?", answer: `Software updates, security patches, backups, uptime checks and small edits such as new lawyer profiles or updated practice pages. The first five months after launch are free; after that, maintenance starts from ${P.care} a month. We also re-check the intake form and cookie behaviour after major updates, since plugin changes can affect both.` },
  ],
  related: {
    heading: "Related pages for Dutch businesses",
    links: [
      { name: "GDPR-compliant website development", href: "/netherlands/gdpr-compliant-website-development/" },
      { name: "Web developer for Amsterdam businesses", href: "/netherlands/web-developer-for-amsterdam-businesses/" },
      { name: "Recruitment agency website design", href: "/netherlands/recruitment-agency-website-design/" },
      { name: "WordPress website development Netherlands", href: "/netherlands/wordpress-website-development/" },
      { name: "Technical SEO services Netherlands", href: "/netherlands/technical-seo-services/" },
      { name: "European Accessibility Act website compliance", href: "/netherlands/european-accessibility-act-website-compliance/" },
      { name: "Website development cost in the Netherlands", href: "/netherlands/website-development-cost/" },
      { name: "Custom software development Netherlands", href: "/netherlands/custom-software-development/" },
      { name: "AI automation for Dutch SMEs", href: "/netherlands/ai-automation-agency/" },
      { name: "Real estate website development", href: "/netherlands/real-estate-website-development/" },
      { name: "All services for the Netherlands", href: "/netherlands/" },
      { name: "Outsource web development to India", href: "/outsource-web-development-to-india/" },
      { name: "Contact", href: "/contact/" },
    ],
  },
  cta: {
    heading: "Send us your practice areas and current site",
    note: "We reply with a suggested page structure and an itemised quote in USD within about two working days. Nothing is billed before you approve it in writing.",
  },
};

export default content;
