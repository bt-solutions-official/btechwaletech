import type { PageSeoConfig, SeoMeta } from "@app-types/seo";
import { siteDefaults } from "@data/site/site-config";
import { withTrailingSlash } from "@lib/urls/url-utils";

export function applyTitleTemplate(title: string): string {
  if (title === siteDefaults.defaultTitle) return title;
  return siteDefaults.titleTemplate.replace("%s", title);
}

export function createPageSeo(config: PageSeoConfig): PageSeoConfig {
  return {
    ...config,
    canonicalPath: withTrailingSlash(config.canonicalPath),
    robots: config.robots ?? "index,follow",
    locale: config.locale ?? "en_IN",
  };
}

export function createBasicSeo(path: string, title: string, h1: string): PageSeoConfig {
  return createPageSeo({
    title,
    description: siteDefaults.defaultDescription,
    canonicalPath: path,
    h1,
    breadcrumbs: [],
  });
}

export function normalizeSeoMeta(meta: SeoMeta): SeoMeta {
  return {
    ...meta,
    canonicalPath: withTrailingSlash(meta.canonicalPath),
    robots: meta.robots ?? "index,follow",
    ogType: meta.ogType ?? "website",
    locale: meta.locale ?? "en_IN",
  };
}
