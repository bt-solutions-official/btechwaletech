import type { Service } from "@app-types/service";
import { createBreadcrumbs } from "@lib/breadcrumbs/breadcrumbs";
import { createPageSeo } from "@lib/seo/seo-config";

export const services: Service[] = [
  {
    name: "Web Development",
    slug: "web-development",
    path: "/services/web-development/",
    summary: "Static websites, business websites, landing pages, and web apps built for fast loading, clean SEO, and reliable deployment.",
    enabled: true,
    seo: createPageSeo({
      title: "Web Development Services",
      description:
        "Website development services from BtechWaleTech for static sites, landing pages, business websites, web apps, hosting, deployment, and SEO-ready page structure.",
      canonicalPath: "/services/web-development/",
      h1: "Web Development Services",
      intro:
        "Build a fast, search-friendly website or web application with clean structure, responsive pages, and production deployment handled properly.",
      breadcrumbs: createBreadcrumbs([
        { label: "Services", href: "/services/" },
        { label: "Web Development", href: "/services/web-development/" },
      ]),
    }),
  },
  {
    name: "SEO Services",
    slug: "seo-services",
    path: "/services/seo-services/",
    summary: "Technical SEO, local SEO, metadata, schema, sitemaps, internal linking, and content planning for organic visibility.",
    enabled: true,
    seo: createPageSeo({
      title: "SEO Services",
      description:
        "SEO services from BtechWaleTech covering technical SEO, local SEO, metadata, schema markup, XML sitemaps, internal links, and search intent planning.",
      canonicalPath: "/services/seo-services/",
      h1: "SEO Services",
      intro:
        "Improve crawlability, page structure, local relevance, and search visibility with practical SEO work built around user intent.",
      breadcrumbs: createBreadcrumbs([
        { label: "Services", href: "/services/" },
        { label: "SEO Services", href: "/services/seo-services/" },
      ]),
    }),
  },
];

export function getServiceBySlug(slug: string): Service {
  const service = services.find((item) => item.slug === slug);
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  return service;
}
