export interface PricingPlan {
  name: string;
  price: string;
  unit?: string;
  timeline: string;
  summary: string;
  includes: string[];
}

/**
 * Starting prices in INR. Every figure is a "from" price: the final quote
 * depends on page count, features, integrations, and content scope.
 */
/** International price: ₹10,000 → US$150. */
export const INR_TO_USD = 0.015;

export function usdPrice(inr: string): string {
  return `US$${Math.round(Number(inr.replace(/[^\d]/g, "")) * INR_TO_USD).toLocaleString("en-US")}`;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Static website",
    timeline: "1 to 2 weeks",
    price: "₹10,000",
    summary: "A fast, mobile-friendly site of up to 100 pages for a business, portfolio, or service catalogue.",
    includes: ["Up to 100 pages", "Responsive design", "Contact form and enquiry setup", "Basic SEO tags and sitemap"],
  },
  {
    name: "SEO website (700+ pages)",
    timeline: "3 to 5 weeks",
    price: "₹20,000",
    summary: "A large-scale SEO site of 700+ pages built around search intent, from design through to deployment.",
    includes: [
      "700+ SEO pages",
      "Keyword and page planning",
      "Schema, sitemap, and internal linking",
      "Design to deployment included",
    ],
  },
  {
    name: "Ecommerce store",
    timeline: "4 to 8 weeks",
    price: "₹50,000",
    summary: "An online store with product pages, cart, checkout, and payment setup.",
    includes: ["Product and category pages", "Payment gateway setup", "Order and inventory basics", "Performance tuning"],
  },
  {
    name: "Android & iOS app",
    timeline: "6 to 10 weeks",
    price: "₹40,000",
    summary: "A mobile app for Android and iPhone, for your customers or staff, published on Google Play and the App Store.",
    includes: ["Android and iOS app (Flutter or React Native)", "Login, forms and push notifications", "Admin panel and API connection", "Google Play and App Store publishing"],
  },
  {
    name: "Custom web app or software",
    timeline: "6 to 12 weeks",
    price: "₹60,000",
    summary: "Dashboards, portals, admin panels, and tools built around your workflow.",
    includes: ["Custom features and APIs", "User accounts and roles", "Admin panel", "Deployment and handover"],
  },
  {
    name: "AI automation",
    timeline: "2 to 4 weeks",
    price: "₹40,000",
    summary: "Workflow automation and AI agents that remove repetitive manual work.",
    includes: ["Workflow mapping", "Tool and CRM integrations", "AI agent or automation build", "Testing and handover"],
  },
  {
    name: "Monthly SEO",
    timeline: "Ongoing, monthly",
    price: "₹10,000",
    unit: "per month",
    summary: "Ongoing technical, on-page, local, and content SEO work with reporting.",
    includes: ["Technical fixes", "On-page and content work", "Local SEO and listings", "Search Console reporting"],
  },
  {
    name: "Maintenance and support",
    timeline: "Ongoing, monthly",
    price: "₹8,000",
    unit: "per month",
    summary: "Updates, backups, fixes, and performance checks after launch.",
    includes: ["Content updates", "Bug fixes", "Backups and security checks", "Speed and uptime checks"],
  },
];

export const pricingNote =
  "All prices are starting points, quoted in INR for India and USD for international clients, not fixed quotes. Final cost depends on the number of pages, features, integrations, content, and timelines. Share your requirement and you get an itemised estimate with nothing hidden.";

/** Shared offer wording so every page states the same thing. */
export const endToEndOffer =
  "Every project is handled end to end: planning, design, development, SEO setup, hosting, and deployment. Once hosting is live you also get 5 months of maintenance included free, covering content updates, bug fixes, backups, and performance checks.";

export const endToEndFaq = {
  question: "Do you handle everything end to end, including hosting and deployment?",
  answer:
    "Yes. We take a project from the first planning conversation through design, development, SEO setup, hosting, and deployment, so you are not coordinating between different providers. After hosting goes live you get 5 months of maintenance included free, covering content updates, bug fixes, backups, security checks, and performance monitoring.",
};

export const freeMaintenanceFaq = {
  question: "What is included in the 5 months of free maintenance?",
  answer:
    "After your site is hosted and live, the next 5 months of maintenance are included at no extra cost. That covers content and text updates, bug fixes, dependency and security updates, backups, uptime and speed checks, and basic SEO health checks. After those 5 months you can continue on a monthly plan from ₹8,000 (US$120) or simply contact us when something needs changing.",
};
