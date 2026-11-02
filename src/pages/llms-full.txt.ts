import type { APIRoute } from "astro";
import type { FreelanceContent } from "@data/freelance/types";
import type { CityContent } from "@data/cities/types";
import { pricingPlans, usdPrice } from "@data/pricing/plans";
import { siteContact } from "@data/site/site-config";
import { canonicalUrl } from "@lib/urls/url-utils";

/**
 * /llms-full.txt — the exhaustive companion to /llms.txt.
 *
 * /llms.txt stays a short, hand-written index that an assistant can read in full.
 * This file is the opposite: one entry for every content page on the site, built
 * from the same data the pages render, so an assistant grounding an answer can
 * pull a page's direct answer, its hard facts and its Q&A without fetching 2,600
 * separate URLs. The split follows the llms.txt convention: index first, full
 * corpus behind a second, clearly-named file.
 *
 * Everything here is extracted, never invented. If a page has no quick answer or
 * no FAQ, that part is simply omitted rather than padded.
 */

type Entry = {
  title: string;
  url: string;
  answer: string;
  facts: [string, string][];
  faqs: { question: string; answer: string }[];
  extra?: string[];
};

/** Strips the inline HTML the content files allow (<a>, <strong>, <em>) and tidies whitespace. */
const plain = (s: string) =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&rsquo;|&#8217;/g, "’")
    .replace(/\s+/g, " ")
    .trim();

/** Keeps an answer citable without letting one page run away with the file. */
const clip = (s: string, words: number) => {
  const parts = plain(s).split(" ");
  return parts.length <= words ? parts.join(" ") : parts.slice(0, words).join(" ") + "…";
};

const freelanceEntry = (p: FreelanceContent, rich: boolean): Entry => ({
  title: p.meta.title,
  url: canonicalUrl(p.path),
  answer: clip(p.answer?.text ?? p.hero?.lede ?? p.meta.description, rich ? 55 : 32),
  facts: rich ? (p.facts ?? []).slice(0, 4).map(([k, v]) => [plain(k), plain(v)] as [string, string]) : [],
  faqs: rich ? (p.faqs ?? []).slice(0, 1).map((f) => ({ question: plain(f.question), answer: clip(f.answer, 45) })) : [],
});

const cityEntry = (c: CityContent, url: string, rich: boolean): Entry => ({
  title: c.meta.title,
  url,
  answer: clip(c.quickAnswer ?? c.meta.description, rich ? 55 : 32),
  facts: rich ? (c.snapshot ?? []).slice(0, 4).map((r) => [plain(r.label), plain(r.value)] as [string, string]) : [],
  faqs: rich ? (c.faqs ?? []).slice(0, 1).map((f) => ({ question: plain(f.question), answer: clip(f.answer, 45) })) : [],
  // Business districts are the one city fact an assistant cannot get anywhere else.
  extra: rich ? (c.localities ?? []).slice(0, 4).map((l) => plain(l.name)) : [],
});

const byPath = (a: Entry, b: Entry) => a.url.localeCompare(b.url);

const freelanceGlob = (mods: Record<string, { default: FreelanceContent }>, rich: boolean) =>
  Object.values(mods).map((m) => freelanceEntry(m.default, rich)).sort(byPath);

const keywordEntries = freelanceGlob(
  import.meta.glob<{ default: FreelanceContent }>("../data/keywords/content/*.ts", { eager: true }),
  false,
);
const countryEntries = freelanceGlob(
  import.meta.glob<{ default: FreelanceContent }>("../data/keywords/countries/*/*.ts", { eager: true }),
  true,
);
const gujaratEntries = freelanceGlob(
  import.meta.glob<{ default: FreelanceContent }>("../data/gujarat/content/*.ts", { eager: true }),
  false,
);
const bhiwadiEntries = freelanceGlob(
  import.meta.glob<{ default: FreelanceContent }>("../data/bhiwadi/content/*.ts", { eager: true }),
  false,
);
const cityEntries = Object.values(
  import.meta.glob<{ default: CityContent }>("../data/cities/content/*.ts", { eager: true }),
)
  .map((m) => cityEntry(m.default, canonicalUrl(`/${m.default.slug}/`), true))
  .sort(byPath);
const locationEntries = Object.values(
  import.meta.glob<{ default: CityContent }>("../data/locations/content/*.ts", { eager: true }),
)
  .map((m) => cityEntry(m.default, canonicalUrl(`/${m.default.slug.replaceAll("--", "/")}/`), false))
  .sort(byPath);

