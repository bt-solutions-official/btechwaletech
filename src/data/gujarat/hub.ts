import { inr } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

/** Guides that exist; cards and counts follow them so the hub never links an unwritten page. */
const built = new Set(Object.keys(import.meta.glob("./content/*.ts")).map((f) => `/gujarat/${f.slice("./content/".length, -3)}/`));
const guides = built.size;
const isLive = (href?: string) => !href || !href.startsWith("/gujarat/") || href === "/gujarat/" || built.has(href);
const liveOnly = <T extends { href?: string }>(items: T[]) => items.filter((i) => isLive(i.href));
const unlinkDead = <T extends { href?: string }>(items: T[]) => items.map((i) => (isLive(i.href) ? i : { ...i, href: undefined }));

const P = {
  site: inr("Static"), seoSite: inr("SEO website"), shop: inr("Ecommerce"), software: inr("Custom web app"),
  seo: inr("Monthly SEO"), care: inr("Maintenance"),
};

/** Groups of src/data/gujarat/pages.json; the hub renders one linked table per group. */
export const groups = [
  { key: "gujarat-wide", id: "gujarat-wide", eyebrow: "Across Gujarat", heading: "Website development services across Gujarat", note: "State-wide guides: costs, Gujarati and bilingual sites, ecommerce, WordPress, Shopify, web apps, redesigns and maintenance." },
  { key: "ahmedabad", id: "gujarat-ahmedabad", eyebrow: "Ahmedabad", heading: "Website development in Ahmedabad", note: "Services, designer, freelancer, cost, ecommerce, WordPress, Shopify, React, web apps and maintenance pages for Ahmedabad." },
  { key: "surat", id: "gujarat-surat", eyebrow: "Surat", heading: "Website development in Surat", note: "Guides for Surat's traders, diamond firms, textile houses and local businesses." },
  { key: "vadodara", id: "gujarat-vadodara", eyebrow: "Vadodara", heading: "Website development in Vadodara", note: "Guides for Vadodara (Baroda) firms, from engineering units to shops and clinics." },
  { key: "rajkot", id: "gujarat-rajkot", eyebrow: "Rajkot", heading: "Website development in Rajkot", note: "Guides for Rajkot's engineering MSMEs, jewellers, traders and service businesses." },
  { key: "gandhinagar", id: "gujarat-gandhinagar", eyebrow: "Gandhinagar", heading: "Website development in Gandhinagar", note: "Guides for Gandhinagar businesses, institutions and GIFT City firms." },
  { key: "cities", id: "gujarat-cities", eyebrow: "More cities", heading: "Website development in Bhavnagar, Jamnagar, Junagadh, Anand and other cities", note: "Services, designer and ecommerce pages for twelve more Gujarat cities." },
  { key: "business-hubs", id: "gujarat-business-hubs", eyebrow: "Industrial estates", heading: "Websites for GIDC estates and business hubs", note: "Pages for units in GIDC estates, ports and business districts, from GIFT City to Alang." },
  { key: "industries", id: "gujarat-industries", eyebrow: "By industry", heading: "Websites for Gujarat's industries", note: "Textiles, diamonds, ceramics, brass, engineering, chemicals, pharma, dairy, tourism, temples and more." },
  { key: "saurashtra", id: "gujarat-saurashtra", eyebrow: "Saurashtra", heading: "Website developers for Saurashtra towns", note: "One page per town across Rajkot, Amreli, Bhavnagar, Botad, Surendranagar, Morbi, Jamnagar, Dwarka, Porbandar, Junagadh and Gir Somnath districts." },
  { key: "kutch", id: "gujarat-kutch", eyebrow: "Kutch", heading: "Website developers for Kutch towns", note: "Anjar, Mandvi, Bhachau, Rapar and Nakhatrana." },
  { key: "north-gujarat", id: "gujarat-north", eyebrow: "North Gujarat", heading: "Website developers for North Gujarat towns", note: "Banaskantha, Vav-Tharad, Patan, Mehsana, Gandhinagar, Sabarkantha and Aravalli towns." },
  { key: "central-gujarat", id: "gujarat-central", eyebrow: "Central Gujarat", heading: "Website developers for Central Gujarat towns", note: "Kheda, Anand, Mahisagar, Panchmahal, Dahod, Chhota Udaipur, Narmada, Vadodara and Ahmedabad district towns." },
  { key: "south-gujarat", id: "gujarat-south", eyebrow: "South Gujarat", heading: "Website developers for South Gujarat towns", note: "Surat, Tapi, Navsari, Valsad and Dang district towns." },
];

