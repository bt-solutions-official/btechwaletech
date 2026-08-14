import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

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

        if (pathname === "/") {
          item.changefreq = "weekly";
          item.priority = 1;
          return item;
        }

        if (pathname === "/it-services/" || pathname === "/services/") {
          item.changefreq = "weekly";
          item.priority = 0.9;
          return item;
        }

        if (pathname.startsWith("/it-services/")) {
          item.changefreq = "monthly";
          item.priority = pathname.split("/").filter(Boolean).length === 2 ? 0.8 : 0.75;
          return item;
        }

        item.changefreq = "monthly";
        item.priority = 0.7;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
