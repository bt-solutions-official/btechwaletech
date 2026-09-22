import type { FaqItem } from "@app-types/seo";

/**
 * Copy for one freelance landing page (/freelancers/, /freelancing/), rendered by
 * FreelancePage.astro. Strings in paragraphs, lists, subs and table cells may contain inline HTML.
 */
export interface FreelanceContent {
  path: string;
  crumb: string;
  meta: { title: string; description: string; keywords: string[] };
  hero: { eyebrow: string; h1: string; lede: string; pills: string[]; origin: string };
  facts: [string, string][];
  stats: { value: string; label: string }[];
  answer: { heading: string; text: string; more: string };
  snapshot: { caption: string; rows: { label: string; value: string }[] };
  services: { eyebrow: string; heading: string; note: string; cards: { name: string; note: string; href?: string; size: "lg" | "md" | "sm" }[] };
  comparison: { heading: string; note: string; columns: [string, string, string, string]; rows: [string, string, string, string][]; fine: string };
  pricing: { heading: string; note: string };
  guideLabel: string;
  guide: { id: string; heading: string; paragraphs: string[]; list?: string[]; subs?: { heading: string; text: string }[]; after?: string[] }[];
  tables: { id: string; eyebrow: string; heading: string; note: string; columns: string[]; rows: string[][]; hideSm?: number[] }[];
  areas: { eyebrow: string; heading: string; note: string; cards: { name: string; note: string; href?: string }[] };
  process: { heading: string; steps: [string, string][] };
  faqHeading: string;
  faqs: FaqItem[];
  related: { heading: string; links: { name: string; href: string }[] };
  cta: { heading: string; note: string };
  updated: string;
}
