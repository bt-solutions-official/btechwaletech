import { siteBrand, siteContact, teamSocialProfiles } from "@data/site/site-config";
import { pricingPlans, usdPrice } from "@data/pricing/plans";
import type { BreadcrumbItem, FaqItem, SeoMeta } from "@app-types/seo";
import { canonicalUrl } from "@lib/urls/url-utils";

/**
 * Stable @id values so Organization, WebSite and every page's WebPage/Service node
 * resolve to one entity instead of 2,671 unlinked copies. AI answer engines and
 * Google's knowledge graph both de-duplicate on @id, so this is what makes
 * "BtechWaleTech" a single entity across the site.
 */
export const ORG_ID = `${siteBrand.domain}/#organization`;
export const SITE_ID = `${siteBrand.domain}/#website`;

/** Currencies the offer builders support. INR for India, USD for international pages. */
export type OfferCurrency = "INR" | "USD";

/** Numeric value of a "₹10,000" style price string. */
const amount = (price: string) => Number(price.replace(/[^\d]/g, ""));
/** One-off project plans only: the monthly plans are excluded from price ranges so a
 *  "from ₹8,000" monthly figure never gets quoted as a project price. */
const projectPlans = pricingPlans.filter((p) => !p.unit);

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteBrand.name,
    alternateName: "Btech Wale Tech",
    url: siteBrand.domain,
    description:
      "Freelance IT services group of three computer science engineers based in India, building websites, SEO websites, Android and iOS apps, ecommerce stores, custom software and AI automation. Remote delivery across India and worldwide; no physical offices.",
    knowsAbout: [
      "Website development",
      "Programmatic SEO",
      "Technical SEO",
      "Local SEO",
      "Generative engine optimisation",
      "Android and iOS app development",
      "Ecommerce development",
      "Custom software development",
      "AI automation",
      "WhatsApp chatbots",
      "Data analysis and dashboards",
    ],
    email: siteContact.email,
    telephone: siteContact.phone,
    logo: `${siteBrand.domain}/icon-512.png`,
    sameAs: [...teamSocialProfiles],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteContact.email,
      telephone: siteContact.phone,
      areaServed: ["US", "GB", "CA", "AU", "AE", "SG", "IN"],
      availableLanguage: ["en", "hi"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: siteBrand.name,
    alternateName: "Btech Wale Tech",
    url: siteBrand.domain,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbListSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: canonicalUrl(item.href),
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  const url = canonicalUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    areaServed: ["US", "GB", "CA", "AU", "AE", "SG", "IN"],
    provider: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: siteBrand.name,
      url: siteBrand.domain,
      email: siteContact.email,
      telephone: siteContact.phone,
    },
    // Real starting prices, so an answer engine quoting this page quotes the published figure.
    offers: aggregateOfferSchema("INR", url),
    hasOfferCatalog: offerCatalogSchema(`${siteBrand.name} starting prices`, "INR"),
  };
}

/**
 * AggregateOffer with the real published price range. Separate from hasOfferCatalog
 * because an AggregateOffer gives one readable low/high pair, which is the form
 * AI answer engines quote ("websites from ₹10,000"); the catalog gives the per-service detail.
 * Monthly plans are excluded from the range: see projectPlans.
 */
export function aggregateOfferSchema(currency: OfferCurrency = "INR", url?: string) {
  const values = projectPlans.map((p) => (currency === "USD" ? amount(usdPrice(p.price)) : amount(p.price)));
  return {
    "@type": "AggregateOffer",
    priceCurrency: currency,
    lowPrice: Math.min(...values),
    highPrice: Math.max(...values),
    offerCount: projectPlans.length,
    availability: "https://schema.org/InStock",
    ...(url ? { url } : {}),
    seller: { "@id": ORG_ID },
  };
}

/**
 * OfferCatalog of every published plan, one Offer per service, with its real starting
 * price. `areaServed` is passed through for location pages so the Offer is scoped to the
 * place the page is written for.
 */
