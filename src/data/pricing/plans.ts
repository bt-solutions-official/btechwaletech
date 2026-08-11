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