const content: FreelanceContent = {
  path: "/gujarat/",
  crumb: "Website development",
  updated: "2026-10-01",
  meta: {
    title: "Website Development in Gujarat: City Guides",
    description: `Website development across Gujarat: ${guides} guides by city, town, GIDC estate and industry. Business websites from ${P.site}, built remotely.`,
    keywords: [
      "website development Gujarat", "web development Gujarat", "website developer Gujarat", "website design Gujarat",
      "web designer Gujarat", "website development Ahmedabad", "website development Surat", "website development Vadodara",
      "website development Rajkot", "website development Gandhinagar", "website developer Bhavnagar", "website developer Jamnagar",
      "website developer Junagadh", "website developer Morbi", "website developer Kutch", "Gujarati website development",
      "ecommerce website Gujarat", "website cost Gujarat", "website for GIDC companies", "website for Gujarat exporters",
      "web developer near me Gujarat", "website banane wala Gujarat", "Saurashtra website developer", "South Gujarat website developer",
    ],
  },
  hero: {
    eyebrow: "Gujarat · every city, town and industry",
    h1: "Website development in Gujarat: guides for every city, town and industry",
    lede: `Website development in Gujarat looks different in Surat's textile markets, Rajkot's engineering units, Morbi's tile factories and a shop in Gondal, so we wrote a separate guide for each. Start with the <a href='/gujarat/website-development-services-gujarat/'>state-wide guide</a>, or jump to your city or industry below. The BtechWaleTech team builds every site remotely, with business websites from ${P.site}.`,
    pills: ["Business websites", "Ecommerce stores", "Gujarati & bilingual sites", "WordPress & Shopify", "Web applications", "SEO-ready builds", "Maintenance"],
    origin: "Three freelance developers in India · websites for businesses across Gujarat · WhatsApp 7 days a week",
  },
  facts: [
    ["Who builds it", "The BtechWaleTech team"],
    ["Websites from", P.site],
    ["Coverage", "Every Gujarat city, town and GIDC estate"],
    ["Languages", "English and Hindi; Gujarati sites with your copy"],
    ["Billing", "INR · UPI or bank transfer"],
    ["After launch", "2 months of maintenance free"],
  ],
  stats: [
    { value: String(guides), label: "website guides for Gujarat" },
    { value: "3", label: "developers who build your site" },
    { value: "2", label: "working days to an itemised quote" },
    { value: "2", label: "months of free maintenance after launch" },
  ],
  answer: {
    heading: "Who builds websites for businesses across Gujarat?",
    text: `BtechWaleTech, a team of three freelance developers in India, builds business websites, ecommerce stores, Gujarati and bilingual sites and web applications for companies across Gujarat, working remotely over WhatsApp and video calls. Static websites start from ${P.site}, SEO websites from ${P.seoSite}, online stores from ${P.shop}, and every site gets two months of free maintenance.`,
    more: `Prices are explained on the <a href='/pricing/'>pricing page</a>, and our general Gujarat IT services page is at <a href='/india/gujarat/'>IT services in Gujarat</a>.`,
  },
  snapshot: {
    caption: "Website development in Gujarat at a glance",
    rows: [
      { label: "Guides", value: `${guides} pages by city, town, GIDC estate and industry` },
      { label: "Static website", value: `From ${P.site}, 1 to 2 weeks` },
      { label: "SEO website (299+ pages)", value: `From ${P.seoSite}, 3 to 5 weeks` },
      { label: "Ecommerce store", value: `From ${P.shop}, 4 to 8 weeks` },
      { label: "Web application", value: `From ${P.software}, 6 to 12 weeks` },
      { label: "Languages", value: "English and Hindi; Gujarati sites built with your translated copy" },
      { label: "How we work", value: "Remotely, over WhatsApp, phone, video calls and a staging link" },
    ],
  },
  services: {
    eyebrow: "Start here",
    heading: "The most useful Gujarat guides",
    note: "Each card opens a full guide with costs, process, checklists and FAQs.",
    cards: liveOnly([
      { name: "Website development services in Gujarat", note: "What a complete build includes, how the remote process works and what it costs.", href: "/gujarat/website-development-services-gujarat/", size: "lg" },
      { name: "Website development cost in Gujarat", note: "Real cost drivers and sample budgets for Gujarat businesses.", href: "/gujarat/website-development-cost-gujarat/", size: "md" },
      { name: "Gujarati website development", note: "Gujarati script, fonts and SEO, with your copy and our build.", href: "/gujarat/gujarati-website-development/", size: "md" },
      { name: "Ecommerce website in Gujarat", note: `Online stores with UPI and card checkout and GST invoices, from ${P.shop}.`, href: "/gujarat/ecommerce-website-development-gujarat/", size: "lg" },
      { name: "Ahmedabad", note: "Fourteen guides for Ahmedabad businesses.", href: "/gujarat/website-development-services-ahmedabad/", size: "sm" },
      { name: "Surat", note: "Guides for Surat traders, textile and diamond firms.", href: "/gujarat/website-development-services-surat/", size: "sm" },
      { name: "Manufacturer websites", note: "Capability and RFQ sites for GIDC units.", href: "/gujarat/manufacturer-website-design-gujarat/", size: "md" },
      { name: "Small business websites", note: `Shop and trader sites from ${P.site}.`, href: "/gujarat/small-business-website-gujarat/", size: "md" },
    ]),
  },
  comparison: {
    heading: "How Gujarat businesses usually get a website",
    note: "The common routes compared honestly.",
    columns: ["Aspect", "Local agency", "DIY website builder", "BtechWaleTech"],
    rows: [
      ["Who builds it", "An agency team, sometimes outsourced", "You, on a template", "The BtechWaleTech team, directly"],
      ["Starting price", "Varies widely by agency", "Monthly subscription", `Published: websites from ${P.site}`],
      ["Gujarati and bilingual", "Varies", "Limited font and layout control", "Proper Gujarati typography, your copy"],
      ["Ownership", "Sometimes kept by the agency", "Locked to the platform", "Domain, hosting and code in your name"],
      ["SEO foundations", "Varies", "Basic", "Structure, speed, schema and local pages"],
      ["Meetings", "In person", "None", "WhatsApp, phone and video calls"],
      ["After launch", "Paid plans", "Your own time", "2 months free, then optional care"],
    ],
    fine: "We work remotely and have no office in Gujarat; if you need someone at your premises regularly, a local agency may suit you better.",
  },
  pricing: {
    heading: "Starting prices for Gujarat businesses",
    note: `Gujarat clients pay the same published starting prices as everyone else: static websites from ${P.site}, SEO websites of 299+ pages from ${P.seoSite}, ecommerce from ${P.shop} and custom web applications from ${P.software}. Monthly SEO starts at ${P.seo}, and care after the two free months starts at ${P.care}. The final quote depends on pages, features, languages and integrations, and arrives itemised within about two working days.`,
  },
  guideLabel: "Guide to website development in Gujarat",
  guide: [
    {
      id: "how-to-use",
      heading: "How to use these Gujarat website guides",
      paragraphs: [
        "Gujarat is too varied for one page. A saree wholesaler on Surat's Ring Road needs a catalogue that resellers can browse on WhatsApp; a pump maker in Rajkot needs specification sheets and a dealer list; a hotel near the Statue of Unity needs direct booking; a school in Nadiad needs admissions and notices. So we wrote a separate guide for each city, each sizeable town, the main GIDC estates and the state's signature industries.",
        "Find your city or town in the tables below, or start with the industry guide closest to your business. Every guide covers costs, the build process, what to include, Gujarati content and how the site can be found on Google, written for that place.",
      ],
    },
    {
      id: "remote",
      heading: "How a remote build works for a Gujarat business",
      paragraphs: [
        "We are three freelance developers working remotely from India, and we have no office in Gujarat. That keeps prices published and low, and it means you talk directly to the people building your site. Projects run over WhatsApp, phone and video calls, with a staging link you can open on your own phone at every stage.",
        "You send what you have (logo, product photos, price lists, certificates); we plan pages, build, and share the staging site for review. After launch the domain, hosting and code stay in your name, and the first two months of maintenance are free.",
      ],
    },
    {
      id: "gujarati",
      heading: "Gujarati and bilingual websites",
      paragraphs: [
        `Many Gujarat customers search and read in Gujarati, while buyers outside the state read English. We build Gujarati and bilingual sites properly: Unicode text, readable Gujarati web fonts, a language switcher and separate URLs so each language can be indexed. You or your translator supply or approve the Gujarati copy; we handle everything technical. The bilingual website guide explains the details.`,
      ],
    },
    {
      id: "industries",
      heading: "Websites for Gujarat's industries",
      paragraphs: [
        `Gujarat's economy runs on specialised clusters: diamonds and man-made textiles in Surat, ceramics in Morbi, engineering in Rajkot, brass parts in Jamnagar, chemicals and dyes in Vapi and Ankleshwar, dairy around Anand, and ports at Kandla and Mundra. Industry buyers judge suppliers by their websites, so these guides focus on capability pages, catalogues and enquiry forms that procurement teams trust. Start with manufacturer website design in Gujarat or find your industry below.`,
      ],
    },
  ],
  tables: [],
  areas: {
    eyebrow: "Where we work",
    heading: "Major Gujarat cities",
    note: "Open the website development guide for your city; town pages are listed in the tables above.",
    cards: unlinkDead([
      { name: "Ahmedabad", note: "Startups, real estate, pharma, education and retail: the state's largest website market.", href: "/gujarat/website-development-services-ahmedabad/" },
      { name: "Surat", note: "Textile traders, diamond firms and fast-growing local businesses.", href: "/gujarat/website-development-services-surat/" },
      { name: "Vadodara", note: "Engineering, chemicals, pharma, education and healthcare.", href: "/gujarat/website-development-services-vadodara/" },
      { name: "Rajkot", note: "Engineering MSMEs, jewellers and Saurashtra's trading hub.", href: "/gujarat/website-development-services-rajkot/" },
      { name: "Gandhinagar", note: "Institutions, GIFT City firms and growing residential areas.", href: "/gujarat/website-development-services-gandhinagar/" },
      { name: "Bhavnagar", note: "Diamonds, salt, ship recycling at Alang and trade.", href: "/gujarat/website-development-services-bhavnagar/" },
      { name: "Jamnagar", note: "Brass parts, refining and port-linked businesses.", href: "/gujarat/website-development-services-jamnagar/" },
      { name: "Junagadh", note: "Agriculture, tourism near Girnar and Gir, and trade.", href: "/gujarat/website-development-services-junagadh/" },
      { name: "Anand", note: "Dairy, education and agriculture businesses.", href: "/gujarat/website-development-services-anand/" },
      { name: "Bharuch", note: "Chemical estates, Dahej and Ankleshwar suppliers.", href: "/gujarat/website-development-services-bharuch/" },
      { name: "Morbi", note: "Ceramic tiles, sanitaryware and wall clocks.", href: "/gujarat/website-development-services-morbi/" },
      { name: "Gandhidham", note: "Kandla port, logistics, timber and salt.", href: "/gujarat/website-development-services-gandhidham/" },
      { name: "Vapi", note: "Chemical and paper units in South Gujarat.", href: "/gujarat/website-development-services-vapi/" },
      { name: "Bhuj", note: "Kutch handicrafts, tourism and trade.", href: "/gujarat/website-development-services-bhuj/" },
    ]),
  },
  process: {
    heading: "How a Gujarat website project runs",
    steps: [
      ["Message us", "Tell us your business, city and what you need on WhatsApp, with any sites you like."],
      ["Call and scope", "A phone or video call to understand your customers, then a written scope."],
      ["Itemised quote", "A quote in about two working days; nothing is billed before you approve it."],
      ["Design and build", "We build in stages and share a staging link you can check on your phone."],
      ["Launch", "Domain, hosting, Search Console and analytics set up in your name."],
      ["Two months of care", "Free maintenance for two months after launch, then optional plans."],
    ],
  },
  faqHeading: "Questions about website development in Gujarat",
  faqs: [
    { question: "Do you have an office in Gujarat?", answer: "No. BtechWaleTech is a team of three freelance developers working remotely from India. Gujarat projects run over WhatsApp, phone and video calls, with a staging link you review on your own devices. You speak directly to the developers building your site, and our prices stay published because we do not run a local office." },
    { question: "How much does a website cost in Gujarat?", answer: `A static business website starts from ${P.site}, an SEO website of 299+ pages from ${P.seoSite}, an ecommerce store from ${P.shop} and a custom web application from ${P.software}. These are starting prices; the final quote depends on pages, languages, features and integrations, and comes itemised.` },
    { question: "Can you build a website in Gujarati?", answer: "Yes. We build Gujarati and bilingual Gujarati-English websites with proper Unicode text, readable Gujarati fonts, a language switcher and separate URLs for search engines. You or your translator supply or approve the Gujarati text, and we handle the layout, fonts, SEO and testing." },
    { question: "Do you work with businesses in small Gujarat towns?", answer: "Yes. Because we work remotely, a shop in Talaja or a trader in Unjha gets the same process and prices as a company in Ahmedabad. The tables on this page link to a guide for each town we cover." },
    { question: "Who owns the website after launch?", answer: "You do. The domain, hosting, Google accounts and code are set up in your business's name, and at handover you get every login. You can move to another developer at any time without losing anything." },
    { question: "How long does a website take?", answer: "A static website usually takes one to two weeks, an SEO website three to five weeks, an ecommerce store four to eight weeks and a web application six to twelve weeks, depending on scope and how quickly content and feedback arrive." },
    { question: "Can you guarantee first-page Google rankings in Gujarat?", answer: "No, and nobody honestly can. We build sites with a clean structure, fast pages, schema and local pages for the places you serve, and we report honestly from Search Console. Rankings depend on competition, content and time." },
    { question: "How do we start?", answer: "Send a WhatsApp message with your business, city and what you need. We reply with questions, arrange a call, and send a written scope and itemised quote in about two working days." },
  ],
  related: {
    heading: "More Gujarat pages",
    links: liveOnly([
      { name: "Website development services in Gujarat", href: "/gujarat/website-development-services-gujarat/" },
      { name: "Website development cost in Gujarat", href: "/gujarat/website-development-cost-gujarat/" },
      { name: "Gujarati website development", href: "/gujarat/gujarati-website-development/" },
      { name: "IT services in Gujarat", href: "/india/gujarat/" },
      { name: "Ahmedabad", href: "/ahmedabad/" },
      { name: "Surat", href: "/surat/" },
      { name: "Vadodara", href: "/vadodara/" },
      { name: "Rajkot", href: "/rajkot/" },
      { name: "Bhavnagar", href: "/bhavnagar/" },
      { name: "Jamnagar", href: "/jamnagar/" },
      { name: "Pricing", href: "/pricing/" },
      { name: "Contact", href: "/contact/" },
    ]),
  },
  cta: {
    heading: "Start your Gujarat website",
    note: "Tell us your business and city on WhatsApp. We will reply with questions and send an itemised quote within about two working days.",
  },
};

export default content;
