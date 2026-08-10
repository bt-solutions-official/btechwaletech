import type { Service } from "@app-types/service";
import { createBreadcrumbs } from "@lib/breadcrumbs/breadcrumbs";
import { createPageSeo } from "@lib/seo/seo-config";

export const services: Service[] = [
  {
    name: "Web Development",
    slug: "web-development",
    path: "/services/web-development/",
    summary: "Placeholder summary for future unique service positioning.",
    enabled: true,
    seo: createPageSeo({
      title: "Web Development",
      description: "Placeholder meta description for web development services. Replace before launch.",
      canonicalPath: "/services/web-development/",
      h1: "Web Development",
      intro: "Placeholder intro. Add original service content here before publishing.",
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
    summary: "Placeholder summary for future SEO service content.",
    enabled: true,
    seo: createPageSeo({
      title: "SEO Services",
      description: "Placeholder meta description for SEO services. Replace before launch.",
      canonicalPath: "/services/seo-services/",
      h1: "SEO Services",
      intro: "Placeholder intro. Add original service content here before publishing.",
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