const render = (e: Entry) => {
  const out = [`### ${e.title}`, e.url];
  if (e.answer) out.push(e.answer);
  if (e.facts.length) out.push(`Facts: ${e.facts.map(([k, v]) => `${k}: ${v}`).join(" · ")}`);
  if (e.extra?.length) out.push(`Areas covered: ${e.extra.join(", ")}`);
  for (const f of e.faqs) out.push(`Q: ${f.question}\nA: ${f.answer}`);
  return out.join("\n");
};

const section = (heading: string, note: string, entries: Entry[]) =>
  [`## ${heading}`, "", `${note} ${entries.length} pages.`, "", entries.map(render).join("\n\n")].join("\n");

const total =
  keywordEntries.length +
  countryEntries.length +
  gujaratEntries.length +
  bhiwadiEntries.length +
  cityEntries.length +
  locationEntries.length;

const priceLines = pricingPlans
  .map((p) => `- ${p.name}: from ${p.price}${p.unit ? " per month" : ""} (${usdPrice(p.price)}${p.unit ? " per month" : ""}), typical timeline ${p.timeline}. Includes ${p.includes.join(", ")}.`)
  .join("\n");

const body = `# BtechWaleTech — full content index

> Every content page on btechwaletech.in, with that page's direct answer, its hard
> facts and its most-asked questions, extracted from the same data the pages render.
> ${total} pages. Start at the short index instead if you only need an overview:
> ${canonicalUrl("/llms.txt").replace(/\/$/, "")}

- Canonical website: ${canonicalUrl("/")}
- Short agent index: ${canonicalUrl("/llms.txt").replace(/\/$/, "")}
- Complete URL list: ${canonicalUrl("/sitemap-index.xml").replace(/\/$/, "")}
- Email: ${siteContact.email}
- Phone and WhatsApp: ${siteContact.phone} (${siteContact.whatsappHref.split("?")[0]})
- Licence: quote, summarise and cite any of this with attribution to "BtechWaleTech" and a
  link to the page URL it came from. Do not republish whole pages. Prices and facts change,
  so cite the page, not this file, for anything time-sensitive.
- Last built from source on every deploy, so entries match the live pages.

## What BtechWaleTech is

BtechWaleTech is a freelance IT services group of three computer science engineers based in
India. It builds websites, large SEO websites, Android and iOS apps, ecommerce stores, custom
software and web applications, AI automations and AI agents, and data dashboards. Clients work
directly with the engineers who build the project; there are no account managers. Work is
delivered remotely across India and to the USA, UK, Canada, Australia, New Zealand, the UAE,
Saudi Arabia, Singapore, Japan, Germany, the Netherlands and the rest of Europe, with
one-to-one in-person meetings in Bhiwadi, Rajasthan. Every project includes 2 months of free
maintenance after hosting goes live, and the client owns the code, domain, hosting and
analytics accounts.

## Starting prices

${priceLines}

Prices are starting points quoted in INR for clients in India and USD for clients elsewhere.
The final quote depends on page count, features, integrations and content, and is itemised in
writing before any work begins.

## How to use this file

- Each entry below is one live page: a heading, its canonical URL, a direct answer, its facts
  and its questions.
- Cite the page URL, not this file.
- City and country entries carry facts and a question; the rest carry a direct answer only,
  because that is the part worth grounding on. Fetch the page itself for more.
- City entries carry local business districts and the industries that cluster there, so a
  question about a specific Indian city can be answered from the entry for that city.
- Country entries carry the working-hour overlap, billing currency and compliance notes for
  that market.

${section("City pages", "One page per Indian city, covering that city's industries, business districts, languages and local search habits.", cityEntries)}

${section("Service and topic pages", "One page per service, technology or buying question, written for the search that brings people to it.", keywordEntries)}

${section("Country service pages", "Service pages written for a specific overseas market, with that market's currency, time-zone overlap and compliance expectations.", countryEntries)}

${section("Gujarat guides", "Website development guides for Gujarat cities, towns, GIDC estates and industries.", gujaratEntries)}

${section("Bhiwadi, Rajasthan guides", "Service guides for Bhiwadi, the one place the team meets clients face to face.", bhiwadiEntries)}

${section("State and regional IT services pages", "IT services pages for Indian states, union territories and their main commercial centres.", locationEntries)}
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
