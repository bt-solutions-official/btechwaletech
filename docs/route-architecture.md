# Route Architecture

Astro routes are file-system routes. Keep important SEO pages as explicit `.astro` source files.

- Country pages: `src/pages/india/index.astro`, later `src/pages/uae/index.astro`.
- State or region pages: `src/pages/india/haryana/index.astro`.
- City pages: `src/pages/india/haryana/gurgaon/index.astro`.
- City + service pages: `src/pages/india/haryana/gurgaon/web-development.astro`.
- Service pages: `src/pages/services/web-development.astro`.
- Collection listing pages: `blog/`, `case-studies/`, and `portfolio/`.

Top-level country routes currently live at `src/pages/india/`, `src/pages/uae/`, `src/pages/australia/`, and `src/pages/usa/` so URLs stay clean.

Do not replace priority city pages with one generic `[city].astro` route. Dynamic routes can be added later only for non-priority generated pages after content quality rules are clear.
