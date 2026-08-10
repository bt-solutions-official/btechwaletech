# Data Architecture

Keep structured page data separate from presentation.

- `site/`: global brand, navigation, domain, supported countries, and default metadata.
- `countries/`: country, region, and city data split by geography.
- `countries/india/states/`: Indian state and union territory metadata.
- `countries/india/cities/`: city data split into small state-level files.
- `services/`: reusable service definitions and service-level SEO config.
- `industries/`: industry definitions when industry pages are added.
- `page-seo/`: page-specific SEO factories for route placeholders.

Do not put all city copy into one large file. Add unique city content either beside the relevant city data file or in a dedicated city content file when pages become production-ready.
