import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { statSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

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

        // Try to get file modification time for lastmod
        try {
          // Convert URL path to file path
          let filePath = pathname;
          if (filePath.endsWith("/")) filePath = filePath + "index";
          if (!filePath.endsWith(".astro")) filePath = filePath + ".astro";

          const fullPath = join(__dirname, "src", "pages", filePath);
          const stats = statSync(fullPath);
          item.lastmod = stats.mtime.toISOString();
        } catch (e) {
          // Fallback to current date if file not found
          item.lastmod = new Date().toISOString();
        }

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
