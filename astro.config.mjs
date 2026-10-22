import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// Sitemap lastmod = each page's own `updated` date (the one shown on the page and in its schema).
// Pages without one get no lastmod: stamping every URL with the build time teaches Google to ignore the field.
const contentSets = [
  ["src/data/keywords/content", (slug) => `/${slug}/`],
  ["src/data/cities/content", (slug) => `/${slug}/`],
  ["src/data/gujarat/content", (slug) => `/gujarat/${slug}/`],
  ["src/data/bhiwadi/content", (slug) => `/bhiwadi-rajasthan/${slug}/`],
  ["src/data/locations/content", (slug) => `/${slug.replaceAll("--", "/")}/`],
  ...readdirSync(join(__dirname, "src/data/keywords/countries")).map((country) => [`src/data/keywords/countries/${country}`, (slug) => `/${country}/${slug}/`]),
];
const updatedByPath = new Map();
for (const [dir, toPath] of contentSets) {
  for (const file of readdirSync(join(__dirname, dir)).filter((f) => f.endsWith(".ts"))) {
    const updated = readFileSync(join(__dirname, dir, file), "utf8").match(/\bupdated: "(\d{4}-\d{2}-\d{2})"/)?.[1];
    if (updated) updatedByPath.set(toPath(file.slice(0, -3)), updated);
  }
}

// The hand-written .astro pages - the homepage, every commercial hub and every country hub -
// were the only URLs on the site with no lastmod, because the loop above reads the data
// directories only. Those are the pages Google should recrawl first, so they were exactly
// backwards. Any page declaring `const updated = "YYYY-MM-DD"` now contributes one too;
// a page without the const still gets no lastmod, which is the honest answer for a page
// whose last change date nobody recorded.
for (const file of readdirSync(join(__dirname, "src/pages"), { recursive: true, encoding: "utf8" })) {
  if (!file.endsWith(".astro") || file.includes("[")) continue;
  const updated = readFileSync(join(__dirname, "src/pages", file), "utf8").match(/\bconst updated = "(\d{4}-\d{2}-\d{2})"/)?.[1];
  if (!updated) continue;
  const path = "/" + file.replaceAll("\\", "/").replace(/(index)?\.astro$/, "");
  updatedByPath.set(path.endsWith("/") ? path : path + "/", updated);
}

export default defineConfig({
  site: "https://btechwaletech.in",
  output: "static",
  trailingSlash: "always",
  build: {
    // "always" inlined ~48KB of CSS into all 2,671 pages - the same one or two stylesheets
    // repeated with no cross-page caching, ~20MB of extra brotli per full crawl. It buys
    // nothing on a critical path that already loads a render-blocking cross-origin Google
    // Fonts stylesheet, so the CSS is better served once and cached. "auto" still inlines
    // anything under 4KB. Revert to "always" if LCP regresses on / and a city page.
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/drafts/"),
      // URLs are emitted alphabetically, so a 500-URL limit splits 2670 pages into 6 sitemaps
      // whose boundaries follow the path prefixes (bhiwadi, gujarat, it-services, country hubs).
      // Google then reports indexation per group instead of one opaque 2670-URL file.
      entryLimit: 500,
      serialize(item) {
        const pathname = new URL(item.url).pathname;

        const updated = updatedByPath.get(pathname);
        if (updated) item.lastmod = updated;

        // Homepage - highest priority
        if (pathname === "/") {
          item.changefreq = "weekly";
          item.priority = 1.0;
          return item;
        }

        // Main service sections
        if (pathname === "/it-services/" || pathname === "/services/" ||
            pathname === "/pricing/" || pathname === "/portfolio/" ||
            pathname === "/about/" || pathname === "/contact/") {
          item.changefreq = "weekly";
          item.priority = 0.9;
          return item;
        }

        // India/regional main pages
        if (pathname.startsWith("/india/") &&
            pathname.split("/").filter(Boolean).length === 2 &&
            pathname !== "/india/") {
          item.changefreq = "weekly";
          item.priority = 0.85;
          return item;
        }

        // IT services regional pages
        if (pathname.startsWith("/it-services/") &&
            pathname.split("/").filter(Boolean).length === 2) {
          item.changefreq = "weekly";
          item.priority = 0.8;
          return item;
        }

        // IT services city pages
        if (pathname.startsWith("/it-services/") &&
            pathname.split("/").filter(Boolean).length === 3) {
          item.changefreq = "weekly";
          item.priority = 0.75;
          return item;
        }

        // Location/service detail pages (like /india/gujarat/ahmedabad/)
        if (pathname.split("/").filter(Boolean).length >= 3 &&
            !pathname.includes("/web-development/") &&
            !pathname.includes("/seo-services/")) {
          item.changefreq = "monthly";
          item.priority = 0.7;
          return item;
        }

        // Service detail pages
        if (pathname.includes("/web-development/") ||
            pathname.includes("/seo-services/")) {
          item.changefreq = "monthly";
          item.priority = 0.75;
          return item;
        }

        // Blog, case studies, industries
        if (pathname.startsWith("/blog/") ||
            pathname.startsWith("/case-studies/") ||
            pathname === "/industries/") {
          item.changefreq = "monthly";
          item.priority = 0.7;
          return item;
        }

        // Everything else
        item.changefreq = "monthly";
        item.priority = 0.6;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
