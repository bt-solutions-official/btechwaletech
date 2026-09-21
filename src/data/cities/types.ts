import type { FaqItem } from "@app-types/seo";

export interface CityListing {
  rank: number;
  name: string;
  slug: string;
  state: string;
}

/**
 * Hand-written, city-specific copy for one /{city}/ page. Every string here must be
 * unique to the city: shared boilerplate lives in the template, not in these files.
 * Paragraph strings may contain inline HTML (<a>, <strong>, <em>).
 */
export interface CityContent {
  slug: string;
  meta: { title: string; description: string; keywords: string[] };
  hero: { eyebrow: string; h1: string; lede: string; pills: string[] };
  /** 40-60 word direct answer for AI Overviews / featured snippets. */
  quickAnswer: string;
  /** Local market facts shown as a table. */
  snapshot: { label: string; value: string }[];
  /** One sentence per core service, framed for this city. */
  serviceNotes: Record<"web" | "seo" | "ecommerce" | "software" | "ai" | "data" | "app" | "maintenance", string>;
  whyUsIntro: string;
  pricingIntro: string;
  sections: { id: string; heading: string; paragraphs: string[]; list?: string[] }[];
  localities: { name: string; note: string }[];
  industries: { name: string; need: string; build: string }[];
  faqs: FaqItem[];
  /** Slugs of nearby cities from cities.json, for internal links. */
  nearby: string[];
  geo: { lat: number; lng: number };
  updated: string;
}
