# Brief: stop calling BtechWaleTech a company (site-wide cleanup)

Repo: E:\BtechWaleService. BtechWaleTech is a group of three freelance developers (Ankur Kumar, Santosh Sharma,
Vedansh Shrivastava) working remotely from India. The owner wants NO page to describe BtechWaleTech as a company,
agency or firm, and also no "we are not a company" disclaimers: just describe it positively as a freelance group /
three freelance developers / small freelance team.

You get a list of files. In each file, read every occurrence of "company", "agency", "firm" (grep -n -i) and decide:
1. It describes BtechWaleTech (e.g. "Our company is based in India", "Are you a Japanese web development company?",
   "BtechWaleTech is not a company but a freelance group", "We are not a Saudi agency", "as a remote IT company"):
   REWRITE the sentence naturally, e.g. "BtechWaleTech is a freelance group of three developers in India",
   "Are you based in Japan?", "We are three freelance developers in India, with no registration or office in Saudi Arabia".
   Keep the honest facts (no office, no local registration, remote) — just phrase them without company/agency/firm.
   "our company details" on invoices -> "our business details".
2. It describes the client or other businesses ("your company", "a Japanese agency", "a larger IT company",
   "IT companies in Sapporo", "company profile page", "a travel agency"): LEAVE IT.
3. Title-case strings stay title case; keep grammar and articles (a/an) correct.

Rules: edit only the files you were given. Keep every string's meaning, links and prices; do not shorten pages
(rewrite, don't delete paragraphs). Don't touch src/data/keywords/content. Don't run astro build or npm scripts.
For files under src/data/cities/content or src/data/locations/content, afterwards run
`cd /e/BtechWaleService && node scripts/check-city-content.mjs <slug ...>` on the slugs you edited
(slug = file name without .ts) and make sure each still PASSes (a FAIL that existed before your edit, e.g. word
count, is fine to report instead of fix).
Final reply (short): files changed, number of sentences rewritten, anything you were unsure about.
