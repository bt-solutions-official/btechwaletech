import type { City } from "@app-types/location";
import { createBreadcrumbs } from "@lib/breadcrumbs/breadcrumbs";
import { createPageSeo } from "@lib/seo/seo-config";
import { indiaRegions } from "../states";

export function createCity(name: string, slug: string, regionSlug: string): City {
  const region = indiaRegions.find((item) => item.slug === regionSlug);
  if (!region) throw new Error(`Unknown India region slug: ${regionSlug}`);

  const path = regionSlug === slug ? `/india/${regionSlug}/` : `/india/${regionSlug}/${slug}/`;

  return {
    name,
    slug,
    countrySlug: "india",
    regionSlug,
    path,
    enabled: true,
    seo: createPageSeo({
      title: `Digital Services in ${name}`,
      description: `Placeholder meta description for Btechwale services in ${name}. Replace with unique local content before launch.`,
      canonicalPath: path,
      h1: `Digital Services in ${name}`,
      intro: `Placeholder intro for ${name}. Add unique local relevance, service details, proof, FAQs, and internal links here before publishing.`,
      breadcrumbs: createBreadcrumbs([
        { label: "India", href: "/india/" },
        ...(regionSlug === slug ? [] : [{ label: region.name, href: region.path }]),
        { label: name, href: path },
      ]),
      relatedServices: ["web-development", "seo-services"],
    }),
  };
}
