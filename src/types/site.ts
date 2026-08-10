export interface SiteBrand {
  name: string;
  legalName?: string;
  domain: string;
  defaultLocale: string;
  supportedLocales: string[];
}

export interface SiteNavigationItem {
  label: string;
  href: string;
}
