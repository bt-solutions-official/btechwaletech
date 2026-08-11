export type ItServicesRegionType = "state" | "union-territory";

export interface ItServicesCity {
  name: string;
  slug: string;
  businessContext: string;
  priorityNeeds: string[];
}

export interface ItServicesRegion {
  name: string;
  slug: string;
  type: ItServicesRegionType;
  intro: string;
  businessContext: string;
  cities: ItServicesCity[];
}

export interface ItServicesOffering {
  name: string;
  summary: string;
  points: string[];
  href?: string;
}

const city = (name: string, slug: string, businessContext: string, priorityNeeds: string[]): ItServicesCity => ({
  name,
  slug,
  businessContext,
  priorityNeeds,
});

export const itServicesOfferings: ItServicesOffering[] = [
  {
    name: "Web development",
    summary: "Fast, responsive websites and web applications built for search visibility and enquiries.",
    points: ["Business websites", "Landing pages", "Dynamic web apps", "Hosting and deployment"],
    href: "/services/web-development/",
  },
  {
    name: "Software development",
    summary: "Custom tools for teams that need dashboards, portals, workflows, and business systems.",
    points: ["Admin panels", "Internal tools", "APIs", "Workflow systems"],
  },
  {
    name: "AI development",
    summary: "Practical AI features, assistants, and agent workflows connected to real business tasks.",
    points: ["AI assistants", "AI agents", "Meta-agent workflows", "Prompt and tool systems"],
  },
  {
    name: "Automation solutions",
    summary: "Automation for repetitive operations, follow-ups, forms, reports, and daily manual work.",
    points: ["Process automation", "Spreadsheet automation", "CRM flows", "Email and chat flows"],
  },
  {
    name: "SEO services",
    summary: "Technical SEO, local SEO structure, metadata, schema, and content planning for organic growth.",
    points: ["Technical SEO", "Local SEO", "Sitemaps and schema", "Search intent mapping"],
    href: "/services/seo-services/",
  },
  {
    name: "Digital marketing support",
    summary: "Search-friendly campaign pages, lead capture flows, analytics setup, and conversion-focused improvements.",
    points: ["Landing pages", "Analytics setup", "Lead forms", "Content structure"],
  },
  {
    name: "E-commerce development",
    summary: "Online stores, product pages, payments, checkout flows, and performance-focused storefronts.",
    points: ["Store setup", "Product pages", "Payments", "Checkout optimization"],
  },
  {
    name: "Maintenance and deployment",
    summary: "Production builds, hosting setup, content updates, bug fixes, backups, and long-term support.",
    points: ["Deployment", "Bug fixes", "Updates", "Performance checks"],
  },
];

