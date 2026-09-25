import type { FreelanceContent } from "@data/freelance/types";
import plan from "./keywords.json";

const countryModules = import.meta.glob<{ default: FreelanceContent }>("./countries/*/*.ts", { eager: true });
const keywordModules = import.meta.glob<{ default: FreelanceContent }>("./content/*.ts", { eager: true });

type Link = { name: string; href: string };
const byName = (a: Link, b: Link) => a.name.localeCompare(b.name);

/** Links to every /{country}/{service}/ page of one country, A to Z, for that country's hub page. */
export function countryPageLinks(country: string): Link[] {
  return Object.values(countryModules)
    .map((m) => m.default)
    .filter((c) => c.path.startsWith(`/${country}/`))
    .map((c) => ({ name: c.crumb, href: c.path }))
    .sort(byName);
}

const groupLabels: Record<string, string> = {
  "india-industry-websites": "Websites by business type",
  "india-industry-software-apps": "Apps and software by industry",
  "india-tech-stacks": "Technologies and platforms",
  "india-ai-automation-integrations": "AI, automation and integrations",
  "india-seo-growth-maintenance": "SEO, growth and maintenance",
  "india-cost-hinglish": "Costs, pricing and Hindi guides",
  "india-comparisons-audiences": "Comparisons and buyer guides",
};

/** Every /{keyword}/ page that has a content file, grouped as in keywords.json, for the /services/ directory. */
export function keywordPageGroups(): { heading: string; links: Link[] }[] {
  const crumbs = new Map(Object.values(keywordModules).map((m) => [m.default.path, m.default.crumb]));
  const groups = new Map<string, Link[]>();
  for (const k of plan as { slug: string; group?: string }[]) {
    const href = `/${k.slug}/`;
    const name = crumbs.get(href);
    if (!name) continue;
    const heading = groupLabels[k.group ?? ""] ?? "Freelance developers and core services";
    if (!groups.has(heading)) groups.set(heading, []);
    groups.get(heading)!.push({ name, href });
  }
  return [...groups].map(([heading, links]) => ({ heading, links: links.sort(byName) }));
}
