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

export default defineConfig({
  site: "https://btechwaletech.in",
  output: "static",
  trailingSlash: "always",
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/drafts/"),
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
