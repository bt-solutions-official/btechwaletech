import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const content: FreelanceContent = {
  path: "/new-zealand/wordpress-developer/",
  crumb: "WordPress developer NZ",
  updated: "2026-09-25",
  meta: {
    title: `WordPress Developer NZ: Rebuilds from ${P.site}`,
    description: `WordPress developer NZ: rebuilds from ${P.site}, speed fixes for Core Web Vitals, WooCommerce with NZ Post and care plans from ${P.care}. You own the site.`,
    keywords: [
      "wordpress developer nz", "wordpress developer new zealand", "wordpress developer auckland", "wordpress developer wellington",
      "wordpress developer christchurch", "wordpress developer tauranga", "freelance wordpress developer nz", "hire wordpress developer nz",
      "wordpress website rebuild nz", "wordpress speed optimisation nz", "slow wordpress site fix", "wordpress core web vitals",
      "woocommerce developer nz", "woocommerce nz post plugin", "woocommerce gst nz", "wordpress hosting nz",
      "wordpress maintenance nz", "wordpress security nz", "wordpress developer cost nz", "how much does a wordpress developer cost nz",
      "wordpress developer near me", "wordpress plugin bloat", "wordpress handover training", "remote wordpress developer india",
      "wordpress agency vs freelancer nz", "wordpress site hacked nz",
    ],
  },
  hero: {
    eyebrow: "WordPress developer NZ · rebuilds, speed, WooCommerce",
    h1: "WordPress developer NZ: rebuild it, speed it up or turn it into a WooCommerce store",
    lede: `A WordPress developer NZ businesses call in is usually solving one of three problems: an ageing site that needs a rebuild, a slow site failing Core Web Vitals, or a WooCommerce shop that needs NZ Post rates and GST done properly. BtechWaleTech is three freelance developers in India who do all three remotely, with rebuilds from ${P.site} and online stores from ${P.shop}. You keep the hosting, the domain and an admin you can edit yourself.`,
    pills: ["Site rebuilds", "Speed and Core Web Vitals", "Plugin clean-up", "WooCommerce for NZ", "NZ or Australian hosting", "Security care plans", "Edit it yourself"],
    origin: "Three freelance developers working from India · WhatsApp 7 days a week · calls in your afternoon",
  },
  facts: [
    ["WordPress rebuild from", `${P.site} (up to 100 pages)`],
    ["Large content site from", `${P.seoSite} (299+ pages)`],
    ["WooCommerce store from", P.shop],
    ["Care plan from", `${P.care}, after 5 free months`],
    ["Quote", "Itemised, in about 2 working days"],
    ["Ownership", "Your hosting, domain, theme and logins"],
  ],
  stats: [
    { value: "100", label: "Pages included in the starting rebuild plan" },
    { value: "5", label: "Months of free care once your new site is live" },
    { value: "3", label: "Developers covering code, speed and project management" },
    { value: "7", label: "Days a week you can reach us on WhatsApp" },
  ],
  answer: {
    heading: "What should a NZ business expect when it hires a WordPress developer?",
    text: `Expect a written scope, work on a staging copy, and a site you can edit yourself afterwards. A WordPress developer should cut plugin bloat, pass Core Web Vitals, host near your customers and hand over logins. With BtechWaleTech a rebuild starts at ${P.site} (1–2 weeks), a WooCommerce store at ${P.shop}, and ongoing care at ${P.care} after five free months.`,
    more: `Selling online and unsure WooCommerce is right? Compare it on our <a href='/new-zealand/shopify-developer/'>Shopify developer NZ page</a> or read <a href='/wordpress-speed-optimization/'>how we approach WordPress speed work</a>.`,
  },
  snapshot: {
    caption: "Hiring a WordPress developer in New Zealand: the short version",
    rows: [
      { label: "Rebuild of a business site", value: `From ${P.site}, 1–2 weeks` },
      { label: "Content-heavy site, 299+ pages", value: `From ${P.seoSite}, 3–5 weeks` },
      { label: "WooCommerce store", value: `From ${P.shop}, 4–8 weeks` },
      { label: "Speed or security fix", value: "Quoted per task after a quick audit" },
      { label: "Hosting", value: "NZ or Australian servers, in your name" },
      { label: "Payment", value: "USD quote · Wise or bank wire from NZ" },
      { label: "After launch", value: `5 months free, then care from ${P.care}` },
    ],
  },
  services: {
    eyebrow: "WordPress work for NZ businesses",
    heading: "Jobs our WordPress developers take on for New Zealand clients",
    note: "Each job starts with a look at your current site and ends with you holding every login. Nothing starts until you approve an itemised quote.",
    cards: [
      { name: "Full WordPress rebuild", note: "A fresh block theme or lean custom theme, your content moved across, redirects mapped, and an editing set-up your office manager can use without calling anyone.", href: "/services/web-development/", size: "lg" },
      { name: "Speed and Core Web Vitals fix", note: "Plugin audit, image and font clean-up, caching and database tidy so mobile pages load quickly for visitors on NZ networks.", href: "/wordpress-speed-optimization/", size: "lg" },
      { name: "WooCommerce for NZ", note: "GST-inclusive prices, NZ Post shipping rates, a local card gateway plus bank transfer, and order emails that make sense to Kiwi buyers.", href: "/freelance-woocommerce-developer/", size: "md" },
      { name: "Hosting move", note: "Migration to NZ or Australian hosting in your own account, with DNS, SSL and email records checked so nothing goes dark.", size: "md" },
      { name: "Security clean-up", note: "Malware removal, admin account review, plugin replacement and hardening after a hack, with a record of what was found.", href: "/wordpress-critical-error-fix/", size: "md" },
      { name: "Care plan", note: `Core, theme and plugin updates on a staging copy first, backups checked, uptime watched, small edits included as agreed, from ${P.care}.`, href: "/wordpress-maintenance-services/", size: "sm" },
      { name: "Custom plugin or integration", note: "Booking forms, CRM or Xero connections and member areas written as a small plugin you own, rather than stacking third-party add-ons.", href: "/custom-wordpress-plugin-development/", size: "sm" },
      { name: "WordPress SEO set-up", note: "Clean headings, schema, XML sitemap, redirects and Google Search Console, so the rebuild does not lose the rankings you already have.", href: "/wordpress-seo-services/", size: "sm" },
    ],
  },
  comparison: {
    heading: "DIY builder, local WordPress studio or a remote WordPress team?",
    note: "Three realistic paths for a NZ business whose WordPress site has become slow, fragile or hard to edit.",
    columns: ["Question", "Move to a DIY builder", "Local NZ WordPress studio", "BtechWaleTech (remote)"],
    rows: [
      ["Who does the work", "You, evenings and weekends", "Studio staff or contractors", "Three freelance developers, messaged directly"],
      ["Keeps your existing content and rankings", "Only if you rebuild and redirect carefully", "Usually, with a migration plan", "Yes, with a redirect map and Search Console checks"],
      ["Speed control", "Limited to the builder's platform", "Good", "Good: theme, plugins, hosting and caching all in scope"],
      ["WooCommerce and NZ shipping", "Builder's own shop tools only", "Yes", "Yes, NZ Post rates, GST and bank transfer"],
      ["Hosting choice", "Fixed by the platform", "Often their own reseller hosting", "Your own NZ or Australian account"],
      ["Starting cost", "Monthly subscription", "Quotes vary widely by studio", `Rebuilds from ${P.site}`],
      ["Meetings", "None", "In person in your city", "Video or WhatsApp in the NZ afternoon"],
      ["Editing afterwards", "Easy but platform-bound", "Depends on the build", "Block editor patterns set up for your team"],
    ],
    fine: "If you want someone to walk into your office and train staff face to face, a local studio is the better fit; we work only online.",
  },
  pricing: {
    heading: "What WordPress work costs when you hire us from NZ",
    note: `A WordPress rebuild of up to 100 pages starts at ${P.site} and usually takes 1–2 weeks; content-heavy sites of 299+ pages start at ${P.seoSite}. WooCommerce stores start at ${P.shop} because payments, shipping and GST need testing. Speed fixes, hack clean-ups and hosting moves are quoted per task after a short audit, since a site with eight plugins and one with sixty are very different jobs. Care plans start at ${P.care} once the five free months after launch end. Every quote is in USD and payable by Wise or bank wire; hosting and premium plugin licences are billed to you directly by their vendors.`,
  },
  guideLabel: "WordPress developer NZ guide",
  guide: [
    {
      id: "three-jobs",
      heading: "What NZ businesses usually hire a WordPress developer for",
      paragraphs: [
        `Almost every WordPress enquiry from New Zealand falls into one of three jobs: rebuild, repair or retail. Naming which one you need is the quickest way to a sensible quote.`,
      ],
      subs: [
        { heading: "Rebuild", text: "The site was built years ago on a page builder and a theme that no longer gets updates. It looks dated on phones, staff are scared to edit it, and nobody remembers the hosting password. A rebuild keeps your domain, content and search history but replaces the theme and most plugins." },
        { heading: "Repair", text: "The design is fine, but the site is slow, throws a critical error after an update, or has been hacked. Repairs are targeted: find the cause, fix it, stop it happening again." },
        { heading: "Retail", text: "You want to sell online through WooCommerce, or your current WooCommerce shop charges the wrong freight, fumbles GST or loses orders. Retail work is mostly configuration and testing, with a little code." },
      ],
      after: [
        `Many sites need two of the three: a café that wants online gift vouchers probably needs a repair and a small retail job. Tell us which one hurts most and we will start there. If you are unsure whether to stay on WordPress at all, our <a href='/new-zealand/ecommerce-website-design/'>NZ ecommerce design guide</a> compares platforms for stores.`,
      ],
    },
    {
      id: "rebuild-or-repair",
      heading: "Should you rebuild your WordPress site or repair the one you have?",
      paragraphs: [
        `Repair the site if the theme is still maintained and the problems are specific; rebuild it if the theme is abandoned, the page builder generates heavy code on every page, or the site needs changes in more than half its templates.`,
        `Some decision rules we use when auditing NZ sites:`,
      ],
      list: [
        "Theme last updated years ago and flagged by security scanners: rebuild.",
        "Fewer than about fifteen plugins, most actively maintained, and only a few slow pages: repair.",
        "Staff edit through a builder that breaks layouts whenever they touch it: rebuild with block patterns.",
        "Site is fine but hacked once: repair, harden and move to a care plan.",
        "Brand refresh planned in the next year anyway: rebuild now rather than paying twice.",
      ],
      after: [
        `A rebuild is not a re-platform. Your posts, pages, media and URLs can stay where they are; we replace the parts that cause trouble. For very small sites a rebuild often costs less than a long run of repairs, and the starting plan is ${P.site}.`,
      ],
    },
    {
      id: "wordpress-developer-cost-nz",
      heading: "How much does a WordPress developer cost in NZ?",
      paragraphs: [
        `WordPress developer costs in NZ swing widely because "WordPress work" can mean a two-hour fix or a two-month store build. The honest way to compare is by job: our rebuilds start at ${P.site}, content sites of 299+ pages at ${P.seoSite}, WooCommerce stores at ${P.shop}, and care plans at ${P.care}.`,
        `What moves a WordPress quote up or down:`,
      ],
      list: [
        "How many unique page templates you need, not just how many pages.",
        "Whether content can be migrated automatically or has to be rewritten and restructured.",
        "The number of plugins that must be replaced with something lighter or custom.",
        "Forms, bookings, member areas and integrations with Xero or a CRM.",
        "WooCommerce product count, variations and shipping complexity.",
        "Hosting migration and email DNS work, if the site is moving providers.",
      ],
      after: [
        `NZ studios and freelancers each price differently, so ask every candidate for an itemised quote and compare the lines. For a wider view across site types, <a href='/new-zealand/website-design-cost/'>our NZ website cost guide</a> lays out typical scopes side by side.`,
      ],
    },
    {
      id: "why-wordpress-is-slow",
      heading: "Why is my WordPress site slow, and can a developer fix it?",
      paragraphs: [
        `Most slow WordPress sites are slow because of what was added to them, not because WordPress itself is slow. A developer can usually fix it by removing weight rather than adding another optimisation plugin on top.`,
        `Google's Core Web Vitals give a clear target. Google's web.dev guidance treats a page as good when Largest Contentful Paint happens within 2.5 seconds, Interaction to Next Paint is 200 milliseconds or less, and Cumulative Layout Shift stays at 0.1 or below, measured at the 75th percentile of real visits.`,
        `The culprits we find most often on NZ business sites:`,
      ],
      list: [
        "Page builders loading their full CSS and JavaScript on every page, even simple ones.",
        "Sliders and background videos on the homepage that push the main heading below the fold.",
        "Five or six plugins doing overlapping jobs: two SEO plugins, three form plugins, several analytics scripts.",
        "Uncompressed photos straight from a phone or camera, often several megabytes each.",
        "Cheap shared hosting with slow server response, located far from New Zealand visitors.",
        "Chat widgets, review badges and booking embeds loading before the page content.",
      ],
      after: [
        `We measure before and after with PageSpeed Insights and Search Console's Core Web Vitals report, so you see what changed rather than taking our word for it.`,
      ],
    },
    {
      id: "plugin-bloat",
      heading: "Cutting plugin bloat without breaking the site",
      paragraphs: [
        `Plugin clean-up is careful subtraction: list every plugin, find out what it actually does on the live site, then remove, replace or merge until each job is done once. We always do it on a staging copy first.`,
        `Our audit sorts each plugin into one of four groups:`,
      ],
      list: [
        "<strong>Keep</strong>: maintained, lightweight, doing something the site needs.",
        "<strong>Replace</strong>: does a needed job but is heavy, abandoned or insecure; swap for a lighter plugin or a few lines of theme code.",
        "<strong>Merge</strong>: several plugins covering one job, such as forms or SEO; keep the best one.",
        "<strong>Remove</strong>: installed for a campaign years ago, or never actually used.",
      ],
      after: [
        `Removal leaves traces, so we also clean orphaned database tables, scheduled tasks and shortcodes left behind in old pages. Then we retest forms, checkout and any logged-in areas. You get the spreadsheet of what changed, including anything we recommend you pay for, such as a licence renewal for a premium plugin that is still worth keeping.`,
      ],
    },
    {
      id: "nz-or-australian-hosting",
      heading: "NZ or Australian hosting for a WordPress site?",
      paragraphs: [
        `Host in New Zealand if most visitors are Kiwis and you want your data kept onshore; Australian hosting in Sydney or Melbourne is also a reasonable choice for NZ audiences, and a content delivery network narrows the gap further for images and static files.`,
        `The main things to weigh:`,
      ],
      list: [
        "<strong>Latency</strong>: servers close to your visitors respond faster; a CDN helps with files but not with uncached pages or checkout.",
        "<strong>Data location</strong>: some clients, especially in health or government-adjacent work, prefer customer data to stay in New Zealand. Check your own obligations with your adviser.",
        "<strong>Support hours</strong>: a host whose support team works NZ hours can matter at 8 am on a Monday.",
        "<strong>Cloud options</strong>: AWS opened its Asia Pacific (New Zealand) region in Auckland in September 2025, which gives cloud-hosted WordPress an onshore option alongside NZ-owned hosts.",
      ],
      after: [
        `Whichever you choose, the hosting account should be in your business name and paid by you. We set up the server, SSL, caching and backups, then hand over the credentials. Hosting moves are quoted per task and include checking email DNS records, which is where most migrations go wrong.`,
      ],
    },
    {
      id: "woocommerce-nz",
      heading: "WooCommerce for New Zealand: payments, NZ Post and GST",
      paragraphs: [
        `A WooCommerce store in New Zealand needs three things set correctly before it takes its first order: GST-inclusive pricing at 15%, shipping rates that reflect NZ carriers, and payment options Kiwi buyers trust. Our WooCommerce builds start at ${P.shop}.`,
      ],
      subs: [
        { heading: "Payments", text: "Most NZ stores offer a local card gateway through its official WooCommerce plugin, plus WooCommerce's built-in direct bank transfer option for customers who prefer paying from internet banking. Trade customers can be offered invoice terms through a small custom rule. Your gateway account is always opened by you." },
        { heading: "Shipping", text: "The New Zealand Post extension listed on the WooCommerce marketplace can calculate live NZ Post rates at checkout; other stores prefer simple zone-based rates for urban, rural and island addresses. We test with real addresses before launch." },
        { heading: "GST", text: "Inland Revenue sets GST at 15% on most taxable supplies. We configure WooCommerce's tax tables so prices display inclusive of GST and invoices show the tax line, then your accountant confirms the settings." },
      ],
      after: [
        `If your catalogue is large or you want less maintenance, Shopify may suit you better; our <a href='/new-zealand/shopify-developer/'>Shopify developer NZ guide</a> sets out that side of the choice.`,
      ],
    },
    {
      id: "security",
      heading: "Keeping a NZ WordPress site secure",
      paragraphs: [
        `Most WordPress hacks come through outdated plugins, reused passwords or abandoned admin accounts, not through WordPress core. Security is mostly routine done consistently.`,
        `What we set up on every site we build or take over:`,
      ],
      list: [
        "Unique admin accounts for each person, with two-factor sign-in and no shared logins.",
        "Plugins trimmed to what is maintained and needed, so there are fewer doors to lock.",
        "Automatic minor core updates left on, with major updates tested on staging first.",
        "Daily off-site backups stored separately from the host, and a restore actually tested.",
        "File editing disabled in the dashboard and sensible permissions on the server.",
        "Form spam protection that does not rely on annoying puzzles for real visitors.",
      ],
      after: [
        `If your site has already been hacked, we clean it, find how the attacker got in, close that path and give you a written summary. We do not claim any security certification, and for regulated data you should involve your own security or legal adviser.`,
      ],
    },
    {
      id: "care-plans",
      heading: "WordPress maintenance retainers: what NZ clients get for the money",
      paragraphs: [
        `A WordPress care plan pays someone to keep the site updated, backed up and working, so problems are caught on a Tuesday afternoon instead of during your busiest weekend. After the five free months that follow launch, our plans start at ${P.care}, quoted in USD.`,
        `A typical month includes:`,
      ],
      list: [
        "Plugin, theme and core updates applied on staging, checked, then pushed live.",
        "Backup checks and a periodic test restore.",
        "Uptime monitoring and a look at any errors in the logs.",
        "A quick speed check against the Core Web Vitals baseline set at launch.",
        "Small content edits within the allowance written in your quote.",
      ],
      after: [
        `The exact allowance, what counts as a new project, and how requests are raised are all written into your quote rather than a generic policy. You can pay by Wise or bank wire each period. If you prefer to run updates yourself, we will show you how and stay on call for the tricky ones.`,
      ],
    },
    {
      id: "handover-editing",
      heading: "Handover: making sure you can edit pages yourself",
      paragraphs: [
        `A good WordPress handover means your team can add a staff profile, change opening hours or publish a news post without messaging a developer. We design the editing experience as deliberately as the public site.`,
        `On rebuilds we use the block editor with locked patterns: pre-designed blocks for things like service panels, testimonials you actually received, team cards and call-to-action strips. Editors choose a pattern, type into it and cannot accidentally break the layout. Roles are set so a staff writer can draft posts while only the owner can publish or install plugins.`,
        `Handover includes:`,
      ],
      list: [
        "Short screen recordings for the five or six tasks your team does most.",
        "A one-page guide listing every login, where it lives and who pays for it.",
        "Admin access for you, with our account easy to remove.",
        "The theme and any custom plugin code in a repository or archive you hold.",
      ],
      after: [
        `After that, whether you keep us on a care plan is entirely your choice.`,
      ],
    },
    {
      id: "page-builders-vs-block-themes",
      heading: "Page builders, block themes or custom themes: which should a NZ developer use?",
      paragraphs: [
        `For most business sites we recommend a block theme with custom patterns; page builders suit teams that already know one well, and fully custom themes suit sites with unusual layouts or strict performance targets.`,
      ],
      subs: [
        { heading: "Block theme with patterns", text: "Uses WordPress's own editor, adds very little extra code, and keeps editing consistent. Best default for service businesses, community organisations and clinics." },
        { heading: "Page builder", text: "Familiar drag-and-drop editing, but heavier pages and more to update. Reasonable if your marketing person already builds landing pages in one and speed is secondary." },
        { heading: "Custom classic or hybrid theme", text: "Written for your site only, very light, and ideal for complex listings or directories. Needs a developer for layout changes later." },
        { heading: "Headless WordPress", text: "WordPress as a content backend feeding a separate front end. Fast, but costs more to build and run; worth it for larger publishers, rarely for small NZ businesses." },
      ],
      after: [
        `If your team is weighing WordPress against a hosted builder, the trade-offs are covered in <a href='/webflow-vs-wordpress/'>Webflow vs WordPress</a>.`,
      ],
    },
    {
      id: "vetting-wordpress-developer-nz",
      heading: "How to choose a WordPress developer in NZ you will not regret",
      paragraphs: [
        `Choose the developer who asks the most specific questions about your current site and explains what they would remove, not the one with the longest list of plugins they love.`,
        `Useful questions for any WordPress developer NZ businesses are considering:`,
      ],
      list: [
        "Will you work on a staging copy and show me before anything goes live?",
        "Which plugins would you remove from my site, and why?",
        "Where will the site be hosted, and whose name is the account in?",
        "How will you keep my current Google rankings during a rebuild?",
        "What will my team be able to edit without calling you?",
        "What happens if I stop paying for maintenance?",
      ],
      after: [
        `Warning signs: a developer who insists on hosting the site in their own account, will not hand over admin access, or promises a guaranteed ranking. You can read more general advice in our guide to <a href='/hire-wordpress-developer/'>hiring a WordPress developer</a>.`,
      ],
    },
    {
      id: "wordpress-seo-ai",
      heading: "WordPress SEO and AI answers for NZ searches",
      paragraphs: [
        `WordPress is a solid base for SEO when the theme outputs clean headings, the site is fast, and each page answers one clear question. A rebuild is also the riskiest moment for rankings, so we treat URL changes carefully.`,
        `What we do on every WordPress project:`,
      ],
      list: [
        "Crawl the old site and map every URL to its new home with 301 redirects.",
        "Keep titles and descriptions that already rank, and improve the weak ones.",
        "Add LocalBusiness or Organization schema, plus FAQ content written as direct answers.",
        "Submit the new sitemap in Google Search Console and watch coverage for the first weeks.",
        "Write service pages that name your NZ towns and suburbs naturally, which helps both Google and AI Overviews match you to local questions.",
      ],
      after: [
        `Nobody can promise a ranking on google.co.nz. If you want ongoing growth after launch, monthly SEO starts at ${P.seo}; the <a href='/new-zealand/seo-services/'>NZ SEO services page</a> explains the month-by-month work.`,
      ],
    },
    {
      id: "privacy-forms",
      heading: "Forms, enquiries and the Privacy Act 2020",
      paragraphs: [
        `Every contact form, booking widget and newsletter sign-up on your WordPress site collects personal information, so it should collect only what you need and say what you do with it.`,
        `On builds we set forms to ask for the minimum, store entries securely or send them straight to your inbox without keeping a copy, and add a link to your privacy statement next to the submit button. For newsletter sign-ups we add an unticked consent checkbox rather than assuming consent.`,
        `If a developer outside New Zealand can see your form entries, information privacy principle 12 of the Privacy Act 2020 is relevant; the <a href='https://www.privacy.org.nz/privacy-act-2020/privacy-principles/12/' rel='noopener'>Privacy Commissioner's guidance on IPP12</a> explains when information may be disclosed offshore. We work on staging copies with test entries wherever we can and do not export your enquiry data. Your privacy statement and any decisions about offshore disclosure are yours to confirm with your own adviser; we build what you decide.`,
      ],
    },
    {
      id: "worked-example",
      heading: "Worked example: a hypothetical Dunedin consultancy's slow WordPress site",
      paragraphs: [
        `Picture a twelve-person engineering consultancy in Dunedin whose WordPress site takes ages to load on mobile, and whose office manager is afraid to update the team page. This is an illustrative scenario, not a real client.`,
        `Our audit finds forty-one plugins, a page builder loading everywhere, a homepage video and US-based shared hosting. The theme has not been updated in years. Using the decision rules above, it is a rebuild, not a repair.`,
        `The itemised quote starts from the ${P.site} rebuild plan. It lists a block theme with eight patterns, migration of sixty pages and their images, a redirect map, a hosting move to Australian servers in the client's own account, and a Search Console check two weeks after launch.`,
        `Over roughly two weeks the office manager reviews staging each morning, NZ time, and records questions as voice notes. Plugin count ends at nine. Before launch we run PageSpeed Insights on the same pages as the original audit and share both reports. Afterwards the consultancy has five months of free care, then chooses whether to continue from ${P.care}.`,
      ],
    },
    {
      id: "working-from-nz",
      heading: "Hiring a WordPress developer in India from NZ: how the first fortnight runs",
      paragraphs: [
        `From New Zealand, our working day starts around your lunchtime, since India sits six and a half to seven and a half hours behind depending on NZ daylight saving. Calls work best in the NZ afternoon; written updates arrive while you are offline.`,
        `Payments are straightforward: quotes and invoices are in USD from India, and you pay by Wise or bank wire from your NZD account, usually split into milestones. Your accountant can tell you how GST treats services bought from overseas; we do not advise on tax.`,
      ],
      subs: [
        { heading: "First two or three days", text: "You send the site URL and a temporary admin login or a staging copy. We audit plugins, theme, hosting and speed and reply with findings and questions." },
        { heading: "End of week one", text: "You receive the itemised quote, approve it in writing, and share hosting access in your own account. A staging site is created." },
        { heading: "Week two", text: "Rebuild or repair work happens on staging. You review each NZ morning, reply in writing, and we adjust during the Indian day." },
      ],
      after: [
        `There are no site visits; everything is online. Contract basics are in our <a href='/terms/'>terms</a> and your written quote. More on how we work with Kiwi clients is on the <a href='/new-zealand/'>New Zealand hub</a>.`,
      ],
    },
    {
      id: "wordpress-developer-nz-checklist",
      heading: "WordPress developer NZ checklist: before, during and after the job",
      paragraphs: [
        `Use this list to keep any WordPress project on track, whoever you hire.`,
      ],
      list: [
        "<strong>Before</strong>: collect hosting, domain and admin logins; list the pages staff edit most; note which forms bring real enquiries.",
        "<strong>Before</strong>: export Search Console data so you know which pages already bring traffic.",
        "<strong>During</strong>: review on staging only; keep feedback in one written thread; test forms with your own email.",
        "<strong>During</strong>: check the redirect map covers every page that gets visits.",
        "<strong>Launch day</strong>: confirm SSL, email delivery, analytics and the sitemap submission.",
        "<strong>After</strong>: compare Core Web Vitals against the baseline; watch Search Console coverage for new errors.",
        "<strong>After</strong>: store the handover guide somewhere your whole team can find it.",
      ],
      after: [
        `Send us whatever you have from the first two lines and we can start the audit.`,
      ],
    },
  ],
  tables: [
    {
      id: "symptom-cause-fix",
      eyebrow: "Diagnosis",
      heading: "Common WordPress problems on NZ sites, and what usually fixes them",
      note: "A starting point for conversation; the audit on your actual site decides the fix.",
      columns: ["What you notice", "Likely cause", "Usual fix", "Type of job"],
      rows: [
        ["Homepage slow on phones", "Slider or video above the fold, heavy builder CSS", "Static hero image, lighter theme, deferred scripts", "Repair or rebuild"],
        ["Critical error after update", "Plugin conflict or outdated PHP code", "Roll back on staging, replace the plugin, update PHP", "Repair"],
        ["Spam flooding the inbox", "Unprotected forms", "Server-side spam checks and honeypot fields", "Repair"],
        ["Staff break layouts when editing", "Page builder with unlocked sections", "Block patterns with locked structure", "Rebuild"],
        ["Wrong shipping charged", "Flat rates ignoring rural or heavy items", "Zone and weight rules or live NZ Post rates", "WooCommerce set-up"],
        ["Redirected to strange sites", "Malware from an outdated plugin", "Clean-up, credential reset, hardening", "Security repair"],
        ["Pages indexed but not ranking", "Thin content, missing headings, slow load", "Content and technical SEO work", "Rebuild or monthly SEO"],
      ],
      hideSm: [1],
    },
    {
      id: "hosting-options",
      eyebrow: "Hosting",
      heading: "Hosting choices for a NZ WordPress site",
      note: "Prices are set by hosts and billed to you directly, so we compare features rather than fees.",
      columns: ["Option", "Good for", "Watch out for"],
      rows: [
        ["NZ-based shared or managed host", "Local businesses wanting onshore data and NZ-hours support", "Check PHP versions, backups and staging tools"],
        ["Australian managed WordPress host", "NZ and trans-Tasman audiences, strong caching", "Confirm data location suits your obligations"],
        ["Cloud server in an NZ or Australian region", "Larger sites, WooCommerce with traffic spikes", "Needs someone to manage updates and security"],
        ["Offshore budget shared hosting", "Very small hobby sites", "Slow response for NZ visitors, crowded servers"],
        ["CDN in front of any host", "Images and static files served nearer visitors", "Does not speed up uncached pages or checkout"],
      ],
    },
    {
      id: "care-cadence",
      eyebrow: "Maintenance",
      heading: "What a WordPress care plan covers, and how often",
      note: `Care plans start at ${P.care} after the five free months. Your quote sets the exact allowance.`,
      columns: ["Task", "How often", "Why it matters"],
      rows: [
        ["Plugin and theme updates on staging", "As releases arrive, checked weekly", "Most hacks exploit known, already-patched flaws"],
        ["Off-site backup check", "Weekly", "A backup you have never restored is a hope, not a plan"],
        ["Test restore", "Periodically", "Proves recovery actually works"],
        ["Uptime and error log review", "Continuous alerts, reviewed weekly", "Catches failures before customers do"],
        ["Core Web Vitals check", "Monthly", "New plugins and content can slowly undo speed work"],
        ["Small content edits", "As requested within the allowance", "Keeps the site current without a new project"],
      ],
    },
  ],
  areas: {
    eyebrow: "WordPress clients across NZ",
    heading: "NZ regions where businesses hire our remote WordPress developers",
    note: "We work entirely online with no NZ office; these notes describe the kinds of WordPress sites common in each region.",
    cards: [
      { name: "Auckland", note: "Professional services, hospitality groups and retailers with years of WordPress content that now need faster themes without losing their search history." },
      { name: "Wellington", note: "Not-for-profits, consultancies and membership organisations running content-heavy WordPress sites where clear editing roles and accessibility matter." },
      { name: "Christchurch", note: "Construction, engineering and manufacturing firms whose older WordPress sites list projects and services but load slowly on site managers' phones." },
      { name: "Hamilton", note: "Agritech, rural services and education businesses that publish news and resources regularly and need an editor-friendly WordPress set-up." },
      { name: "Tauranga", note: "Growing trades, property and tourism businesses in the Bay of Plenty adding WooCommerce vouchers or bookings to an existing WordPress site." },
      { name: "Dunedin", note: "Research spin-offs, student-facing services and heritage accommodation that want lighter WordPress sites and simpler content editing." },
      { name: "Palmerston North", note: "Education providers, health services and regional businesses in Manawatū that need secure, well-maintained WordPress sites with reliable enquiry forms." },
      { name: "Nelson", note: "Makers, wineries and outdoor operators selling through small WooCommerce shops that need NZ Post rates and fewer plugins." },
      { name: "Invercargill", note: "Southland farming suppliers, engineering firms and local services whose WordPress sites need tidy service pages and dependable care plans." },
      { name: "Gisborne", note: "Tairāwhiti tourism, horticulture and community organisations wanting a quick, low-maintenance WordPress site that staff can update themselves." },
      { name: "Blenheim", note: "Marlborough wine and food producers running WooCommerce cellar-door shops where GST pricing and shipping rules must be spot on." },
      { name: "Whanganui", note: "Arts organisations, galleries and small retailers with WordPress event listings that should be quick to update and easy to find on Google." },
      { name: "Timaru", note: "South Canterbury manufacturers and agricultural services that need a sturdy WordPress rebuild and someone to keep it patched." },
    ],
  },
  process: {
    heading: "From first message to a WordPress site you can run",
    steps: [
      ["Share the site", "Send the URL and what frustrates you. A temporary admin login or staging copy lets us audit properly; we remove access if you do not go ahead."],
      ["Audit and findings", "We review theme, plugins, hosting, speed and security, then send findings in plain English with a clear recommendation: repair, rebuild or WooCommerce work."],
      ["Itemised USD quote", "Within about two working days you get a quote broken into lines you can add or remove. Nothing is charged before your written approval."],
      ["Work on staging", "All changes happen on a staging copy in your hosting account. You review in your NZ morning and send notes in one thread."],
      ["Launch with checks", "We launch at a quiet time you pick, then verify forms, redirects, SSL, email, analytics and the sitemap in Google Search Console."],
      ["Handover and care", "You receive videos, the logins guide and code. Five months of free care follow, then you decide whether to continue."],
    ],
  },
  faqHeading: "WordPress developer NZ: frequently asked questions",
  faqs: [
    { question: "How much does a WordPress developer cost in New Zealand?", answer: `It depends on the job. With BtechWaleTech a WordPress rebuild of up to 100 pages starts at ${P.site}, a content-heavy site of 299+ pages at ${P.seoSite}, a WooCommerce store at ${P.shop}, and a care plan at ${P.care} after five free months. Speed fixes and hack clean-ups are quoted per task after a short audit.` },
    { question: "Should I rebuild my WordPress site or just fix it?", answer: "Fix it when the theme is still maintained and the problems are specific, such as one slow page or a broken form. Rebuild when the theme is abandoned, a page builder slows every page, or staff cannot edit without breaking layouts. A short audit on your actual site settles it, and we explain the reasoning in writing." },
    { question: "Why is my WordPress website so slow?", answer: "Usually because of what was added: heavy page builders, overlapping plugins, uncompressed images, homepage sliders or videos, and budget hosting far from New Zealand. WordPress itself is rarely the cause. Removing weight and moving to better hosting fixes most sites; stacking another optimisation plugin on top usually does not." },
    { question: "Can you make my WordPress site pass Core Web Vitals?", answer: "In most cases, yes. We work toward Google's published targets: LCP within 2.5 seconds, INP of 200 milliseconds or less and CLS of 0.1 or less. We measure with PageSpeed Insights and Search Console before and after. Field data takes weeks to update, so improvement shows in reports gradually rather than overnight." },
    { question: "Should my WordPress site be hosted in NZ or Australia?", answer: "Either can work well for NZ visitors. Choose NZ hosting if you want data kept onshore or NZ-hours support; Australian managed hosting is a solid option with good caching. Avoid budget hosts on the other side of the world. The account should always be in your own business name." },
    { question: "Do you build WooCommerce stores for NZ businesses?", answer: `Yes. WooCommerce builds start at ${P.shop} and include GST-inclusive pricing, NZ Post or zone-based shipping, a local card gateway plugin you register yourself, direct bank transfer and clear order emails. We test orders to urban and rural addresses before launch.` },
    { question: "How many plugins should a WordPress site have?", answer: "There is no magic number, but each plugin should be maintained, needed and doing a job no other plugin does. Many small business sites run well on around ten. What matters more is quality: one abandoned plugin can cause more trouble than twenty well-kept ones." },
    { question: "Is WordPress still a good choice for NZ small businesses?", answer: "Yes, for most content-led sites. It is flexible, widely supported and you own it outright. It does need updates and sensible hosting, so budget for care. If you only need a few pages and never want to think about updates, a hosted builder may suit you better." },
    { question: "Can I edit my WordPress site myself after you build it?", answer: "Yes, that is the point of the handover. We set up block patterns so your team can add pages, posts and staff profiles without breaking the design, give you recorded walkthroughs of common tasks, and set user roles so the right people can publish." },
    { question: "What does a WordPress maintenance plan include?", answer: "Updates tested on staging first, backup checks, uptime monitoring, error log reviews, a monthly speed check and small content edits within an agreed allowance. The first five months after launch are free. After that plans start from the maintenance starting price, and your quote spells out exactly what is included." },
    { question: "My WordPress site has been hacked. Can you fix it?", answer: "Yes. We clean infected files and database entries, find how the attacker got in, replace vulnerable plugins, reset every login and harden the set-up, then give you a written summary. If customer data may have been exposed, talk to your own adviser about your obligations under the Privacy Act." },
    { question: "Will a WordPress rebuild hurt my Google rankings?", answer: "It should not if URLs are handled carefully. We crawl the old site, keep or redirect every URL that gets traffic, preserve working titles and descriptions, and watch Search Console after launch. Small fluctuations are normal in the first weeks. Nobody can guarantee rankings, but a careful rebuild protects what you have." },
    { question: "Is it risky to hire a WordPress developer from India?", answer: "The risk sits in access and ownership, not geography. Keep hosting, domain and admin accounts in your name, give the developer their own login you can remove, and insist on staging. With those in place, a remote WordPress developer cannot hold your site hostage." },
    { question: "How do I pay for WordPress work from New Zealand?", answer: "Quotes and invoices are in USD from India. Most NZ clients pay by Wise or bank wire from an NZD account, split into milestones. Nothing is billed before you approve the quote in writing. For GST questions about buying services from overseas, ask your accountant." },
    { question: "What hours can I reach your WordPress team from NZ?", answer: "We reply on WhatsApp seven days a week. Our working day starts around your lunchtime, so the NZ afternoon is ideal for calls. Work continues through your evening, and updates are usually waiting when you start the next morning." },
    { question: "Do you use page builders like Elementor?", answer: "We can work on existing builder sites, and we sometimes keep a builder if your marketing team relies on it. For new builds we usually recommend a block theme with custom patterns, because pages are lighter and editing is harder to break. We explain the trade-off before you choose." },
    { question: "Can you connect my WordPress site to Xero or a CRM?", answer: "Yes. Where a maintained plugin already does the job, we configure it. Where none fits, we write a small custom plugin using the official APIs, which you own. Larger integrations are quoted from the custom software starting price; see our Xero integration page for the details." },
    { question: "Do you write the content for my WordPress site?", answer: "We structure pages, write headings and FAQs for search, and polish copy you supply. For specialist content such as legal, medical or technical detail, you or your team should provide or approve the words, because you know the facts and carry the responsibility." },
    { question: "Is WordPress accessible for visitors with disabilities?", answer: "WordPress can be, if the theme and content are built with care: proper heading order, alt text, colour contrast, keyboard navigation and labelled forms. We build to those basics on every project. For a formal accessibility audit or legal obligations, involve a specialist and your own adviser." },
    { question: "Do you sign contracts or NDAs for WordPress projects?", answer: "The scope, milestones and ownership are set out in your written quote, and our general terms are published on the site. If your business needs its own NDA or contract, send it with the brief and we will review it. We do not quote blanket policies; ask us about your project." },
    { question: "How long does a WordPress rebuild take?", answer: "A rebuild of up to 100 pages usually takes 1–2 weeks once content and access are ready. Content-heavy sites of 299+ pages take 3–5 weeks, and WooCommerce stores 4–8 weeks. Waiting for copy, photos or hosting access is the most common delay, so gather those first." },
  ],
  related: {
    heading: "Related pages for New Zealand",
    links: [
      { name: "Shopify developer NZ", href: "/new-zealand/shopify-developer/" },
      { name: "Ecommerce website design NZ", href: "/new-zealand/ecommerce-website-design/" },
      { name: "SEO services NZ", href: "/new-zealand/seo-services/" },
      { name: "Affordable web design NZ", href: "/new-zealand/affordable-web-design/" },
      { name: "Website cost in NZ", href: "/new-zealand/website-design-cost/" },
      { name: "Website design for tradies", href: "/new-zealand/website-design-for-tradies/" },
      { name: "Xero integration developer", href: "/new-zealand/xero-integration-developer/" },
      { name: "Law firm website design", href: "/new-zealand/law-firm-website-design/" },
      { name: "Accounting firm website design", href: "/new-zealand/accounting-firm-website-design/" },
      { name: "App developers NZ", href: "/new-zealand/app-developers/" },
      { name: "New Zealand hub", href: "/new-zealand/" },
      { name: "Outsource web development to India", href: "/outsource-web-development-to-india/" },
      { name: "Contact", href: "/contact/" },
    ],
  },
  cta: {
    heading: "Send us your WordPress site and what is going wrong",
    note: "Share the URL and what is going wrong on WhatsApp. We reply with findings or an itemised USD quote within about two working days, and nothing is charged before you approve it.",
  },
};

export default content;