export function offerCatalogSchema(
  name: string,
  currency: OfferCurrency = "INR",
  areaServed?: string,
  /** Plan name prefixes to include, e.g. ["Static", "SEO website"]. Omit for every plan. */
  only?: string[],
) {
  const plans = only ? pricingPlans.filter((p) => only.some((prefix) => p.name.startsWith(prefix))) : pricingPlans;
  return {
    "@type": "OfferCatalog",
    name,
    itemListElement: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      // Timeline rides in the description: schema.org types deliveryLeadTime as a
      // QuantitativeValue, and "1 to 2 weeks" is not one.
      description: `${plan.includes.join(", ")}. Typical timeline: ${plan.timeline}.`,
      itemOffered: {
        "@type": "Service",
        name: plan.name,
        description: plan.summary,
        ...(areaServed ? { areaServed } : {}),
      },
      priceSpecification: {
        "@type": currency === "INR" && plan.unit ? "UnitPriceSpecification" : "PriceSpecification",
        priceCurrency: currency,
        minPrice: amount(currency === "USD" ? usdPrice(plan.price) : plan.price),
        ...(plan.unit ? { unitText: plan.unit, billingDuration: 1, billingIncrement: 1 } : {}),
      },
      seller: { "@id": ORG_ID },
    })),
  };
}

/**
 * The three engineers as Person entities, for E-E-A-T and author/entity grounding.
 * Names are the published role descriptions: the site deliberately does not publish
 * personal names, so none are invented here. sameAs carries the real LinkedIn profiles.
 */
export function teamPersons() {
  return [
    { name: "Full-stack developer", jobTitle: "Full stack development: websites, web apps, APIs and databases" },
    { name: "AI, cloud and data engineer", jobTitle: "AI, machine learning, AWS cloud, data science and technical SEO" },
    { name: "Project lead", jobTitle: "Project management, data science, AI and automation" },
  ].map((person, index) => ({
    "@type": "Person",
    ...person,
    worksFor: { "@id": ORG_ID },
    knowsLanguage: ["en", "hi"],
    sameAs: teamSocialProfiles[index],
  }));
}

/**
 * WebPage node for a content page, linked to the page's Service node and the site entity.
 * `speakable` marks the passages a voice assistant or AI answer engine should read out:
 * the quick answer block and the H1. Both selectors must exist in the template.
 */
export function webPageSchema(o: {
  path: string;
  name: string;
  description: string;
  updated?: string;
  inLanguage?: string;
  /** Set when the page also emits a Service/ProfessionalService node at #service. */
  aboutService?: boolean;
  speakableSelectors?: string[];
}) {
  const url = canonicalUrl(o.path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: o.name,
    description: o.description,
    inLanguage: o.inLanguage ?? "en-IN",
    isPartOf: { "@id": SITE_ID },
    publisher: { "@id": ORG_ID },
    ...(o.updated ? { dateModified: o.updated } : {}),
    ...(o.aboutService === false ? {} : { about: { "@id": `${url}#service` } }),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: o.speakableSelectors ?? ["#quick-answer", "h1"],
    },
  };
}

/**
 * HowTo for a page whose content genuinely is a numbered procedure (the project
 * process blocks). Google removed HowTo rich results in 2023, so this buys no SERP
 * pixels; it is here because AI answer engines still parse step lists, and because the
 * steps are real. Do not wrap non-procedural content in it.
 */
export function howToSchema(o: {
  name: string;
  description: string;
  path: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  const url = canonicalUrl(o.path);
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: o.name,
    description: o.description,
    ...(o.totalTime ? { totalTime: o.totalTime } : {}),
    step: o.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function articleSchema(meta: SeoMeta, publishedAt?: string, updatedAt?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    url: canonicalUrl(meta.canonicalPath),
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    // Article requires an author; without one the node fails Google's validator.
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": SITE_ID },
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
