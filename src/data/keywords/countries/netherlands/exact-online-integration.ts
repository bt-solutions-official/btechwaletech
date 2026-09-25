import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const content: FreelanceContent = {
  path: "/netherlands/exact-online-integration/",
  crumb: "Exact Online integration",
  updated: "2026-09-25",
  meta: {
    title: `Exact Online Integration, Custom Builds from ${P.software}`,
    description: `Exact Online integration when ready-made connectors fall short: orders, invoices, stock and relations synced with monitoring and rate-limit handling. From ${P.ai}.`,
    keywords: [
      "exact online integration", "exact online koppeling", "exact online api integration", "exact online koppeling laten maken",
      "exact online webshop koppeling", "exact online shopify integration", "exact online woocommerce koppeling", "custom exact online connector",
      "exact online api developer", "exact online rest api rate limit", "exact online oauth", "exact online webhooks",
      "sync orders to exact online", "sync stock exact online", "exact online invoice sync", "exact online crm integration",
      "exact online app store connector vs custom", "how much does an exact online integration cost", "exact online integration netherlands",
      "exact online koppeling amsterdam", "exact online koppeling rotterdam", "exact online koppeling utrecht", "moneybird api koppeling",
      "twinfield integration", "afas koppeling", "exact online developer india",
    ],
  },
  hero: {
    eyebrow: "Exact Online · custom connections for webshops, CRMs and portals",
    h1: "Exact Online integration for when the App Store connector no longer fits",
    lede: `An Exact Online integration moves orders, invoices, stock and customer records between Exact and the systems around it, so nobody retypes them. BtechWaleTech is three freelance developers in India who build custom connections for Dutch businesses whose webshop, CRM or <a href='/netherlands/custom-software-development/'>custom portal</a> has outgrown ready-made connectors: OAuth set up properly, API limits respected, every sync logged and reconciled. Simple automations start from ${P.ai}; full integrations from ${P.software}.`,
    pills: ["Orders into Exact", "Invoices and payments", "Stock per warehouse", "Relations and contacts", "Rate-limit aware", "Sync logs and alerts", "Moneybird, Twinfield, AFAS too"],
    origin: "Three freelance developers in India · English on calls, WhatsApp 7 days a week · code and credentials stay yours",
  },
  facts: [
    ["Automation-sized integration from", `${P.ai}, 2–4 weeks`],
    ["Full custom integration from", `${P.software}, 6–12 weeks`],
    ["Data typically synced", "Orders, invoices, items, stock, relations"],
    ["Error handling", "Retries, alerts and a daily reconciliation report"],
    ["Other packages", "Moneybird, Twinfield, AFAS on request"],
    ["After go-live", `5 free months, then care from ${P.care}`],
  ],
  stats: [
    { value: "3", label: "Developers covering build, data and monitoring" },
    { value: "2", label: "Working days to a written, itemised quote" },
    { value: "5", label: "Months of free care once the sync is live" },
    { value: "7", label: "Days a week on WhatsApp" },
  ],
  answer: {
    heading: "When do you need a custom Exact Online integration instead of an App Store connector?",
    text: `Use an Exact Online App Store connector when your webshop and processes are standard. Commission a custom Exact Online integration when you need unusual mappings, several administrations, a custom portal or CRM, or stronger error monitoring than the connector offers. BtechWaleTech builds smaller syncs from ${P.ai} and full integrations from ${P.software}, with logs and reconciliation included.`,
    more: `Building a trade portal on top? See <a href='/netherlands/b2b-webshop-development/'>B2B webshop development</a>. Selling on bol.com as well? Read <a href='/netherlands/bol-com-api-integration/'>bol.com API integration</a>.`,
  },
  snapshot: {
    caption: "Exact Online integration projects, summarised",
    rows: [
      { label: "Typical trigger", value: "Connector cannot map your VAT codes, warehouses, divisions or custom fields" },
      { label: "Connected systems", value: "Shopify, WooCommerce, custom portals, CRMs, planning tools, marketplaces" },
      { label: "Smaller sync", value: `One or two flows with monitoring, from ${P.ai}, 2–4 weeks` },
      { label: "Full integration", value: `Several flows, divisions and a dashboard, from ${P.software}, 6–12 weeks` },
      { label: "Authentication", value: "OAuth 2.0 app registered under your Exact account" },
      { label: "Monitoring", value: "Every run logged; failures alert a named person; daily reconciliation" },
      { label: "Ownership", value: "Code in your repository, credentials created by your administrator" },
    ],
  },
  services: {
    eyebrow: "Integration work",
    heading: "Exact Online integration services for Dutch businesses",
    note: "Most projects combine two or three of these. We quote each data flow as its own line so you can phase them.",
    cards: [
      { name: "Webshop to Exact Online", note: `Shopify or WooCommerce orders created as sales orders or invoices in Exact, with customers matched, VAT codes mapped and payments reconciled, from ${P.ai}.`, href: "/netherlands/shopify-developer/", size: "lg" },
      { name: "Portal or CRM integration", note: `A custom portal, CRM or planning tool reading and writing Exact data: relations, quotes, projects, open balances, from ${P.software}.`, href: "/netherlands/custom-software-development/", size: "lg" },
      { name: "Stock and item sync", note: "Items, prices and stock positions per warehouse pushed from Exact to your shop or marketplace, on a schedule that respects API limits.", size: "md" },
      { name: "Marketplace to Exact", note: "Orders from bol.com and other channels booked into Exact with the right sales journal and cost lines.", href: "/netherlands/bol-com-api-integration/", size: "md" },
      { name: "Monitoring and reconciliation", note: "A dashboard of sync runs, failed records with the reason in plain English, and a daily comparison of totals on both sides.", size: "md" },
      { name: "Connector rescue", note: "An existing custom sync that stalls, duplicates or silently fails: we read the code, fix the cause and add logging.", size: "sm" },
      { name: "Moneybird, Twinfield or AFAS", note: "The same approach for other Dutch accounting and ERP packages, using each vendor's own API or connectors.", size: "sm" },
      { name: "Care after go-live", note: `Five months free, then care from ${P.care}: API changes, token issues, new fields.`, size: "sm" },
    ],
  },
  comparison: {
    heading: "Three ways to connect a system to Exact Online",
    note: "All three are valid. The right one depends on how standard your data is and how much a sync failure costs you.",
    columns: ["Question", "Exact App Store connector", "No-code automation tool", "Custom integration by BtechWaleTech"],
    rows: [
      ["Setup time", "Often days", "Days to weeks", `2–4 weeks for a smaller sync; 6–12 for a full integration`],
      ["Custom field and VAT mapping", "Whatever the connector supports", "Possible, but grows fragile", "Mapped exactly to your administration"],
      ["Several divisions (administrations)", "Depends on the connector", "Manual per flow", "Built in, with routing rules"],
      ["Handling API limits", "Handled by the vendor", "Often not handled", "Queues, backoff and bulk or sync endpoints"],
      ["Error visibility", "Vendor dashboard, if any", "Task history", "Logs, alerts and daily reconciliation"],
      ["Cost pattern", "Subscription per the vendor's terms", "Subscription per task volume", `Build from ${P.ai}, care from ${P.care}`],
      ["Who can change it", "The vendor", "Anyone with the login", "Any developer with your repository"],
      ["Best for", "Standard webshop setups", "Low-volume, simple flows", "Unusual data, high volume, custom systems"],
    ],
    fine: "If an App Store connector already does what you need, keep it; a custom build only makes sense when the gaps cost you real time or errors.",
  },
  pricing: {
    heading: "Exact Online integration pricing",
    note: `Prices are starting prices in USD, itemised per data flow in a written quote. A focused sync of one or two flows, such as webshop orders into Exact and stock back out, with logging and alerts, starts from ${P.ai}. A full integration covering several flows, multiple administrations, a monitoring dashboard or a custom portal starts from ${P.software}. Your Exact Online subscription, any App Store or API-related charges from Exact, and hosting for the integration service are paid by you directly. After the five free months, care plans start from ${P.care}; they cover API changes, token problems and small mapping updates.`,
  },
  guideLabel: "Exact Online integration guide",
  guide: [
    {
      id: "what",
      heading: "What is an Exact Online integration?",
      paragraphs: [
        `An Exact Online integration is software that exchanges data between Exact Online and another system through Exact's API, automatically and on a schedule or trigger. Typical examples: webshop orders becoming sales invoices, stock levels flowing to the shop, and customer records staying the same in your CRM and in Exact.`,
        `Exact Online is organised into divisions, which most Dutch users call administrations. Each division has its own customers, items, journals and VAT codes, and every API call targets one division. That structure explains many integration surprises: a connector that works for one administration may not handle a holding company with three.`,
        `The REST API covers a wide area. Exact's own resource documentation lists groups for financial data, sales, purchase, CRM, logistics, projects, manufacturing, HRM, documents and payroll. You rarely need more than four or five resources, but knowing they exist helps you see what is possible before you settle for manual exports.`,
      ],
      list: [
        "<strong>Inbound to Exact:</strong> sales orders, invoices, payments, new relations, time entries.",
        "<strong>Outbound from Exact:</strong> items, prices, stock positions, open balances, invoice PDFs.",
        "<strong>Both ways:</strong> relations and contacts, when CRM and Exact are both edited.",
      ],
    },
    {
      id: "connector-or-custom",
      heading: "App Store connector or custom Exact Online integration: how do you decide?",
      paragraphs: [
        `Start with the Exact Online App Store. It has a dedicated category for webshop connections, and for a standard shop on a common platform a connector is often the cheapest and fastest route. Move to a custom Exact Online integration only when you can name the specific gaps.`,
        `Gaps we hear about most: the connector books everything on one revenue account when you need several, it cannot handle a second administration, it ignores a custom field your warehouse relies on, it has no way to push data from a system you built yourself, or failures only appear when your accountant finds a missing invoice at quarter end. Each is a legitimate reason to build. “We want our own” is not.`,
        `A middle route exists too. Sometimes the right answer is to keep the connector for orders and add a small custom sync for the one flow it lacks, such as stock per warehouse. That costs less and keeps the vendor responsible for the part that works.`,
      ],
      subs: [
        { heading: "Keep the connector if", text: "It handles your platform, one administration, standard VAT and your volume, and errors are rare and visible." },
        { heading: "Go custom if", text: "You have several divisions, a custom portal or CRM, unusual mappings, high volume or a need for strict reconciliation." },
      ],
      after: [
        `Not sure which side you are on? Send us a list of what the current connector gets wrong and we will tell you honestly whether a custom build fixes it.`,
      ],
    },
    {
      id: "data-map",
      heading: "Which data should an Exact Online integration sync, and in which direction?",
      paragraphs: [
        `Decide one master per field before writing any code. Items and prices usually live in Exact; web content lives in the shop; orders start in the shop; invoices and payments are final in Exact. Syncing a field both ways without clear rules is how duplicates and overwrites happen.`,
        `For orders, you also choose the form they take in Exact: a sales order that your warehouse processes and invoices from, or a direct sales invoice when the shop has already taken payment. Wholesalers with stock in Exact tend to prefer sales orders; direct-to-consumer shops paid by iDEAL often book invoices with the payment already matched.`,
        `Relations need a matching rule. Is a returning customer recognised by email, by VAT number or by a code stored in both systems? For consumers, many businesses book webshop sales on a single collective debtor; for trade customers, each company should be its own relation. We write these rules down with your bookkeeper, because they decide how your ledger looks.`,
      ],
      list: [
        "Items, descriptions, prices: Exact to shop.",
        "Stock positions per warehouse: Exact to shop or marketplace.",
        "Orders: shop to Exact, as sales orders or invoices.",
        "Payments and refunds: payment provider to Exact, matched to invoices.",
        "Relations: agreed master, with a matching rule.",
        "Invoice PDFs and open balances: Exact to customer portal.",
      ],
      after: [
        `The sync map table below shows these flows with typical frequencies.`,
      ],
    },
    {
      id: "oauth",
      heading: "How does authentication work for an Exact Online integration?",
      paragraphs: [
        `Exact Online uses OAuth 2.0. You register an app in Exact's developer environment, a user with the right rights approves the connection once, and the integration then works with short-lived access tokens that it renews with a refresh token. Nobody stores an Exact password in the integration.`,
        `The details matter in production. The token refresh must be handled by one process at a time, otherwise two workers refreshing at once can invalidate each other's tokens and the sync stops at night. Tokens should be stored encrypted, and the approving user should be a dedicated integration user where your subscription allows, so the connection does not break when an employee leaves.`,
        `We register the app under your Exact account, not ours. That way the connection belongs to your business, appears in your list of connected apps, and can be revoked by you at any moment. Rights are kept to what the flows need: an order sync does not need payroll access.`,
      ],
      list: [
        "App registered under your Exact account with a redirect URL you control.",
        "One-time consent by an authorised user in the right division.",
        "Access token refreshed by a single, locked process.",
        "Tokens encrypted at rest; secrets never in the code repository.",
        "Minimum rights for the flows in scope.",
      ],
    },
    {
      id: "limits",
      heading: "What are the Exact Online API limits, and how does an integration stay within them?",
      paragraphs: [
        `Exact's knowledge base lists a limit of 60 API calls per minute and 5,000 calls per day per company, with calls over the limit rejected with an HTTP 429 response. A well-built Exact Online integration plans for those numbers from day one rather than discovering them during the Christmas rush.`,
        `Three techniques keep a sync within budget. First, read in bulk: Exact's REST documentation notes that most endpoints return pages of 60 records, while the bulk and sync endpoints return pages of 1,000, and it recommends the sync endpoints where possible. Second, only fetch what changed since the last run instead of the whole item list. Third, queue writes and pace them, backing off when a 429 arrives rather than hammering the API.`,
        `Webhooks help too. Exact's API has a WebhookSubscriptions resource, so for supported topics the integration can be told that a record changed instead of polling for it. The notification tells you what changed; the integration then fetches the details, still within the limits.`,
      ],
      after: [
        `Limits can change and may differ by subscription, so we read the current values from the rate-limit headers in each response instead of hard-coding them. See Exact's <a href='https://support.exactonline.com/community/s/article/All-All-HNO-Concept-general-gen-apilimitsc?language=en_GB' rel='noopener'>knowledge-base article on API limits</a> for the latest figures.`,
      ],
    },
    {
      id: "divisions",
      heading: "How does an integration handle several Exact administrations?",
      paragraphs: [
        `With routing rules. Each order, invoice or relation is sent to the division it belongs to, decided by a rule such as the shop's country, the brand, or the legal entity on the order. The rule lives in configuration, so adding a fourth administration later is a setting, not a rebuild.`,
        `Groups with several entities often have shared items but separate ledgers, VAT setups and journals. An Exact Online integration for such a group needs mapping tables per division: which revenue account, which VAT code, which journal. We store these in a small admin screen your finance team can maintain, so they are not buried in code.`,
        `Rate limits count per company, which usually means per division, so a group with several administrations also has more room overall. The integration still needs to track each division's budget separately.`,
      ],
      subs: [
        { heading: "Common routing rules", text: "By brand, by shipping country, by legal entity, by sales channel." },
        { heading: "Common mapping tables", text: "Revenue accounts, VAT codes, journals, cost centres, warehouses per division." },
      ],
    },
    {
      id: "errors",
      heading: "Error monitoring and reconciliation: how do you know the sync is right?",
      paragraphs: [
        `You know because the integration tells you every day, not because your accountant finds a gap three months later. Every run is logged, every failed record is shown with a readable reason, and a daily report compares totals between the source system and Exact.`,
        `Most failures have ordinary causes: a new product not yet created as an item in Exact, a VAT code that does not match a new country, a closed financial period, or a relation code typed differently. The integration should catch these, park the record in an error list, alert a named person, and retry automatically once the cause is fixed. Silent skipping is the one outcome it must never allow.`,
        `Reconciliation closes the loop. Each morning the integration counts yesterday's orders and their totals in the shop, counts what arrived in Exact for the same day, and flags any difference. It takes minutes to read and saves the painful end-of-quarter search.`,
      ],
      list: [
        "Run log with start time, records processed and errors.",
        "Error list with the record, the reason and a retry button.",
        "Alerts by email or WhatsApp to a named person.",
        "Daily reconciliation of counts and totals per flow.",
        "Idempotent writes, so a retry never creates a duplicate invoice.",
      ],
    },
    {
      id: "accounting-mapping",
      heading: "VAT codes, ledger accounts and journals: why your bookkeeper must be involved",
      paragraphs: [
        `Because the integration books entries in your ledger, its mapping decides how your accounts look. Your bookkeeper or accountant should approve which revenue account, VAT code and journal each type of sale uses before the integration goes live.`,
        `Cross-border sales make this concrete. A shop selling to consumers in Belgium and Germany may need different VAT codes per country, depending on how your business is set up; shipping costs and discounts may need their own accounts; marketplace sales may go to a separate journal. We implement the mapping; we do not decide the tax treatment. That is your accountant's call.`,
        `Payments deserve the same care. When the shop takes payment through a payment provider, the provider pays out in batches with fees deducted. A good Exact Online integration books those payouts so bank reconciliation in Exact works, instead of leaving your bookkeeper to match hundreds of small amounts by hand.`,
      ],
      after: [
        `We write the agreed mapping into a one-page document that your accountant signs off; it becomes the test script for go-live.`,
      ],
    },
    {
      id: "webshops",
      heading: "Exact Online integration for Shopify and WooCommerce webshops",
      paragraphs: [
        `For Shopify, the integration listens for order events through Shopify's webhooks and writes to Exact; stock and prices travel back through the Shopify Admin API. For WooCommerce, the same happens through WooCommerce's REST API and webhooks, with a small plugin only where a hook is missing.`,
        `The webshop side has its own traps. Order edits after payment, partial refunds, gift cards and discounts spread across lines all need a clear booking in Exact. Bundles in the shop may need to become separate items in Exact for stock. Product variants need a stable link to Exact item codes, ideally stored as a field on both sides.`,
        `We also plan for volume spikes. A sale day can produce more orders in an hour than Exact's per-minute limit handles directly, so orders queue and flow in steadily. Customers see their confirmation instantly; the booking follows a little later, in order, without errors.`,
      ],
      after: [
        `Building or rebuilding the shop itself? Our <a href='/netherlands/shopify-developer/'>Shopify</a> and <a href='/netherlands/woocommerce-developer/'>WooCommerce</a> pages for Dutch merchants cover the storefront side.`,
      ],
    },
    {
      id: "portals",
      heading: "Connecting a custom portal, CRM or planning tool to Exact",
      paragraphs: [
        `When the other system is your own software, there is no connector to buy, so a custom Exact Online integration is the only route. The upside is full control: the portal can show a customer's open invoices from Exact, create quotes that become sales orders, or push approved hours as time transactions for invoicing.`,
        `We design these as a small service between your portal and Exact rather than calling Exact directly from every screen. The service handles tokens, limits, caching and errors in one place, and your portal simply asks it for data. If you later add Moneybird for a second company or move to another package, only the service changes.`,
        `Caching matters for portals. A customer opening their invoice page should not trigger five live Exact calls; the service keeps a recent copy and refreshes it on a schedule or when a webhook says something changed.`,
      ],
      after: [
        `For portal projects in general, see <a href='/netherlands/custom-software-development/'>custom software development for Dutch SMEs</a>.`,
      ],
    },
    {
      id: "other-packages",
      heading: "Similar builds for Moneybird, Twinfield and AFAS",
      paragraphs: [
        `The same pattern works for other Dutch accounting and ERP packages: one integration service, one master per field, logs, alerts and reconciliation. What changes is each vendor's API, authentication method and limits, which we read in their current documentation before quoting.`,
        `Moneybird is common with smaller businesses and freelancers; Twinfield often appears where an accounting office manages several clients; AFAS is typical for mid-sized organisations that run finance, HR and projects in one suite, with its own connector mechanism. Some groups use two at once, for example after an acquisition, and need data moved between them.`,
        `If you are choosing a package rather than integrating one, we cannot advise on that choice as accountants would, but we can tell you which APIs are easier to build against for the flows you have in mind.`,
      ],
      subs: [
        { heading: "Same everywhere", text: "Agreed data map, secure credentials, queued writes, run logs, reconciliation." },
        { heading: "Different per package", text: "Authentication, rate limits, available objects, webhook support." },
      ],
    },
    {
      id: "cost",
      heading: "How much does an Exact Online integration cost?",
      paragraphs: [
        `With BtechWaleTech, a focused Exact Online integration of one or two flows starts from ${P.ai}, and a full integration with several flows, divisions or a custom portal starts from ${P.software}. Care after the five free months starts from ${P.care}. The written quote lists each flow separately.`,
        `The price depends on the number of flows, the number of divisions, how unusual your mappings are, the volume you need to handle within API limits, and whether you want a monitoring dashboard or a simple email alert. Rescuing an existing integration is quoted after we have read its code, because the state of that code decides the effort.`,
        `Separate running costs are paid by you: your Exact subscription and any API-related charges Exact applies to your plan, hosting for the integration service, and subscriptions for other systems involved. Quotes from other developers vary widely; compare them on the same list of flows, error handling and reconciliation, not on the headline figure.`,
      ],
      after: [
        `The table below shows typical scopes. Our <a href='/pricing/'>pricing page</a> lists every starting price.`,
      ],
    },
    {
      id: "timeline",
      heading: "How long does an Exact Online integration take to build and test?",
      paragraphs: [
        `Two to four weeks for a focused sync and six to twelve weeks for a full integration, from written approval. Testing against a separate test administration takes a real share of that time, and it should.`,
        `The build starts with the data map and your bookkeeper's mapping approval. Then comes authentication and the first read-only flow, so you can see data moving without anything being written. Write flows follow, first to the test administration, where we replay a few weeks of real orders and compare the results with what your bookkeeper booked by hand. Only after that match does the integration switch to your live administration, usually from a clean cut-off date.`,
      ],
      list: [
        "Week 1: data map, mapping sign-off, app registration.",
        "Week 2: read-only flows and logging.",
        "Weeks 2–4: write flows to the test administration, replay of real data.",
        "Final step: cut-off date, go-live, first reconciliation report reviewed together.",
      ],
      after: [
        `Ask for a test administration from your Exact partner or accountant early; it is the one thing that most often delays go-live.`,
      ],
    },
    {
      id: "working-with-us",
      heading: "Working with an integration team in India from the Netherlands",
      paragraphs: [
        `Integration work suits remote collaboration: most of it is reading documentation, writing code and checking logs, and the few decisions that need people are made with your bookkeeper on a call. We share several working hours with you each day, starting in your late morning, since India is three and a half to four and a half hours ahead depending on the season.`,
        `In practice: an intake call with you and your bookkeeper, a shared data-map document everyone comments on, a weekly short call, and WhatsApp for quick questions any day of the week. You receive an itemised USD quote within about two working days, nothing is billed before your written approval, and payments go in milestones by Wise, bank wire or PayPal, invoiced from India.`,
        `Access is granted by you, not requested as passwords. Your Exact administrator authorises the app, your hosting account runs the service, and our access can be removed the day the project ends. We do not need, and do not ask for, rights beyond the flows in scope.`,
      ],
      after: [
        `Santosh handles cloud hosting and data, Ankur the integration code, and Vedansh the automation logic and planning. More on the remote model: <a href='/hire-indian-developers/'>hire developers in India</a>.`,
      ],
    },
    {
      id: "ownership-security",
      heading: "Who owns the integration, and how is financial data kept safe?",
      paragraphs: [
        `You own the code, the hosting and the Exact app registration. The integration runs in your cloud account, the repository is yours, and the documentation explains every flow well enough for another developer to maintain it.`,
        `Financial and customer data is sensitive, so the build keeps exposure small: encrypted connections, secrets in a proper secret store, logs that record IDs and errors rather than full personal details, and access limited to named people. Personal data in relations and invoices falls under the AVG, where your business is the controller; your adviser decides what agreements you need, and the integration is built to support those obligations.`,
      ],
      list: [
        "Integration service hosted in an EU region on your cloud account.",
        "Secrets in a managed secret store, never in the repository.",
        "Logs without full personal data; retention you choose.",
        "Access removed from us at project end if you wish.",
      ],
      after: [
        `For privacy-focused builds in general, see <a href='/netherlands/gdpr-compliant-website-development/'>GDPR-compliant development</a>.`,
      ],
    },
    {
      id: "example",
      heading: "Worked example: a hypothetical e-bike parts webshop in Amersfoort",
      paragraphs: [
        `An illustration, not a client. Imagine a business in Amersfoort selling e-bike parts through a WooCommerce shop and on bol.com, with two Exact administrations: one for the Dutch trading company and one for a Belgian sister company. An App Store connector handles Dutch webshop orders, but Belgian orders, bol.com sales and stock from the second warehouse are typed in by hand every morning.`,
        `A custom Exact Online integration here would add three flows. Orders from both channels route to the correct administration by shipping country and brand. Stock from both warehouses flows to WooCommerce and bol.com every few minutes during the day, using sync endpoints to stay within limits. Marketplace payouts are booked so the bank reconciliation matches.`,
        `The team would keep the existing connector for Dutch webshop orders during the first phase, then decide whether to replace it once the custom flows have run cleanly for a month. The bookkeeper signs off the VAT-code mapping for Belgian orders before anything goes live. A daily reconciliation email lands at 8:00, and the morning typing session disappears.`,
      ],
    },
    {
      id: "checklist",
      heading: "Exact Online integration checklist before you ask for quotes",
      paragraphs: [
        `Have these answers ready and any developer can quote accurately, including us.`,
      ],
      list: [
        "Which systems connect to Exact, and which platform versions they run.",
        "How many Exact administrations are involved, and which one each sale belongs to.",
        "The flows you need, with direction and a rough daily volume.",
        "Your current connector, if any, and exactly what it gets wrong.",
        "Your bookkeeper's preferred booking for orders, payments, fees and refunds.",
        "Whether a test administration is available.",
        "Who should receive alerts, and how quickly they can act.",
        "Where the integration will be hosted, in your name.",
      ],
      after: [
        `Share the list on WhatsApp via <a href='/contact/'>our contact page</a>; a rough draft is enough to start.`,
      ],
    },
  ],
  tables: [
    {
      id: "decision",
      eyebrow: "Decision",
      heading: "App Store connector or custom Exact Online integration?",
      note: "Read across each row; if most answers land on the right, a custom build is worth quoting.",
      columns: ["Situation", "Connector is usually fine", "Custom integration is worth it"],
      rows: [
        ["Platform", "Mainstream webshop platform", "Custom portal, CRM or in-house tool"],
        ["Administrations", "One", "Several, with routing rules"],
        ["Mapping", "Standard revenue and VAT codes", "Per-country, per-brand or per-channel mapping"],
        ["Volume", "Comfortably within API limits", "Peaks that need queuing and bulk reads"],
        ["Error handling", "Occasional errors, easily spotted", "Errors must be alerted and reconciled daily"],
        ["Custom fields", "None needed", "Warehouse, project or contract fields"],
        ["Budget", "Low monthly subscription preferred", `One-off build from ${P.ai} plus care`],
      ],
    },
    {
      id: "sync-map",
      eyebrow: "Data flows",
      heading: "Typical Exact Online sync map",
      note: "Frequencies are common starting points; we tune them to your volume and API budget.",
      columns: ["Data", "Direction", "Typical trigger or frequency", "Exact area"],
      rows: [
        ["Items and prices", "Exact → shop", "Nightly, plus on change", "Logistics items and prices"],
        ["Stock positions", "Exact → shop / marketplace", "Every few minutes in business hours", "Logistics stock positions"],
        ["Orders", "Shop → Exact", "On each order, queued", "Sales orders or sales invoices"],
        ["Payments and payouts", "Payment provider → Exact", "Daily per payout", "Financial entries"],
        ["Relations", "Agreed master", "On change, with matching rule", "CRM accounts and contacts"],
        ["Open balances and invoice PDFs", "Exact → portal", "Hourly or on webhook", "Financial and documents"],
      ],
      hideSm: [3],
    },
    {
      id: "scope-cost",
      eyebrow: "Budget",
      heading: "Exact Online integration cost by scope",
      note: `Starting prices in USD; the written quote itemises each flow. Also see <a href='/netherlands/ai-automation-agency/'>AI automation for Dutch SMEs</a> for invoice-processing work.`,
      columns: ["Scope", "Example", "Starts from", "Typical timeline"],
      rows: [
        ["Single flow with alerts", "Webshop orders into Exact", P.ai, "2–4 weeks"],
        ["Two-way webshop sync", "Orders in, stock and prices out", P.ai, "3–4 weeks"],
        ["Multi-administration integration", "Two entities, routing and mapping tables", P.software, "6–10 weeks"],
        ["Portal or CRM integration", "Custom portal reading and writing Exact", P.software, "6–12 weeks"],
        ["Integration rescue", "Fix and document an existing custom sync", P.ai, "After code review"],
        ["Care plan", "API changes, tokens, new fields", P.care, "Monthly, after 5 free months"],
      ],
    },
  ],
  areas: {
    eyebrow: "Across the Netherlands",
    heading: "Dutch regions where Exact Online integrations come up",
    note: "Remote work for businesses anywhere in the Netherlands. The notes describe typical needs, not clients.",
    cards: [
      { name: "Amsterdam", note: "Direct-to-consumer brands and scale-ups selling across Europe often outgrow single-administration connectors when they add entities or countries." },
      { name: "Rotterdam", note: "Import and trading businesses near the port handle high order volumes and several warehouses, where stock sync and API-limit planning matter." },
      { name: "Utrecht", note: "Service businesses running custom portals or planning tools want time entries, quotes and invoices to reach Exact without manual exports." },
      { name: "Eindhoven", note: "Technical suppliers and manufacturers often need custom item fields and project data linked between their own tools and Exact." },
      { name: "Amersfoort", note: "A central location for many SMEs with webshops and marketplace sales that need bookings routed to the correct administration." },
      { name: "Den Bosch", note: "Mid-sized family businesses using Exact or AFAS commonly want their webshop and CRM to share relation data reliably." },
      { name: "Zwolle", note: "Regional wholesalers with trade portals need open balances and invoice PDFs from Exact visible to their customers." },
      { name: "Groningen", note: "Northern SMEs and software start-ups building their own tools look for clean API connections to their accounting package." },
      { name: "Breda", note: "Consumer-goods distributors with several sales channels need daily reconciliation between channel totals and what reaches the ledger." },
      { name: "Tilburg", note: "Logistics-related businesses benefit from syncing warehouse data and shipping costs into Exact without spreadsheet uploads." },
      { name: "Arnhem", note: "Businesses serving both Dutch and German customers need per-country VAT-code mapping agreed with their accountant." },
      { name: "Haarlem", note: "Online retailers with seasonal peaks need order queuing so sale days do not exceed API limits or duplicate invoices." },
      { name: "The Hague", note: "Organisations and service providers invoicing public-sector clients often want invoice data flowing from their own systems into Exact." },
      { name: "Venlo", note: "Cross-border distributors near Germany handle multiple warehouses and entities, making routing rules and stock sync central." },
    ],
  },
  process: {
    heading: "Our Exact Online integration process",
    steps: [
      ["Intake with your bookkeeper", "We map the systems, administrations, flows and current pain points, and hear from the person who books the entries today."],
      ["Written quote", "Within about two working days you receive a USD quote itemised per flow, with the monitoring level and a timeline. No billing before approval."],
      ["Data map sign-off", "Masters per field, matching rules, VAT codes, accounts and journals are written into one document your bookkeeper approves."],
      ["Build against a test administration", "Authentication, read flows, then write flows, replaying real historic orders and comparing results with manual bookings."],
      ["Go-live from a cut-off date", "The integration switches to live administrations on an agreed date, and the first reconciliation reports are reviewed together."],
      ["Monitoring and care", "Alerts and daily reconciliation keep running. Five free months of care follow, then plans covering API changes and new fields."],
    ],
  },
  faqHeading: "Exact Online integration: frequent questions",
  faqs: [
    { question: "What is an Exact Online integration?", answer: "An Exact Online integration is software that exchanges data between Exact Online and another system through Exact's API, such as webshop orders becoming invoices, stock flowing to the shop, and customer records staying consistent. It replaces manual exports, imports and retyping, and should include logging and error alerts so you can trust the data." },
    { question: "How much does an Exact Online integration cost?", answer: `With BtechWaleTech, a focused integration of one or two flows starts from ${P.ai} and a full integration with several flows, administrations or a custom portal starts from ${P.software}. Care after five free months starts from ${P.care}. Your Exact subscription and hosting are paid directly by you. The quote itemises each flow.` },
    { question: "Should I use an Exact App Store connector or a custom integration?", answer: "Use a connector when your platform, administration and mappings are standard and the connector's errors are rare and visible. Choose a custom Exact Online integration when you have several administrations, a custom portal or CRM, unusual mappings, high volume or a need for daily reconciliation. Sometimes the best answer is both: connector plus one custom flow." },
    { question: "What are the Exact Online API rate limits?", answer: "Exact's knowledge base lists 60 API calls per minute and 5,000 per day per company, with extra calls rejected with an HTTP 429 response. Limits can change and may vary by subscription, so a good integration reads the rate-limit headers in each response, uses bulk or sync endpoints and queues writes." },
    { question: "How does Exact Online authentication work?", answer: "Exact Online uses OAuth 2.0. An app is registered under your Exact account, an authorised user approves access once, and the integration then uses short-lived access tokens renewed with a refresh token. Passwords are never stored. Tokens should be refreshed by a single process and kept encrypted." },
    { question: "Does Exact Online support webhooks?", answer: "Yes. Exact's API documentation includes a WebhookSubscriptions resource, so an integration can be notified when supported records change instead of polling constantly. The notification says what changed; the integration then fetches the details. Webhooks reduce API use but do not replace a periodic reconciliation." },
    { question: "Can you sync Shopify with Exact Online?", answer: "Yes. Shopify order webhooks trigger bookings in Exact as sales orders or invoices, with VAT codes, discounts, shipping and refunds mapped as your bookkeeper agrees. Stock and prices flow back to Shopify through its Admin API. Orders queue during peaks so Exact's limits are respected." },
    { question: "Can you connect WooCommerce to Exact Online?", answer: "Yes, through WooCommerce's REST API and webhooks, with a small plugin only where a needed hook is missing. The same rules apply: one master per field, clear order booking, stock sync on a schedule, logs, alerts and reconciliation. Existing WooCommerce plugins for Exact can stay if they already cover your needs." },
    { question: "Can one integration handle several Exact administrations?", answer: "Yes. Routing rules send each record to the right division, for example by brand, country or legal entity, and mapping tables per division hold revenue accounts, VAT codes and journals. Finance can maintain these tables in a small admin screen, so adding an administration later is configuration rather than new code." },
    { question: "What happens when a sync fails?", answer: "The record is parked in an error list with a readable reason, a named person is alerted, and the integration retries automatically once the cause is fixed. Writes are idempotent so retries never duplicate invoices. A daily reconciliation compares totals on both sides so nothing slips through unnoticed." },
    { question: "How long does an Exact Online integration take?", answer: "Two to four weeks for a focused sync and six to twelve weeks for a full integration, from written approval. A good part of that time goes into testing against a test administration with real historic data. Ask your Exact partner or accountant for a test administration early." },
    { question: "Do you need access to our live Exact administration?", answer: "Only at go-live, and only through an app your administrator authorises with the minimum rights for the flows in scope. Before that we work against a test administration. You can revoke our access at any time, and we do not ask for anyone's Exact password." },
    { question: "Can you integrate Moneybird, Twinfield or AFAS instead?", answer: "Yes. The approach is the same: agreed data map, secure authentication, queued writes, logs, alerts and reconciliation. Each vendor's API, authentication and limits differ, so we read their current documentation before quoting. Groups running two packages at once can also have data moved between them." },
    { question: "Who decides the VAT codes and ledger accounts?", answer: "Your bookkeeper or accountant. The integration implements the mapping, but how sales, discounts, shipping, fees and cross-border orders are booked is a tax and accounting decision. We write the agreed mapping into a short document they sign off before go-live, and it doubles as the test plan." },
    { question: "Can you fix our existing custom Exact integration?", answer: "Usually. We first read the code and logs to find why it stalls, duplicates or skips records, then quote the fix. Typical causes are token refresh races, missing rate-limit handling, and silent error swallowing. The fix normally includes proper logging and alerts so the problem stays visible." },
    { question: "Where is the integration hosted?", answer: "In a cloud account in your name, normally in an EU region, which Santosh sets up if you do not have one. Secrets live in a managed secret store, logs avoid full personal data, and the repository is yours. Hosting costs are paid by you directly to the provider." },
    { question: "Is it safe to let a team in India build our financial integration?", answer: "It can be, when access and ownership are set up correctly. Your administrator authorises the app, the service runs on your cloud account, the code is in your repository and our access can be removed at any time. Personal data handling is designed to support your AVG obligations, confirmed by your own adviser." },
    { question: "Can an integration book marketplace payouts correctly?", answer: "Yes. Marketplace and payment-provider payouts arrive in batches with fees deducted. The integration books the sales, fees and payout so bank reconciliation in Exact matches, following the mapping your bookkeeper approves. This removes a lot of manual matching of small amounts." },
    { question: "Do we still need our App Store connector after a custom build?", answer: "Not always. Many businesses keep the connector for the flows it handles well and add custom flows for the gaps. After a month of clean running, you can decide whether to consolidate everything into the custom integration or keep both, based on cost and reliability." },
    { question: "What does care after go-live cover?", answer: `The first five months are free and cover fixes, token issues and small mapping changes. After that, care starts from ${P.care}. It covers API changes announced by Exact or the other system, monitoring, and small updates such as a new VAT code. Larger changes are quoted separately in writing.` },
  ],
  related: {
    heading: "Related integration and ecommerce pages",
    links: [
      { name: "B2B webshop development", href: "/netherlands/b2b-webshop-development/" },
      { name: "bol.com API integration", href: "/netherlands/bol-com-api-integration/" },
      { name: "Custom software development", href: "/netherlands/custom-software-development/" },
      { name: "AI automation for Dutch SMEs", href: "/netherlands/ai-automation-agency/" },
      { name: "Shopify developer Netherlands", href: "/netherlands/shopify-developer/" },
      { name: "WooCommerce developer Netherlands", href: "/netherlands/woocommerce-developer/" },
      { name: "iDEAL payment integration", href: "/netherlands/ideal-payment-integration/" },
      { name: "Logistics software development", href: "/netherlands/logistics-software-development/" },
      { name: "Online ordering system for restaurants", href: "/netherlands/online-ordering-system-for-restaurants/" },
      { name: "GDPR-compliant website development", href: "/netherlands/gdpr-compliant-website-development/" },
      { name: "Netherlands overview", href: "/netherlands/" },
      { name: "Hire developers in India", href: "/hire-indian-developers/" },
      { name: "White-label development", href: "/white-label-web-development/" },
    ],
  },
  cta: {
    heading: "Tell us what your connector gets wrong",
    note: "Send a short list of the systems, administrations and flows involved on WhatsApp. We will say honestly whether a custom build is worth it and send an itemised quote in about two working days.",
  },
};

export default content;
