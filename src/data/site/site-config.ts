import type { SiteBrand, SiteNavigationItem } from "@app-types/site";

export const siteBrand: SiteBrand = {
  name: "Btechwale",
  domain: "https://btechwaletech.in",
  defaultLocale: "en_IN",
  supportedLocales: ["en_IN"],
};

export const siteDefaults = {
  titleTemplate: "%s | Btechwale",
  defaultTitle: "Btechwale",
  defaultDescription:
    "Placeholder description for Btechwale digital, IT, and freelancing services. Replace before launch.",
  defaultOgImage: "/hero-command-desk.png",
};

export const supportedCountrySlugs = ["india", "uae", "australia", "usa"] as const;

export const coreServiceSlugs = [
  "web-development",
  "website-design",
  "seo-services",
  "software-development",
  "mobile-app-development",
  "ai-development",
  "automation",
  "ui-ux-design",
  "ecommerce-development",
  "website-maintenance",
] as const;

export const primaryNavigation: SiteNavigationItem[] = [
  { label: "Services", href: "/services/" },
  { label: "India", href: "/india/" },
  { label: "Industries", href: "/industries/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];
