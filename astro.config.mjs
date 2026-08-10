import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://btechwaletech.in",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/drafts/"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
