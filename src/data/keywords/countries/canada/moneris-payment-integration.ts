import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const MONERIS_CHECKOUT = "https://developer.moneris.com/hosted-solutions/docs/hosted-checkout-introduction";
const MONERIS_HT = "https://developer.moneris.com/hosted-solutions/docs/hosted-tokenization-introduction";
const PCI_MERCHANTS = "https://www.pcisecuritystandards.org/merchants/";

const content: FreelanceContent = {
  path: "/canada/moneris-payment-integration/",
  crumb: "Moneris payment gateway integration",
  updated: "2026-09-25",
  meta: {
    title: `Moneris Payment Gateway Integration from ${P.shop}`,
    description: `Moneris payment gateway integration for Canadian sites, apps and WooCommerce: Moneris Checkout or API, recurring billing, smaller PCI scope. Stores from ${P.shop}.`,
    keywords: [
      "moneris payment gateway integration", "moneris integration", "moneris checkout integration", "moneris api integration",
      "moneris woocommerce integration", "moneris woocommerce plugin setup", "moneris hosted tokenization", "moneris vault recurring billing",
      "moneris recurring payments website", "moneris sandbox testing", "moneris test store credentials", "moneris developer canada",
      "how to integrate moneris with website", "moneris integration cost", "moneris pci compliance website", "moneris 3d secure setup",
      "moneris custom app integration", "moneris react integration", "moneris laravel integration", "moneris node js integration",
      "moneris integration toronto", "moneris integration vancouver", "moneris integration calgary", "moneris integration montreal",
      "moneris gateway developer near me", "moneris pre-authorization and completion",
    ],
  },
  hero: {
    eyebrow: "Canadian card payments · websites, apps and stores",
    h1: "Moneris payment gateway integration for your website, custom app or WooCommerce store",
    lede: `Moneris payment gateway integration is the work of connecting your Moneris merchant account to the place customers pay: a WooCommerce cart, a custom booking or ordering system, or a mobile app's backend. BtechWaleTech is three freelance developers in India who choose the right route (<strong>Moneris Checkout, Hosted Tokenization or the API</strong>), wire it up, test every path in the Moneris sandbox and switch to production with you. Store builds with Moneris start at ${P.shop}; custom systems at ${P.software}.`,
    pills: ["Moneris Checkout or API", "WooCommerce setup", "Tokenised saved cards", "Recurring billing", "Smaller PCI scope", "Sandbox test plan", "Your merchant account, your code"],
    origin: "Three freelance developers in India · replies on WhatsApp 7 days a week · morning calls for Eastern and Pacific time",
  },
  facts: [
    ["Merchant account", "Signed by you directly with Moneris"],
    ["Hosted options", "Moneris Checkout and Hosted Tokenization"],
    ["Store with Moneris from", `${P.shop}, 4–8 weeks`],
    ["Custom app or portal from", `${P.software}, 6–12 weeks`],
    ["Testing", "Moneris test environment before go-live"],
    ["After launch", "5 months of free maintenance"],
  ],
  stats: [
    { value: "3", label: "Freelance developers on your integration" },
    { value: "2", label: "Working days to an itemised quote" },
    { value: "0", label: "Card numbers stored on your server with hosted fields" },
    { value: "5", label: "Months of free maintenance after launch" },
  ],
  answer: {
    heading: "How does Moneris payment gateway integration work for a Canadian website?",
    text: `Moneris payment gateway integration connects your checkout to your Moneris merchant account. Most sites use Moneris Checkout, a Moneris-hosted payment form embedded in your page, or Hosted Tokenization with the Vault for saved cards and subscriptions. WooCommerce stores can use an extension. You test in the Moneris sandbox, then switch credentials. BtechWaleTech builds this within stores from ${P.shop}.`,
    more: `For a full store build around the integration, see <a href='/canada/woocommerce-developer/'>WooCommerce development in Canada</a>. If you also handle customer data beyond payments, read about a <a href='/canada/pipeda-compliant-website/'>PIPEDA compliant website</a>.`,
  },
  snapshot: {
    caption: "A Moneris integration project, in brief",
    rows: [
      { label: "Best default", value: "Moneris Checkout for most stores and booking sites" },
      { label: "Saved cards", value: "Hosted Tokenization with Moneris Vault" },
      { label: "Subscriptions", value: "Moneris recurring billing or Vault plus your scheduler" },
      { label: "WooCommerce", value: "Moneris extension, configured and tested" },
      { label: "Card data", value: "Entered in Moneris-hosted fields, not stored by you" },
      { label: "Testing", value: "Sandbox store, test cards, every decline path" },
      { label: "Price", value: `Stores from ${P.shop}; custom systems from ${P.software}` },
    ],
  },
  services: {
    eyebrow: "What we set up",
    heading: "Moneris payment gateway integration work we handle",
    note: "You hold the merchant agreement with Moneris and control the credentials. We build, test and document the connection so your team is never guessing how payments flow.",
    cards: [
      { name: "Moneris Checkout on your site", note: "The Moneris-hosted payment form embedded in your checkout page: server-side preload request, the JavaScript library on the page, receipt handling and order status updates.", href: "/canada/ecommerce-website-development/", size: "lg" },
      { name: "WooCommerce Moneris setup", note: `Extension installed and configured, test and live credentials separated, refunds and captures tested from the WooCommerce dashboard, in store builds from ${P.shop}.`, href: "/canada/woocommerce-developer/", size: "lg" },
      { name: "Saved cards and subscriptions", note: "Hosted Tokenization and Vault so returning customers pay without re-entering card details, plus recurring billing for memberships and boxes.", href: "/canada/saas-development-company/", size: "md" },
      { name: "Custom platform integration", note: `Moneris wired into a booking system, portal or marketplace built on Node, Laravel or Next.js, as part of custom work from ${P.software}.`, href: "/canada/custom-software-development/", size: "md" },
      { name: "Mobile app payments", note: `Flutter or React Native apps paying through your server and a Moneris-hosted form, never handling raw card numbers in the app, within app builds from ${P.app}.`, href: "/canada/react-native-app-development/", size: "md" },
      { name: "Accounting sync", note: "Settled payments and refunds pushed to your accounting system so reconciliation stops being a spreadsheet job.", href: "/canada/quickbooks-online-integration/", size: "sm" },
      { name: "Migration from another processor", note: "Moving an existing store's checkout to Moneris with a cut-over plan, so orders keep flowing on switch day.", href: "/canada/shopify-migration/", size: "sm" },
      { name: "Payment monitoring and care", note: `Failed-payment alerts, plugin updates and certificate checks, from ${P.care} after five free months.`, href: "/canada/website-maintenance-services/", size: "sm" },
    ],
  },
  comparison: {
    heading: "Who should do your Moneris payment gateway integration?",
    note: "Plenty of stores start with a plugin installed by the owner. That works until something fails at checkout on a Saturday night.",
    columns: ["Consideration", "Owner installs a plugin", "Local development shop", "BtechWaleTech freelance team"],
    rows: [
      ["Choice of integration route", "Whatever the plugin does", "Usually considered", "Chosen for your use case and PCI scope"],
      ["Test and live credentials kept apart", "Often mixed up", "Usually", "Always, documented"],
      ["Decline and error paths tested", "Rarely", "Sometimes", "Every path in the sandbox test plan"],
      ["Recurring billing and saved cards", "Plugin defaults", "Custom work", "Vault or Moneris recurring, set up and tested"],
      ["Custom app or portal support", "No", "Yes", "Yes"],
      ["In-person help", "Not applicable", "Yes, an advantage", "No; calls and screen share only"],
      ["Upfront cost", "Lowest", "Quotes vary widely", `Within stores from ${P.shop}; custom from ${P.software}`],
      ["After launch", "On your own", "Retainer", `5 free months, then from ${P.care}`],
    ],
    fine: "We are not affiliated with Moneris and cannot change your processing rates, approve your merchant account or speak for Moneris support; those stay between you and Moneris.",
  },
  pricing: {
    heading: "What Moneris payment gateway integration costs",
    note: `A new online store with Moneris Checkout or the WooCommerce extension, product catalogue, shipping and tax settings starts at ${P.shop}. Custom platforms that need Moneris inside booking, membership, quoting or marketplace logic, including Vault tokens and recurring billing, start at ${P.software}. Adding Moneris to an existing site is quoted after we see the codebase, because the effort depends on how checkout is built today. Moneris's own processing fees are set in your merchant agreement and are not part of our quote. All quotes are in USD, itemised, and nothing is billed before you approve them in writing.`,
  },
  guideLabel: "Moneris integration guide",
  guide: [
    {
      id: "what-it-is",
      heading: "What is Moneris payment gateway integration?",
      paragraphs: [
        `Moneris payment gateway integration is the code and configuration that lets your website or app send card payments to Moneris for approval and settlement into your merchant account. Moneris is a Canadian payment processor; the integration is how your checkout talks to it.`,
        `There is no single "Moneris integration". Moneris's developer documentation offers hosted solutions (Moneris Checkout and Hosted Tokenization) and API-based flows (purchase, pre-authorisation and completion, purchase with a payment token, recurring billing and 3-D Secure). Platform extensions, such as the WooCommerce one, wrap some of these for you.`,
        `So the first job is choosing the route. It depends on what you sell, whether customers return, whether you bill on a schedule, how much control you want over the look of the payment form, and how much PCI compliance work you are willing to take on. The rest of this guide walks through those choices from the developer's side.`,
      ],
      list: [
        "<strong>One-off purchases</strong>: Moneris Checkout is usually enough",
        "<strong>Saved cards for repeat buyers</strong>: Hosted Tokenization plus Vault",
        "<strong>Memberships and boxes</strong>: Moneris recurring billing or Vault with your own scheduler",
        "<strong>Deposits or made-to-order</strong>: pre-authorisation then completion",
      ],
    },
    {
      id: "checkout-vs-api",
      heading: "Moneris Checkout vs API integration: which should you choose?",
      paragraphs: [
        `For most Moneris payment gateway integration projects, choose Moneris Checkout unless you have a specific reason not to. It gives you a Moneris-hosted payment form inside your page, and Moneris describes its hosted solutions as simplifying integration and reducing PCI compliance scope. Choose the API when you need behaviour the hosted form does not offer, such as tokens used across several systems or complex billing logic.`,
        `The trade-off is control versus responsibility. With Moneris Checkout, Moneris renders and secures the card fields, so card numbers never pass through your server. With a direct API integration where your own page collects card numbers, your systems handle cardholder data and your PCI obligations grow accordingly.`,
        `The middle path, which we use most for custom builds, is Hosted Tokenization. A Moneris iframe collects the card number and returns a temporary token; your server then uses that token with the Vault or a transaction request. You get flexibility close to the API while keeping raw card data off your servers.`,
      ],
      subs: [
        { heading: "Can Moneris Checkout match my site's design?", text: "It is configurable in the Moneris Merchant Resource Centre, but it is still Moneris's form. If a pixel-perfect custom card form matters to you, Hosted Tokenization gives more room while still keeping card numbers off your server." },
      ],
    },
    {
      id: "how-checkout-works",
      heading: "How does a Moneris Checkout integration work step by step?",
      paragraphs: [
        `A Moneris Checkout flavour of Moneris payment gateway integration has a server part and a browser part. Moneris's <a href='${MONERIS_CHECKOUT}' rel='noopener'>Moneris Checkout documentation</a> describes it as a preload request from your server that returns a ticket, the Moneris JavaScript library opening the checkout in the page with that ticket, the customer paying, and a receipt step that confirms the outcome.`,
        `In practice: when the customer clicks "Pay", your server calls Moneris with the order total and your checkout configuration ID and receives a ticket. The browser loads the checkout using the ticket. Moneris processes the card and fires callbacks such as payment receipt, cancel or error. Your server then requests the receipt using the ticket, checks it matches the order, and only then marks the order paid.`,
        `That last check matters. We never trust the browser alone to say an order is paid; the server confirms with Moneris before stock is reduced or a booking confirmed. The checkout configuration itself (which payment methods, which fraud tools, what to collect) is created in the Moneris Merchant Resource Centre, separately for testing and production. According to Moneris, the hosted checkout accepts credit and debit cards, digital wallets and gift cards, depending on your configuration.`,
      ],
    },
    {
      id: "tokenisation-vault",
      heading: "Moneris Hosted Tokenization and Vault for saved cards",
      paragraphs: [
        `In Moneris payment gateway integration, use Hosted Tokenization and the Vault when customers come back and should not retype their card each time. Moneris's <a href='${MONERIS_HT}' rel='noopener'>Hosted Tokenization documentation</a> says a Moneris iframe captures the card, the gateway returns a temporary token, and your server uses it for a Vault transaction, so raw card data is never captured or stored by your application.`,
        `In our builds, the flow is: the customer enters card details into the Moneris field on your page; the temporary token comes back to the browser and is posted to your server; your server adds the card to the Vault and stores only the resulting Vault reference against the customer's account. Future charges use that reference.`,
        `That pattern is what powers "Save this card", one-click reorders, deposit-then-balance billing and subscriptions you control. It also means a breach of your database would expose references that are useless outside your Moneris account, not card numbers. We still protect those references like any other sensitive data, and we build a clear "remove saved card" option for customers.`,
      ],
    },
    {
      id: "woocommerce",
      heading: "How do you set up Moneris on a WooCommerce store?",
      paragraphs: [
        `For Moneris payment gateway integration on most WooCommerce stores, the Moneris extension listed on WooCommerce.com is the quickest route. Its listing says it is developed by SkyVerge and supports saved cards stored on Moneris servers, WooCommerce Subscriptions, pre-orders, refunds and voids from the WooCommerce dashboard, and card verification settings.`,
        `The setup work is more than ticking boxes. We confirm HTTPS is correct on every checkout URL, connect test credentials first, map order statuses so authorised, captured and refunded payments show correctly, check tax and shipping totals match what Moneris receives, and test decline messages so customers see something useful instead of a generic error.`,
        `Then we test with WooCommerce Subscriptions if you sell memberships or boxes, including a failed renewal, a customer updating their card and a cancellation. Only after every path passes do we switch to live credentials with you. If your store needs work beyond payments, our <a href='/canada/woocommerce-developer/'>WooCommerce developer service</a> covers the rest, and <a href='/canada/ecommerce-website-development/'>ecommerce development</a> covers new builds.`,
      ],
      list: [
        "HTTPS verified on cart, checkout and account pages",
        "Test credentials connected and labelled",
        "Order status mapping checked for authorise, capture, refund",
        "Decline messages reviewed for clarity",
        "Subscription renewals, failures and card updates tested",
      ],
    },
    {
      id: "custom-builds",
      heading: "Moneris payment gateway integration in custom websites and apps",
      paragraphs: [
        `In a custom build, Moneris becomes one service your backend calls. We typically integrate it in Node.js, Laravel or a Next.js server route, keep credentials in environment variables on the server, and expose only what the browser needs: a checkout ticket or the hosted tokenization field.`,
        `Custom work is where Moneris payment gateway integration earns its keep: a booking system that takes a deposit and charges the balance after the service; a B2B portal where approved accounts pay invoices online; a marketplace-style platform that records payments per vendor; a class-booking site that sells passes. Each needs payment state stored alongside your own records, with idempotent handling so a double click or network retry never charges twice.`,
        `For mobile apps built in Flutter or React Native, the app talks to your server, and the card entry happens in a Moneris-hosted form rather than in fields your app controls. Apple and Google have their own rules about which purchases must use in-app billing, particularly digital content, so we check those for your product before choosing the route. Our <a href='/canada/custom-software-development/'>custom software page</a> explains the wider build.`,
      ],
    },
    {
      id: "recurring",
      heading: "Tokenised recurring billing with Moneris: two ways to do it",
      paragraphs: [
        `In a Moneris payment gateway integration you can let Moneris run the schedule, or run it yourself using Vault tokens. Moneris's API documentation describes recurring billing as a series of automated transactions managed by Moneris according to a schedule agreed between you and the customer.`,
        `Moneris-managed recurring suits simple, fixed schedules: the same amount every month or year. Your system sets it up once and listens for results. It is less code, but changes such as upgrades, pauses or prorated amounts need more handling.`,
        `Vault plus your own scheduler suits anything more flexible: usage-based amounts, add-ons, skipping a month, or billing on the date an order ships. Your server charges the stored Vault reference when your business logic says so. We build retry rules for declined renewals, emails asking customers to update expired cards, and a dashboard showing upcoming, failed and recovered payments. For subscription products, our <a href='/canada/saas-development-company/'>SaaS development page</a> covers the product side.`,
      ],
      subs: [
        { heading: "Which is better for a subscription box?", text: "If every box costs the same and ships on the same day, Moneris-managed recurring is simpler. If customers can skip, swap or add items, Vault plus your scheduler avoids fighting the fixed schedule." },
        { heading: "What about WooCommerce Subscriptions?", text: "The WooCommerce Moneris extension says it supports WooCommerce Subscriptions, which handles the schedule inside WooCommerce and charges saved cards on renewal." },
      ],
    },
    {
      id: "pci-scope",
      heading: "How does Moneris payment gateway integration reduce PCI scope?",
      paragraphs: [
        `Keep card numbers out of your systems and your PCI DSS burden shrinks. Both Moneris Checkout and Hosted Tokenization are designed so card data is entered into Moneris-controlled fields, which Moneris says reduces your compliance scope.`,
        `PCI DSS still applies to you as a merchant. The <a href='${PCI_MERCHANTS}' rel='noopener'>PCI Security Standards Council</a> says it covers all entities involved in payment processing regardless of size, and that whether a small merchant must validate compliance is set by the payment brands; merchants should ask their acquirer about validation and reporting. For Moneris merchants, that conversation is with Moneris.`,
        `What we do on the build side: use hosted fields only, never log request bodies that could contain card data, serve every page over HTTPS, keep the payment page free of unnecessary third-party scripts, restrict admin access, and keep the platform patched. We document the payment flow so you can answer the self-assessment questions accurately. We do not certify your compliance or complete your assessment for you.`,
      ],
    },
    {
      id: "fraud-3ds",
      heading: "3-D Secure, AVS and fraud settings in a Moneris integration",
      paragraphs: [
        `In any Moneris payment gateway integration, turn on the checks that fit your risk and no more; each extra check can also stop genuine customers. Moneris's API documentation lists 3-D Secure authentication, and the WooCommerce extension listing mentions eFraud tools with address and card verification settings.`,
        `For most small stores, card verification (the code on the back) plus address verification with sensible rules is the baseline. Higher-risk goods, such as electronics, gift cards or high-value orders shipped to new addresses, justify 3-D Secure so the card issuer authenticates the buyer.`,
        `We configure these in the Moneris settings and in your checkout, test how each result is shown to customers, and decide with you what happens to borderline results: auto-decline, hold for review, or accept. A pre-authorisation and later completion is also useful for made-to-order goods: you authorise at order time and capture only when the item ships.`,
      ],
    },
    {
      id: "sandbox",
      heading: "Testing Moneris payment gateway integration with sandbox credentials",
      paragraphs: [
        `Every Moneris payment gateway integration we build is tested end to end in the Moneris test environment before any real card is charged. Moneris documents a testing Merchant Resource Centre at esqa.moneris.com and shared test stores (such as store1, store2, store3, store5 and moneris) for its hosted checkout, plus published test card numbers.`,
        `For the newer Moneris API, the developer portal issues sandbox client credentials and a test merchant ID, with a separate sandbox base URL. Either way, test and production configurations are created separately, so a test checkout ID never reaches your live site.`,
        `Our test plan covers much more than a successful payment: declines, expired cards, cancelled checkouts, closing the browser mid-payment, double-clicking "Pay", refunds, partial refunds, voids, saved-card charges, renewal failures and webhook or receipt delays. Shared test stores are used by many developers, so we never put real customer information into them. The test plan table below lists what we run.`,
      ],
    },
    {
      id: "go-live",
      heading: "Going live: switching from test to production",
      paragraphs: [
        `The final step of Moneris payment gateway integration, switching to live, is a checklist, not a click. You create the production checkout configuration or production credentials in your own Moneris account; we swap environment variables, set the checkout library to production mode, and run a small real transaction that you then refund.`,
        `Before that, we confirm the production configuration matches the tested one (payment methods, fraud settings, receipt fields), that email receipts and order statuses work, that accounting sync points to the live books, and that monitoring alerts reach a real person. We also confirm who at your business can see and change Moneris settings.`,
        `Credentials never travel over chat or email. We ask you to add them directly to the hosting environment, or to create a limited user for us in the Moneris portal that you delete afterwards. You keep every production secret; we only need what the job requires, for as long as it requires it.`,
      ],
    },
    {
      id: "cost",
      heading: "How much does Moneris payment gateway integration cost?",
      paragraphs: [
        `With BtechWaleTech, a new store including Moneris starts at ${P.shop}, and custom platforms with Moneris inside booking, membership or portal logic start at ${P.software}. Adding Moneris to an existing site is quoted after a code review.`,
        `The main cost drivers are: which route (hosted checkout is quicker than tokenization plus Vault), recurring billing and how flexible it must be, saved cards and customer card management, the number of places payments happen (store, invoices, bookings), accounting or ERP sync, mobile app involvement, and how tangled the current checkout is.`,
        `Other developers quote this very differently, partly because some count only plugin installation and others include full testing. Ask what the test plan covers. Moneris's processing fees are separate, set by your merchant agreement. Our <a href='/canada/ecommerce-website-cost/'>ecommerce website cost guide for Canada</a> puts payment work in the context of a whole store budget.`,
      ],
    },
    {
      id: "timeline",
      heading: "How long does a Moneris integration take?",
      paragraphs: [
        `Moneris payment gateway integration timelines follow our standard plans: a new store with Moneris takes four to eight weeks, and a custom platform six to twelve. The payment part of a store build is usually a few days of that, plus testing.`,
        `What slows projects down is rarely code. Merchant account approval and access to the Moneris portal sit with you and Moneris, so we suggest starting that application while design is under way. Waiting for production credentials at the end is the most common reason a finished store sits unlaunched.`,
        `For an existing site, we give you a timeline with the quote once we have seen how checkout currently works. Simple WooCommerce switches are quick; custom systems with recurring billing and accounting sync need longer testing.`,
      ],
    },
    {
      id: "working-with-us",
      heading: "Working with a remote team in India on Canadian payments",
      paragraphs: [
        `Our hours overlap with Eastern and Pacific mornings, which suits payment go-lives: we can switch to production in your early morning, watch the first real orders, and still have your full business day to react. WhatsApp messages are answered seven days a week.`,
        `Moneris payment gateway integration involves sensitive access, and we handle it carefully. You create a limited user for us in your hosting and Moneris portals; we never ask for your personal Moneris login, and production secrets are entered by you or through a secure environment variable screen. After launch, you remove our access.`,
        `Quotes are in USD, invoices come from India, and payment is by Wise, bank wire or PayPal, only after you approve a written quote. You own the code, the hosting, the domain and, of course, the Moneris merchant account. We cannot visit your store or install physical terminals; our work is online payments.`,
      ],
      subs: [
        { heading: "Week one", text: "Call to understand what you sell and how, review of current checkout, route chosen (Checkout, tokenization or API), test credentials connected, test plan agreed." },
        { heading: "Week two", text: "Integration built on staging, test plan run with results shared, accounting sync tested, go-live checklist prepared for when production credentials are ready." },
      ],
    },
    {
      id: "worked-example",
      heading: "Worked example: a hypothetical coffee roaster in Guelph",
      paragraphs: [
        `Say a small coffee roaster in Guelph sells beans on WooCommerce and wants to add a monthly subscription where customers can skip a month or change their roast. It also sells wholesale to cafés, who currently pay by cheque against emailed invoices.`,
        `A sensible Moneris payment gateway integration for this roaster: the Moneris extension for one-off retail orders, WooCommerce Subscriptions with saved cards for the monthly plan so skips and swaps are handled in the store, card verification and address checks turned on, and a small "pay your invoice" page for cafés using Moneris Checkout with the invoice number passed in the order. Payments and refunds sync to the roaster's accounting system. Because this is a store build with subscription logic, it would start from our ecommerce plan at ${P.shop}.`,
        `If the roaster later wanted a wholesale portal with account pricing and saved cards per café, that would become custom software from ${P.software}. This is a hypothetical scenario, not a client story.`,
      ],
    },
    {
      id: "troubleshooting",
      heading: "Common Moneris integration problems and how to avoid them",
      paragraphs: [
        `Most Moneris payment gateway integration bugs we are asked to fix come from a handful of causes, and almost all of them are preventable with a proper test plan.`,
      ],
      list: [
        "<strong>Test credentials left on the live site</strong>: orders look paid but no money arrives. Keep environments in separate variables.",
        "<strong>Order marked paid from the browser alone</strong>: always confirm the receipt server-side.",
        "<strong>Totals that do not match</strong>: taxes or shipping calculated differently in the store and in the payment request.",
        "<strong>Duplicate charges</strong>: no protection against double clicks or retries.",
        "<strong>Expired cards on subscriptions</strong>: no email asking customers to update, so renewals quietly fail.",
        "<strong>Extra scripts on the payment page</strong>: chat widgets or trackers that add risk for no benefit.",
        "<strong>Nobody watching failures</strong>: no alert when payment errors spike.",
      ],
      after: [
        `If your current store has any of these, a care plan from ${P.care} includes monitoring, and our <a href='/canada/website-maintenance-services/'>maintenance service</a> page explains what else is covered.`,
      ],
    },
  ],
  tables: [
    {
      id: "routes",
      eyebrow: "Integration routes",
      heading: "Moneris integration routes compared",
      note: `Summarised from Moneris's developer documentation and the WooCommerce.com extension listing. Confirm current features with Moneris before you decide.`,
      columns: ["Route", "Card data handled by", "Best for", "Effort"],
      rows: [
        ["Moneris Checkout (hosted)", "Moneris-hosted form in your page", "One-off purchases, bookings, invoice payments", "Lowest custom code"],
        ["Hosted Tokenization + Vault", "Moneris iframe; your server gets a token", "Saved cards, custom forms, flexible billing", "Moderate"],
        ["Moneris recurring billing", "Moneris, on a set schedule", "Fixed-amount memberships", "Moderate"],
        ["Direct API with your own card fields", "Your systems", "Rare cases needing full control", "Highest, plus larger PCI scope"],
        ["WooCommerce extension", "Per extension configuration", "WooCommerce stores", "Low to moderate, plus testing"],
        ["Pre-authorisation then completion", "Depends on route above", "Deposits, made-to-order, variable totals", "Moderate"],
      ],
      hideSm: [3],
    },
    {
      id: "scope-price",
      eyebrow: "Scope and starting price",
      heading: "Moneris payment gateway integration by project type",
      note: `Starting prices in USD. Moneris processing fees are separate. For custom products, see <a href='/canada/mvp-development-for-startups/'>MVP development for startups</a>.`,
      columns: ["Project", "Includes", "Starts at", "Typical timeline"],
      rows: [
        ["New WooCommerce store", "Store build, Moneris extension, test plan, go-live", P.shop, "4–8 weeks"],
        ["Store with subscriptions", "Above plus saved cards, renewals, card update emails", P.shop, "4–8 weeks"],
        ["Booking or invoice payments", "Custom flow with Moneris Checkout and receipts", P.software, "6–12 weeks"],
        ["Customer portal with saved cards", "Hosted Tokenization, Vault, account management", P.software, "6–12 weeks"],
        ["Mobile app with payments", "Flutter or React Native app, server-side Moneris", P.app, "6–10 weeks"],
        ["Existing site switch to Moneris", "Code review, integration, testing, cut-over", "Quoted after review", "Depends on current checkout"],
      ],
    },
    {
      id: "test-plan",
      eyebrow: "Sandbox test plan",
      heading: "What we test before a Moneris integration goes live",
      note: "Run in the Moneris test environment with test cards. Real customer data is never entered into shared test stores.",
      columns: ["Scenario", "How we trigger it", "Expected result"],
      rows: [
        ["Approved payment", "Valid test card", "Order paid, receipt email, stock reduced once"],
        ["Declined card", "Test card or amount set to decline", "Clear message, order stays unpaid"],
        ["Cancelled checkout", "Close the payment form", "Order unpaid, cart kept"],
        ["Double submission", "Click pay twice, retry request", "One charge only"],
        ["Refund and partial refund", "From admin or dashboard", "Amounts match in store and Moneris"],
        ["Saved card charge", "Returning test customer", "Charge by Vault reference, no card entry"],
        ["Renewal failure", "Expired or declining saved card", "Retry rule and update-card email sent"],
        ["Test/live separation", "Inspect production config", "No test IDs or credentials in production"],
      ],
    },
  ],
  areas: {
    eyebrow: "Where we work",
    heading: "Moneris integrations for businesses across Canada",
    note: "We integrate Moneris remotely for businesses in every province. These are some of the places and business types we build for most often.",
    cards: [
      { name: "Toronto", note: "Toronto retailers, clinics and service firms often move from a basic store to saved cards or subscriptions, which is where tokenised Moneris setups pay off." },
      { name: "Mississauga", note: "Distributors and B2B suppliers in Mississauga frequently want online invoice payment, where a Moneris Checkout page tied to invoice numbers saves chasing cheques." },
      { name: "Ottawa", note: "Ottawa training providers and associations selling registrations and memberships need recurring billing and clean receipts for members and finance teams." },
      { name: "Montreal", note: "Montreal stores need their checkout and receipts in French as well as English, so the Moneris form configuration and emails are set up for both languages." },
      { name: "Quebec City", note: "Tourism and event businesses in Quebec City taking deposits online benefit from pre-authorisation and completion, capturing the balance closer to the date." },
      { name: "Calgary", note: "Calgary service companies and ecommerce brands selling across Canada often need Moneris linked to accounting and shipping tools so payments reconcile without manual work." },
      { name: "Edmonton", note: "Edmonton retailers and trades businesses taking online deposits and booking payments want failed-payment alerts so no job starts unpaid." },
      { name: "Vancouver", note: "Vancouver direct-to-consumer brands with subscription products use Vault tokens and flexible billing so customers can skip or change orders." },
      { name: "Victoria", note: "Victoria tour operators and small shops with seasonal peaks need checkout that holds up under load and clear decline messages for visitors." },
      { name: "Winnipeg", note: "Winnipeg wholesalers and manufacturers selling parts online to repeat buyers benefit from saved cards and account-based ordering." },
      { name: "Halifax", note: "Halifax restaurants, studios and retailers selling gift cards, classes and memberships online need recurring and one-off payments in one system." },
      { name: "Hamilton", note: "Hamilton clinics and fitness studios with class packs and memberships need saved-card renewals and simple card-update links for members." },
      { name: "Kitchener-Waterloo", note: "Kitchener-Waterloo startups building SaaS or marketplace products integrate Moneris through the API or tokenization inside their own platform." },
      { name: "Saskatoon", note: "Saskatoon agricultural suppliers and local ecommerce shops often switch a WooCommerce checkout to Moneris and need a clean cut-over with no lost orders." },
    ],
  },
  process: {
    heading: "How we run a Moneris integration",
    steps: [
      ["Understand how you get paid", "We look at what you sell, one-off or recurring, deposits or full payment, and every place money comes in, before picking an integration route."],
      ["Choose the route in writing", "Moneris Checkout, Hosted Tokenization with Vault, recurring billing or the WooCommerce extension, with reasons and PCI scope explained in your quote."],
      ["Build against test credentials", "The integration is built on staging with Moneris test configuration, server-side receipt checks and duplicate-charge protection from the start."],
      ["Run the full test plan", "Approvals, declines, cancellations, refunds, saved cards and renewals are tested and the results shared with you before anything goes live."],
      ["Switch to production together", "You add production credentials, we switch modes, run one real transaction and refund it, then watch the first live orders."],
      ["Hand over and monitor", "You receive documentation of the payment flow, we remove our access, and five free months of maintenance cover fixes and updates."],
    ],
  },
  faqHeading: "Moneris payment gateway integration: common questions",
  faqs: [
    { question: "How do I integrate Moneris with my website?", answer: "First get a Moneris merchant account and developer access. Then choose a route: Moneris Checkout for a hosted payment form in your page, Hosted Tokenization with Vault for saved cards, or an extension if you use WooCommerce. Build against Moneris test credentials, run a full test plan, then switch to production credentials. BtechWaleTech handles the build and testing; the account stays yours." },
    { question: "How much does Moneris payment gateway integration cost?", answer: `With BtechWaleTech, a new store including Moneris starts at ${P.shop}, and custom platforms with Moneris inside booking, membership or portal logic start at ${P.software}. Adding Moneris to an existing site is quoted after a code review. Moneris's own processing fees come from your merchant agreement and are separate from our quote.` },
    { question: "What is the difference between Moneris Checkout and the Moneris API?", answer: "Moneris Checkout is a Moneris-hosted payment form embedded in your page, so card data is handled by Moneris and your PCI scope is smaller. The API gives more control over flows such as tokens, pre-authorisations and recurring billing. Many custom builds combine them: Hosted Tokenization to capture cards safely, and API or Vault calls from the server to charge them." },
    { question: "Does Moneris work with WooCommerce?", answer: "Yes. A Moneris extension is listed on WooCommerce.com, developed by SkyVerge, and its listing says it supports saved cards stored on Moneris servers, WooCommerce Subscriptions, pre-orders and refunds from the dashboard. We install and configure it, map order statuses, test decline paths and renewals, and switch from test to live credentials with you." },
    { question: "Can Moneris handle recurring payments and subscriptions?", answer: "Yes. Moneris documents recurring billing, where Moneris runs a fixed schedule of automated transactions. For more flexible subscriptions with skips, upgrades or variable amounts, we store a Vault token and let your own system decide when to charge. WooCommerce stores can use WooCommerce Subscriptions with the Moneris extension." },
    { question: "How does Moneris reduce PCI compliance scope?", answer: "Moneris Checkout and Hosted Tokenization collect card details in Moneris-controlled fields, so card numbers never pass through or get stored on your server. Moneris says this reduces your PCI assessment scope. You still have PCI obligations as a merchant, and Moneris, as your acquirer, tells you how to validate. We build and document the flow so you can answer accurately." },
    { question: "How do I test a Moneris integration?", answer: "Use the Moneris test environment. For hosted checkout, Moneris documents a testing Merchant Resource Centre and shared test stores with published test cards; for the newer Moneris API, the developer portal issues sandbox credentials and a test merchant ID. We test approvals, declines, cancellations, refunds, saved cards, renewals and duplicate clicks before going live." },
    { question: "How long does Moneris payment gateway integration take?", answer: "A new store including Moneris usually takes four to eight weeks, and a custom platform six to twelve. The payment part is a few days plus testing. Merchant account approval and production credentials sit with you and Moneris, so apply early; waiting for them is the most common delay at the end of a project." },
    { question: "Can you add Moneris to my custom-built website?", answer: `Yes. We integrate Moneris into Node.js, Laravel, Next.js and similar backends, keeping credentials on the server and exposing only the checkout ticket or tokenization field to the browser. We add server-side receipt checks and duplicate-charge protection. Adding it to an existing codebase is quoted after review; new custom platforms start at ${P.software}.` },
    { question: "Can a mobile app take payments through Moneris?", answer: "Yes, through your server. The Flutter or React Native app asks your backend to start a payment, and card details are entered into a Moneris-hosted form, not fields your app controls. Apple and Google have their own rules for digital goods and in-app purchases, so we check which apply to what you sell before choosing the route." },
    { question: "Can customers save their card for next time?", answer: "Yes, with Hosted Tokenization and the Moneris Vault. The card is entered in a Moneris field, a token is returned, and your server stores only a Vault reference against the customer's account. Future charges use that reference. We also build a clear option for customers to remove a saved card." },
    { question: "Does Moneris support 3-D Secure and fraud checks?", answer: "Moneris's API documentation lists 3-D Secure authentication, and the WooCommerce extension listing mentions eFraud tools with address and card verification settings. We configure the checks that suit your risk, test how each result appears to customers, and agree with you what happens to borderline results so genuine buyers are not turned away." },
    { question: "Is BtechWaleTech a Moneris partner?", answer: "No. We are an independent team of three freelance developers and are not affiliated with Moneris. You sign your merchant agreement directly with Moneris, and rates, approvals and account support come from them. We build and test the technical integration on your behalf using the access you provide." },
    { question: "How do you keep Moneris credentials safe during payment gateway integration?", answer: "Production secrets never travel over chat or email. You add them directly to your hosting environment's secure settings, or create a limited user for us in the Moneris portal that you remove afterwards. Test and live credentials are kept in separate variables so a test ID never reaches your live site." },
    { question: "Can Moneris take deposits and charge the balance later?", answer: "Yes. Moneris supports pre-authorisation and completion, where you authorise an amount at order time and capture it later, which suits made-to-order goods and some bookings. For deposits followed by a separate balance charge, a saved Vault reference lets you charge the second amount when the job is done, with the customer's agreement." },
    { question: "Can you move my store from another payment processor to Moneris?", answer: "Yes. We review how the current checkout is built, integrate Moneris on staging, run the full test plan, and plan a cut-over time so orders keep flowing. Saved cards held by another processor usually cannot simply be copied, so we plan how returning customers re-enter or re-save cards; your old processor may offer a migration process to ask about." },
    { question: "Will Moneris payments sync with my accounting software?", answer: "They can. We push settled payments and refunds from your store or platform into your accounting system so reconciliation is not manual. The effort depends on the software and how your books are organised; our QuickBooks Online integration page explains one common setup for Canadian businesses." },
    { question: "Can my checkout be in French for Quebec customers?", answer: "Yes. The store's checkout pages, emails and messages can be built in French and English, and the Moneris checkout configuration is set up for both languages where Moneris supports it. Your translator supplies or approves the French text; we place it and test both language paths." },
    { question: "Who owns the Moneris payment gateway integration code?", answer: "You do. The code sits in your repository and hosting account, the Moneris merchant account is yours, and you receive documentation of the payment flow. If you change developers later, nothing needs to be released by us, and our access is removed after launch." },
    { question: "What support do I get after the Moneris integration launches?", answer: `Five months of free maintenance cover fixes, plugin and library updates and help if payments misbehave. After that, care plans start at ${P.care} and can include failed-payment monitoring. You can also manage the site yourself; the handover document explains how the payment flow works.` },
    { question: "How do I pay for the work?", answer: "You receive an itemised quote in USD, usually within two working days of our call. Work begins only after you approve it in writing, and nothing is billed before then. Payment is by Wise, bank wire or PayPal, with invoices from India. Payment stages are set out in your quote." },
  ],
  related: {
    heading: "Related Canadian services",
    links: [
      { name: "WooCommerce developer in Canada", href: "/canada/woocommerce-developer/" },
      { name: "Ecommerce website development", href: "/canada/ecommerce-website-development/" },
      { name: "Ecommerce website cost in Canada", href: "/canada/ecommerce-website-cost/" },
      { name: "QuickBooks Online integration", href: "/canada/quickbooks-online-integration/" },
      { name: "SaaS development", href: "/canada/saas-development-company/" },
      { name: "Custom software development", href: "/canada/custom-software-development/" },
      { name: "PIPEDA compliant website", href: "/canada/pipeda-compliant-website/" },
      { name: "Law 25 website compliance", href: "/canada/law-25-website-compliance/" },
      { name: "Manufacturing company website design", href: "/canada/manufacturing-company-website-design/" },
      { name: "Restaurant website with online ordering", href: "/canada/restaurant-website-online-ordering/" },
      { name: "Web development for Canada", href: "/canada/" },
      { name: "White-label web development", href: "/white-label-web-development/" },
      { name: "Contact", href: "/contact/" },
    ],
  },
  cta: {
    heading: "Tell us how you get paid today",
    note: "Send your site link and a line about what you sell on WhatsApp. We will suggest a Moneris route and send an itemised USD quote within about two working days.",
  },
};

export default content;
