import { pricingPlans } from "@data/pricing/plans";
import { siteBrand, siteContact } from "@data/site/site-config";
import { usd } from "@data/countries/international";
import { japanAreaServed } from "@data/countries/japan";
import { canonicalUrl } from "@lib/urls/url-utils";
import type { TopicContent } from "@data/topics/types";

const indiaCountry = { "@type": "Country", name: "India" };
const indiaCities = [
  "Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
  "Surat", "Kanpur", "Nagpur", "Indore", "Bhopal", "Patna", "Kochi", "Coimbatore", "Chandigarh", "Gurugram",
  "Noida", "Visakhapatnam", "Guwahati", "Bhubaneswar", "Raipur",
];
const indiaAreaServed = [indiaCountry, ...indiaCities.map((name) => ({ "@type": "City", name, containedInPlace: indiaCountry }))];

/** WebPage + Service schema for a /india/<slug>/ or /japan/<slug>/ topic page. */
export function topicSchema(content: TopicContent, path: string, title: string) {
  const url = canonicalUrl(path);
  const plans = content.plans.map((prefix) => {
    const plan = pricingPlans.find((p) => p.name.startsWith(prefix));
    if (!plan) throw new Error(`Unknown pricing plan: ${prefix}`);
    return plan;
  });
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description: content.description,
      inLanguage: content.country === "India" ? "en-IN" : "en-JP",
      about: { "@id": `${url}#service` },
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["#quick-answer", "h1"] },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: content.serviceName,
      serviceType: content.serviceType,
      description: content.description,
      url,
      provider: {
        "@type": "ProfessionalService",
        name: siteBrand.name,
        url: siteBrand.domain,
        email: siteContact.email,
        telephone: siteContact.phone,
        image: `${siteBrand.domain}/banner_logo.png`,
        address: { "@type": "PostalAddress", addressCountry: "IN" },
      },
      areaServed: content.country === "India" ? indiaAreaServed : japanAreaServed,
      availableLanguage: ["en"],
      offers: plans.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: p.includes.join(", "),
        url,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: Number(usd(p.name).replace(/[^\d]/g, "")),
          priceCurrency: "USD",
        },
      })),
    },
  ];
}
