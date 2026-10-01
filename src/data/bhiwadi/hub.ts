import { inr } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: inr("Static"), seoSite: inr("SEO website"), shop: inr("Ecommerce"), app: inr("Android"),
  software: inr("Custom web app"), ai: inr("AI automation"), seo: inr("Monthly SEO"), care: inr("Maintenance"),
};

/** Service groups of src/data/bhiwadi/pages.json; the hub renders one linked table per group. */
export const groups = [
  { key: "websites", id: "bhiwadi-websites", eyebrow: "Websites", heading: "Website development in Bhiwadi", note: "Business websites, online stores, redesigns and upkeep for firms across Bhiwadi, from a shop on Alwar Bypass Road to a plant in Chopanki." },
  { key: "industry-websites", id: "bhiwadi-industry-websites", eyebrow: "Websites by industry", heading: "Websites for Bhiwadi manufacturers, schools, hospitals and hotels", note: "Pages written around what each kind of Bhiwadi buyer checks before calling you." },
  { key: "more-websites", id: "bhiwadi-sector-websites", eyebrow: "More industries", heading: "Websites for chemical, steel, packaging, electronics and local businesses in Bhiwadi", note: "Sector pages for the units that make up the Bhiwadi industrial belt, plus clinics, coaching centres and shops. Two guides are in Hinglish." },
  { key: "apps", id: "bhiwadi-apps", eyebrow: "Mobile apps", heading: "Android and iOS app development in Bhiwadi", note: "Customer apps, staff apps and dealer apps, tested on the phones your people in Bhiwadi actually carry." },
  { key: "business-software", id: "bhiwadi-business-software", eyebrow: "Business software", heading: "ERP, CRM, HR and billing software in Bhiwadi", note: "Custom software and ERP for Bhiwadi businesses that have outgrown registers and spreadsheets." },
  { key: "factory-software", id: "bhiwadi-factory-software", eyebrow: "Factory software", heading: "Software for plants in the Bhiwadi industrial belt", note: "Production, quality, stores, gate, visitor, maintenance, purchase, canteen and transport systems for factories in Bhiwadi, Chopanki, Khushkhera and Tapukara." },
  { key: "sector-software", id: "bhiwadi-sector-software", eyebrow: "Software and data", heading: "School, hospital and real estate software, dashboards and cloud in Bhiwadi", note: "Web apps, MIS dashboards, Tally integration, cloud hosting and MVPs for Bhiwadi institutions and founders." },
  { key: "seo", id: "bhiwadi-seo", eyebrow: "SEO", heading: "SEO and Google visibility in Bhiwadi", note: "Local SEO, Google Business Profile, industrial SEO and AI-search visibility for businesses in Bhiwadi." },
  { key: "ai-automation", id: "bhiwadi-ai", eyebrow: "AI and automation", heading: "AI automation and WhatsApp tools in Bhiwadi", note: "Chatbots, AI agents, document reading and workflow automation that remove repetitive work in Bhiwadi offices and plants." },
  { key: "developers", id: "bhiwadi-developers", eyebrow: "Hire developers", heading: "Hire developers and IT consultants in Bhiwadi", note: "Freelance, full-stack, React, Laravel, Node.js and design help, plus digital roadmaps for Bhiwadi MSMEs." },
];

