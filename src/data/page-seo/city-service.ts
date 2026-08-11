import type { CityServicePageConfig } from "@app-types/service";
import { createBreadcrumbs } from "@lib/breadcrumbs/breadcrumbs";
import { createPageSeo } from "@lib/seo/seo-config";
import { getIndiaCity } from "@data/countries/india/cities";
import { getServiceBySlug } from "@data/services";

export function createCityServicePage(regionSlug: string, citySlug: string, serviceSlug: string): CityServicePageConfig {
  const city = getIndiaCity(regionSlug, citySlug);
  const service = getServiceBySlug(serviceSlug);
  const path = `${city.path}${service.slug}/`;

  return {
    citySlug,
    serviceSlug,
    path,
    seo: createPageSeo({
      title: `${service.name} in ${city.name}`,
      description: `${service.name} in ${city.name} from BtechWaleTech, with SEO-ready structure, clear service information, remote delivery, deployment support, and practical maintenance.`,
      canonicalPath: path,
      h1: `${service.name} in ${city.name}`,
      intro: `Plan ${service.name.toLowerCase()} for ${city.name} with clear scope, useful service information, SEO-ready foundations, and direct contact with the BtechWaleTech team.`,
      breadcrumbs: createBreadcrumbs([
        { label: "India", href: "/india/" },
        { label: city.regionSlug, href: `/india/${city.regionSlug}/` },
        { label: city.name, href: city.path },
        { label: service.name, href: path },
      ]),
      relatedServices: ["web-development", "seo-services"].filter((slug) => slug !== service.slug),
      relatedLocations: [city.path],
    }),
  };
}
