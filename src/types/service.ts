import type { PageSeoConfig } from "./seo";

export interface Service {
  name: string;
  slug: string;
  path: string;
  summary: string;
  enabled: boolean;
  seo: PageSeoConfig;
}

export interface Industry {
  name: string;
  slug: string;
  path: string;
  enabled: boolean;
  seo: PageSeoConfig;
}

export interface CityServicePageConfig {
  citySlug: string;
  serviceSlug: string;
  path: string;
  seo: PageSeoConfig;
}
