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
  defaultOgImage: "/banner_logo.png",
};

export const siteContact = {
  email: "info@btechwaletech.in",
  emailHref: "mailto:info@btechwaletech.in",
  phone: "+91 70611 68141",
  phoneHref: "tel:+917061168141",
  whatsappLabel: "WhatsApp us",
  whatsappHref:
    "https://wa.me/917061168141?text=Hello%20BtechWaleTech%2C%20I%20want%20to%20discuss%20an%20IT%20services%20project.",
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
  { label: "Pricing", href: "/pricing/" },
  { label: "Contact", href: "/contact/" },
];
