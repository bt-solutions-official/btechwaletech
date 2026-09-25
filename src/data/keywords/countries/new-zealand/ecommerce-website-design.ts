import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const content: FreelanceContent = {
  path: "/new-zealand/ecommerce-website-design/",
  crumb: "Ecommerce website design NZ",
  updated: "2026-09-25",
  meta: {
    title: `Ecommerce Website Design NZ: Stores from ${P.shop}`,
    description: `Ecommerce website design NZ: move from Trade Me or Facebook to your own store from ${P.shop}. Platform matrix, CGA returns pages, rural freight and Google Shopping.`,
    keywords: [
      "ecommerce website design nz", "ecommerce website design new zealand", "online store design nz", "ecommerce web design auckland",
      "ecommerce website wellington", "ecommerce website christchurch", "ecommerce website hamilton", "ecommerce website design cost nz",
      "how much does an ecommerce website cost nz", "move from trade me to own website", "sell online outside trade me", "facebook marketplace to online store",
      "shopify vs woocommerce nz", "best ecommerce platform nz", "custom ecommerce website nz", "consumer guarantees act returns policy online store",
      "fair trading act online store nz", "rural delivery surcharge online store", "google shopping feed nz", "online store bank transfer checkout nz",
      "buy now pay later online store nz", "ecommerce website for small business nz", "ecommerce designer near me", "remote ecommerce developer india",
      "online shop website nz", "ecommerce website design agency vs freelancer nz",
    ],
  },
  hero: {
    eyebrow: "Ecommerce website design NZ · for marketplace sellers going direct",
    h1: "Ecommerce website design NZ: from Trade Me listings to a store you own",
    lede: `Ecommerce website design NZ sellers need looks different when you already sell on Trade Me or Facebook Marketplace: you have products, photos and buyers, but not a platform of your own. BtechWaleTech is three freelance developers in India who help Kiwi retailers pick Shopify, WooCommerce or a custom build, then design a store from ${P.shop} with Consumer Guarantees Act returns pages, a card, instalment and bank-transfer checkout, rural freight rules and a Google Shopping feed.`,
    pills: ["Platform decision first", "Shopify, WooCommerce or custom", "CGA-aware returns pages", "Card, BNPL and bank transfer", "Rural delivery rules", "Google Shopping feed", "You own the store"],
    origin: "Three freelance developers in India · WhatsApp 7 days · your afternoon is our morning",
  },
  facts: [
    ["Online store from", P.shop],
    ["Build time", "4–8 weeks"],
    ["Custom ecommerce build from", P.software],
    ["Quote", "Itemised in USD, about 2 working days"],
    ["Ownership", "Store, domain and payment accounts in your name"],
    ["After launch", "5 months free maintenance"],
  ],
  stats: [
    { value: "3", label: "Freelance developers designing and building your store" },
    { value: "5", label: "Free maintenance months after launch" },
    { value: "2", label: "Working days to an itemised store quote" },
    { value: "0", label: "Commission taken on your store's sales" },
  ],
  answer: {
    heading: "How does a NZ retailer move from Trade Me or Facebook to its own online store?",
    text: `Choose the platform first, then design around your products. Shopify suits most sellers wanting low upkeep; WooCommerce suits content-heavy shops already on WordPress; custom suits unusual pricing or trade logic. Add CGA-aware returns pages, NZ freight rules and a Google Shopping feed. BtechWaleTech designs stores from ${P.shop} and custom ecommerce from ${P.software}, usually live in 4–8 weeks.`,
    more: `Leaning towards Shopify? See our <a href='/new-zealand/shopify-developer/'>Shopify developer NZ page</a>. Already on WordPress? The <a href='/new-zealand/wordpress-developer/'>WordPress developer NZ guide</a> covers WooCommerce.`,
  },
  snapshot: {
    caption: "Your own online store in NZ: the essentials",
    rows: [
      { label: "Designed store on Shopify or WooCommerce", value: `From ${P.shop}, 4–8 weeks` },
      { label: "Custom ecommerce platform", value: `From ${P.software}, 6–12 weeks` },
      { label: "Checkout", value: "Card, wallets, BNPL and bank transfer, chosen per store" },
      { label: "Legal pages", value: "Returns, delivery and terms drafted to your approval" },
      { label: "Shipping", value: "Urban, rural, island and overseas rules" },
      { label: "Google Shopping", value: "Product feed and Merchant Center set-up" },
      { label: "Care", value: `5 months free, then from ${P.care}` },
    ],
  },
  services: {
    eyebrow: "Store design for NZ sellers",
    heading: "What goes into an ecommerce website design for a New Zealand retailer",
    note: "Every store we design covers these areas. The quote lists each one separately so you can see where the effort goes.",
    cards: [
      { name: "Platform recommendation", note: "A written Shopify vs WooCommerce vs custom recommendation based on your catalogue, team and budget, before any design starts.", href: "/shopify-vs-woocommerce/", size: "lg" },
      { name: "Store design and product pages", note: "Homepage, collection and product templates designed around your real photos, sizes and FAQs, tested on the phones your buyers use.", href: "/services/web-development/", size: "lg" },
      { name: "Returns, delivery and terms pages", note: "Plain-English policy pages structured around the Consumer Guarantees Act and Fair Trading Act, for you or your lawyer to approve.", size: "md" },
      { name: "Checkout mix", note: "Cards and wallets, a buy-now-pay-later option if it suits your margins, and direct bank transfer with clear instructions.", size: "md" },
      { name: "Freight rules", note: "Zones and weights for urban, rural, island and overseas delivery so rural surcharges are charged fairly instead of eating your profit.", size: "md" },
      { name: "Google Shopping feed", note: "Clean product data, GTINs where you have them, and a Merchant Center connection so products can show in Shopping results.", size: "sm" },
      { name: "Marketplace catalogue import", note: "Your Trade Me or Facebook listings cleaned up and imported as proper products with variants, rather than copied one by one.", size: "sm" },
      { name: "Ecommerce SEO", note: "Collection pages named the way Kiwis search, structured data and a sitemap in Google Search Console from day one.", href: "/new-zealand/seo-services/", size: "sm" },
    ],
  },
  comparison: {
    heading: "Stay on the marketplace, build it yourself, or have it designed?",
    note: "The realistic options for a NZ seller outgrowing Trade Me or Facebook Marketplace.",
    columns: ["Consideration", "Stay on Trade Me or Facebook only", "DIY store builder", "Designed store by BtechWaleTech"],
    rows: [
      ["Who owns the customer relationship", "Largely the marketplace", "You", "You"],
      ["Fees on each sale", "Marketplace success fees apply", "Platform and payment fees", "Platform and payment fees only; no commission to us"],
      ["Brand and design control", "Listing template only", "Theme limits and your time", "Designed around your products and buyers"],
      ["Returns and policy pages", "Marketplace rules plus your own", "Templates you adapt", "Drafted around CGA and FTA for your approval"],
      ["Rural and heavy-item freight", "Set per listing", "Basic rules unless you configure more", "Zone, weight and rural rules tested with real addresses"],
      ["Google Shopping presence", "Not your own listings", "Possible with effort", "Feed set up and validated in Merchant Center"],
      ["Upfront cost", "None", "Your time plus subscription", `From ${P.shop}`],
      ["Time to launch", "Immediate", "Weeks of evenings", "4–8 weeks"],
      ["Best for", "Testing demand", "Very small catalogues, tight budget", "Sellers with steady demand ready to go direct"],
    ],
    fine: "Many sellers keep a marketplace presence after launching their own store; leaving Trade Me entirely is rarely necessary on day one.",
  },
  pricing: {
    heading: "Ecommerce website design pricing for NZ retailers",
    note: `A designed Shopify or WooCommerce store starts at ${P.shop} and usually takes 4–8 weeks, covering the platform recommendation, design, product import, checkout, freight rules, policy pages and a Google Shopping feed. Custom ecommerce builds for unusual pricing, trade accounts or complex stock rules start at ${P.software}. What pushes a quote up: large catalogues with messy data, many variants, integrations with Xero or a warehouse, and custom features. Quotes are in USD and payable by Wise or bank wire. Platform subscriptions, apps and payment fees are paid by you to those providers.`,
  },
  guideLabel: "Ecommerce website design NZ guide",
  guide: [
    {
      id: "ready-to-go-direct",
      heading: "When is a Trade Me or Facebook seller ready for its own online store?",
      paragraphs: [
        `You are ready when you have steady repeat demand, a range that outgrows single listings, and customers who already search for your name. Before that, a marketplace is a cheap way to test what sells.`,
        `Signals we hear from NZ sellers who are ready:`,
      ],
      list: [
        "Buyers message asking whether you have a website, or where else they can order.",
        "Marketplace fees on every sale have become a line your accountant points at.",
        "You relist the same products constantly and manage stock in a spreadsheet anyway.",
        "You want to sell bundles, gift cards, subscriptions or trade pricing that listings cannot handle.",
        "Your Instagram or Facebook following is large enough to send traffic somewhere you control.",
      ],
      after: [
        `Having your own store does not mean abandoning marketplaces. Many stores keep their best-selling lines listed on Trade Me for reach while pointing repeat buyers to the website. The design of your store should support both channels, with the same product names and photos so customers recognise you.`,
      ],
    },
    {
      id: "what-ecommerce-design-includes",
      heading: "What does ecommerce website design in NZ actually include?",
      paragraphs: [
        `Ecommerce website design covers far more than a theme: it is the structure of your catalogue, the layout of product pages, the checkout, the policies and the data feeds that send your products to Google. Treating it as "pick a template and upload products" is why so many first stores stall.`,
        `A complete design brief for a New Zealand store answers these questions:`,
      ],
      list: [
        "How will customers browse: by product type, by occasion, by room, by size?",
        "What does a buyer need to see before buying: dimensions, fabric, care instructions, delivery time?",
        "Which payment methods do your buyers actually use?",
        "How will freight work for rural addresses, the islands and bulky items?",
        "What do returns look like, and how is that explained in plain English?",
        "Which products go into Google Shopping, and are their identifiers correct?",
      ],
      after: [
        `We answer these with you before designing a single page, then carry the answers into templates. That is the difference between a store that looks nice and one that sells.`,
      ],
    },
    {
      id: "platform-decision",
      heading: "Shopify, WooCommerce or custom: how to pick the right platform for a NZ store",
      paragraphs: [
        `Most NZ retailers moving off a marketplace should start on Shopify; WooCommerce makes sense if you already run WordPress or publish lots of content; custom ecommerce is for unusual business rules that neither handles well. Choosing wrong is the most expensive mistake in ecommerce website design, because moving later means rebuilding.`,
      ],
      subs: [
        { heading: "Choose Shopify when", text: "you want hosting, security and checkout handled for you, have a small team, and your products fit standard variants. The monthly subscription buys you less maintenance." },
        { heading: "Choose WooCommerce when", text: "you already have a WordPress site with traffic, want full control of hosting and data, or publish recipes, guides and blogs alongside products. Expect to budget for updates." },
        { heading: "Choose custom when", text: "pricing depends on measurements or configurations, trade customers need their own catalogues and terms, or the store is part of a bigger system such as a booking or manufacturing workflow." },
      ],
      after: [
        `The decision matrix table on this page scores all three on the factors that matter to NZ sellers. If you want the deeper platform comparison, read <a href='/shopify-vs-custom-ecommerce-website/'>Shopify vs a custom ecommerce website</a>. We write a recommendation into your quote and are happy for you to disagree with it.`,
      ],
    },
    {
      id: "ecommerce-website-design-cost-nz",
      heading: "How much does ecommerce website design cost in NZ?",
      paragraphs: [
        `An ecommerce website in NZ costs whatever its scope demands: a tidy Shopify store for forty products is a very different job from a custom trade portal. Our designed stores start at ${P.shop} and custom ecommerce starts at ${P.software}; local studios and freelancers quote across a wide range, so compare scopes line by line.`,
        `Items that change an ecommerce quote most:`,
      ],
      list: [
        "Catalogue size and data quality: clean spreadsheets import quickly, marketplace listings need tidying.",
        "Variants and options: sizes, colours, engraving, made-to-order choices.",
        "Custom templates: lookbooks, size finders, bundle builders.",
        "Integrations: Xero, courier platforms, inventory or wholesale systems.",
        "Content: whether you supply finished photos and copy.",
        "Ongoing costs you pay providers directly: platform plan, apps, payment fees, domain.",
      ],
      after: [
        `For a broader look at NZ website budgets, including brochure sites, see <a href='/new-zealand/website-design-cost/'>how much a website costs in NZ</a>.`,
      ],
    },
    {
      id: "product-pages",
      heading: "Designing product pages that answer buyer questions",
      paragraphs: [
        `On a marketplace, buyers ask questions by message; on your own store, the product page must answer them before they ask, or they leave. The best product pages we design read like a patient shop assistant.`,
        `What a strong NZ product page includes:`,
      ],
      list: [
        "Photos on a consistent background, plus one in real use for scale.",
        "Key facts in a short list: size, materials, care, what is in the box.",
        "Delivery estimate for their region, and whether rural delivery costs extra.",
        "Returns summary in one line, linking to the full policy.",
        "Stock status that updates automatically, not a note saying \"message to check\".",
        "Genuine reviews only, collected after purchase; never imported or invented.",
      ],
      after: [
        `On mobile, the add-to-cart button, price and delivery note should all be visible without scrolling. We test on mid-range Android phones as well as iPhones, because that is what many Kiwi shoppers carry.`,
      ],
    },
    {
      id: "returns-cga-fta",
      heading: "Returns and refund pages that follow the Consumer Guarantees Act",
      paragraphs: [
        `Your returns page must not suggest customers have fewer rights than the law gives them. The Consumer Guarantees Act sets guarantees that goods are of acceptable quality, fit for purpose and match their description, and Consumer Protection notes that a business trying to contract out of the CGA commits an offence under the Fair Trading Act.`,
        `How we structure a NZ returns page so it is honest and easy to follow:`,
      ],
      list: [
        "Start with what happens when something is faulty or not as described, since the CGA covers those cases.",
        "Separate that from change-of-mind returns, which are a store policy you choose to offer.",
        "Explain the steps: how to contact you, what to send, who pays return freight in each case.",
        "Avoid phrases like \"no refunds on sale items\" that could mislead buyers about their CGA rights.",
        "For business-to-business sales, note that the CGA can only be excluded when both businesses agree in writing.",
      ],
      after: [
        `We draft the structure and wording; you or your lawyer approve the final text. Consumer Protection's <a href='https://www.consumerprotection.govt.nz/general-help/consumer-laws/consumer-guarantees-act' rel='noopener'>Consumer Guarantees Act guidance</a> is a good plain-English reference. We do not give legal advice.`,
      ],
    },
    {
      id: "trader-details-terms",
      heading: "Showing you are in trade, and clear terms at checkout",
      paragraphs: [
        `The Commerce Commission says online sellers must make it clear they are in trade, including when selling through a site like Trade Me, and keep terms, delivery costs, taxes, fees and estimated delivery times clear and easy to find. Designing for that is simple once you know it.`,
        `On your own store we place:`,
      ],
      list: [
        "Your business name, contact details and GST number where relevant, in the footer and on the contact page.",
        "Prices shown GST-inclusive, with freight and any surcharge visible before payment.",
        "Delivery estimates that match what your carrier can actually do.",
        "Links to returns, delivery, privacy and terms pages right beside the pay button.",
        "Pre-order and backorder notices on the product page, not hidden in fine print.",
      ],
      after: [
        `If you still sell through marketplaces, check your listings carry the same trader information. The Commerce Commission's <a href='https://www.comcom.govt.nz/business/dealing-with-typical-situations/selling-goods-and-services/selling-online/' rel='noopener'>selling online guidance</a> covers the details, and your own adviser can confirm how it applies to you.`,
      ],
    },
    {
      id: "checkout-mix",
      heading: "Card, instalment and bank transfer: choosing the checkout mix",
      paragraphs: [
        `Offer the payment methods your buyers already use and no more: usually card and mobile wallets, a buy-now-pay-later option if your average order suits it, and direct bank transfer for those who prefer paying from internet banking. Every extra method adds fees, reconciliation work and settings to maintain.`,
      ],
      subs: [
        { heading: "Cards and wallets", text: "The default. On Shopify this is handled by Shopify's own payments where eligible; on WooCommerce, a NZ card gateway's official plugin. Wallets speed up mobile checkout." },
        { heading: "Buy now, pay later", text: "Popular for fashion, homewares and gifts in a mid-range price band. Fees are higher than cards, so check margins before enabling it on every product." },
        { heading: "Bank transfer", text: "Many NZ buyers are comfortable paying from internet banking. We set clear instructions, a reference format and an order status that holds stock until payment arrives." },
      ],
      after: [
        `Payment accounts are always opened in your business name. We never ask for your card processing credentials; we configure the platform side and you connect the account.`,
      ],
    },
    {
      id: "rural-freight",
      heading: "Rural delivery surcharges and freight rules for NZ online stores",
      paragraphs: [
        `If you ship to rural addresses, your store needs a rule that recognises them, because NZ Post publishes a rural delivery surcharge on parcels to rural addresses and other couriers apply their own. Without one, you pay the surcharge yourself on every rural order.`,
        `Freight rules we design for NZ stores:`,
      ],
      list: [
        "Separate zones for urban North Island, urban South Island, rural, and offshore islands.",
        "Weight or volume bands for heavy and bulky items, so a garden bench is not charged like a candle.",
        "Free-shipping thresholds calculated against your real average freight cost.",
        "Click-and-collect for customers near your workshop or shop.",
        "Clear delivery estimates, adjusted for rural and island addresses.",
      ],
      after: [
        `Rural address detection can use the carrier's own rating tools, a rural postcode list, or a checkout question, depending on platform. We test with genuine rural addresses before launch so the rule catches them.`,
      ],
    },
    {
      id: "google-shopping-feed",
      heading: "Setting up a Google Shopping product feed for a NZ store",
      paragraphs: [
        `A Google Shopping feed is a structured list of your products that Google Merchant Center reads to show them in Shopping results and ads. Without clean data, products get disapproved or never appear.`,
        `Google's product data specification requires an id, title, description, link, image link, availability and price for every product, with brand needed for new products and a GTIN strongly recommended where one exists. We set up:`,
      ],
      list: [
        "Titles written the way people search, such as brand, product type, size and colour.",
        "GTINs from your supplier barcodes where they exist, and the correct flag where they do not.",
        "Prices and availability that sync automatically from the store.",
        "Shipping settings in Merchant Center matching your store's freight rules.",
        "A check of Merchant Center diagnostics after the first sync, fixing any disapprovals.",
      ],
      after: [
        `Running paid Shopping ads is a separate job; many NZ sellers start with free listings and add ads once the feed is clean.`,
      ],
    },
    {
      id: "moving-from-marketplace",
      heading: "Moving your catalogue and buyers from Trade Me or Facebook",
      paragraphs: [
        `Your products move easily; your marketplace reputation mostly stays where it was earned. Plan the move with that in mind.`,
        `What we can move or rebuild for you:`,
      ],
      list: [
        "Product titles, descriptions and photos, cleaned up and turned into proper variants.",
        "Categories rebuilt as store collections that match how buyers browse.",
        "A simple import template so you can add future products in bulk.",
      ],
      after: [
        `What stays behind: marketplace feedback and ratings belong to that platform's system, so do not copy them onto your site as reviews. Instead, set up post-purchase review requests on your store and build fresh reviews from real orders. Tell repeat buyers personally about the new store, and include a card in parcels. If you also want to automate those follow-ups, our <a href='/new-zealand/ai-automation-agency/'>AI automation page for NZ businesses</a> explains what is realistic.`,
      ],
    },
    {
      id: "stock-and-accounts",
      heading: "Keeping stock and accounts straight when you sell in two places",
      paragraphs: [
        `The biggest operational risk for a seller running both a marketplace shop and its own store is overselling: the last unit sells on Trade Me at 9 pm while the website still shows it in stock. Decide early which system is the single source of truth for stock.`,
        `For most small NZ sellers the store platform becomes that source. Stock counts live in Shopify or WooCommerce, and marketplace listings are either updated by a connector app or kept to lines you hold in quantity, so a single sale elsewhere cannot cause a problem. For one-off or handmade pieces, we often recommend listing them only on your own store and using the marketplace for repeatable products.`,
        `Accounts need the same discipline. When orders arrive from two channels, your bookkeeping should show each channel's sales, fees and refunds separately. Most stores connect the platform to Xero through a connector app that posts daily summaries, with payment fees and freight income mapped to their own accounts. We configure the store side and hand your accountant a mapping sheet to check.`,
        `If no ready-made connector fits your mix of channels, a small custom integration is possible from ${P.software}; our <a href='/new-zealand/xero-integration-developer/'>Xero integration developer page</a> explains when that is worth paying for. For many sellers, a weekly manual check of stock on marketplace-only lines is honestly enough in the first year.`,
      ],
    },
    {
      id: "ecommerce-seo-ai",
      heading: "Getting an NZ online store found on Google and in AI answers",
      paragraphs: [
        `A new store starts with no search history, so its design has to give Google and AI search tools clear signals from launch: descriptive collection pages, unique product text, structured data and fast pages. Nobody can guarantee rankings, but these foundations decide whether you have a chance.`,
        `We build in:`,
      ],
      list: [
        "Collection pages named for real searches, with a short introduction and FAQs.",
        "Product structured data with price, availability and genuine review data.",
        "Core Web Vitals checked on mobile before launch.",
        "A sitemap submitted in Google Search Console and Merchant Center linked.",
        "Buying guides that AI Overviews and answer engines can quote, like \"what size wool rug for a lounge\".",
      ],
      after: [
        `Monthly SEO starts at ${P.seo} for stores wanting ongoing growth. See <a href='/ecommerce-seo-freelancer/'>ecommerce SEO in practice</a> for what that work involves.`,
      ],
    },
    {
      id: "mobile-speed",
      heading: "Mobile-first design and speed for Kiwi shoppers",
      paragraphs: [
        `Design the phone version first, because that is where most marketplace buyers already shop. A store that feels slower or clumsier than the Trade Me app will lose people at the first tap.`,
        `Practical rules we follow: images sized for the screen they appear on, no autoplay video above the product, a sticky add-to-cart bar on long product pages, and filters that work with a thumb. We keep third-party apps to a minimum because each one adds scripts. Before launch we test on a mid-range Android phone over a mobile connection, not just on a fast office laptop.`,
        `Google's Core Web Vitals are a useful yardstick: its web.dev guidance treats Largest Contentful Paint within 2.5 seconds as good. We measure the homepage, a collection and a product page, and share the before-launch report with you.`,
      ],
    },
    {
      id: "worked-example",
      heading: "Worked example: a hypothetical Canterbury furniture maker leaving Facebook Marketplace",
      paragraphs: [
        `Imagine a two-person workshop near Rangiora that sells handmade outdoor furniture through Facebook Marketplace and Trade Me. This is an illustration, not a real client.`,
        `Their problems: bulky freight quoted by message every time, no way to take deposits on made-to-order pieces, and buyers from rural Canterbury who expect delivery to farm addresses. Our recommendation is Shopify with a deposit option on made-to-order products, because the owners want minimal upkeep.`,
        `The quote starts from the ${P.shop} store plan and lists: platform set-up, a product template with dimensions and timber details, weight-based freight with rural and South Island zones plus click-and-collect, card and bank-transfer checkout, returns and made-to-order policy pages drafted for their review, and a Google Shopping feed.`,
        `During weeks two to six they send finished photos and approve page drafts each morning, NZ time. We test deliveries to a Christchurch suburb, a rural Waimakariri address and a Wellington business. They keep their best sellers on Trade Me with a note pointing to the website. Five months of free maintenance follow launch.`,
      ],
    },
    {
      id: "remote-team-from-nz",
      heading: "Working with a remote ecommerce team in India from New Zealand",
      paragraphs: [
        `India is six and a half to seven and a half hours behind New Zealand, so our mornings overlap with your afternoons. We schedule calls then, and send drafts and progress while you are offline, so each NZ morning starts with something new to review.`,
        `Quotes and invoices are in USD from India. You pay by Wise or bank wire from NZD, split across milestones such as design approval and launch. Your accountant can explain how GST applies to imported services; we do not advise on tax.`,
      ],
      subs: [
        { heading: "Week one", text: "You send marketplace links, product spreadsheet, freight habits and three stores you admire. We send questions, then an itemised quote with a platform recommendation." },
        { heading: "Week two", text: "You approve the quote and open the platform account in your name. We share homepage and product page designs, and draft policy page structures." },
      ],
      after: [
        `We never visit in person and have no NZ office; the whole project runs over WhatsApp, email and video. Read more on the <a href='/new-zealand/'>New Zealand hub</a> or check our <a href='/pricing/'>pricing page</a>.`,
      ],
    },
    {
      id: "ecommerce-website-design-nz-checklist",
      heading: "Ecommerce website design NZ launch checklist",
      paragraphs: [
        `Run through this before your store takes its first real order.`,
      ],
      list: [
        "Platform account, domain and payment accounts all in your business name.",
        "GST-inclusive prices checked on ten random products.",
        "Test orders placed to an urban, a rural and an island address.",
        "Returns, delivery, privacy and terms pages approved by you or your lawyer.",
        "Trader details visible in the footer and on the contact page.",
        "Bank transfer instructions tested with a real transfer.",
        "Merchant Center feed synced with no unresolved disapprovals.",
        "Sitemap submitted in Google Search Console.",
        "Order confirmation and shipping emails read on a phone.",
        "Marketplace listings updated to mention the new store.",
      ],
      after: [
        `We work through this list with you in the final week of every build.`,
      ],
    },
  ],
  tables: [
    {
      id: "platform-matrix",
      eyebrow: "Decision matrix",
      heading: "Shopify vs WooCommerce vs custom for a NZ online store",
      note: "Use this as a first filter; we confirm the choice in writing after looking at your catalogue.",
      columns: ["Factor", "Shopify", "WooCommerce", "Custom build"],
      rows: [
        ["Starting build price", `From ${P.shop}`, `From ${P.shop}`, `From ${P.software}`],
        ["Hosting and security", "Handled by Shopify", "Your host and your updates", "Your cloud account, managed by a developer"],
        ["Ongoing upkeep", "Low", "Medium: plugin and core updates", "Medium to high"],
        ["Content and blogging", "Good", "Excellent", "Whatever you build"],
        ["Unusual pricing or trade logic", "Apps or Functions, some limits", "Plugins or custom code", "Built exactly to your rules"],
        ["NZ freight and rural rules", "Settings plus shipping apps", "Plugins or custom rules", "Custom logic"],
        ["Best fit", "Most marketplace sellers going direct", "WordPress users with content traffic", "Configurators, trade portals, complex stock"],
      ],
    },
    {
      id: "policy-pages",
      eyebrow: "Consumer law checklist",
      heading: "Store pages and details NZ sellers should have in place",
      note: "Based on Consumer Protection and Commerce Commission guidance. We draft and build; your lawyer approves.",
      columns: ["Page or element", "What it should cover", "Source to read"],
      rows: [
        ["Returns and faults", "CGA rights for faulty or not-as-described goods, separate from change-of-mind policy", "Consumer Protection: Consumer Guarantees Act"],
        ["Delivery information", "Costs, surcharges, taxes, fees and estimated times", "Commerce Commission: selling online"],
        ["Trader details", "Clear that you are in trade, with contact details", "Commerce Commission: selling online"],
        ["Terms of sale", "Easy to find, significant terms not hidden in fine print", "Commerce Commission: selling online"],
        ["Business customer terms", "Any CGA exclusion only when agreed in writing", "Consumer Protection: Consumer Guarantees Act"],
        ["Privacy statement", "What you collect and why, including offshore service providers", "Privacy Commissioner: Privacy Act 2020"],
      ],
      hideSm: [2],
    },
    {
      id: "shopping-feed",
      eyebrow: "Google Shopping",
      heading: "Product feed attributes and how we fill them",
      note: "Attribute names from Google's Merchant Center product data specification.",
      columns: ["Attribute", "Requirement", "How we handle it for NZ stores"],
      rows: [
        ["id, title, description", "Required", "Synced from the store; titles written for real searches"],
        ["link, image_link", "Required", "Product URL and main photo on a clean background"],
        ["price, availability", "Required", "Synced automatically, prices GST-inclusive"],
        ["brand", "Required for new products", "Your brand, or the manufacturer's for resold goods"],
        ["gtin, mpn", "GTIN strongly recommended where it exists", "Supplier barcodes captured; flagged correctly if none"],
        ["condition", "Needed for used or refurbished items", "Set for second-hand or refurbished stock"],
      ],
    },
  ],
  areas: {
    eyebrow: "Online stores across NZ",
    heading: "Where NZ retailers hire us to design their online stores",
    note: "We design stores remotely for sellers anywhere in New Zealand, with no local office; notes describe common retail types in each area.",
    cards: [
      { name: "Auckland", note: "Fashion labels, beauty brands and homewares importers moving from marketplace listings to branded stores that can run their own promotions and collect customer emails." },
      { name: "Wellington", note: "Design-led makers, bookshops and specialty food producers with loyal local buyers who now want to reach customers across the whole country." },
      { name: "Christchurch", note: "Outdoor gear, bike and furniture sellers whose bulky products need careful freight rules for rural Canterbury and the West Coast." },
      { name: "Hamilton", note: "Equestrian, pet and farm-lifestyle retailers serving Waikato customers on rural delivery routes, where surcharges and heavy parcels matter at checkout." },
      { name: "Tauranga", note: "Surf, swimwear and lifestyle brands in the Bay of Plenty that started on Instagram and Facebook Marketplace and are ready for their own checkout." },
      { name: "Rotorua", note: "Gift, skincare and pounamu-inspired design sellers that want product pages telling the story behind each piece, not just a listing title." },
      { name: "Napier", note: "Hawke's Bay food, wine accessory and vintage sellers moving regular Trade Me buyers to a store with bundles and gift cards." },
      { name: "Nelson", note: "Artisans, potters and small-batch food makers selling limited runs where stock status and pre-order messaging must be clear." },
      { name: "Queenstown", note: "Outdoor apparel and souvenir retailers selling to visitors who return home overseas, so international freight zones need thought." },
      { name: "Dunedin", note: "Vintage clothing, records and student-market sellers who have outgrown one-off listings and want a searchable catalogue." },
      { name: "Invercargill", note: "Southland hunting, fishing and farm-supply retailers whose customers are spread across rural addresses and expect honest freight quotes." },
      { name: "Whangārei", note: "Northland plant nurseries, craft sellers and food producers needing freight rules for fragile items and rural deliveries." },
      { name: "New Plymouth", note: "Taranaki retailers of garden, homeware and outdoor goods who want click-and-collect for locals and delivery for everyone else." },
    ],
  },
  process: {
    heading: "How we design and launch your NZ online store",
    steps: [
      ["Show us how you sell now", "Send your Trade Me or Facebook links, product list and how you handle freight and payments today. Rough is fine."],
      ["Platform recommendation and quote", "Within about two working days you get a written platform choice and an itemised USD quote. You approve before anything is billed."],
      ["Design the key templates", "We design the homepage, collection and product templates first, using your real photos, and refine them from your NZ-morning feedback."],
      ["Build checkout, freight and policies", "Payments, rural and island freight rules, GST settings and policy page drafts are built and tested together."],
      ["Import, feed and test orders", "Products are imported, the Google Shopping feed connected, and test orders placed to urban, rural and island addresses."],
      ["Launch and five free months", "We go live on a quiet weekday, watch the first orders with you, then provide five months of free maintenance."],
    ],
  },
  faqHeading: "Ecommerce website design NZ: common questions",
  faqs: [
    { question: "How much does ecommerce website design cost in NZ?", answer: `With BtechWaleTech, a designed Shopify or WooCommerce store starts at ${P.shop} and a custom ecommerce build starts at ${P.software}. The final quote depends on catalogue size, variants, integrations and custom features. You also pay platform, app and payment fees directly to those providers. Other NZ quotes vary widely, so compare itemised scopes.` },
    { question: "Should I leave Trade Me once I have my own online store?", answer: "Not necessarily. Many NZ sellers keep their best sellers listed on Trade Me for reach while building repeat business through their own store. Your website gives you customer emails, your own promotions and no marketplace success fees, while the marketplace keeps bringing new buyers. Review the balance after six months." },
    { question: "Is Shopify or WooCommerce better for a small NZ business?", answer: "Shopify usually suits small NZ retailers who want low upkeep, because hosting, security and checkout are handled for them. WooCommerce suits businesses already running WordPress or publishing lots of content, and those wanting full control of hosting. Custom builds are for unusual pricing or trade rules. We recommend one in writing before you commit." },
    { question: "How long does it take to design an ecommerce website?", answer: "Our designed stores usually take 4–8 weeks. Smaller catalogues with finished photos sit at the shorter end; large catalogues, many variants, integrations or custom templates take longer. Custom ecommerce builds take 6–12 weeks. Late product data and policy approvals are the most common causes of delay." },
    { question: "What does the Consumer Guarantees Act mean for my returns page?", answer: "It means your returns page cannot suggest customers have fewer rights than the CGA gives them for faulty or not-as-described goods. Consumer Protection notes that trying to contract out of the CGA is an offence under the Fair Trading Act. We structure the page accordingly, and your lawyer should approve the final wording." },
    { question: "Do I have to offer change-of-mind returns in NZ?", answer: "Change-of-mind returns are generally a store policy you choose rather than a CGA requirement, but whatever you offer must be described clearly and honestly. We help you write it so it sits separately from faulty-goods rights. For certainty on your situation, check with Consumer Protection's guidance or your own lawyer." },
    { question: "Can my online store accept bank transfer payments?", answer: "Yes. Both Shopify and WooCommerce support manual bank transfer. We add clear payment instructions, a reference format based on the order number, and an order status that holds stock until you confirm payment. Many NZ buyers are comfortable paying straight from internet banking." },
    { question: "Should I offer buy now, pay later on my NZ store?", answer: "Offer it if your buyers ask for it and your margins can absorb the higher fees. It tends to suit fashion, homewares and gifts in the mid price range. We can enable it on selected products only, add instalment messaging where helpful, and make sure its payouts reconcile in your accounts." },
    { question: "How do I charge rural delivery on my online store?", answer: "Create a separate rural zone or rule that recognises rural addresses, using carrier rating tools, a rural postcode list or a checkout question. NZ Post publishes a rural delivery surcharge on parcels to rural addresses, so without a rule you absorb it on every rural order. We test with real rural addresses before launch." },
    { question: "How do I get my products on Google Shopping in NZ?", answer: "Create a Google Merchant Center account, verify your website, and submit a product feed with required attributes such as id, title, description, link, image link, availability and price, plus brand and GTIN where applicable. We set up the feed from your store, fix disapprovals and match shipping settings to your store's freight rules." },
    { question: "Can you move my Trade Me listings to my new store?", answer: "Yes. We turn your listings into proper products with variants, clean up titles and descriptions, and arrange them into collections. Marketplace feedback and ratings stay with the marketplace, so we set up post-purchase review requests on your store to build genuine reviews from real orders." },
    { question: "Do I need a lawyer to approve my online store's policies?", answer: "It is wise. We draft returns, delivery and terms pages around Consumer Protection and Commerce Commission guidance, but we are developers, not lawyers. A short review by your own lawyer is inexpensive insurance, especially if you sell to businesses, take deposits or sell regulated products." },
    { question: "Can you design an ecommerce website for a business that sells to trade customers too?", answer: `Yes. Depending on the platform we use B2B features, wholesale apps or custom logic for trade pricing, account-only catalogues and invoice terms. If trade rules are complex, a custom build from ${P.software} may be simpler long-term. Remember that CGA exclusions for business buyers must be agreed in writing.` },
    { question: "Will my new online store rank on Google?", answer: "A well-designed store gives Google clear signals: descriptive collection pages, unique product text, structured data, fast mobile pages and a sitemap in Search Console. New stores take time to build authority, and nobody can guarantee rankings. Monthly SEO is available if you want ongoing growth work." },
    { question: "Why hire a remote ecommerce designer in India instead of a NZ studio?", answer: "Usually for a lower quote on the same platforms, and for progress that happens overnight while you sleep. You lose in-person meetings and local photography, which we do not offer. If face-to-face workshops matter most, a NZ studio is the better fit; if a clear scope and value matter most, remote works well." },
    { question: "Who owns my online store after it is built?", answer: "You do. The platform account, domain, payment accounts, carrier accounts and Merchant Center are all opened in your business name. Any custom code is delivered to you. Our access is added as a collaborator or separate user that you can remove whenever you like." },
    { question: "How do I pay for my ecommerce website from New Zealand?", answer: "We quote in USD and invoice from India. NZ clients usually pay by Wise or bank wire from an NZD account, split into milestones such as design approval and launch. Nothing is billed before you approve the itemised quote. Ask your accountant how GST treats services bought from overseas." },
    { question: "What ongoing costs does an online store have in NZ?", answer: "Expect a platform subscription or hosting, any paid apps or plugins, payment processing fees, your domain, and optionally maintenance and SEO. After five free months of maintenance, our care plans start from the maintenance starting price. We list every ongoing cost in the handover so nothing surprises you." },
    { question: "Can you add my online store to Facebook and Instagram shops?", answer: "Yes, where the platform supports it. Shopify and WooCommerce both have official channel connections that sync your catalogue to Meta's commerce tools. We connect the catalogue and check products sync correctly; running paid social ads is a separate service we do not provide." },
    { question: "Do you take product photos for my online store?", answer: "No. We design and build the store and can tell you exactly what sizes, angles and backgrounds work best, but photography is done by you or a local photographer. Many sellers shoot on a phone against a plain wall with good daylight, which works well if done consistently." },
    { question: "What should I send to get an ecommerce website quote?", answer: "Send your marketplace or social links, a rough product count, how you ship now, which payment methods buyers ask for, whether you use Xero, and a target launch date. Three stores you admire help too. We reply within about two working days with questions or an itemised quote." },
  ],
  related: {
    heading: "Related New Zealand pages",
    links: [
      { name: "Shopify developer NZ", href: "/new-zealand/shopify-developer/" },
      { name: "WordPress developer NZ", href: "/new-zealand/wordpress-developer/" },
      { name: "App developers NZ", href: "/new-zealand/app-developers/" },
      { name: "SEO services NZ", href: "/new-zealand/seo-services/" },
      { name: "Website cost in NZ", href: "/new-zealand/website-design-cost/" },
      { name: "Affordable web design NZ", href: "/new-zealand/affordable-web-design/" },
      { name: "Xero integration developer", href: "/new-zealand/xero-integration-developer/" },
      { name: "AI automation for NZ businesses", href: "/new-zealand/ai-automation-agency/" },
      { name: "Winery website design", href: "/new-zealand/winery-website-design/" },
      { name: "Web design Auckland", href: "/new-zealand/web-developer-for-auckland-businesses/" },
      { name: "New Zealand hub", href: "/new-zealand/" },
      { name: "Offshore web development team", href: "/offshore-web-development-team/" },
      { name: "Pricing", href: "/pricing/" },
    ],
  },
  cta: {
    heading: "Send your marketplace links and get a platform recommendation",
    note: "Share your Trade Me or Facebook shop and a rough product count on WhatsApp. Within about two working days you get a written platform recommendation and an itemised USD quote, with nothing billed before you approve it.",
  },
};

export default content;
