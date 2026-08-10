export type RobotsDirective = "index,follow" | "noindex,follow" | "noindex,nofollow";

export interface OpenGraphImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SeoMeta {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: RobotsDirective;
  ogType?: "website" | "article";
  ogImage?: OpenGraphImage;
  locale?: string;
  alternateLocales?: string[];
  keywords?: string[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageSeoConfig extends SeoMeta {
  h1: string;
  intro?: string;
  breadcrumbs: BreadcrumbItem[];
  faqs?: FaqItem[];
  relatedServices?: string[];
  relatedLocations?: string[];
  schema?: unknown[];
}
