import cities from "@data/cities/cities.json";
import type { CityContent, CityListing } from "@data/cities/types";

// Hand-written content for the older location URLs (/india/..., /it-services/...).
// File name = content id, e.g. "it-services--maharashtra--mumbai.ts".
const modules = import.meta.glob<{ default: CityContent }>("./content/*.ts", { eager: true });
const byId = new Map(Object.values(modules).map((m) => [m.default.slug, m.default]));
const cityModules = import.meta.glob<{ default: CityContent }>("../cities/content/*.ts", { eager: true });
const builtCities = new Set(Object.values(cityModules).map((m) => m.default.slug));

export function locationContent(id: string): CityContent {
  const content = byId.get(id);
  if (!content) throw new Error(`Missing location content src/data/locations/content/${id}.ts`);
  return content;
}

/** Links to /{city}/ pages for the given cities.json slugs, skipping cities without a page. */
export function cityLinks(slugs: string[]): { name: string; href: string }[] {
  const list = cities as CityListing[];
  return slugs
    .filter((s) => builtCities.has(s))
    .map((s) => list.find((c) => c.slug === s))
    .filter((c): c is CityListing => Boolean(c))
    .map((c) => ({ name: c.name, href: `/${c.slug}/` }));
}

/** De-duplicates links by href, keeping the first. */
export function uniqueLinks(...groups: { name: string; href: string }[][]): { name: string; href: string }[] {
  return [...new Map(groups.flat().map((l) => [l.href, l])).values()];
}
