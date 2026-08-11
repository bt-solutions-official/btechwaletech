import type { FaqItem, PageSeoConfig } from "@app-types/seo";
import { createBreadcrumbs } from "@lib/breadcrumbs/breadcrumbs";
import { createPageSeo } from "@lib/seo/seo-config";
import {
  cityPath,
  regionLabel,
  regionPath,
  type ItServicesCity,
  type ItServicesRegion,
} from "@data/it-services/locations";
import { siteContact } from "@data/site/site-config";

export function nationalItServicesSeo(): PageSeoConfig {
  return createPageSeo({
    title: "IT Services in India",
    description:
      "Explore BtechWaleTech IT services across India, including web development, software development, AI automation, SEO, ecommerce, deployment, and support.",
    canonicalPath: "/it-services/",
    h1: "IT Services in India",
    intro:
      "BtechWaleTech provides freelance IT services for Indian businesses that need websites, software, AI automation, SEO, ecommerce, data workflows, and reliable deployment support.",
    breadcrumbs: createBreadcrumbs([{ label: "IT Services", href: "/it-services/" }]),
    keywords: [
      "IT services in India",
      "freelance IT services India",
      "web development services India",
      "software development services India",
      "AI automation services India",
      "SEO services India",
    ],
  });
}

export function regionItServicesSeo(region: ItServicesRegion): PageSeoConfig {
  return createPageSeo({
    title: `IT Services in ${region.name}`,
    description: `Explore IT services in ${region.name} from BtechWaleTech, including web development, software development, AI automation, SEO, ecommerce, deployment, and support.`,
    canonicalPath: regionPath(region),
    h1: `IT Services in ${region.name}`,
    intro: `${region.name} businesses can use BtechWaleTech for practical IT services, from websites and SEO to software tools, AI automation, ecommerce, and deployment support.`,
    breadcrumbs: createBreadcrumbs([
      { label: "IT Services", href: "/it-services/" },
      { label: region.name, href: regionPath(region) },
    ]),
    keywords: [
      `IT services in ${region.name}`,
      `IT company in ${region.name}`,
      `IT solutions in ${region.name}`,
      `software development services in ${region.name}`,
      `web development services in ${region.name}`,
      `SEO services in ${region.name}`,
    ],
  });
}

export function cityItServicesSeo(region: ItServicesRegion, city: ItServicesCity): PageSeoConfig {
  return createPageSeo({
    title: `IT Services in ${city.name}, ${region.name}`,
    description: `Explore professional IT services in ${city.name}, ${region.name} including web development, software development, AI solutions, SEO and digital marketing from BtechWaleTech.`,
    canonicalPath: cityPath(region, city),
    h1: `IT Services in ${city.name}, ${region.name}`,
    intro: `BtechWaleTech helps businesses in ${city.name}, ${region.name} plan, build, deploy, and improve websites, software, AI automation, SEO systems, ecommerce flows, and data-backed digital operations.`,
    breadcrumbs: createBreadcrumbs([
      { label: "IT Services", href: "/it-services/" },
      { label: region.name, href: regionPath(region) },
      { label: city.name, href: cityPath(region, city) },
    ]),
    keywords: [
      `IT services in ${city.name}`,
      `IT company in ${city.name}`,
      `IT solutions in ${city.name}`,
      `web development company in ${city.name}`,
      `software development company in ${city.name}`,
      `SEO services in ${city.name}`,
      `AI development services in ${city.name}`,
      `website development services in ${city.name}`,
    ],
  });
}

export function regionFaqs(region: ItServicesRegion): FaqItem[] {
  const label = regionLabel(region).toLowerCase();
  return [
    {
      question: `Do you provide IT services across ${region.name}?`,
      answer: `Yes. BtechWaleTech can support businesses across ${region.name} remotely with websites, software development, SEO, AI automation, ecommerce, deployment, and maintenance. We do not claim a physical office in every ${label}; work is handled through remote-friendly communication and clear delivery milestones.`,
    },
    {
      question: `Which cities in ${region.name} are covered?`,
      answer: `This ${label} hub currently covers ${region.cities.map((city) => city.name).join(", ")}. More city pages can be added later through the location dataset.`,
    },
    {
      question: `Can a small business in ${region.name} start with only a website?`,
      answer:
        "Yes. Many projects can start with a fast business website or landing page, then expand into SEO pages, automation, ecommerce, dashboards, or custom software when the business needs more.",
    },
  ];
}

export function cityFaqs(region: ItServicesRegion, city: ItServicesCity): FaqItem[] {
  const location = `${city.name}, ${region.name}`;
  return [
    {
      question: `What IT services are available in ${city.name}?`,
      answer: `BtechWaleTech provides website development, software development, AI automation, AI agents, SEO, digital marketing support, ecommerce development, data analysis, deployment, and maintenance for businesses in ${location}.`,
    },
    {
      question: `Do you have an office in ${city.name}?`,
      answer: `The website does not claim a physical BtechWaleTech office in ${city.name}. Work can be handled remotely with clear planning, updates, delivery checkpoints, and support.`,
    },
    {
      question: `Who can use your IT services in ${city.name}?`,
      answer: `Local service providers, shops, institutes, consultants, startups, ecommerce sellers, healthcare providers, tourism businesses, manufacturers, and growing teams in ${city.name} can use these services.`,
    },
    {
      question: `How can someone from ${city.name} contact BtechWaleTech?`,
      answer: `Use the contact page, email ${siteContact.email}, or call ${siteContact.phone} to share your requirements. Include the project type, business goal, preferred timeline, and whether you need a website, software tool, AI automation, SEO, ecommerce, or maintenance.`,
    },
  ];
}
