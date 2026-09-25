import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const MOF = "https://mof.gov.ae/einvoicing/";
const FIELDS = "https://mof.gov.ae/wp-content/uploads/2026/02/UAE-Electronic-Invoice-mandatory-fields_V-1.0-23Feb2026.pdf";
const ASPS = "https://mof.gov.ae/en/about-us/initiatives/einvoicing/pre-approved-einvoicing-service-providers";

const content: FreelanceContent = {
  path: "/uae/e-invoicing-integration/",
  crumb: "E-invoicing integration UAE",
  updated: "2026-09-25",
  meta: {
    title: `E-Invoicing Integration UAE: ASP Connectors & Mapping`,
    description: `E-invoicing integration in the UAE: connect your store, ERP or custom software to your ASP with clean PINT AE data. Connector builds from ${P.ai}.`,
    keywords: [
      "e invoicing integration uae", "e-invoicing integration uae", "uae e-invoicing integration", "e invoicing uae",
      "pint ae integration", "peppol integration uae", "asp integration uae", "accredited service provider integration",
      "e-invoicing api integration uae", "erp e-invoicing integration uae", "woocommerce e-invoicing uae", "shopify e-invoicing uae",
      "custom software e-invoicing uae", "uae e-invoicing deadline", "uae e-invoicing timeline 2027", "who needs e-invoicing in uae",
      "uae e-invoicing mandatory fields", "five corner model uae", "e-invoicing developer dubai", "e-invoicing integration cost uae",
      "e-invoicing integration dubai", "e-invoicing integration abu dhabi", "e-invoicing integration sharjah", "how to integrate e-invoicing uae",
      "e-invoicing readiness uae", "e invoicing software integration near me",
    ],
  },
  hero: {
    eyebrow: "E-invoicing connectors · for UAE businesses, built remotely from India",
    h1: "E-invoicing integration in the UAE: connecting your systems to your Accredited Service Provider",
    lede: `E-invoicing integration in the UAE is the engineering work of getting clean, complete invoice data out of your online store, ERP or custom software and into your Accredited Service Provider (ASP), who converts, validates and exchanges it over Peppol. BtechWaleTech is three freelance developers in India who build that connection: data mapping, API connectors, error handling and testing. We are not an ASP and do not give tax advice; your ASP and accountant cover those. Connector projects start from ${P.ai}; see <a href='/uae/'>our other UAE services</a>.`,
    pills: ["Store, ERP & custom software", "PINT AE field mapping", "ASP API connectors", "Master data clean-up", "Rejection handling", "Sandbox testing", "We are developers, not an ASP"],
    origin: "Three freelance developers in India · 1.5 hours ahead of UAE time · WhatsApp 7 days a week",
  },
  facts: [
    ["Connector work from", `${P.ai}`],
    ["Custom invoicing modules from", `${P.software}`],
    ["Typical connector build", "2–4 weeks after ASP sandbox access"],
    ["Our role", "Developer; your ASP handles exchange and reporting"],
    ["Billing", "USD · Wise or bank wire"],
    ["Aftercare", `5 months free, then from ${P.care}`],
  ],
  stats: [
    { value: "5", label: "Corners in the UAE exchange model" },
    { value: "3", label: "Developers working on your connector" },
    { value: "5", label: "Months of free maintenance after go-live" },
    { value: "2", label: "Working days to an itemised quote" },
  ],
  answer: {
    heading: "What does e-invoicing integration in the UAE involve for a business?",
    text: `It means connecting the system that creates your invoices, whether a store, ERP or custom software, to an Accredited Service Provider appointed by you, so every invoice leaves as structured PINT AE data that the ASP validates, exchanges over Peppol and reports to the FTA. A developer maps fields, cleans master data, builds the API connector and tests rejections. Connector projects start from ${P.ai}.`,
    more: `Official timelines and guidance are on the <a href='${MOF}' rel='noopener'>Ministry of Finance e-invoicing portal</a>. If your invoices come from an online store, read <a href='/uae/ecommerce-website-development/'>our UAE ecommerce build guide</a> too.`,
  },
  snapshot: {
    caption: "An e-invoicing connector project at a glance",
    rows: [
      { label: "Goal", value: "Every invoice leaves your system as complete PINT AE data for your ASP" },
      { label: "You appoint", value: "An ASP from the Ministry of Finance list" },
      { label: "We build", value: "Field mapping, data clean-up, API connector, status sync, error queue" },
      { label: "Starting price", value: `Connectors from ${P.ai}; custom invoicing modules from ${P.software}` },
      { label: "Depends on", value: "ASP sandbox access and your accountant's sign-off on tax data" },
      { label: "Not included", value: "ASP services, tax advice, VAT filing, accreditation" },
      { label: "Ownership", value: "Connector code and credentials stay with you" },
    ],
  },
  services: {
    eyebrow: "Integration work we take on",
    heading: "E-invoicing integration services for UAE systems",
    note: "The pieces below cover the developer side of the UAE mandate. Your ASP's own onboarding and your accountant's review sit alongside them.",
    cards: [
      { name: "Readiness audit of your invoicing system", note: "We trace how an invoice is created today, list which mandatory fields your system already holds, which are missing, and where data is typed inconsistently, and deliver a written gap report.", size: "lg" },
      { name: "ASP API connector", note: "A service that sends each finalised invoice or credit note to your ASP's API, stores the response, retries safely on timeouts, and writes the status back to the invoice record.", href: "/uae/custom-software-development/", size: "lg" },
      { name: "Online store connectors", note: "For stores that issue B2B invoices, we capture buyer TRN and legal details at checkout or account level and pass orders to invoicing correctly.", href: "/uae/woocommerce-development/", size: "md" },
      { name: "Master data clean-up", note: "Scripts and review sheets to fix customer TRNs, addresses, emirate values, units of measure and tax categories before go-live.", size: "md" },
      { name: "Custom invoicing modules", note: `Where your software has no proper invoicing, we build numbering, credit notes and locking of issued invoices, from ${P.software}.`, href: "/uae/erp-software-development/", size: "md" },
      { name: "Inbound invoice handling", note: "Receiving supplier e-invoices from your ASP and pushing them into purchase approval or accounts payable.", size: "sm" },
      { name: "Monitoring and alerts", note: "A dashboard of sent, accepted and rejected invoices, with WhatsApp or email alerts when rejections pile up.", size: "sm" },
      { name: "Ongoing support", note: `Five months of free maintenance, then from ${P.care}, including changes when the ASP updates its API.`, href: "/uae/website-maintenance-services/", size: "sm" },
    ],
  },
  comparison: {
    heading: "Who can do what in a UAE e-invoicing rollout",
    note: "Most businesses need more than one of these. The table shows where each is strong so you can split the work sensibly.",
    columns: ["Task", "Your ASP's onboarding team", "Your ERP vendor's connector", "BtechWaleTech as developer"],
    rows: [
      ["Peppol exchange and FTA reporting", "Yes, this is their accredited role", "No", "No, we are not an ASP"],
      ["Conversion to the UAE XML standard", "Yes", "Sometimes pre-formats", "Sends clean data in the ASP's accepted format"],
      ["Mapping fields from a custom or niche system", "Limited to their templates", "Only for their own product", "Yes, any system with a database or API"],
      ["Cleaning customer TRNs and addresses", "Flags errors after the fact", "Rarely", "Scripts plus review sheets before go-live"],
      ["Changes inside your store or custom software", "No", "No", "Yes"],
      ["Tax treatment of a transaction", "Guidance on format only", "No", "No; your accountant decides"],
      ["Rejection queue and retries", "Returns status codes", "Varies", "Built into your system with alerts"],
      ["Cost basis", "Their subscription or per-invoice fees", "Licence or add-on", `Project quote; connectors from ${P.ai}`],
    ],
    fine: "If your ERP vendor already ships a certified connector for your ASP and your data is clean, you may not need a developer at all; we will tell you so after the readiness audit.",
  },
  pricing: {
    heading: "What e-invoicing integration work starts at",
    note: `A connector between an existing system and your ASP's API starts from ${P.ai}. Building proper invoicing into software that lacks it, with numbering, credit notes, locking and audit trails, starts from ${P.software}. The cost is driven by how many systems create invoices, how clean your customer and product data already is, whether credit notes and self-billing are involved, and how well documented your ASP's API is. ASP subscription or per-invoice fees are paid to the ASP directly and are not part of our quote. The readiness audit is scoped first, so you see the gap before committing to the build.`,
  },
  guideLabel: "E-invoicing integration in the UAE: a developer's guide",
  guide: [
    {
      id: "what-integration-means",
      heading: "What is e-invoicing integration in the UAE?",
      paragraphs: [
        `E-invoicing integration in the UAE is the connection between the software where your invoices are created and the Accredited Service Provider you appoint to exchange them. Without it, staff would have to re-key every invoice into a portal, which does not scale beyond a handful a day.`,
        `The Ministry of Finance defines an eInvoice as a structured form of invoice data exchanged electronically between supplier and buyer and reported to the Federal Tax Authority. Its <a href='${MOF}' rel='noopener'>e-invoicing portal</a> is explicit that PDFs, Word documents, images, scanned copies and emails are not eInvoices. So the PDF your system emails today is not enough; the same invoice must also exist as machine-readable data in the agreed format.`,
        `That is why UAE e-invoicing integration is mostly about data. Your ASP handles the Peppol exchange and the reporting. What it cannot do is invent a buyer's tax registration number your system never captured, or guess which emirate an address belongs to. Integration means making sure your system holds every required value, formats it the way your ASP expects, sends it reliably, and records what happened.`,
      ],
    },
    {
      id: "timeline",
      heading: "When must UAE businesses go live with e-invoicing?",
      paragraphs: [
        `Businesses with revenue of AED 50 million or more must appoint an ASP by 30 October 2026 and implement e-invoicing by 1 January 2027. Businesses below AED 50 million must appoint an ASP by 31 March 2027 and implement by 1 July 2027. Government entities follow by 1 October 2027.`,
        `Those dates come from Ministerial Decision No. 244 of 2025 on the Implementation of the Electronic Invoicing System, as amended by Ministerial Decision No. 66 of 2026, which moved the first group's ASP appointment deadline from 31 July 2026 to 30 October 2026 while keeping the 1 January 2027 go-live. The same decision allowed voluntary implementation from 1 July 2026 and set up a pilot programme from that date.`,
        `Two points matter for planning your e-invoicing integration in the UAE. First, Decision 244 states that business-to-consumer transactions are not subject to the system, and a person engaged exclusively in them is out of scope, until the Minister decides otherwise. Second, “revenue” is defined as gross income in the most recent accounting period. Which phase you fall into is a question for your accountant, not for us, but once you know it, count backwards: an ASP contract, sandbox access, a mapping phase and a test phase all need to fit before your date.`,
      ],
      list: [
        "Revenue of AED 50 million or more: ASP by 30 October 2026, live by 1 January 2027.",
        "Revenue below AED 50 million: ASP by 31 March 2027, live by 1 July 2027.",
        "Government entities: ASP by 31 March 2027, live by 1 October 2027.",
      ],
      after: [
        `Dates can change by later decision, so check the Ministry of Finance portal before you lock your plan. We re-check it at the start of every engagement.`,
      ],
    },
    {
      id: "five-corner",
      heading: "How does the UAE five-corner e-invoicing model work?",
      paragraphs: [
        `The UAE uses a decentralised model on the OpenPeppol network with five parties: the supplier, the supplier's ASP, the buyer's ASP, the buyer, and the Federal Tax Authority. The Ministry calls it the Decentralised Continuous Transaction Control and Exchange model, or DCTCE.`,
        `In practice: your system (corner 1) produces the invoice data and passes it to your ASP (corner 2). Your ASP validates it, converts it to the UAE standard, and sends it across Peppol to the buyer's ASP (corner 3), who delivers it to the buyer (corner 4). In parallel, the ASP reports tax data to the FTA (corner 5). The Ministry notes this reporting is intended to support pre-population of VAT return fields.`,
        `For UAE e-invoicing integration, the important part is the boundary between corners 1 and 2. Everything to the left of that line is yours to get right: the data, the timing, the numbering and the record of what was sent. Everything to the right belongs to the ASP. A good integration keeps that boundary clean, so you can change ASP later without rewriting your invoicing, and so each rejection can be traced back to a specific field in a specific invoice.`,
      ],
    },
    {
      id: "pint-ae-fields",
      heading: "What data does PINT AE require on each invoice?",
      paragraphs: [
        `PINT AE is the UAE's customisation of the Peppol International invoice specification, and it defines the data every e-invoice must carry. The Ministry's <a href='${FIELDS}' rel='noopener'>mandatory fields document</a> (version 1.0, 23 February 2026) lists 51 fields for an electronic tax invoice, grouped into invoice details, seller, buyer, totals, tax breakdown and invoice lines.`,
        `Several of these fields will not exist in a typical store or small ERP. The <strong>invoice transaction type code</strong> is a string of eight flags covering free trade zone, deemed supply, margin scheme, summary invoice, continuous supply, disclosed agent billing, supply through e-commerce and exports. The <strong>seller legal registration identifier type</strong> must say whether the identifier is a trade licence (TL), Emirates ID (EID), passport (PAS) or Cabinet Decision (CD). Invoice lines need a unit of measure code, item tax category and rate, and the VAT and line amounts expressed in AED even when the invoice currency differs.`,
        `Identity also changes. The document explains that your Peppol participant identifier is based on your Tax Identification Number, the first 10 digits of your 15-digit TRN, and that for UAE-registered sellers the electronic identifier scheme is the fixed value 0235. Buyers need the same kind of details. Collecting these reliably at the point of sale is usually the largest single piece of work in e-invoicing integration for the UAE.`,
      ],
    },
    {
      id: "choosing-asp",
      heading: "How to choose an ASP with integration in mind",
      paragraphs: [
        `For e-invoicing integration in the UAE, choose an ASP from the Ministry's <a href='${ASPS}' rel='noopener'>list of accredited service providers</a>, then compare them on how easily your systems can talk to them. Accreditation covers the exchange; it does not tell you whether the API suits your software.`,
        `The Ministry's accreditation service page sets out what ASPs must show, including active Peppol certification with conformance testing, at least two years of experience operating an e-invoicing system, and ISO/IEC 27001 and ISO 22301 certificates. That is reassuring on security and continuity. What you still need to find out is practical:`,
      ],
      list: [
        "Which input formats does the ASP accept: PINT AE XML only, or also JSON, CSV or its own schema?",
        "Is there a sandbox with realistic validation, and how quickly is access granted?",
        "Does it offer a ready connector for your ERP or store platform, and who maintains it?",
        "How are rejections returned: synchronous response, webhook, or polling?",
        "Can it deliver inbound supplier invoices to you by API as well as portal?",
        "How is pricing structured, and what happens to your data if you switch provider?",
      ],
      after: [
        `We are happy to join the technical calls with shortlisted ASPs and ask these questions for you. The commercial decision and the contract remain yours.`,
      ],
    },
    {
      id: "developer-role",
      heading: "What a developer can and cannot do for UAE e-invoicing",
      paragraphs: [
        `In UAE e-invoicing integration, a developer makes your systems produce, send and track correct invoice data; a developer does not exchange invoices over Peppol, report to the FTA, or decide how a transaction is taxed. Keeping that line clear protects you.`,
      ],
      subs: [
        { heading: "What we do", text: "Audit invoice data, map fields to your ASP's format, add missing fields to forms and records, clean master data, build the API connector, handle rejections and retries, add credit-note flows, build monitoring, and document everything for your team." },
        { heading: "What we do not do", text: "We are not an Accredited Service Provider, not a tax agent, and not accountants. We do not advise whether a supply is zero-rated, exempt or out of scope, whether you are in the first or second phase, or how to file VAT returns." },
        { heading: "Where the two meet", text: "Tax categories and transaction flags are configured from a decision table your accountant approves. We implement the table exactly and show test invoices for each case so your accountant can confirm the output." },
      ],
      after: [
        `This split also shapes the contract. Our quote covers software work only, and ASP fees are paid to the ASP. See our <a href='/terms/'>terms</a> for how scope and approvals work.`,
      ],
    },
    {
      id: "integration-patterns",
      heading: "Four ways to connect a UAE business system to an ASP",
      paragraphs: [
        `There are four common patterns for e-invoicing integration in the UAE, and the right one depends on invoice volume and how many systems issue invoices.`,
      ],
      subs: [
        { heading: "1. Portal upload", text: "Staff export invoices from your system and upload them to the ASP's portal. Workable for a few invoices a week; error-prone beyond that, and every upload is a manual step someone can forget." },
        { heading: "2. Native ERP connector", text: "Your ERP vendor or ASP provides a ready connector. Fastest when it exists and your data is clean; our role, if any, is data clean-up and testing." },
        { heading: "3. Direct API connector", text: `Your store or custom software calls the ASP's API when an invoice is finalised. This is the most common pattern for custom and niche systems, with connectors from ${P.ai}.` },
        { heading: "4. Middleware hub", text: "A small service collects invoices from several systems, such as a store, a service billing app and an ERP, normalises them and sends them to one ASP. Useful for groups with multiple entities or invoicing sources." },
      ],
      after: [
        `Patterns 3 and 4 keep the ASP-specific code in one place. If you later change ASP, only that component changes, not your invoicing logic.`,
      ],
    },
    {
      id: "master-data",
      heading: "Cleaning master data before your e-invoicing go-live",
      paragraphs: [
        `Most e-invoicing rejections trace back to master data, not code: a TRN with a typo, an address with no city, an emirate typed five different ways, or a product with no unit of measure. Fix these before the first live invoice and you avoid a flood of rejections in week one.`,
        `We start by exporting customers, suppliers and products and running checks against the rules in the mandatory fields document: TRN length and format, presence of legal registration identifiers and their type, address line and city, country subdivision values, country code, unit of measure codes and tax category. Each failure goes into a review sheet grouped by problem, so your finance team fixes fifty similar records in one sitting rather than hunting individually.`,
        `Then we stop the problem coming back, because UAE e-invoicing integration is only as good as the data behind it. Customer forms get required fields with validation, emirate becomes a dropdown instead of free text, and product creation insists on a unit and tax category. Small changes, but they are what keep your e-invoicing integration clean after the project team has moved on.`,
      ],
    },
    {
      id: "ecommerce-stores",
      heading: "E-invoicing integration for UAE online stores",
      paragraphs: [
        `If your store sells only to consumers, Decision 244 currently places those transactions outside the system; if it also sells to businesses, the B2B invoices need full e-invoicing data. Many UAE stores sit in between: trade accounts, bulk orders from companies, or corporate gifting.`,
        `For mixed stores, e-invoicing integration in the UAE means separating the flows. Business customers get an account type that captures legal name, TRN, trade licence number and a structured address, and B2B orders generate invoices through the connector while consumer orders continue as before. The transaction type flag for supply through e-commerce is set according to your accountant's decision table rather than hard-coded.`,
        `Store platforms differ in how much of this they can hold natively. WooCommerce allows custom checkout and account fields plus a connector plugin or service; hosted platforms usually need an app or an external service reading orders by API. Our guides to <a href='/uae/woocommerce-development/'>WooCommerce development in Dubai</a> and <a href='/uae/payment-gateway-integration/'>payment gateway integration in the UAE</a> cover the checkout side of the same store.`,
      ],
    },
    {
      id: "custom-software",
      heading: "Custom and legacy software: invoicing rules that must exist first",
      paragraphs: [
        `Before custom software is ready for e-invoicing integration in the UAE, its invoicing has to behave like invoicing: sequential numbers that never repeat, issued invoices that cannot be edited, corrections made by credit note, and a record of who did what. Many in-house tools built for quotations or job tracking do not meet that bar yet.`,
        `We check four things. Numbering must be unique per issuing entity and never reused, even after deletion. Once issued, an invoice must be locked; changes happen through a linked credit note carrying its own number and a reference to the original. Every invoice needs a stored copy of the exact data sent to the ASP and the response received. And totals must be computed consistently, with rounding rules that match what the ASP validates.`,
        `If these are missing, we add them as a module inside your software, from ${P.software}, before building the connector. For firms weighing a wider rebuild of inventory and billing, <a href='/uae/erp-software-development/'>ERP software development in Dubai</a> covers that decision.`,
      ],
    },
    {
      id: "inbound",
      heading: "Receiving supplier e-invoices into your accounts",
      paragraphs: [
        `E-invoicing runs both ways: once your suppliers are live, their invoices arrive through your ASP as structured data. Inbound UAE e-invoicing integration turns those into purchase records automatically instead of printing them for data entry.`,
        `Your ASP delivers inbound invoices by portal, API or webhook. We build a receiver that stores the original data, matches the supplier by TIN, tries to match lines to purchase orders or goods received, and routes exceptions to a named person for approval. Matched invoices flow into your accounting system; unmatched ones wait in a queue with the reason shown.`,
        `This is where the mandate can save time rather than only cost it. Invoice data arrives already structured, so there is nothing to type. For larger volumes, an <a href='/uae/ai-automation-agency-alternative/'>AI automation</a> step can suggest matches for irregular lines, with a person approving before posting.`,
      ],
    },
    {
      id: "testing",
      heading: "Testing an e-invoicing integration before your deadline",
      paragraphs: [
        `Test any e-invoicing integration in the UAE in your ASP's sandbox using real invoice patterns from your own history, including the awkward ones. A connector that passes ten clean invoices and fails on the first credit note is not ready.`,
        `We build a test set from the past year: standard invoices, zero-rated and exempt lines if you have them, multi-currency invoices, credit notes, free-zone customers, very long item descriptions, and customers with incomplete data. Each goes through the sandbox, and each response is compared with what we expected. Your accountant reviews a sample of rendered outputs for tax categories and flags.`,
        `Failure handling gets tested deliberately: the ASP timing out, returning an error, or accepting an invoice twice. The connector must retry without creating duplicates, keep a queue that survives a server restart, and show staff clearly which invoices need attention. Only after that do we plan the live switch-over, usually starting with one invoice series before moving everything.`,
      ],
    },
    {
      id: "cost",
      heading: "What does e-invoicing integration in the UAE cost?",
      paragraphs: [
        `With us, a connector from an existing system to your ASP starts from ${P.ai}, and a full invoicing module for software that lacks one starts from ${P.software}. ASP fees are separate and paid to the ASP.`,
        `The biggest cost drivers are the number of invoicing sources, the state of your master data, and the quality of the ASP's API documentation and sandbox. One store sending B2B invoices with clean customer records is a small project. Three entities, a legacy billing tool with editable invoices, and ten thousand customer records with free-text addresses is a larger one, mainly because of clean-up and the invoicing fixes that must come first. Credit notes, self-billing and inbound invoice processing each add scope.`,
        `Quotes for UAE e-invoicing integration vary widely across the market, often because some include ASP subscriptions or ERP licences and some do not. Ask for the software work to be itemised separately from any third-party fees so you can compare. For wider technology budgeting, see <a href='/uae/website-development-cost/'>website development cost in Dubai</a>.`,
      ],
    },
    {
      id: "working-from-uae",
      heading: "Working with a remote development team in India on UAE e-invoicing",
      paragraphs: [
        `India is 1.5 hours ahead of UAE time, so an e-invoicing integration project run from India shares almost all of your working day. Calls with your finance team and your ASP's technical contact can happen in normal UAE office hours without anyone staying late.`,
        `We work through access you grant: a read-only database copy or export for the audit, a staging copy of your system for development, and sandbox credentials issued by your ASP to your business, never to us personally. Production credentials stay in your secrets store, and at the end of the project you revoke our access. Confidentiality terms are agreed in the written quote before you share financial data.`,
        `Invoices for our work are in USD and issued from India; you pay by Wise or bank wire, and nothing is billed before written approval of the quote. We do not advise on how imported services are treated for your VAT; your accountant handles that.`,
      ],
      subs: [
        { heading: "First two weeks", text: "Week one: kick-off with finance and IT, access set up, invoice data exported, ASP shortlist or contract confirmed. Week two: readiness audit delivered with a field-by-field gap report, master data review sheets, and a build plan with dates that land before your deadline." },
      ],
    },
    {
      id: "worked-example",
      heading: "Worked example: a hypothetical Dubai distributor preparing for 1 July 2027",
      paragraphs: [
        `Say a Dubai-based distributor of catering equipment, with revenue under AED 50 million, invoices hotels and restaurants from a custom order system and also runs a small online store for trade buyers. This is an illustration, not a client case.`,
        `The accountant confirms the phase: ASP appointed by 31 March 2027, live by 1 July 2027. In January the readiness audit finds that the order system allows editing invoices after issue, stores emirate as free text, and has no unit of measure on about a third of products. The store captures company name but not TRN.`,
        `The UAE e-invoicing integration plan runs in three blocks. February: invoice locking, credit notes and numbering added to the order system, and the store's trade accounts gain TRN and licence fields. March: master data clean-up with the finance team, ASP contract signed, sandbox access received. April to May: connector built, test set of sixty historic invoice patterns run through the sandbox, accountant signs off tax mapping. June: live on one invoice series, then all. The distributor goes live ahead of the deadline with time to spare for fixes.`,
      ],
    },
    {
      id: "checklist",
      heading: "UAE e-invoicing integration checklist",
      paragraphs: [
        `Work through this e-invoicing integration checklist for the UAE with your finance lead and your ASP. Items marked for the accountant are decisions we implement, not decisions we make.`,
      ],
      list: [
        "Accountant confirms which phase applies and your deadlines.",
        "ASP chosen from the Ministry list and contract signed in your business's name.",
        "Every system that issues invoices identified, including side tools and spreadsheets.",
        "Gap report of the 51 mandatory fields against each system completed.",
        "Invoice numbering unique and permanent; issued invoices locked; credit notes linked.",
        "Customer and product master data cleaned, with validation to keep it clean.",
        "Tax category and transaction-flag decision table approved by your accountant.",
        "Connector tested in the ASP sandbox with real historic invoice patterns.",
        "Rejection queue, alerts and a named owner in finance in place.",
        "Inbound supplier invoices routed to approval or accounts payable.",
      ],
    },
    {
      id: "red-flags",
      heading: "Red flags when hiring help for e-invoicing integration",
      paragraphs: [
        `When hiring for e-invoicing integration in the UAE, be cautious of anyone who claims to “make you compliant” end to end without mentioning your ASP or your accountant. Compliance under the UAE system depends on an accredited provider, correct tax decisions and correct data, and no single developer controls all three.`,
      ],
      list: [
        "A developer describing themselves as an ASP without appearing on the Ministry's list.",
        "Credentials for your ASP account issued in the developer's name instead of yours.",
        "No plan for credit notes, rejections or retries.",
        "Tax categories hard-coded without a documented decision from your accountant.",
        "No sandbox testing phase in the timeline.",
        "A quote that bundles ASP fees and development so you cannot compare either.",
      ],
    },
  ],
  tables: [
    {
      id: "timeline-table",
      eyebrow: "Official timeline",
      heading: "UAE e-invoicing phases and what integration work should be done by then",
      note: `Dates from Ministerial Decision No. 244 of 2025 as amended by Ministerial Decision No. 66 of 2026. Confirm your phase with your accountant and check the <a href='${MOF}' rel='noopener'>Ministry of Finance portal</a> for later changes.`,
      columns: ["Group", "Appoint ASP by", "Implement by", "Integration work finished by"],
      rows: [
        ["Voluntary adopters", "Any time", "From 1 July 2026", "Before you opt in"],
        ["Revenue AED 50 million or more", "30 October 2026", "1 January 2027", "Sandbox tests passed in November–December 2026"],
        ["Revenue below AED 50 million", "31 March 2027", "1 July 2027", "Sandbox tests passed in April–June 2027"],
        ["Government entities", "31 March 2027", "1 October 2027", "Sandbox tests passed by mid-2027"],
        ["Business-to-consumer only", "Not yet in scope", "Until a Ministerial decision", "Keep data structured for later"],
      ],
    },
    {
      id: "mapping-table",
      eyebrow: "Data mapping",
      heading: "Where PINT AE data usually lives in your systems",
      note: "Field groups from the Ministry's mandatory fields document, with the usual source and the most common gap we find.",
      columns: ["Field group", "Typical source", "Common gap"],
      rows: [
        ["Invoice details and numbering", "Invoicing module or order system", "Editable invoices, reused numbers"],
        ["Transaction type flags (8)", "Accountant's decision table", "No place to store them at all"],
        ["Seller identity and TIN", "Company settings", "Legal registration type (TL, EID, PAS, CD) missing"],
        ["Buyer identity and TRN", "Customer or account record", "TRN not captured, or typed with spaces"],
        ["Addresses and country subdivision", "Customer record", "Emirate as free text, city missing"],
        ["Line quantities and units", "Product catalogue", "No unit of measure code"],
        ["Tax category, rate and AED amounts", "Tax settings and currency module", "Foreign-currency invoices lack AED line values"],
      ],
      hideSm: [1],
    },
    {
      id: "patterns-table",
      eyebrow: "Choosing a pattern",
      heading: "Integration patterns compared",
      note: `Starting prices are for our software work only; ASP fees are separate.`,
      columns: ["Pattern", "Best for", "Weak point", "Starts from"],
      rows: [
        ["Portal upload", "A few invoices a week", "Manual, easy to miss", "No build needed"],
        ["Native ERP connector", "Mainstream ERP with clean data", "Tied to one vendor", "Data clean-up only"],
        ["Direct API connector", "Store or custom software", "Needs good ASP documentation", `${P.ai}`],
        ["Middleware hub", "Several invoicing sources or entities", "One more service to host", `${P.software}`],
        ["New invoicing module plus connector", "Software without proper invoicing", "Longest timeline", `${P.software}`],
      ],
    },
  ],
  areas: {
    eyebrow: "Across the UAE",
    heading: "Where we build e-invoicing connectors for UAE businesses",
    note: "All work is remote. These places and business types tend to have the invoicing patterns that make integration worthwhile.",
    cards: [
      { name: "Dubai", note: "Distributors, service firms and B2B online sellers issuing many invoices a day from stores, job systems or custom order tools that now need an ASP connection." },
      { name: "Abu Dhabi", note: "Contractors, suppliers and service companies invoicing large corporate and government-linked buyers, where clean buyer data and credit-note handling matter most." },
      { name: "Sharjah", note: "Manufacturers and trading companies with long product catalogues, where unit of measure codes and product tax categories often need cleaning before go-live." },
      { name: "Ajman", note: "Smaller manufacturers and wholesalers using lightweight or spreadsheet-based invoicing that needs proper numbering and locking before any connector is built." },
      { name: "Ras Al Khaimah", note: "Industrial and export-oriented firms whose invoices mix local and export supplies, making the transaction type flags and AED line values important to map correctly." },
      { name: "Fujairah", note: "Shipping, bunkering-related and logistics service providers with multi-currency invoicing, where AED amounts per line must be computed consistently for the ASP." },
      { name: "Umm Al Quwain", note: "Small trading and service businesses that may start with portal upload and move to an API connector once invoice volume makes manual work risky." },
      { name: "Al Ain", note: "Agricultural suppliers, retailers with trade accounts and service firms that need B2B customer records upgraded with TRNs and structured addresses." },
      { name: "Jebel Ali", note: "Trading and logistics companies in and around the free zone where the free trade zone flag and multiple invoicing entities make a middleware hub worth considering." },
      { name: "Deira", note: "Long-established trading houses whose invoicing may live in older desktop software, often needing a data export route before any modern connector can work." },
      { name: "Al Quoz", note: "Workshops, fit-out firms and creative studios invoicing corporate clients from job-costing tools that need invoice locking and credit notes added." },
      { name: "Mussafah", note: "Industrial service companies and suppliers in Abu Dhabi's industrial area invoicing contractors, where purchase order references on invoices help both sides reconcile." },
      { name: "Dubai Investments Park", note: "Light manufacturers and warehousing operators that combine product sales with service charges and need both flows mapped to PINT AE correctly." },
      { name: "Hamriyah", note: "Free-zone manufacturers and traders in Sharjah selling across the region, where legal registration identifiers and address data need checking customer by customer." },
    ],
  },
  process: {
    heading: "How an e-invoicing integration project runs",
    steps: [
      ["Readiness audit", "We export invoice samples and master data, trace how invoices are created, and deliver a gap report against the mandatory fields, with a build plan and USD quote in about two working days after access."],
      ["Decisions with finance", "Your accountant approves the tax category and transaction-flag decision table. You confirm the ASP and request sandbox credentials in your business's name."],
      ["Fix invoicing basics", "Numbering, locking, credit notes and audit records are added where missing, and forms gain the fields needed to capture buyer and product data correctly."],
      ["Clean master data", "Review sheets grouped by problem let your team fix customer, supplier and product records quickly, and validation stops the same errors returning."],
      ["Build and sandbox test", "The connector is built, then tested with real historic invoice patterns, credit notes and deliberate failures until responses match expectations."],
      ["Go live and support", "One invoice series goes live first, then the rest. Monitoring and alerts run from day one, with five months of free maintenance afterwards."],
    ],
  },
  faqHeading: "E-invoicing integration in the UAE: common questions",
  faqs: [
    { question: "What is e-invoicing integration in the UAE?", answer: "It is the technical connection between the system that creates your invoices, such as an online store, ERP or custom software, and the Accredited Service Provider you appoint. The connection sends each invoice as structured data the ASP can validate, exchange over Peppol and report to the Federal Tax Authority, and records the result back in your system." },
    { question: "When does e-invoicing become mandatory in the UAE?", answer: "Under Ministerial Decision No. 244 of 2025, as amended by Decision No. 66 of 2026, businesses with revenue of AED 50 million or more must appoint an ASP by 30 October 2026 and go live by 1 January 2027. Businesses below that must appoint by 31 March 2027 and go live by 1 July 2027. Government entities go live by 1 October 2027." },
    { question: "Are you an Accredited Service Provider?", answer: "No. BtechWaleTech is three freelance developers. We build the connection between your systems and the ASP you appoint from the Ministry of Finance list, clean your data and test the integration. Exchange over Peppol and reporting to the Federal Tax Authority are done by your ASP under its accreditation." },
    { question: "Does e-invoicing apply to my online store selling to consumers?", answer: "Ministerial Decision No. 244 of 2025 says business-to-consumer transactions are not subject to the system, and someone engaged exclusively in them is out of scope, until the Minister decides otherwise. If your store also sells to businesses, those invoices are affected. Your accountant should confirm how this applies to your sales mix." },
    { question: "What is PINT AE?", answer: "PINT AE is the UAE's version of the Peppol International invoice specification. It defines the structure and mandatory data of UAE e-invoices, such as seller and buyer identifiers, transaction type flags, tax breakdown and invoice lines. The Ministry's mandatory fields document lists 51 fields for an electronic tax invoice." },
    { question: "How much does e-invoicing integration cost in the UAE?", answer: `With BtechWaleTech, a connector from an existing store or system to your ASP starts from ${P.ai}, and adding proper invoicing to software that lacks it starts from ${P.software}. ASP fees are separate. The final cost depends on how many systems issue invoices, the state of your data, and your ASP's API.` },
    { question: "How long does e-invoicing integration in the UAE take?", answer: "A connector for one clean system usually takes two to four weeks once your ASP's sandbox is available. Projects that need invoice locking, credit notes or heavy master data clean-up take longer, often six to twelve weeks in total. Starting with a readiness audit early gives the most room before your deadline." },
    { question: "Can my ERP's built-in connector do the job instead?", answer: "Often, yes. If your ERP vendor or ASP offers a maintained connector for your system and your customer and product data are clean, a developer may only be needed for data clean-up and testing. We say so after the audit rather than selling a build you do not need." },
    { question: "What is the five-corner model?", answer: "It is the UAE's exchange model on the Peppol network. The supplier sends invoice data to its ASP, which validates it and sends it to the buyer's ASP, which delivers it to the buyer. The fifth corner is the Federal Tax Authority, which receives tax data from the ASPs. The Ministry calls this the DCTCE model." },
    { question: "Is a PDF invoice still acceptable?", answer: "A PDF can still be useful for people to read, but the Ministry of Finance states that PDFs, Word files, images, scans and emails are not eInvoices. For in-scope transactions, the invoice must also exist as structured data sent through your ASP. Many businesses keep sending a PDF copy alongside for convenience." },
    { question: "What causes e-invoice rejections?", answer: "Most rejections come from data rather than code: missing or mistyped buyer TRNs, addresses without city or emirate, products without a unit of measure, inconsistent tax categories, or totals that do not add up because of rounding. Cleaning master data and validating forms before go-live prevents most of them." },
    { question: "Do we need our accountant involved?", answer: "Yes. Decisions about tax categories, zero-rating, exemptions, transaction flags and which phase applies to you are tax matters. Your accountant approves a decision table, and we implement it exactly and show test invoices for each case. We do not give tax advice." },
    { question: "Can you connect WooCommerce or a custom store to an ASP?", answer: "Yes. For WooCommerce we add B2B account fields such as TRN and trade licence number and send qualifying invoices to your ASP's API. For hosted platforms we usually read orders through the platform's API from a small external service. The approach depends on what your ASP accepts." },
    { question: "What happens if the ASP is down when an invoice is issued?", answer: "A proper connector queues the invoice, retries on a schedule without creating duplicates, and alerts staff if the problem persists. The invoice status in your system shows it as pending, so nobody assumes it was delivered. We test these failure cases in the sandbox before go-live." },
    { question: "Can we switch ASP later?", answer: "Yes, if your UAE e-invoicing integration keeps ASP-specific code in one component. Your invoicing logic, data and records stay the same, and only the connector changes. Ask any ASP how you export your data and what notice applies before signing, since those are contractual matters between you and them." },
    { question: "How do we receive e-invoices from suppliers?", answer: "Supplier e-invoices arrive through your own ASP. We can build a receiver that pulls them by API or webhook, matches suppliers by TIN, matches lines to purchase orders where possible, and routes exceptions for approval before posting into your accounting system." },
    { question: "Why hire a remote team in India for e-invoicing integration in the UAE?", answer: "E-invoicing integration is data and software work that runs well remotely. India is only 1.5 hours ahead of the UAE, so working hours overlap almost fully. You work directly with the three developers doing the build, receive itemised USD quotes, and keep all credentials and code in your business's name." },
    { question: "How do we share financial data safely with a remote team?", answer: "We ask for the minimum: anonymised exports for the audit where possible, a staging copy for development, and sandbox credentials issued to your business. Production credentials stay in your secrets store. Confidentiality terms are agreed in your written quote before any data is shared, and you revoke access at handover." },
    { question: "Who owns the e-invoicing integration code?", answer: "You do. The code lives in your repository or on your server, the ASP account and credentials are in your business's name, and documentation is handed over at the end. If you later move support to another developer or your own IT team, they can take it over without asking us for anything." },
    { question: "What support is there after go-live?", answer: `Five months of free maintenance cover fixes, monitoring and help when rejections spike. After that, support starts from ${P.care}, including updates when your ASP changes its API or the Ministry publishes a new version of the specification.` },
    { question: "How do we pay for the work from the UAE?", answer: "Quotes and invoices are in USD and issued from India. UAE clients usually pay by Wise or bank wire. Nothing is billed until you approve the itemised quote in writing. How our invoices are treated for your own VAT is a question for your accountant." },
  ],
  related: {
    heading: "Related UAE guides",
    links: [
      { name: "ERP software development in Dubai", href: "/uae/erp-software-development/" },
      { name: "Custom software development in Dubai", href: "/uae/custom-software-development/" },
      { name: "WooCommerce development in Dubai", href: "/uae/woocommerce-development/" },
      { name: "Payment gateway integration in the UAE", href: "/uae/payment-gateway-integration/" },
      { name: "Website development cost in Dubai", href: "/uae/website-development-cost/" },
      { name: "Arabic website design", href: "/uae/arabic-website-design/" },
      { name: "Freight forwarding software in the UAE", href: "/uae/freight-forwarding-software/" },
      { name: "Web application development in Dubai", href: "/uae/web-application-development/" },
      { name: "AI automation for UAE businesses", href: "/uae/ai-automation-agency-alternative/" },
      { name: "All UAE services", href: "/uae/" },
      { name: "Offshore web development team", href: "/offshore-web-development-team/" },
      { name: "Contact the team", href: "/contact/" },
    ],
  },
  cta: {
    heading: "Book a readiness audit before your ASP deadline",
    note: "Tell us on WhatsApp which systems issue your invoices and which phase your accountant says you are in. You get an audit scope and an itemised USD quote in about two working days.",
  },
};

export default content;
