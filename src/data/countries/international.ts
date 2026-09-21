import { pricingPlans, usdPrice } from "@data/pricing/plans";
import { siteBrand, siteContact } from "@data/site/site-config";
import { canonicalUrl } from "@lib/urls/url-utils";

/** Starting prices for country pages, always derived from the single pricing source. */
function plan(prefix: string) {
  const found = pricingPlans.find((p) => p.name.startsWith(prefix));
  if (!found) throw new Error(`Unknown pricing plan: ${prefix}`);
  return found;
}

/** "US$150" or "US$150/mo" for a plan whose name starts with `prefix`. */
export const usd = (prefix: string) => {
  const p = plan(prefix);
  return usdPrice(p.price) + (p.unit ? "/mo" : "");
};

/** "₹10,000" or "₹10,000/mo". */
export const inr = (prefix: string) => {
  const p = plan(prefix);
  return p.price + (p.unit ? "/mo" : "");
};

export const priceRows = pricingPlans.map((p) => ({
  service: p.name,
  includes: p.includes.join(", "),
  timeline: p.timeline,
  usd: usd(p.name),
  inr: inr(p.name),
}));

/** Regions served remotely from India. Overlap/billing wording mirrors the home page markets table. */
export const regions = [
  { country: "United States", code: "US", overlap: "US Eastern mornings (IST evenings); early Pacific calls", billing: "USD · wire, Wise, PayPal", href: "/usa/" },
  { country: "United Kingdom", code: "UK", overlap: "UK business day from late morning", billing: "USD or GBP · Wise, wire, PayPal", href: "/uk/" },
  { country: "Canada", code: "CA", overlap: "Eastern & Pacific mornings", billing: "USD or CAD · Wise, wire, PayPal", href: "/canada/" },
  { country: "Australia & NZ", code: "AU", overlap: "Australian afternoons (IST mornings)", billing: "USD or AUD · Wise, wire", href: "/australia/" },
  { country: "UAE & Middle East", code: "AE", overlap: "Near full working day", billing: "USD or AED · Wise, wire", href: "/uae/" },
  { country: "Singapore & Asia", code: "SG", overlap: "Near full working day", billing: "USD or SGD · Wise, wire", href: "/singapore/" },
  { country: "Europe", code: "EU", overlap: "European business day from late morning", billing: "USD or EUR · Wise, wire", href: "/germany/" },
  { country: "India", code: "IN", overlap: "Same time zone (IST)", billing: "INR · UPI, bank transfer", href: "/india/" },
];

/** Shared OG image for country pages; pass a country-specific alt. */
export const countryOgImage = (alt: string) => ({ url: "/banner_logo.png", alt, width: 1536, height: 1024 });

/**
 * ProfessionalService schema for a country page. The team is in India and serves the
 * country remotely, so the address stays IN and the country/cities go in areaServed only.
 */
export function countryServiceSchema(o: {
  path: string;
  description: string;
  country: string;
  /** States, provinces, nations or emirates served remotely. */
  regions?: string[];
  cities: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteBrand.name}: web development for ${o.country}`,
    url: canonicalUrl(o.path),
    image: `${siteBrand.domain}/banner_logo.png`,
    description: o.description,
    email: siteContact.email,
    telephone: siteContact.phone,
    priceRange: `${usd("Maintenance")} – ${usd("Custom web app")}+`,
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    areaServed: [
      { "@type": "Country", name: o.country },
      ...(o.regions ?? []).map((name) => ({ "@type": "AdministrativeArea", name })),
      ...o.cities.map((name) => ({ "@type": "City", name })),
    ],
    knowsLanguage: ["en"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website development and IT services (starting prices)",
      itemListElement: pricingPlans.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p.name, description: p.includes.join(", ") },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: Number(usdPrice(p.price).replace(/[^\d]/g, "")),
          priceCurrency: "USD",
        },
      })),
    },
  };
}
