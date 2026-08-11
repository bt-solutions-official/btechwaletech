export interface PricingPlan {
  name: string;
  price: string;
  unit?: string;
  summary: string;
  includes: string[];
}

/**
 * Starting prices in INR. Every figure is a "from" price: the final quote
 * depends on page count, features, integrations, and content scope.
 */
export const pricingPlans: PricingPlan[] = [
  {
    name: "Static website",
    price: "₹5,000",
    summary: "A fast, mobile-friendly site for a small business, landing page, or portfolio.",
    includes: ["Up to 5 pages", "Responsive design", "Contact form and enquiry setup", "Basic SEO tags and sitemap"],
  },
  {
    name: "SEO website (30 pages)",
    price: "₹10,000",
    summary: "A multi-page site built around search intent, from design through to deployment.",
    includes: [
      "Up to 30 SEO pages",
      "Keyword and page planning",
      "Schema, sitemap, and internal linking",
      "Design to deployment included",
    ],
  },
  {
    name: "Ecommerce store",
    price: "₹25,000",
    summary: "An online store with product pages, cart, checkout, and payment setup.",
    includes: ["Product and category pages", "Payment gateway setup", "Order and inventory basics", "Performance tuning"],
  },
  {
    name: "Custom web app or software",
    price: "₹40,000",
    summary: "Dashboards, portals, admin panels, and tools built around your workflow.",
    includes: ["Custom features and APIs", "User accounts and roles", "Admin panel", "Deployment and handover"],
  },
  {
    name: "AI automation",
    price: "₹15,000",
    summary: "Workflow automation and AI agents that remove repetitive manual work.",
    includes: ["Workflow mapping", "Tool and CRM integrations", "AI agent or automation build", "Testing and handover"],
  },
  {
    name: "Monthly SEO",
    price: "₹5,000",
    unit: "per month",
    summary: "Ongoing technical, on-page, local, and content SEO work with reporting.",
    includes: ["Technical fixes", "On-page and content work", "Local SEO and listings", "Search Console reporting"],
  },
  {
    name: "Maintenance and support",
    price: "₹2,000",
    unit: "per month",
    summary: "Updates, backups, fixes, and performance checks after launch.",
    includes: ["Content updates", "Bug fixes", "Backups and security checks", "Speed and uptime checks"],
  },
];

export const pricingNote =
  "All prices are starting points in INR, not fixed quotes. Final cost depends on the number of pages, features, integrations, content, and timelines. Share your requirement and you get an itemised estimate with nothing hidden.";

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
    "After your site is hosted and live, the next 5 months of maintenance are included at no extra cost. That covers content and text updates, bug fixes, dependency and security updates, backups, uptime and speed checks, and basic SEO health checks. After those 5 months you can continue on a monthly plan from ₹2,000 or simply contact us when something needs changing.",
};
