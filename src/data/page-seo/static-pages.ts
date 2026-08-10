import type { PageSeoConfig } from "@app-types/seo";
import { createBreadcrumbs } from "@lib/breadcrumbs/breadcrumbs";
import { createBasicSeo, createPageSeo } from "@lib/seo/seo-config";
import { indiaRegions } from "@data/countries/india/states";

export function staticPage(path: string, title: string, h1 = title): PageSeoConfig {
  return {
    ...createBasicSeo(path, title, h1),
    breadcrumbs: createBreadcrumbs(path === "/" ? [] : [{ label: h1, href: path }]),
    intro: "Placeholder page body. Add final content before launch.",
  };
}

export function indiaRegionPage(regionSlug: string): PageSeoConfig {
  const region = indiaRegions.find((item) => item.slug === regionSlug);
  if (!region) throw new Error(`Unknown India region: ${regionSlug}`);

  return createPageSeo({
    title: `Digital Services in ${region.name}`,
    description: `Placeholder meta description for Btechwale services in ${region.name}. Replace with unique regional content before launch.`,
    canonicalPath: region.path,
    h1: `Digital Services in ${region.name}`,
    intro: `Placeholder intro for ${region.name}. Add unique regional content, cities, services, FAQs, and internal links here.`,
    breadcrumbs: createBreadcrumbs([
      { label: "India", href: "/india/" },
      { label: region.name, href: region.path },
    ]),
  });
}

export const indiaPageSeo = createPageSeo({
  title: "Digital Services in India",
  description: "Placeholder meta description for Btechwale India. Replace with country-level SEO content before launch.",
  canonicalPath: "/india/",
  h1: "Digital Services in India",
  intro: "Placeholder India overview. Add original country-level content and internal links before launch.",
  breadcrumbs: createBreadcrumbs([{ label: "India", href: "/india/" }]),
});
