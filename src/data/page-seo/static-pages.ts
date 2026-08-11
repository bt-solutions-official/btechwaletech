import type { PageSeoConfig } from "@app-types/seo";
import { createBreadcrumbs } from "@lib/breadcrumbs/breadcrumbs";
import { createBasicSeo, createPageSeo } from "@lib/seo/seo-config";
import { indiaRegions } from "@data/countries/india/states";

export function staticPage(path: string, title: string, h1 = title): PageSeoConfig {
  return {
    ...createBasicSeo(path, title, h1),
    breadcrumbs: createBreadcrumbs(path === "/" ? [] : [{ label: h1, href: path }]),
    intro: "BtechWaleTech provides freelance IT services for websites, SEO, software, AI automation, data analysis, ecommerce, deployment, and maintenance.",
  };
}

export function indiaRegionPage(regionSlug: string): PageSeoConfig {
  const region = indiaRegions.find((item) => item.slug === regionSlug);
  if (!region) throw new Error(`Unknown India region: ${regionSlug}`);

  return createPageSeo({
    title: `Digital Services in ${region.name}`,
    description: `Digital and IT services in ${region.name} from BtechWaleTech, including website development, SEO, software, AI automation, data analysis, ecommerce, deployment, and support.`,
    canonicalPath: region.path,
    h1: `Digital Services in ${region.name}`,
    intro: `Explore BtechWaleTech digital and IT services in ${region.name}, with clean page structure, service information, contact paths, and internal links ready for location-specific growth.`,
    breadcrumbs: createBreadcrumbs([
      { label: "India", href: "/india/" },
      { label: region.name, href: region.path },
    ]),
  });
}

export const indiaPageSeo = createPageSeo({
  title: "Digital Services in India",
  description:
    "Digital and IT services in India from BtechWaleTech, including website development, SEO, software, AI automation, data analysis, ecommerce, deployment, and support.",
  canonicalPath: "/india/",
  h1: "Digital Services in India",
  intro:
    "BtechWaleTech provides freelance digital and IT services across India with static-first websites, structured SEO pages, software, automation, data analysis, deployment, and support.",
  breadcrumbs: createBreadcrumbs([{ label: "India", href: "/india/" }]),
});
