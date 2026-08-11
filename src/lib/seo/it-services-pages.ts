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
      `IT support services ${region.name}`,
      `best IT company in ${region.name}`,
      `software development services in ${region.name}`,
      `custom software development ${region.name}`,
      `web development services in ${region.name}`,
      `web development company in ${region.name}`,
      `website development ${region.name}`,
      `website design company ${region.name}`,
      `website development cost ${region.name}`,
      `hire web developer ${region.name}`,
      `SEO services in ${region.name}`,
      `SEO company in ${region.name}`,
      `local SEO ${region.name}`,
      `digital marketing services ${region.name}`,
      `ecommerce development ${region.name}`,
      `AI automation services ${region.name}`,
      `AI development ${region.name}`,
      `business automation ${region.name}`,
      `data analysis services ${region.name}`,
      `website maintenance ${region.name}`,
      ...region.cities.map((city) => `IT services in ${city.name}`),
      ...region.cities.map((city) => `web development ${city.name}`),
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
      `IT support in ${city.name}`,
      `IT services near me ${city.name}`,
      `best IT company in ${city.name}`,
      `web development company in ${city.name}`,
      `website development services in ${city.name}`,
      `website designer in ${city.name}`,
      `website design company ${city.name}`,
      `website development cost in ${city.name}`,
      `hire web developer in ${city.name}`,
      `freelance web developer ${city.name}`,
      `software development company in ${city.name}`,
      `custom software development ${city.name}`,
      `web application development ${city.name}`,
      `SEO services in ${city.name}`,
      `SEO company in ${city.name}`,
      `local SEO services ${city.name}`,
      `digital marketing services in ${city.name}`,
      `AI development services in ${city.name}`,
      `AI automation services ${city.name}`,
      `business automation ${city.name}`,
      `ecommerce website development ${city.name}`,
      `online store development ${city.name}`,
      `website maintenance services ${city.name}`,
      `data analysis services ${city.name}`,
      `IT services in ${region.name}`,
      `web development ${region.name}`,
      `IT company near ${city.name} ${region.name}`,
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
    {
      question: `What does a website cost for a business in ${region.name}?`,
      answer:
        "Pricing follows scope, not postcode. A small static site with a few pages is the entry point, a larger site with detailed service and location pages costs more, and dynamic applications with accounts, databases, or payments sit higher again. You get an itemised estimate after sharing your page and feature list.",
    },
    {
      question: `Do you work remotely with clients across ${region.name}?`,
      answer: `Yes. Everything runs remotely through email, calls, and shared documents, with agreed checkpoints so you can review progress. Working this way keeps costs lower than a traditional agency and means businesses anywhere in ${region.name} get the same delivery process.`,
    },
    {
      question: `Which services are most useful for businesses in ${region.name}?`,
      answer: `Most ${region.name} businesses start with a fast, search-friendly website and local SEO so customers can find and contact them. From there the common additions are ecommerce, enquiry and follow-up automation, dashboards or internal tools, and ongoing maintenance that keeps the site secure and up to date.`,
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
    {
      question: `How much does a website cost for a business in ${city.name}?`,
      answer:
        "Cost depends on scope rather than location. A small static business website with a handful of pages sits at the lower end, a larger SEO-focused site with many service and location pages sits in the middle, and a dynamic web application with logins, databases, or payments costs more. Share your page list and feature list and you get an itemised estimate instead of a guess.",
    },
    {
      question: `How long does a project take for a client in ${city.name}?`,
      answer:
        "A simple static website usually takes one to three weeks once content is ready. A larger multi-page site with SEO structure takes three to six weeks. Custom software, ecommerce, or automation work depends on the feature list and is planned in milestones so you can see progress instead of waiting until the end.",
    },
    {
      question: `Can you help a ${city.name} business rank in local search results?`,
      answer: `Yes. Local search work for ${city.name} covers Google Business Profile setup and optimisation, consistent business details across listings, location and service pages built around real search intent, internal linking, schema markup, and technical fixes that let search engines crawl and index the site properly. Rankings take time and no honest provider guarantees a position.`,
    },
    {
      question: `Do you work with small businesses and new startups in ${city.name}?`,
      answer:
        "Yes. Many projects start small with a single website or landing page and grow later into SEO, ecommerce, automation, or custom tools. Starting with a tight scope keeps the first invoice manageable and lets you confirm the working relationship before committing to a bigger build.",
    },
  ];
}