export const itServicesRegions: ItServicesRegion[] = [
  {
    name: "Andhra Pradesh",
    slug: "andhra-pradesh",
    type: "state",
    intro: "Andhra Pradesh has a strong mix of port-led trade, education, healthcare, tourism, retail, and growing digital businesses.",
    businessContext: "Businesses here often need reliable websites, enquiry systems, automation, and SEO foundations that can support both local customers and statewide growth.",
    cities: [
      city("Visakhapatnam", "visakhapatnam", "A port and industrial city where service providers, exporters, institutes, and local brands need dependable digital systems.", ["Lead generation websites", "SEO for service areas", "Business automation"]),
      city("Vijayawada", "vijayawada", "A commercial and education-focused city where growing businesses need websites, dashboards, and search visibility.", ["Business websites", "Student and admission funnels", "Reporting dashboards"]),
      city("Guntur", "guntur", "A trade and agriculture-linked market where local companies can benefit from ecommerce, catalogues, and digital enquiries.", ["Product catalogues", "Local SEO", "Order workflows"]),
      city("Tirupati", "tirupati", "A tourism, education, and services hub where clear websites and booking-friendly digital experiences matter.", ["Tourism websites", "Booking flows", "Mobile-friendly pages"]),
      city("Kakinada", "kakinada", "An industrial and coastal business centre where suppliers and service firms need credible online presentation.", ["Corporate websites", "B2B enquiry forms", "Maintenance support"]),
    ],
  },
  {
    name: "Arunachal Pradesh",
    slug: "arunachal-pradesh",
    type: "state",
    intro: "Arunachal Pradesh has tourism, education, public services, small businesses, and regional trade moving steadily online.",
    businessContext: "Digital projects in the region should be lightweight, mobile-first, easy to maintain, and useful for customers discovering services remotely.",
    cities: [
      city("Itanagar", "itanagar", "The capital region needs credible websites, information pages, and digital workflows for institutions and service providers.", ["Institution websites", "SEO-ready pages", "Contact flows"]),
      city("Tawang", "tawang", "A tourism-driven location where travel businesses need discoverable websites, itineraries, and enquiry systems.", ["Tourism pages", "Itinerary content", "Enquiry forms"]),
      city("Pasighat", "pasighat", "A growing regional centre where local businesses can improve trust with professional websites and online listings.", ["Local business websites", "Search visibility", "Content updates"]),
      city("Namsai", "namsai", "A market and education-oriented area where mobile-first websites and simple automation can reduce manual coordination.", ["Mobile-first websites", "Admissions support pages", "Workflow automation"]),
      city("Naharlagun", "naharlagun", "A connected urban area near Itanagar where service businesses need practical sites and digital follow-up systems.", ["Service pages", "Lead capture", "Follow-up automation"]),
    ],
  },
  {
    name: "Assam",
    slug: "assam",
    type: "state",
    intro: "Assam is a major North East business gateway with education, healthcare, retail, logistics, tourism, and professional services.",
    businessContext: "Companies in Assam need digital platforms that make services easy to find, compare, contact, and manage online.",
    cities: [
      city("Guwahati", "guwahati", "A major commercial hub where brands need strong websites, SEO, automation, and data-backed digital operations.", ["High-intent service pages", "SEO growth", "Dashboards"]),
      city("Silchar", "silchar", "A regional business and education centre where service providers need clear websites and local discovery.", ["Local SEO", "Business websites", "Lead forms"]),
      city("Dibrugarh", "dibrugarh", "An industrial, healthcare, and education market where digital trust and structured service pages matter.", ["Healthcare sites", "B2B pages", "Automation"]),
      city("Jorhat", "jorhat", "An education and trade city where professional websites can help institutes, shops, and consultants generate enquiries.", ["Education pages", "Service websites", "Content structure"]),
      city("Tezpur", "tezpur", "A culture, education, and services location where businesses benefit from mobile-friendly sites and SEO basics.", ["Mobile websites", "Local landing pages", "Maintenance"]),
    ],
  },
  {
    name: "Bihar",
    slug: "bihar",
    type: "state",
    intro: "Bihar has fast-growing local businesses, education services, healthcare providers, retail markets, and service professionals moving online.",
    businessContext: "A useful IT setup in Bihar should make a business easier to discover, easier to contact, and easier to operate.",
    cities: [
      city("Patna", "patna", "Patna businesses often need credible websites, SEO-focused service pages, and automation for enquiries and operations.", ["Website development", "Local SEO", "Automation workflows"]),
      city("Gaya", "gaya", "Gaya has tourism, education, healthcare, and local services that benefit from clear online information and enquiry flows.", ["Tourism pages", "Service websites", "Contact systems"]),
      city("Muzaffarpur", "muzaffarpur", "A trade and education market where businesses can use websites, ecommerce, and reporting systems to manage growth.", ["Ecommerce setup", "Business dashboards", "SEO pages"]),
      city("Bhagalpur", "bhagalpur", "A textile and trade-linked city where product catalogues, B2B websites, and digital enquiries can support sales.", ["Product catalogues", "B2B websites", "Lead forms"]),
      city("Darbhanga", "darbhanga", "A healthcare, education, and service market where local visibility and trust-building websites matter.", ["Healthcare pages", "Local SEO", "Maintenance"]),
    ],
  },
  {
    name: "Chhattisgarh",
    slug: "chhattisgarh",
    type: "state",
    intro: "Chhattisgarh has strong industrial, trade, education, healthcare, and local service sectors.",
    businessContext: "Businesses here often need B2B credibility, structured service pages, internal tools, and simple automation.",
    cities: [
      city("Raipur", "raipur", "Raipur is a commercial centre where companies need polished websites, SEO structure, and operational tools.", ["Corporate websites", "SEO foundations", "Dashboards"]),
      city("Bhilai", "bhilai", "An industrial city where suppliers, contractors, and service providers need credible B2B web presence.", ["B2B websites", "Quotation forms", "Maintenance"]),
      city("Bilaspur", "bilaspur", "A legal, education, and trade hub where service businesses can gain trust through clear digital pages.", ["Professional service pages", "Local SEO", "Lead capture"]),
      city("Korba", "korba", "An energy and industrial market where businesses often need documentation-friendly sites and internal workflow support.", ["Industrial websites", "Document workflows", "Automation"]),
      city("Durg", "durg", "A connected local market where retailers and service providers need mobile-first websites and enquiry systems.", ["Mobile websites", "Local pages", "Support"]),
    ],
  },
  {
    name: "Goa",
    slug: "goa",
    type: "state",
    intro: "Goa combines tourism, hospitality, real estate, food businesses, professional services, and local commerce.",
    businessContext: "Digital pages in Goa should be visual, fast, mobile-friendly, and easy for visitors or customers to act on.",
    cities: [
      city("Panaji", "panaji", "Panaji businesses often need professional websites, booking flows, and search-friendly pages for visitors and locals.", ["Service websites", "Booking flows", "SEO pages"]),
      city("Margao", "margao", "A busy commercial centre where shops, consultants, and service providers benefit from local discovery.", ["Local SEO", "Business websites", "Lead forms"]),
      city("Vasco-da-Gama", "vasco-da-gama", "A transport and port-linked city where businesses need clear service information and mobile-friendly contact paths.", ["B2B pages", "Mobile websites", "Contact flows"]),
      city("Mapusa", "mapusa", "A market town where retailers and service providers can use catalogues, ecommerce, and search visibility.", ["Catalogues", "Ecommerce", "Local pages"]),
      city("Ponda", "ponda", "A manufacturing, education, and local services area where practical web systems can support daily operations.", ["Internal tools", "Business websites", "Automation"]),
    ],
  },
  {
    name: "Gujarat",
    slug: "gujarat",
    type: "state",
    intro: "Gujarat has deep strengths in manufacturing, trade, exports, retail, education, healthcare, and entrepreneurship.",
    businessContext: "Companies in Gujarat often need B2B websites, ecommerce, automation, SEO, and custom software that supports sales and operations.",
    cities: [
      city("Ahmedabad", "ahmedabad", "A major business hub where companies need conversion-focused websites, SEO, ecommerce, and automation.", ["B2B websites", "SEO growth", "Automation"]),
      city("Surat", "surat", "A textile, diamond, and trade market where catalogue websites, ecommerce, and workflow tools can support scale.", ["Catalogues", "Ecommerce", "Inventory workflows"]),
      city("Vadodara", "vadodara", "An industrial and education centre where service providers need strong digital credibility and lead systems.", ["Corporate websites", "Lead generation", "Dashboards"]),
      city("Rajkot", "rajkot", "A manufacturing and SME market where businesses can benefit from practical websites and digital operations.", ["SME websites", "B2B enquiries", "Automation"]),
      city("Gandhinagar", "gandhinagar", "A government, education, and services centre where structured information and professional web presence matter.", ["Institution pages", "Service pages", "SEO setup"]),
    ],
  },
  {
    name: "Haryana",
    slug: "haryana",
    type: "state",
    intro: "Haryana has strong business activity across technology, manufacturing, logistics, real estate, education, and local services.",
    businessContext: "Businesses in Haryana need websites and software that support enquiries, hiring, sales, process automation, and search visibility.",
    cities: [
      city("Gurugram", "gurugram", "Gurugram is a competitive corporate and startup market where businesses need fast websites, automation, and strong search intent coverage.", ["Startup websites", "AI automation", "SEO landing pages"]),
      city("Faridabad", "faridabad", "An industrial and services city where suppliers and local businesses need credible B2B websites and enquiry flows.", ["Industrial websites", "B2B forms", "Maintenance"]),
      city("Panipat", "panipat", "A textile and trade market where catalogue websites and digital enquiry systems can support manufacturers and sellers.", ["Product catalogues", "Trade enquiries", "Local SEO"]),
      city("Ambala", "ambala", "A business, education, and healthcare market where service pages and simple automation can improve customer handling.", ["Service websites", "Admissions pages", "Follow-up flows"]),
      city("Sonipat", "sonipat", "A growing NCR-connected city where businesses need modern websites, ecommerce, and SEO-ready pages.", ["Business websites", "Ecommerce", "SEO pages"]),
    ],
  },
  {
    name: "Himachal Pradesh",
    slug: "himachal-pradesh",
    type: "state",
    intro: "Himachal Pradesh has tourism, education, healthcare, manufacturing pockets, local services, and regional trade.",
    businessContext: "Businesses here need mobile-first websites, local SEO, booking-friendly flows, and low-maintenance digital systems.",
    cities: [
      city("Shimla", "shimla", "A tourism and services centre where websites must be easy to browse, trust-building, and enquiry-focused.", ["Tourism websites", "Booking flows", "Local SEO"]),
      city("Solan", "solan", "An education, pharma, and local business hub where companies need service pages and digital workflows.", ["Institution websites", "Corporate pages", "Automation"]),
      city("Dharamshala", "dharamshala", "A tourism, education, and wellness market where discoverable websites and clear information pages help visitors act.", ["Wellness websites", "Tour pages", "Enquiry forms"]),
      city("Mandi", "mandi", "A regional trade and services city where mobile-friendly websites can help local providers reach customers.", ["Local pages", "Mobile websites", "SEO setup"]),
      city("Baddi", "baddi", "An industrial and pharma hub where B2B websites, supplier pages, and workflow systems can improve credibility.", ["Industrial websites", "B2B pages", "Document workflows"]),
    ],
  },
  {
    name: "Jharkhand",
    slug: "jharkhand",
    type: "state",
    intro: "Jharkhand has mining, industry, education, healthcare, retail, and growing professional service businesses.",
    businessContext: "A strong digital setup helps local companies present credibility, generate enquiries, and manage operations more efficiently.",
    cities: [
      city("Ranchi", "ranchi", "Ranchi businesses need professional websites, SEO foundations, and automation for service enquiries.", ["Business websites", "SEO pages", "Lead forms"]),
      city("Jamshedpur", "jamshedpur", "An industrial city where B2B suppliers and service providers need credible web presence and process tools.", ["B2B websites", "Supplier pages", "Dashboards"]),
      city("Dhanbad", "dhanbad", "A mining and education market where companies need clear service pages and reliable digital systems.", ["Corporate pages", "Internal tools", "Maintenance"]),
      city("Bokaro", "bokaro", "An industrial centre where businesses can use websites, forms, and automation to manage enquiries.", ["Industrial websites", "Enquiry forms", "Automation"]),
      city("Deoghar", "deoghar", "A tourism and service city where local businesses benefit from mobile-first pages and clear contact routes.", ["Tourism pages", "Local SEO", "Mobile websites"]),
    ],
  },
  {
    name: "Karnataka",
    slug: "karnataka",
    type: "state",
    intro: "Karnataka has one of India's strongest digital economies, with startups, enterprises, education, healthcare, retail, and service businesses.",
    businessContext: "Businesses in Karnataka often need fast websites, scalable web apps, automation, AI workflows, and SEO that can compete in mature markets.",
    cities: [
      city("Bengaluru", "bengaluru", "Bengaluru has a competitive startup and services market where technical quality, speed, and clear positioning matter.", ["Startup websites", "Web apps", "AI agents"]),
      city("Mysuru", "mysuru", "A tourism, education, and services city where businesses need polished websites and local search visibility.", ["Service websites", "Local SEO", "Booking flows"]),
      city("Mangaluru", "mangaluru", "A coastal business and education hub where websites can support healthcare, trade, and professional services.", ["Healthcare sites", "Trade pages", "Lead generation"]),
      city("Hubballi", "hubballi", "A commercial hub in North Karnataka where businesses need reliable web presence and workflow tools.", ["Business websites", "Dashboards", "Automation"]),
      city("Belagavi", "belagavi", "A manufacturing and education market where B2B websites and structured service pages can support growth.", ["B2B websites", "SEO structure", "Support"]),
    ],
  },
  {
    name: "Kerala",
    slug: "kerala",
    type: "state",
    intro: "Kerala has strong demand across tourism, healthcare, education, retail, local services, and overseas-facing businesses.",
    businessContext: "Businesses in Kerala benefit from clear websites, multilingual-ready structure, strong local SEO, and enquiry-friendly digital flows.",
    cities: [
      city("Kochi", "kochi", "A commercial and startup hub where businesses need websites, SEO, ecommerce, and automation.", ["Business websites", "SEO growth", "Ecommerce"]),
      city("Thiruvananthapuram", "thiruvananthapuram", "A government, IT, and education centre where professional websites and custom systems support credibility.", ["Institution websites", "Custom tools", "Automation"]),
      city("Kozhikode", "kozhikode", "A trade and service market where local businesses can grow through SEO pages and ecommerce systems.", ["Local SEO", "Store setup", "Lead forms"]),
      city("Thrissur", "thrissur", "A retail, education, and cultural centre where businesses need discoverable sites and simple workflows.", ["Retail websites", "Service pages", "Maintenance"]),
      city("Kollam", "kollam", "A coastal trade and service city where companies can use websites and digital systems to manage enquiries.", ["Trade pages", "Mobile websites", "Contact flows"]),
    ],
  },
  {
    name: "Madhya Pradesh",
    slug: "madhya-pradesh",
    type: "state",
    intro: "Madhya Pradesh has expanding business activity across education, manufacturing, healthcare, retail, tourism, and local services.",
    businessContext: "Businesses here need credible websites, SEO-ready service pages, ecommerce options, and automation for operations.",
    cities: [
      city("Indore", "indore", "A major commercial and startup city where companies need polished websites, SEO, and digital systems.", ["Startup websites", "SEO pages", "Automation"]),
      city("Bhopal", "bhopal", "A capital city with education, healthcare, and services where trust-building websites matter.", ["Institution pages", "Healthcare websites", "Lead capture"]),
      city("Jabalpur", "jabalpur", "A regional trade and services hub where businesses benefit from local SEO and web app support.", ["Local SEO", "Business websites", "Dashboards"]),
      city("Gwalior", "gwalior", "A tourism, education, and retail market where websites can turn discovery into enquiries.", ["Tourism pages", "Retail websites", "Contact flows"]),
      city("Ujjain", "ujjain", "A tourism and services city where mobile-first information pages and booking flows can support growth.", ["Tourism websites", "Booking flows", "SEO setup"]),
    ],
  },
  {
    name: "Maharashtra",
    slug: "maharashtra",
    type: "state",
    intro: "Maharashtra has deep demand across finance, startups, manufacturing, media, retail, healthcare, education, and professional services.",
    businessContext: "Businesses in Maharashtra often need high-trust websites, strong SEO foundations, ecommerce, automation, and custom software.",
    cities: [
      city("Mumbai", "mumbai", "Mumbai is a high-competition market where businesses need strong positioning, fast websites, and conversion-focused service pages.", ["Conversion pages", "SEO strategy", "Automation"]),
      city("Pune", "pune", "Pune combines IT, education, startups, and manufacturing, creating demand for web apps, SEO, and data workflows.", ["Web apps", "AI automation", "Dashboards"]),
      city("Nagpur", "nagpur", "A central business hub where service providers and traders need discoverable websites and digital operations.", ["Business websites", "Local SEO", "Lead systems"]),
      city("Nashik", "nashik", "A manufacturing, agriculture, and tourism market where companies need catalogues, ecommerce, and enquiry flows.", ["Product catalogues", "Ecommerce", "Contact forms"]),
      city("Thane", "thane", "A fast-growing urban market where local businesses need modern websites and search-focused landing pages.", ["Local SEO pages", "Service websites", "Maintenance"]),
    ],
  },
  {
    name: "Manipur",
    slug: "manipur",
    type: "state",
    intro: "Manipur has local commerce, education, tourism, sports, healthcare, and small businesses that can benefit from stronger digital presence.",
    businessContext: "Pages for Manipur should be lightweight, accessible, mobile-first, and focused on practical customer action.",
    cities: [
      city("Imphal", "imphal", "The main urban hub where institutes, service providers, and retailers need credible websites and local visibility.", ["Local SEO", "Business websites", "Lead forms"]),
      city("Thoubal", "thoubal", "A local trade and services centre where mobile-first sites can help customers find and contact businesses.", ["Mobile websites", "Contact flows", "Service pages"]),
      city("Churachandpur", "churachandpur", "A regional market where community-facing services and local businesses need clear online information.", ["Information pages", "Local SEO", "Updates"]),
      city("Bishnupur", "bishnupur", "A tourism and local services area where businesses can use search-friendly pages and enquiry systems.", ["Tour pages", "Service websites", "Enquiries"]),
      city("Ukhrul", "ukhrul", "A tourism and local enterprise location where lightweight websites can improve discovery and trust.", ["Tourism websites", "Mobile-first pages", "Support"]),
    ],
  },
  {
    name: "Meghalaya",
    slug: "meghalaya",
    type: "state",
    intro: "Meghalaya has tourism, education, hospitality, local commerce, and regional services with increasing online discovery needs.",
    businessContext: "Businesses here benefit from search-friendly pages, booking paths, mobile-first design, and easy content updates.",
    cities: [
      city("Shillong", "shillong", "A tourism, education, and services hub where businesses need strong websites and local discovery.", ["Tourism pages", "Local SEO", "Booking flows"]),
      city("Tura", "tura", "A regional services market where mobile-first websites and clear contact paths help local businesses.", ["Mobile websites", "Service pages", "Contact forms"]),
      city("Jowai", "jowai", "A local trade and tourism location where discoverable pages can help businesses reach new customers.", ["Local pages", "Tourism content", "Updates"]),
      city("Nongpoh", "nongpoh", "A route-linked town where hospitality and service businesses can benefit from concise web pages.", ["Hospitality pages", "Lead capture", "SEO basics"]),
      city("Baghmara", "baghmara", "A smaller regional market where lightweight websites can support visibility and trust.", ["Basic websites", "Local SEO", "Maintenance"]),
    ],
  },
  {
    name: "Mizoram",
    slug: "mizoram",
    type: "state",
    intro: "Mizoram has education, local services, tourism, retail, and community-driven businesses moving online.",
    businessContext: "Digital systems for Mizoram should be simple, fast, mobile-friendly, and easy to maintain.",
    cities: [
      city("Aizawl", "aizawl", "The main business centre where organisations and service providers need professional websites and digital workflows.", ["Organisation websites", "Workflow automation", "Local SEO"]),
      city("Lunglei", "lunglei", "A regional services location where mobile-first websites help businesses present information clearly.", ["Mobile websites", "Service pages", "Contact flows"]),
      city("Champhai", "champhai", "A trade and tourism-linked town where catalogue pages and local visibility can support growth.", ["Catalogues", "Tourism pages", "SEO setup"]),
      city("Kolasib", "kolasib", "A local market where businesses can benefit from simple websites and enquiry management.", ["Business websites", "Lead forms", "Support"]),
      city("Serchhip", "serchhip", "A smaller service market where lightweight digital presence can improve trust and discovery.", ["Basic websites", "Local pages", "Updates"]),
    ],
  },
  {
    name: "Nagaland",
    slug: "nagaland",
    type: "state",
    intro: "Nagaland has tourism, local commerce, education, events, and regional services with growing digital needs.",
    businessContext: "Businesses here need mobile-friendly pages, local SEO, content updates, and simple systems that are easy to operate.",
    cities: [
      city("Dimapur", "dimapur", "A major trade and transport hub where businesses need websites, ecommerce, and lead generation.", ["Ecommerce", "Business websites", "Lead capture"]),
      city("Kohima", "kohima", "A capital and tourism market where service providers need credible pages and clear enquiry routes.", ["Tourism pages", "Service websites", "Local SEO"]),
      city("Mokokchung", "mokokchung", "A regional services centre where professional online presence can improve discovery.", ["Local pages", "Mobile websites", "Maintenance"]),
      city("Tuensang", "tuensang", "A developing local market where lightweight websites can help organisations share information.", ["Information pages", "Contact forms", "Updates"]),
      city("Wokha", "wokha", "A local business and tourism area where mobile-friendly service pages can support enquiries.", ["Tourism pages", "Mobile websites", "SEO basics"]),
    ],
  },
  {
    name: "Odisha",
    slug: "odisha",
    type: "state",
    intro: "Odisha has strong activity in education, tourism, mining, manufacturing, healthcare, retail, and public services.",
    businessContext: "Businesses in Odisha need search-friendly websites, service pages, automation, and reliable deployment support.",
    cities: [
      city("Bhubaneswar", "bhubaneswar", "A technology, education, and services hub where businesses need polished websites, SEO, and automation.", ["Web apps", "SEO growth", "Automation"]),
      city("Cuttack", "cuttack", "A trade and services city where professional websites and local SEO can improve customer enquiries.", ["Business websites", "Local SEO", "Lead forms"]),
      city("Rourkela", "rourkela", "An industrial city where suppliers and service providers need B2B websites and workflow systems.", ["Industrial websites", "B2B pages", "Dashboards"]),
      city("Sambalpur", "sambalpur", "A regional trade and education market where websites can support service visibility and operations.", ["Service pages", "Local SEO", "Automation"]),
      city("Puri", "puri", "A tourism-focused city where booking-friendly pages and mobile-first websites can help local businesses.", ["Tourism websites", "Booking flows", "Mobile pages"]),
    ],
  },
  {
    name: "Punjab",
    slug: "punjab",
    type: "state",
    intro: "Punjab has active markets in manufacturing, education, agriculture, retail, healthcare, hospitality, and overseas-facing services.",
    businessContext: "Businesses in Punjab often need websites that build trust, generate enquiries, support ecommerce, and automate follow-ups.",
    cities: [
      city("Ludhiana", "ludhiana", "A manufacturing and trade hub where B2B websites, catalogues, and enquiry systems are valuable.", ["B2B websites", "Catalogues", "Lead forms"]),
      city("Amritsar", "amritsar", "A tourism, retail, and services city where mobile-friendly websites and local SEO support discovery.", ["Tourism pages", "Local SEO", "Ecommerce"]),
      city("Jalandhar", "jalandhar", "A sports goods, education, and services market where websites and automation can support sales.", ["Product pages", "Business websites", "Automation"]),
      city("Patiala", "patiala", "An education and local services city where clear service pages and lead capture help businesses grow.", ["Service pages", "Lead capture", "SEO basics"]),
      city("Bathinda", "bathinda", "An industrial and retail market where companies need credible websites and practical digital tools.", ["Corporate websites", "Dashboards", "Maintenance"]),
    ],
  },
  {
    name: "Rajasthan",
    slug: "rajasthan",
    type: "state",
    intro: "Rajasthan has tourism, retail, education, manufacturing, local services, and export-oriented businesses.",
    businessContext: "Businesses here can use websites, SEO, ecommerce, and automation to reach both local and wider markets.",
    cities: [
      city("Jaipur", "jaipur", "A major tourism, retail, and startup city where businesses need strong websites and search visibility.", ["SEO pages", "Ecommerce", "Business websites"]),
      city("Jodhpur", "jodhpur", "A tourism and handicraft market where catalogues, ecommerce, and enquiry systems can support sales.", ["Product catalogues", "Ecommerce", "Tourism pages"]),
      city("Kota", "kota", "An education-focused city where institutes and service providers need landing pages and automation.", ["Education funnels", "Lead forms", "Follow-up automation"]),
      city("Udaipur", "udaipur", "A hospitality and tourism market where booking-friendly sites and local SEO are important.", ["Hotel pages", "Booking flows", "Local SEO"]),
      city("Ajmer", "ajmer", "A tourism, education, and services city where mobile-first websites can help local businesses.", ["Mobile websites", "Service pages", "Maintenance"]),
    ],
  },
  {
    name: "Sikkim",
    slug: "sikkim",
    type: "state",
    intro: "Sikkim has tourism, hospitality, education, local commerce, and regional services with strong mobile discovery needs.",
    businessContext: "Digital pages for Sikkim should be fast, informative, and designed for travellers, local customers, and service enquiries.",
    cities: [
      city("Gangtok", "gangtok", "A tourism and services hub where businesses need discoverable websites and booking-friendly contact paths.", ["Tourism websites", "Booking flows", "Local SEO"]),
      city("Namchi", "namchi", "A tourism and local services market where clear pages can help visitors and residents take action.", ["Tour pages", "Service websites", "Contact forms"]),
      city("Singtam", "singtam", "A local trade centre where small businesses can use mobile-first websites and enquiry systems.", ["Mobile websites", "Lead forms", "Updates"]),
      city("Rangpo", "rangpo", "A gateway town where logistics, hospitality, and services need practical online visibility.", ["Service pages", "Business websites", "SEO basics"]),
      city("Gyalshing", "gayzing", "A tourism and local business area where lightweight websites can improve discovery.", ["Tourism pages", "Local SEO", "Maintenance"]),
    ],
  },
  {
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    type: "state",
    intro: "Tamil Nadu has strong demand across IT, manufacturing, education, healthcare, retail, SaaS, and local services.",
    businessContext: "Businesses in Tamil Nadu often need fast websites, scalable apps, SEO, ecommerce, automation, and data systems.",
    cities: [
      city("Chennai", "chennai", "A major IT, manufacturing, healthcare, and services hub where businesses need credible websites and digital systems.", ["Corporate websites", "Web apps", "SEO strategy"]),
      city("Coimbatore", "coimbatore", "A manufacturing and SME market where B2B websites and automation can support growth.", ["B2B websites", "Automation", "Dashboards"]),
      city("Madurai", "madurai", "A tourism, education, and services city where local SEO and mobile-first pages help discovery.", ["Local SEO", "Tourism pages", "Service websites"]),
      city("Tiruchirappalli", "trichy", "An education and industrial market where websites and workflow tools can support operations.", ["Institution websites", "Business tools", "Lead forms"]),
      city("Salem", "salem", "A trade and manufacturing city where product pages, ecommerce, and B2B enquiries matter.", ["Catalogues", "Ecommerce", "B2B pages"]),
    ],
  },
  {
    name: "Telangana",
    slug: "telangana",
    type: "state",
    intro: "Telangana has a strong digital economy with IT, startups, education, healthcare, real estate, retail, and professional services.",
    businessContext: "Businesses here need high-quality websites, web apps, AI automation, SEO, and data-backed systems.",
    cities: [
      city("Hyderabad", "hyderabad", "A major technology and startup market where businesses need scalable websites, AI workflows, and SEO.", ["Web apps", "AI automation", "SEO pages"]),
      city("Warangal", "warangal", "An education and regional business hub where websites and lead systems support local growth.", ["Education pages", "Lead capture", "Local SEO"]),
      city("Nizamabad", "nizamabad", "A trade and services city where local businesses can improve visibility with mobile-friendly websites.", ["Mobile websites", "Service pages", "Contact forms"]),
      city("Karimnagar", "karimnagar", "A growing commercial market where websites, dashboards, and SEO help businesses operate better.", ["Business websites", "Dashboards", "SEO setup"]),
      city("Khammam", "khammam", "A regional services and trade market where digital presence can support enquiries and trust.", ["Service websites", "Local pages", "Maintenance"]),
    ],
  },
  {
    name: "Tripura",
    slug: "tripura",
    type: "state",
    intro: "Tripura has growing needs across education, local commerce, tourism, government-adjacent services, and small businesses.",
    businessContext: "Businesses in Tripura benefit from mobile-first websites, clear service pages, local SEO, and simple automation.",
    cities: [
      city("Agartala", "agartala", "The main commercial centre where businesses need websites, SEO, and digital enquiry systems.", ["Business websites", "Local SEO", "Lead forms"]),
      city("Udaipur", "udaipur", "A tourism and local services city where discoverable pages can support visitors and customers.", ["Tourism pages", "Mobile websites", "Contact flows"]),
      city("Dharmanagar", "dharmanagar", "A regional trade centre where local businesses can use practical websites and updates.", ["Service websites", "Local pages", "Maintenance"]),
      city("Kailashahar", "kailashahar", "A local market where mobile-first websites and enquiry forms help service providers.", ["Mobile websites", "Lead capture", "SEO basics"]),
      city("Belonia", "belonia", "A border-region services market where clear online information can help businesses build trust.", ["Information pages", "Business websites", "Support"]),
    ],
  },
  {
    name: "Uttar Pradesh",
    slug: "uttar-pradesh",
    type: "state",
    intro: "Uttar Pradesh has massive demand across NCR services, education, manufacturing, healthcare, retail, tourism, and local businesses.",
    businessContext: "Businesses in Uttar Pradesh need websites, SEO, automation, ecommerce, and custom tools that support high-volume local intent.",
    cities: [
      city("Noida", "noida", "A competitive NCR technology and services market where businesses need polished websites, SEO, and automation.", ["Web apps", "SEO landing pages", "AI automation"]),
      city("Lucknow", "lucknow", "A capital city with education, healthcare, retail, and services where trust-focused websites matter.", ["Business websites", "Local SEO", "Lead forms"]),
      city("Ghaziabad", "ghaziabad", "An NCR industrial and services city where B2B websites and enquiry systems can support growth.", ["B2B websites", "Lead capture", "Maintenance"]),
      city("Kanpur", "kanpur", "A manufacturing and trade market where catalogues, ecommerce, and workflow tools are useful.", ["Product catalogues", "Ecommerce", "Dashboards"]),
      city("Agra", "agra", "A tourism and trade city where mobile-first pages, booking flows, and local SEO support discovery.", ["Tourism pages", "Booking flows", "Local SEO"]),
    ],
  },
  {
    name: "Uttarakhand",
    slug: "uttarakhand",
    type: "state",
    intro: "Uttarakhand has tourism, education, wellness, manufacturing, retail, and regional services with strong online discovery needs.",
    businessContext: "Businesses here need fast websites, clear service pages, local SEO, booking flows, and low-maintenance systems.",
    cities: [
      city("Dehradun", "dehradun", "An education, healthcare, and services hub where businesses need professional websites and SEO.", ["Institution websites", "Service pages", "SEO setup"]),
      city("Haridwar", "haridwar", "A tourism, manufacturing, and wellness city where websites can support bookings, trust, and enquiries.", ["Tourism pages", "Corporate websites", "Lead forms"]),
      city("Haldwani", "haldwani", "A regional trade and services market where local SEO and mobile websites help customers find providers.", ["Local SEO", "Mobile websites", "Contact flows"]),
      city("Rishikesh", "rishikesh", "A tourism and wellness market where booking-friendly websites and clear content are important.", ["Wellness websites", "Booking flows", "Tour pages"]),
      city("Roorkee", "roorkee", "An education and industrial city where institutes and businesses need web systems and automation.", ["Education pages", "Business tools", "Automation"]),
    ],
  },
  {
    name: "West Bengal",
    slug: "west-bengal",
    type: "state",
    intro: "West Bengal has strong demand across trade, education, healthcare, retail, IT services, manufacturing, and tourism.",
    businessContext: "Businesses in West Bengal can use SEO-focused websites, ecommerce, automation, and data systems to support growth.",
    cities: [
      city("Kolkata", "kolkata", "A major commercial and cultural hub where businesses need high-trust websites, SEO, ecommerce, and automation.", ["SEO pages", "Ecommerce", "Business websites"]),
      city("Howrah", "howrah", "A manufacturing and trade city where B2B websites and digital enquiry systems are useful.", ["B2B websites", "Supplier pages", "Lead forms"]),
      city("Siliguri", "siliguri", "A gateway city for trade and tourism where businesses need local visibility and mobile-first pages.", ["Local SEO", "Tourism pages", "Mobile websites"]),
      city("Durgapur", "durgapur", "An industrial and education centre where companies need credible websites and internal workflow tools.", ["Industrial websites", "Dashboards", "Automation"]),
      city("Asansol", "asansol", "A mining, trade, and services market where practical websites can support enquiries and trust.", ["Business websites", "Service pages", "Maintenance"]),
    ],
  },
  {
    name: "Delhi",
    slug: "delhi",
    type: "union-territory",
    intro: "Delhi is one of India's densest business markets, covering trade, professional services, education, healthcare, hospitality, startups, and government-adjacent work.",
    businessContext: "Competition for search visibility in Delhi is high, so businesses need well-structured websites, genuine local relevance, and systems that convert enquiries rather than just look presentable.",
    cities: [
      city("New Delhi", "new-delhi", "The central business and institutional district where consultancies, professional firms, and established businesses need credible, fast websites.", ["Corporate websites", "Professional service pages", "Lead capture"]),
      city("Dwarka", "dwarka", "A large residential and commercial sub-city where clinics, institutes, retailers, and local service providers compete for nearby customers.", ["Local SEO", "Clinic and institute websites", "Booking flows"]),
      city("Rohini", "rohini", "A dense North Delhi market where coaching centres, healthcare providers, and retailers rely on local discovery.", ["Local landing pages", "Admission enquiry flows", "Mobile-first websites"]),
      city("Saket", "saket", "A South Delhi commercial and retail hub where hospitality, wellness, and premium services need polished digital presence.", ["Brand websites", "Booking and enquiry", "Ecommerce"]),
      city("Nehru Place", "nehru-place", "A major IT and electronics trade centre where B2B suppliers and technology resellers need catalogues and quotation flows.", ["B2B websites", "Product catalogues", "Quotation systems"]),
    ],
  },
  {
    name: "Jammu and Kashmir",
    slug: "jammu-and-kashmir",
    type: "union-territory",
    intro: "Jammu and Kashmir is a Union Territory with tourism, trade, education, healthcare, hospitality, and local services moving online.",
    businessContext: "Digital projects here should avoid fake local claims and focus on useful websites, local discovery, booking paths, and service enquiries.",
    cities: [
      city("Srinagar", "srinagar", "A tourism, retail, and services centre where businesses need discoverable websites and booking-friendly digital paths.", ["Tourism websites", "Local SEO", "Booking flows"]),
      city("Jammu", "jammu", "A trade, education, and services hub where professional websites and automation can support business operations.", ["Business websites", "Automation", "Lead forms"]),
      city("Anantnag", "anantnag", "A regional services and trade market where mobile-first pages can improve visibility and trust.", ["Mobile websites", "Service pages", "SEO setup"]),
      city("Baramulla", "baramulla", "A local commerce and services city where businesses can use clear websites and enquiry systems.", ["Local pages", "Contact flows", "Maintenance"]),
      city("Kathua", "kathua", "An industrial and trade-linked area where B2B websites and digital workflows can support growth.", ["B2B websites", "Workflow systems", "Support"]),
    ],
  },
];

export function regionLabel(region: ItServicesRegion): string {
  return region.type === "union-territory" ? "Union Territory" : "State";
}

export function regionPath(region: ItServicesRegion): string {
  return `/it-services/${region.slug}/`;
}

export function cityPath(region: ItServicesRegion, selectedCity: ItServicesCity): string {
  return `/it-services/${region.slug}/${selectedCity.slug}/`;
}

export function getRegionBySlug(slug: string): ItServicesRegion | undefined {
  return itServicesRegions.find((region) => region.slug === slug);
}

export function getCityBySlug(region: ItServicesRegion, slug: string): ItServicesCity | undefined {
  return region.cities.find((selectedCity) => selectedCity.slug === slug);
}

export function getNearbyCities(region: ItServicesRegion, selectedCity: ItServicesCity): ItServicesCity[] {
  return region.cities.filter((item) => item.slug !== selectedCity.slug).slice(0, 4);
}
