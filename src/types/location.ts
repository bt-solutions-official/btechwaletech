import type { PageSeoConfig } from "./seo";

export interface Country {
  name: string;
  slug: string;
  isoCode?: string;
  path: string;
  enabled: boolean;
}

export interface Region {
  name: string;
  slug: string;
  countrySlug: string;
  type: "state" | "union-territory" | "province" | "emirate" | "region";
  path: string;
  enabled: boolean;
}

export interface City {
  name: string;
  slug: string;
  countrySlug: string;
  regionSlug: string;
  path: string;
  enabled: boolean;
  seo: PageSeoConfig;
}