const content: FreelanceContent = {
  path: "/bhiwadi-rajasthan/",
  crumb: "Bhiwadi",
  updated: "2026-09-27",
  meta: {
    title: "IT Services in Bhiwadi: Websites, Apps & Software",
    description: `IT services in Bhiwadi, Rajasthan: websites from ${P.site}, apps, ERP, SEO and AI automation. We meet you one to one in Bhiwadi, at your office or factory.`,
    keywords: [
      "IT services in Bhiwadi", "IT solutions in Bhiwadi", "software developer in Bhiwadi", "website developer in Bhiwadi",
      "website development services in Bhiwadi", "app developer in Bhiwadi", "Android developer Bhiwadi", "SEO services Bhiwadi",
      "ERP software Bhiwadi", "digital marketing Bhiwadi", "web designer Bhiwadi Rajasthan", "IT services Bhiwadi Alwar",
      "software developer Bhiwadi", "website design Bhiwadi", "freelance developers near me Bhiwadi", "Bhiwadi IT services for factories",
      "website developer Chopanki", "software developer Khushkhera", "IT services Tapukara", "IT services Neemrana",
      "Bhiwadi me website banane wala", "Bhiwadi software developer", "AI automation Bhiwadi", "WhatsApp chatbot Bhiwadi",
      "IT consultant Bhiwadi", "Bhiwadi Rajasthan website developers",
    ],
  },
  hero: {
    eyebrow: "Bhiwadi · Khairthal-Tijara · NCR",
    h1: "IT services in Bhiwadi: websites, apps, software, SEO and AI, with one-to-one meetings in Bhiwadi",
    lede: `BtechWaleTech brings IT services to Bhiwadi businesses with something most remote teams skip: we meet you face to face in Bhiwadi. Three freelance developers build <a href='/bhiwadi-rajasthan/website-development/'>websites</a>, <a href='/bhiwadi-rajasthan/mobile-app-development/'>Android and iOS apps</a>, <a href='/bhiwadi-rajasthan/erp-software-for-manufacturing/'>ERP and factory software</a>, <a href='/bhiwadi-rajasthan/seo-services/'>SEO</a> and <a href='/bhiwadi-rajasthan/ai-automation/'>AI automation</a> for shops, schools, hospitals and plants across the Bhiwadi industrial belt. Websites start from ${P.site}.`,
    pills: ["Website development", "Android & iOS apps", "ERP & factory software", "SEO & Google Maps", "AI & WhatsApp automation", "Dashboards & Tally", "Maintenance"],
    origin: "Three freelance developers · one-to-one meetings in Bhiwadi · WhatsApp 7 days a week",
  },
  facts: [
    ["Team", "Three freelance developers"],
    ["Meetings", "Face to face in Bhiwadi, at your office or unit"],
    ["Starting price", `Websites from ${P.site}`],
    ["Languages", "Hindi and English"],
    ["Billing", "INR · UPI or bank transfer"],
    ["After launch", "2 months of maintenance free"],
  ],
  stats: [
    { value: "3", label: "developers who meet you and build your project" },
    { value: "100", label: "service guides written for Bhiwadi" },
    { value: "2", label: "working days to an itemised quote" },
    { value: "2", label: "months of free maintenance after launch" },
  ],
  answer: {
    heading: "Who provides IT services in Bhiwadi and meets clients in person?",
    text: `BtechWaleTech, a team of three freelance developers, builds websites, apps, ERP, factory software, SEO and AI automation for Bhiwadi businesses and meets clients one to one in Bhiwadi, at their office, shop or plant. Websites start from ${P.site}, apps from ${P.app} and custom software from ${P.software}, with two months of free maintenance after launch.`,
    more: `Pick your service from the tables below, or read the <a href='/bhiwadi-rajasthan/it-solutions/'>guide to IT solutions in Bhiwadi</a> first. Prices are explained on the <a href='/pricing/'>pricing page</a>.`,
  },
  snapshot: {
    caption: "Bhiwadi at a glance",
    rows: [
      { label: "District", value: "Khairthal-Tijara, Rajasthan (carved out of Alwar district in 2023)" },
      { label: "Region", value: "National Capital Region; planned township under BIDA" },
      { label: "Industry", value: "About 14 industrial clusters with around 5,000 units, per BIDA" },
      { label: "Key industrial areas", value: "RIICO Bhiwadi, Chopanki, Khushkhera, Tapukara, Kaharani, Pathredi" },
      { label: "Distances", value: "About 40 km to Gurugram on NH-48, 60 km to New Delhi, 20 km to Rewari station" },
      { label: "Our meetings", value: "One to one in Bhiwadi, at your office, factory, shop or site" },
      { label: "Starting prices", value: `Website ${P.site} · App ${P.app} · Software ${P.software}` },
    ],
  },
  services: {
    eyebrow: "What we build in Bhiwadi",
    heading: "Everything a Bhiwadi business needs, from one small team you can meet",
    note: "Each card leads to a full guide for that service in Bhiwadi, with prices, process, checklists and FAQs.",
    cards: [
      { name: "Website development", note: `Business websites, catalogues and online stores for Bhiwadi firms. Static sites from ${P.site}, SEO sites of 299+ pages from ${P.seoSite}.`, href: "/bhiwadi-rajasthan/website-development/", size: "lg" },
      { name: "Manufacturer websites", note: "Capability pages, machine lists and RFQ forms that procurement teams in Gurugram and beyond take seriously.", href: "/bhiwadi-rajasthan/manufacturing-company-website/", size: "md" },
      { name: "Android & iOS apps", note: `Customer, staff and dealer apps from ${P.app}, published on Google Play and the App Store.`, href: "/bhiwadi-rajasthan/android-app-development/", size: "md" },
      { name: "ERP for manufacturing", note: "BOM, stores, production and dispatch in one system, mapped on your shop floor before any code is written.", href: "/bhiwadi-rajasthan/erp-software-for-manufacturing/", size: "lg" },
      { name: "Local SEO & Google Maps", note: `Rank in Bhiwadi map results with a complete Google Business Profile and local pages. Monthly SEO from ${P.seo}.`, href: "/bhiwadi-rajasthan/local-seo/", size: "md" },
      { name: "AI & WhatsApp automation", note: `Chatbots, invoice reading and follow-up automation from ${P.ai}.`, href: "/bhiwadi-rajasthan/ai-automation/", size: "md" },
      { name: "Gate pass & visitor systems", note: "Tablet-based gate, visitor and material movement records for plants in the belt.", href: "/bhiwadi-rajasthan/gate-pass-management-system/", size: "sm" },
      { name: "MIS dashboards", note: "Daily production, sales and stock numbers from Tally, ERP or Excel on one screen.", href: "/bhiwadi-rajasthan/mis-dashboard-development/", size: "sm" },
    ],
  },
  comparison: {
    heading: "Why Bhiwadi businesses choose a small team they can meet",
    note: "The usual choices in Bhiwadi are a local agency, a walk-in computer shop or a remote freelancer found online. Here is how they compare.",
    columns: ["Aspect", "Walk-in computer shop", "Remote freelancer online", "BtechWaleTech"],
    rows: [
      ["Meeting face to face in Bhiwadi", "Yes, at their shop", "Rarely, calls only", "Yes, one to one at your office, factory or shop"],
      ["Range of work", "Mostly hardware and templates", "Usually one skill", "Websites, apps, ERP, SEO, AI and dashboards"],
      ["Understanding factory workflows", "Limited", "Depends on the person", "We walk your shop floor before scoping software"],
      ["Published starting prices", "Rarely", "Varies by profile", `Yes: websites from ${P.site}, apps from ${P.app}`],
      ["Ownership of code and accounts", "Often kept by the vendor", "Varies", "Domain, hosting and code in your name"],
      ["Hindi and English", "Hindi", "Varies", "Both, including Hindi screens for the shop floor"],
      ["Support after launch", "Ad hoc", "Often ends at delivery", "2 months free, then optional plans"],
      ["Hardware supply", "Yes", "No", "No: we work with the devices you choose"],
    ],
    fine: "We do not sell or install hardware such as biometric machines, CCTV or networking; if your project needs devices, we work alongside the vendor you choose.",
  },
  pricing: {
    heading: "Starting prices for Bhiwadi clients",
    note: `The same published starting prices apply in Bhiwadi as everywhere we work: static websites from ${P.site}, SEO websites of 299+ pages from ${P.seoSite}, Android and iOS apps from ${P.app}, ecommerce from ${P.shop}, custom software from ${P.software} and AI automation from ${P.ai}. Monthly SEO starts at ${P.seo} and maintenance at ${P.care} once the two free months end. Your final quote depends on what we see in the one-to-one meeting: page count, integrations, number of users and data to migrate. You get an itemised quote in about two working days and nothing is billed before you approve it in writing.`,
  },
  guideLabel: "Guide to IT services in Bhiwadi",
  guide: [
    {
      id: "why-bhiwadi",
      heading: "Why IT services in Bhiwadi need a different approach",
      paragraphs: [
        "Bhiwadi is not a typical town market. It is a planned industrial city in Khairthal-Tijara district, inside the National Capital Region, and the Bhiwadi Integrated Development Authority describes it as having about 14 industrial clusters with around 5,000 units. Most IT buyers here are factories and the firms that serve them: tool rooms, transporters, contractors, canteens, hostels and hospitals for a large workforce.",
        "That changes what good IT work looks like in Bhiwadi. A manufacturer's website has to convince a purchase manager in Gurugram or Pune, not just look pretty. Factory software has to work on a supervisor's low-cost Android phone, in Hindi, at the end of a night shift. And the person signing the cheque usually wants to sit across a table before trusting anyone with their data.",
        `That is why every service on this page includes <strong>one-to-one meetings in Bhiwadi</strong>. We come to your office, plant or shop, see how the work actually happens, and only then write the scope. Read <a href='/bhiwadi-rajasthan/msme-digitalisation/'>MSME digitalisation in Bhiwadi</a> if you are not sure where to start.`,
      ],
    },
    {
      id: "meet-in-bhiwadi",
      heading: "How the one-to-one meeting in Bhiwadi works",
      paragraphs: [
        "You message us on WhatsApp with your business, what you need and a couple of dates. We agree a time and meet you in Bhiwadi, at your office, factory, shop, school or clinic, or a place you choose. There is no sales pitch deck: we ask questions, look at your current registers, spreadsheets or website, and note what is slowing your team down.",
        "For websites we photograph your unit and products and collect certificates and client lists you are happy to show. For software we walk the process with the people who do it, from the gate register to the dispatch desk. For apps we check the phones your staff carry. After the meeting you get a written scope and an itemised quote.",
        "Between meetings the work runs over WhatsApp, calls and email, and you can ask for another in-person meeting in Bhiwadi at key moments such as scope sign-off, the staging review or staff training. We do not have an office in Bhiwadi; we come to you.",
      ],
    },
    {
      id: "what-we-build",
      heading: "Which IT services are available in Bhiwadi?",
      paragraphs: [
        "Everything a small or mid-sized Bhiwadi business usually buys from an IT team, handled by the same three people from first meeting to maintenance:",
      ],
      list: [
        `<a href='/bhiwadi-rajasthan/website-development/'>Website development</a>, <a href='/bhiwadi-rajasthan/ecommerce-website-development/'>ecommerce stores</a> and <a href='/bhiwadi-rajasthan/industrial-product-catalogue-website/'>industrial product catalogues</a>`,
        `<a href='/bhiwadi-rajasthan/android-app-development/'>Android</a>, <a href='/bhiwadi-rajasthan/ios-app-development/'>iOS</a> and <a href='/bhiwadi-rajasthan/flutter-app-development/'>Flutter</a> apps, including <a href='/bhiwadi-rajasthan/dealer-distributor-app/'>dealer ordering apps</a>`,
        `<a href='/bhiwadi-rajasthan/erp-software-for-manufacturing/'>Manufacturing ERP</a>, <a href='/bhiwadi-rajasthan/erpnext-implementation/'>ERPNext</a>, <a href='/bhiwadi-rajasthan/crm-software-development/'>CRM</a> and <a href='/bhiwadi-rajasthan/hrms-payroll-software/'>HR and payroll</a> software`,
        `Factory systems: <a href='/bhiwadi-rajasthan/production-planning-software/'>production planning</a>, <a href='/bhiwadi-rajasthan/quality-management-software/'>quality records</a>, <a href='/bhiwadi-rajasthan/warehouse-management-software/'>warehouse</a> and <a href='/bhiwadi-rajasthan/machine-maintenance-software/'>maintenance</a>`,
        `<a href='/bhiwadi-rajasthan/seo-services/'>SEO</a>, <a href='/bhiwadi-rajasthan/local-seo/'>local SEO</a> and <a href='/bhiwadi-rajasthan/google-business-profile/'>Google Business Profile</a> setup`,
        `<a href='/bhiwadi-rajasthan/ai-automation/'>AI automation</a>, <a href='/bhiwadi-rajasthan/whatsapp-business-api/'>WhatsApp Business API</a> and <a href='/bhiwadi-rajasthan/invoice-data-extraction/'>invoice data extraction</a>`,
        `<a href='/bhiwadi-rajasthan/mis-dashboard-development/'>MIS dashboards</a>, <a href='/bhiwadi-rajasthan/tally-integration/'>Tally integration</a> and <a href='/bhiwadi-rajasthan/cloud-hosting-setup/'>cloud hosting</a>`,
      ],
      after: ["The full list of 100 Bhiwadi service guides is in the tables further down this page."],
    },
    {
      id: "factories",
      heading: "IT for factories in Chopanki, Khushkhera, Tapukara and the RIICO areas",
      paragraphs: [
        "RIICO has developed industrial areas across the belt: Bhiwadi's own estate in several phases, plus Chopanki, Khushkhera, Tapukara, Kaharani and Pathredi. Tapukara is home to Honda's car plant, which began operating in 2008, and its two-wheeler plant set up in 2011, and around such plants sits a deep supplier base of machining, pressing, moulding, painting and packaging units.",
        "Those suppliers share the same headaches: customer schedules that change weekly, rejection data kept in notebooks, material moving through the gate on paper challans and stock numbers nobody fully trusts. Off-the-shelf software fixes part of this, but many units in Bhiwadi end up with an ERP nobody uses because it was never set up around their shop floor.",
        `Our approach is to meet you in person at the plant, map one process at a time and build or configure only what your people will use. Start with the <a href='/bhiwadi-rajasthan/gate-pass-management-system/'>gate pass system</a> or <a href='/bhiwadi-rajasthan/inventory-management-software/'>inventory software</a> if a full ERP feels too big.`,
      ],
    },
    {
      id: "local-businesses",
      heading: "Websites and apps for Bhiwadi shops, schools, clinics and builders",
      paragraphs: [
        "Bhiwadi is also a fast-growing place to live. Housing projects along Alwar Bypass Road and in the residential sectors have brought families who search on Google Maps for schools, doctors, coaching, restaurants and home services. Many local businesses still have no website or an unclaimed Google profile, so a clear, fast site and a complete profile can make a visible difference.",
        `We build <a href='/bhiwadi-rajasthan/school-website-design/'>school websites</a>, <a href='/bhiwadi-rajasthan/hospital-website-design/'>hospital websites</a>, <a href='/bhiwadi-rajasthan/doctor-clinic-website/'>doctor websites</a>, <a href='/bhiwadi-rajasthan/real-estate-website-design/'>real estate websites</a> and <a href='/bhiwadi-rajasthan/retail-shop-website/'>shop websites</a>, each with a WhatsApp button, Google Maps and Hindi where your customers need it. We meet you face to face at your premises to take photos and understand what your customers ask most.`,
      ],
    },
    {
      id: "costs",
      heading: "How much do IT services cost in Bhiwadi?",
      paragraphs: [
        `Our starting prices are the same in Bhiwadi as elsewhere: a static website of up to 100 pages from ${P.site}, an SEO website of 299+ pages from ${P.seoSite}, an Android and iOS app from ${P.app}, an ecommerce store from ${P.shop}, custom software from ${P.software} and AI automation from ${P.ai}. Monthly SEO starts at ${P.seo}.`,
        `Final prices depend on scope: the number of pages or screens, users and roles, integrations with Tally or machines, data migration and how much content you supply. The one-to-one meeting in Bhiwadi is where we pin this down. Detailed breakdowns are on <a href='/bhiwadi-rajasthan/website-development-cost/'>website development cost in Bhiwadi</a> and <a href='/bhiwadi-rajasthan/app-development-cost/'>app development cost in Bhiwadi</a>.`,
      ],
    },
    {
      id: "ownership",
      heading: "Who owns the website, app or software after launch?",
      paragraphs: [
        "You do. Domains, hosting, app store accounts, Google Business Profile and analytics are set up in your business's name, and at handover you receive the source code and every login. Nothing is locked to us, so you can change developers later without starting over.",
        `Two months of maintenance are included after launch: fixes, updates, backups and small changes. After that you can continue from ${P.care} or call us only when needed. See <a href='/bhiwadi-rajasthan/website-maintenance/'>website maintenance in Bhiwadi</a> for what that covers.`,
      ],
    },
    {
      id: "choose",
      heading: "How to choose an IT partner in Bhiwadi",
      paragraphs: [
        "Ask every vendor the same questions: Will you come to our unit before quoting? Who exactly will build it? In whose name are the domain, hosting and code? What happens after launch, and what does it cost? Can we see the staging version before paying the balance? Clear, written answers to these matter more than a long list of past logos.",
        `Also be clear about what you need. A walk-in shop is right for printers and CCTV; a software team is right for websites, apps and systems. Our <a href='/bhiwadi-rajasthan/it-consultant/'>IT consultant page</a> explains how to write a simple requirement note before you talk to anyone.`,
      ],
    },
    {
      id: "wider-belt",
      heading: "Serving the whole belt: Tijara, Neemrana, Dharuhera, Rewari and Alwar",
      paragraphs: [
        `Bhiwadi's economy spills across district and state lines. BIDA's planning region takes in villages from Tijara to Behror and Neemrana, where RIICO runs a Japanese Zone, and Dharuhera sits just across the border in Haryana. We meet clients across this belt as well, and our <a href='/alwar/'>Alwar</a>, <a href='/rewari/'>Rewari</a> and <a href='/gurgaon/'>Gurugram</a> pages cover those markets in detail.`,
      ],
    },
  ],
  tables: [],
  areas: {
    eyebrow: "Where we meet you",
    heading: "Areas we cover in and around Bhiwadi",
    note: "We meet clients one to one across Bhiwadi's industrial and residential areas and the towns around it.",
    cards: [
      { name: "RIICO Industrial Area, Bhiwadi", note: "The original estate in several phases: engineering, electrical, chemical and FMCG units that need websites, ERP and dashboards." },
      { name: "Chopanki", note: "Industrial area with machining, moulding and fabrication units that need capability websites, gate pass and inventory systems." },
      { name: "Khushkhera", note: "Growing industrial zone where suppliers need RFQ-ready websites, production planning and quality records." },
      { name: "Tapukara", note: "Home to Honda's car and two-wheeler plants and a supplier base that needs vendor-ready documentation and dashboards." },
      { name: "Kaharani and Pathredi", note: "Smaller RIICO areas whose units often start with a website, Google profile and a simple stock or billing app." },
      { name: "Alwar Bypass Road", note: "Residential growth corridor: builders, schools, clinics and shops that need websites, local SEO and booking tools." },
      { name: "Bhiwadi residential sectors", note: "Neighbourhood businesses such as coaching centres, restaurants and salons that win customers through Google Maps and WhatsApp." },
      { name: "Tijara", note: "Tehsil town and district side of the belt: schools, hospitals, traders and new units needing websites and apps." },
      { name: "Neemrana", note: "RIICO's Japanese Zone: suppliers there need English documentation, capability pages and structured quality data." },
      { name: "Dharuhera", note: "Just across the Haryana border: industrial and warehousing firms that want the same software and websites as Bhiwadi units." },
      { name: "Alwar", note: "District city to the south with the Matsya Industrial Area, hotels and schools.", href: "/alwar/" },
      { name: "Rewari", note: "Nearest railway junction and a busy trading town in Haryana.", href: "/rewari/" },
      { name: "Gurugram", note: "Where many Bhiwadi suppliers' buyers and head offices sit, about 40 km up NH-48.", href: "/gurgaon/" },
      { name: "Delhi", note: "The capital, about 60 km away, and the market many Bhiwadi traders and brands sell into.", href: "/delhi/" },
    ],
  },
  process: {
    heading: "How a Bhiwadi project runs",
    steps: [
      ["Message us", "Send your business, what you need and a few possible dates on WhatsApp or call us."],
      ["Meet one to one in Bhiwadi", "We meet you at your office, factory or shop, see how work is done now and collect what we need."],
      ["Scope and quote", "You receive a written scope, timeline and itemised quote in about two working days. Nothing is billed before approval."],
      ["Build and review", "We build in stages and share a staging link; you review on your own phone and computer and we can meet again in person."],
      ["Launch and training", "We go live, train your team in Hindi or English and hand over code, accounts and logins in your name."],
      ["Two months of care", "Maintenance is free for two months after launch; after that continue on a plan or call us when needed."],
    ],
  },
  faqHeading: "Questions about IT services in Bhiwadi",
  faqs: [
    { question: "Do you meet clients in person in Bhiwadi?", answer: "Yes. We meet you one to one in Bhiwadi, at your office, factory, shop, school or clinic, or somewhere you prefer. Message us on WhatsApp with a few dates and we fix a time that suits both sides. We do not have an office in Bhiwadi; we come to you, and the rest of the work runs over WhatsApp, calls and email." },
    { question: "Which IT services do you offer in Bhiwadi?", answer: "Websites, ecommerce stores, Android and iOS apps, ERP and custom software, factory systems such as gate pass, inventory and maintenance, SEO and Google Business Profile, AI automation, WhatsApp tools, dashboards, Tally integration, cloud hosting and maintenance. We do not supply hardware such as CCTV, biometric machines or networking." },
    { question: "How much does a website cost in Bhiwadi?", answer: `A static website of up to 100 pages starts from ${P.site}, an SEO website of 299+ pages from ${P.seoSite} and an ecommerce store from ${P.shop}. These are starting prices; your final quote depends on pages, features and content, and is itemised after we meet you in Bhiwadi.` },
    { question: "Can you build software for our factory in Chopanki or Khushkhera?", answer: "Yes. We meet you at the plant, walk the process with the people who run it, and then build or configure software for production, stores, quality, gate passes, maintenance or dispatch. Screens can be in Hindi for the shop floor, and data stays in accounts owned by your company." },
    { question: "Do you work in Hindi?", answer: "Yes. We speak Hindi and English in meetings, and apps and software can have Hindi screens for supervisors and operators while reports for management stay in English. Website content can be in both languages where your customers need it." },
    { question: "How long does a project take?", answer: "A static website usually takes one to two weeks, an SEO website three to five weeks, an app six to ten weeks, AI automation two to four weeks and custom software six to twelve weeks. The timeline in your quote depends on scope and how quickly content and feedback arrive." },
    { question: "Who owns the code, domain and accounts?", answer: "You do. Domains, hosting, app store listings, Google profiles and analytics are created in your business's name, and at handover you receive the source code and all logins. You can move to another developer at any time without losing anything." },
    { question: "How do we pay?", answer: "Payments are in INR by UPI or bank transfer, split into milestones: a first payment to start, a payment at the staging review and the balance at launch. Nothing is billed before you approve the written scope and quote." },
    { question: "What happens after launch?", answer: `Two months of maintenance are included: fixes, updates, backups and small changes. After that you can continue from ${P.care} or contact us only when you need a change. We can also meet you in Bhiwadi to train new staff.` },
    { question: "Can you help us appear on Google Maps in Bhiwadi?", answer: "Yes. We set up or clean up your Google Business Profile with the right categories, hours, photos of your premises and service areas, link it to your website and help you ask customers for reviews. Map rankings are decided by Google, so nobody can promise a position, but a complete profile is the foundation." },
    { question: "Is a remote team as good as a local agency?", answer: "The build itself does not need to happen in Bhiwadi; understanding your business does. That is why we combine one-to-one meetings in Bhiwadi with remote development. You get face-to-face discussions at the moments that matter and published starting prices for everything else." },
    { question: "How do we start?", answer: "Send a WhatsApp message with your business, what you need and a few dates for a meeting in Bhiwadi. After the meeting you get a written scope and itemised quote in about two working days, and work starts only after you approve it." },
  ],
  related: {
    heading: "More pages for Bhiwadi and nearby",
    links: [
      { name: "IT solutions in Bhiwadi", href: "/bhiwadi-rajasthan/it-solutions/" },
      { name: "Web developer near me in Bhiwadi", href: "/bhiwadi-rajasthan/web-developer-near-me/" },
      { name: "Software development services in Bhiwadi", href: "/bhiwadi-rajasthan/software-development-services/" },
      { name: "SEO services in Bhiwadi", href: "/bhiwadi-rajasthan/seo-services/" },
      { name: "Bhiwadi me website kaise banaye", href: "/bhiwadi-rajasthan/website-kaise-banaye/" },
      { name: "Rajasthan", href: "/india/rajasthan/" },
      { name: "Alwar", href: "/alwar/" },
      { name: "Rewari", href: "/rewari/" },
      { name: "Gurugram", href: "/gurgaon/" },
      { name: "Jaipur", href: "/jaipur/" },
      { name: "Pricing", href: "/pricing/" },
      { name: "Contact", href: "/contact/" },
    ],
  },
  cta: {
    heading: "Meet us one to one in Bhiwadi",
    note: "Tell us what you need and when you are free. We will meet you in Bhiwadi, at your office, factory or shop, and send a written scope and quote within about two working days.",
  },
};

export default content;
