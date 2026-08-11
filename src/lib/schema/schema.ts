import { siteBrand, siteContact } from "@data/site/site-config";
import type { BreadcrumbItem, FaqItem, SeoMeta } from "@app-types/seo";
import { canonicalUrl } from "@lib/urls/url-utils";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteBrand.name,
    url: siteBrand.domain,
    email: siteContact.email,
    telephone: siteContact.phone,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteContact.email,
      telephone: siteContact.phone,
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteBrand.name,
    url: siteBrand.domain,
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
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: canonicalUrl(path),
    provider: {
      "@type": "Organization",
      name: siteBrand.name,
      url: siteBrand.domain,
      email: siteContact.email,
      telephone: siteContact.phone,
    },
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
    publisher: {
      "@type": "Organization",
      name: siteBrand.name,
      url: siteBrand.domain,
    },
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
