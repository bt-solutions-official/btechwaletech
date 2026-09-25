import type { FaqItem } from "@app-types/seo";

/** One long-form section of the guide. Paragraph/list strings may contain inline HTML. */
export interface TopicArticle {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
  after?: string[];
  blocks?: { name: string; text: string }[];
  table?: { caption: string; head: string[]; rows: string[][]; hide?: number };
}

/**
 * A /india/<slug>/ or /japan/<slug>/ topic page. One hand-written file per page, so no
 * thin pages ship; the route builds meta, breadcrumbs and schema from these fields.
 */
export interface TopicContent {
  /** URL segment: /india/<slug>/ or /japan/<slug>/. */
  slug: string;
  country: "India" | "Japan";
  /** <= 55 characters; the site appends " | BtechWaleTech". */
  title: string;
  /** 140-158 characters. */
  description: string;
  h1: string;
  intro: string;
  keywords: string[];
  ogAlt: string;
  /** Schema Service name and type. */
  serviceName: string;
  serviceType: string;
  /** Plan-name prefixes offered in schema, e.g. ["Static", "SEO website"]. */
  plans: string[];
  /** Breadcrumb label for this page. */
  crumb: string;

  heroEyebrow: string;
  facts: [string, string][];
  pills: string[];
  heroOrigin: string;
  quoteKicker: string;
  quotePlans: string[];
  quoteFoot: string;
  stats: { value: string; label: string }[];
  answerHeading: string;
  quickAnswer: string;
  answerMore: string;
  snapshotCaption: string;
  snapshot: { label: string; value: string }[];
  servicesHeading: string;
  services: { name: string; note: string; href?: string; size: "lg" | "md" | "sm" }[];
  pricingHeading: string;
  pricingIntro: string;
  pricingFine: string;
  guideLabel: string;
  guide: TopicArticle[];
  regionsHeading: string;
  regionsNote: string;
  regionHead: string[];
  regionHide: number[];
  regionTable: string[][];
  industriesHeading: string;
  industries: { name: string; need: string; build: string }[];
  comparisonHeading: string;
  comparisonNote: string;
  compHead: [string, string, string];
  comparison: [string, string, string, string][];
  processHeading: string;
  process: [string, string][];
  timelineFine: string;
  faqHeading: string;
  faqs: FaqItem[];
  relatedHeading: string;
  related: { name: string; href: string }[];
  closingHeading: string;
  closingNote: string;
}
