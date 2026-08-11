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
      description: `Digital and IT services in ${name} from BtechWaleTech, including website development, SEO, software, AI automation, data analysis, ecommerce, deployment, and support.`,
      canonicalPath: path,
      h1: `Digital Services in ${name}`,
      intro: `Explore BtechWaleTech digital and IT services in ${name}, with clean structure, practical service details, SEO-ready metadata, and clear contact paths.`,
      breadcrumbs: createBreadcrumbs([
        { label: "India", href: "/india/" },
        ...(regionSlug === slug ? [] : [{ label: region.name, href: region.path }]),
        { label: name, href: path },
      ]),
      relatedServices: ["web-development", "seo-services"],
    }),
  };
}
