import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const content: FreelanceContent = {
  path: "/netherlands/online-ordering-system-for-restaurants/",
  crumb: "Online ordering system for restaurants",
  updated: "2026-09-25",
  meta: {
    title: `Online Ordering System for Restaurants from ${P.shop}`,
    description: `Online ordering system for restaurants in the Netherlands: iDEAL checkout, postcode delivery zones, kitchen printing, no per-order commission. From ${P.shop}.`,
    keywords: [
      "online ordering system for restaurants", "online ordering system for restaurants netherlands", "restaurant online ordering system nl",
      "own ordering website for takeaway", "commission free online ordering restaurant", "alternative to thuisbezorgd commission",
      "restaurant ordering website with ideal", "takeaway ordering system postcode delivery zones", "online bestelsysteem restaurant",
      "bestelsysteem afhaal en bezorging", "eigen bestelwebsite restaurant", "restaurant ordering app netherlands",
      "kitchen printer online orders", "online ordering pos integration", "whatsapp reorder restaurant", "restaurant loyalty program online ordering",
      "allergen information online menu", "how much does an online ordering system cost", "is my own ordering site worth it",
      "online ordering system for restaurants amsterdam", "online ordering system for restaurants rotterdam", "online ordering system for restaurants utrecht",
      "online ordering system for restaurants eindhoven", "pizza ordering website netherlands", "snackbar online bestellen systeem",
      "restaurant ordering system developer india",
    ],
  },
  hero: {
    eyebrow: "Direct ordering for Dutch restaurants and takeaways",
    h1: "An online ordering system for restaurants that keeps the margin in your kitchen",
    lede: `An online ordering system for restaurants lets your regulars order pickup or delivery from your own website or app, pay by iDEAL, and land straight on the kitchen printer, without a marketplace taking a cut of every basket. BtechWaleTech is three freelance developers in India who build these for Dutch takeaways, pizzerias, sushi bars and dark kitchens: postcode delivery zones, allergen labels, <a href='/netherlands/ideal-payment-integration/'>iDEAL at checkout</a>, and WhatsApp reorders. Builds start from ${P.shop}.`,
    pills: ["Pickup and delivery", "iDEAL checkout", "Postcode delivery zones", "Kitchen printer or tablet", "Allergen labels per dish", "WhatsApp reorder", "No per-order commission to us"],
    origin: "Three freelance developers in India · WhatsApp replies 7 days a week · you own the site and the customer list",
  },
  facts: [
    ["Ordering site from", `${P.shop}, live in 4–8 weeks`],
    ["Ordering app (Android + iOS)", `From ${P.app}, 6–10 weeks`],
    ["Our cut of each order", "None: you pay the build, not a percentage"],
    ["Payments", "iDEAL and cards, paid out to your own account"],
    ["Menu languages", "Dutch and English; you approve the Dutch text"],
    ["After launch", `5 months free care, then from ${P.care}`],
  ],
  stats: [
    { value: "3", label: "Freelance developers on your build" },
    { value: "0", label: "Commission we take on your orders" },
    { value: "5", label: "Months of free maintenance after go-live" },
    { value: "7", label: "Days a week we answer on WhatsApp" },
  ],
  answer: {
    heading: "How does a Dutch restaurant cut delivery-app commission with its own online ordering system?",
    text: `Keep the marketplace for new customers, but move your regulars to an online ordering system for restaurants that you own: your own site or app, iDEAL checkout, postcode delivery zones and kitchen printing. You pay a one-off build instead of a percentage per order. With BtechWaleTech, ordering sites start from ${P.shop} and apps from ${P.app}.`,
    more: `Want the payment side explained in depth? Read our guide to <a href='/netherlands/ideal-payment-integration/'>iDEAL payment integration</a>, or compare costs on the <a href='/netherlands/webshop-cost/'>Dutch webshop cost</a> page.`,
  },
  snapshot: {
    caption: "Your own ordering channel at a glance",
    rows: [
      { label: "Best suited to", value: "Takeaways, pizzerias, sushi, snackbars, dark kitchens with loyal local customers" },
      { label: "Ordering website", value: `From ${P.shop}, 4–8 weeks` },
      { label: "Branded Android and iOS app", value: `From ${P.app}, 6–10 weeks` },
      { label: "Checkout", value: "iDEAL plus cards, paid to your own merchant account" },
      { label: "Delivery rules", value: "Postcode ranges, minimum basket, delivery fee and time slots per zone" },
      { label: "Kitchen side", value: "Network receipt printer, tablet screen or POS hand-off" },
      { label: "Ownership", value: "Domain, code, customer data and payment account in your name" },
    ],
  },
  services: {
    eyebrow: "What we build for restaurants",
    heading: "Pieces of a direct online ordering setup for restaurants in the Netherlands",
    note: "Most kitchens start with the ordering website and printer link, then add the app or loyalty later once direct orders are growing.",
    cards: [
      { name: "Ordering website with live menu", note: `Categories, options such as extra cheese or spice level, sold-out toggles, opening hours and pre-ordering for later slots, from ${P.shop}.`, href: "/netherlands/webshop-cost/", size: "lg" },
      { name: "Branded ordering app", note: `Flutter app for Android and iOS with saved addresses, one-tap reorder and push messages, published under your own store accounts, from ${P.app}.`, href: "/netherlands/app-development-company/", size: "lg" },
      { name: "iDEAL and card checkout", note: "Payment through a Dutch-supported provider you sign up with, webhooks that mark orders paid, and refunds for missing items.", href: "/netherlands/ideal-payment-integration/", size: "md" },
      { name: "Kitchen and POS hand-off", note: "Orders print on a network receipt printer or show on a kitchen tablet; where your POS has an open API we push orders into it.", size: "md" },
      { name: "WhatsApp order updates and reorder", note: "Opt-in confirmations, ‘driver on the way’ messages and a reorder link sent through the WhatsApp Business Platform.", href: "/netherlands/whatsapp-chatbot-for-business/", size: "md" },
      { name: "Loyalty and vouchers", note: "Points per order, a free item after a set number of orders, or voucher codes for quiet weekday evenings.", size: "sm" },
      { name: "Local SEO for the ordering site", note: `Menu pages, opening hours, schema and Google Business Profile links, from ${P.seo} a month. Nobody can promise positions.`, href: "/netherlands/technical-seo-services/", size: "sm" },
      { name: "Care after launch", note: `Menu changes, payment updates and hosting checks; five months free, then from ${P.care}.`, size: "sm" },
    ],
  },
  comparison: {
    heading: "Three ways to take orders online in the Netherlands",
    note: "These options are not either-or. Many takeaways keep a marketplace listing for discovery and send repeat customers to a direct channel.",
    columns: ["What matters to the owner", "Delivery marketplace only", "Monthly ordering software", "Own system built by BtechWaleTech"],
    rows: [
      ["How you pay for it", "A percentage of every order, per your contract", "A monthly subscription, sometimes plus fees", `One-off build from ${P.shop}, then care from ${P.care}`],
      ["Who owns the customer list", "Mostly the marketplace", "Depends on the vendor's terms", "You: the database sits in your hosting account"],
      ["New customer discovery", "Strong: people browse the app", "Weak unless you market it", "Weak at first; grows with local SEO and flyers"],
      ["Design and brand", "Marketplace look, your logo", "Template with your colours", "Designed around your menu and brand"],
      ["Delivery drivers", "Available in many cities", "You deliver yourself", "You deliver yourself or offer pickup only"],
      ["Custom rules (zones, slots, combos)", "Limited to platform options", "Whatever the settings allow", "Built to your rules, changed on request"],
      ["Leaving later", "Lose the listing and its reviews", "Export options vary", "Nothing to leave: code and data are yours"],
      ["Support hours", "Platform support desk", "Vendor support desk", "WhatsApp to the three developers, 7 days a week"],
    ],
    fine: "If you have no loyal customer base yet and no one to deliver, a marketplace listing will likely bring more orders in year one than any own system can.",
  },
  pricing: {
    heading: "What a restaurant ordering system costs with us",
    note: `Every figure is a starting price in USD, quoted in writing before any work begins. An ordering website with menu, options, iDEAL and card checkout, postcode zones, opening-hour logic and a printer or tablet link starts from ${P.shop}. A branded Android and iOS app on top starts from ${P.app}; a larger multi-branch system with a central menu, per-branch stock and a management dashboard is custom software from ${P.software}. Payment provider fees, hosting, printer hardware and app store accounts are paid by you, directly to those providers. After launch you get five months of free maintenance; care plans then start from ${P.care}.`,
  },
  guideLabel: "Restaurant ordering guide",
  guide: [
    {
      id: "what-it-is",
      heading: "What is an online ordering system for restaurants, and does a Dutch takeaway need one?",
      paragraphs: [
        `An online ordering system for restaurants is the menu, basket, checkout and kitchen link that lets guests order food from you directly, on your own domain or in your own app. For a Dutch takeaway that already gets steady repeat business, it is usually worth having, because each repeat order placed there carries no marketplace percentage.`,
        `The idea is simple, but the pieces matter. A guest opens your site, picks a pizza with extra toppings, enters a postcode, sees whether you deliver there and at what fee, pays with iDEAL, and gets a confirmation. Seconds later a ticket prints in the kitchen. That chain has to work every Friday at 18:30 when half your street is hungry at once.`,
        `Who benefits most? Restaurants where a large share of orders come from the same neighbourhoods week after week: pizzerias, snackbars, Surinamese and Turkish takeaways, sushi counters, poké bars and dark kitchens running two or three menu brands from one kitchen. If you mostly serve tourists who will never return, the maths is weaker.`,
      ],
      list: [
        "<strong>You need it</strong> when repeat customers already ask for your number or come back through a delivery app every week.",
        "<strong>You can wait</strong> when you do fewer than a handful of delivery orders a day and have no one to drive.",
        "<strong>You need something bigger</strong> when you run several branches with separate menus, stock and staff screens; that is a custom build.",
      ],
      after: [
        `If you are unsure where you sit, send us an export of last month's platform orders and we will talk it through before quoting. For the wider picture of shop builds in the Netherlands, the <a href='/netherlands/webshop-cost/'>webshop cost guide</a> is a good companion.`,
      ],
    },
    {
      id: "commission-maths",
      heading: "When does your own online ordering system for restaurants pay for itself?",
      paragraphs: [
        `It pays for itself once the commission you no longer pay on moved orders is larger than the build and running costs. You can work that out from your own platform invoices in ten minutes, without trusting anyone's marketing numbers, including ours.`,
        `Take the commission percentage from your contract or monthly statement, not from an article. Multiply it by your average basket to get the commission on one typical order. Subtract what your own payment provider will charge per iDEAL transaction. What is left is your saving per order you move to your own channel. Divide the one-off build price by that saving and you have the number of moved orders needed to break even. Add hosting and, after the free months, the care plan to the monthly side.`,
      ],
      list: [
        "Commission per typical order = your contract percentage × your average basket.",
        "Saving per moved order = commission per order − your own payment fee per order.",
        `Break-even orders = build price (from ${P.shop}) ÷ saving per moved order.`,
        `Monthly running cost = hosting + payment account fees + care plan (from ${P.care} after five free months).`,
      ],
      after: [
        `Two honest caveats. First, not every marketplace order will move: guests who found you by browsing the app may keep ordering there, and that is fine. Second, if the platform also supplies the driver, your own channel needs your own driver or a pickup-only offer, and driver costs belong in the sum. We would rather you run these numbers before paying us than discover afterwards that the saving was never there.`,
      ],
    },
    {
      id: "hybrid",
      heading: "Should you leave Thuisbezorgd or Uber Eats completely?",
      paragraphs: [
        `Usually not. For most Dutch takeaways the sensible model is hybrid, with an online ordering system for restaurants running next to the apps: stay listed on the marketplaces for discovery, and give every guest a reason to order directly next time. Thuisbezorgd and Uber Eats are strong at putting you in front of people who have never heard of you; your own channel is stronger at keeping the ones who liked your food.`,
        `How do you move people across without breaking platform rules? Read your marketplace contract first, because some agreements limit what you may put inside the delivery bag or in messages to platform customers. Within those limits, common tactics are a menu card with a QR code for guests who come to the counter, a sticker on pickup bags, the ordering link on your Google Business Profile, and a small first-order perk for ordering direct.`,
        `Some owners also set slightly different prices per channel to reflect the different cost of each. Whether that is allowed depends on your agreement with each platform, so check it with them or a lawyer; we build whatever pricing you decide on, but we do not advise on contract terms.`,
      ],
      subs: [
        { heading: "Keep on the marketplace", text: "New-customer discovery, areas you cannot reach with your own drivers, late-night hours when you have no staff to deliver." },
        { heading: "Move to your own channel", text: "Regulars, office lunch orders, large family orders, pickup customers and anyone who already follows you on Instagram or WhatsApp." },
      ],
    },
    {
      id: "features",
      heading: "What should an online ordering system for restaurants include?",
      paragraphs: [
        `At minimum, an online ordering system for restaurants needs a fast menu with options, a basket that recalculates correctly, a checkout with iDEAL, clear delivery or pickup rules, allergen information, confirmation messages and a reliable kitchen notification. Everything else is optional and should be added only when it earns its place.`,
        `Menu options deserve more thought than owners expect. A pizza has a size, a base, removable toppings and paid extras. A poké bowl has a base, a protein, up to four toppings and a sauce. A menu deal combines a burger, a side and a drink with swaps allowed. We model these as option groups with minimums and maximums, so a guest cannot check out a bowl with no protein or a deal with two drinks.`,
      ],
      list: [
        "Opening hours per day, holiday closures and a ‘kitchen busy, orders paused’ switch for the manager.",
        "Pre-ordering for a later time slot, with a cap on orders per quarter hour so the kitchen is not flooded.",
        "Sold-out toggles per item that staff can flip from a phone.",
        "Pickup and delivery with separate minimums and fees.",
        "Tip option for drivers, shown after the basket total.",
        "Order history and one-tap reorder for logged-in guests; guest checkout for everyone else.",
        "A simple dashboard: today's orders, refunds, top dishes, new versus returning guests.",
      ],
      after: [
        `What we deliberately leave out of a first version: table-side QR ordering, kiosk screens and complex marketing automation. Those are useful for some restaurants and can be added later, but they slow down launch and rarely drive the first month's direct orders.`,
      ],
    },
    {
      id: "ideal-checkout",
      heading: "How does iDEAL checkout work in a restaurant ordering system?",
      paragraphs: [
        `In an online ordering system for restaurants, iDEAL sends the guest from your checkout to their own banking app to approve the payment, then back to your order confirmation. For Dutch guests it is the familiar way to pay online, so an ordering site without it loses orders at the last step.`,
        `Behind the scenes, you open a merchant account with a payment provider that supports iDEAL and cards, in your restaurant's name. We connect your ordering system to that provider. The important part is the webhook: a message from the provider to your server confirming the payment status. An order should only print in the kitchen once that confirmation arrives, never just because the guest came back to the thank-you page. Otherwise you will one day cook for someone who closed the banking app without paying.`,
        `We also build the unhappy paths. A payment that stays open is cancelled after a set time and the basket is kept so the guest can try again. A missing item can be refunded in part from the dashboard. Cash on delivery or pin at the door can be offered as an extra option if your drivers carry a card terminal.`,
      ],
      after: [
        `Payment money goes from the provider to your bank account on the provider's own schedule; it never passes through us. For the full technical story, including recurring payments and in-app rules, see the <a href='/netherlands/ideal-payment-integration/'>iDEAL integration page</a>.`,
      ],
    },
    {
      id: "delivery-zones",
      heading: "How do postcode-based delivery zones work?",
      paragraphs: [
        `In an online ordering system for restaurants, a delivery zone is a set of postcodes with its own minimum order, delivery fee and estimated delivery time. Dutch postcodes are four digits plus two letters, which makes them precise enough to draw zones street by street when you need to.`,
        `Most takeaways start with ranges of four-digit areas: the digits around the restaurant as zone one, the next ring as zone two with a higher minimum and fee, and everything else refused politely with a pickup suggestion. When a canal, ring road or railway makes a nearby area slow to reach, you can exclude single six-character postcodes inside an allowed range. The checkout checks the postcode before payment, so nobody pays for an order you cannot bring.`,
        `A map radius sounds simpler, but in Dutch cities a straight-line distance often ignores bridges, one-way streets and pedestrian zones. Postcode lists match how your drivers actually think about the city, and staff can edit them in the dashboard without calling us.`,
      ],
      list: [
        "Zone name, postcode ranges and single-postcode exceptions.",
        "Minimum basket, delivery fee and free-delivery threshold per zone.",
        "Estimated time per zone, raised automatically when the kitchen is busy.",
        "Delivery hours per zone, for example the outer ring only until 21:00.",
      ],
    },
    {
      id: "kitchen",
      heading: "Kitchen printers, tablets and POS: where do the orders go?",
      paragraphs: [
        `Whatever online ordering system for restaurants you choose, orders should arrive where the cooks already look, in a format they can read in two seconds. For most small kitchens that is a network receipt printer; for others a tablet screen with bump buttons; for restaurants with a cash register system, a direct push into the POS.`,
        `A network printer on the kitchen Wi-Fi or cable receives each paid order and prints a ticket: order number, pickup or delivery, requested time, items grouped by station, options in capitals, allergen remarks at the top. A second copy can print at the counter for the driver. If the printer is offline, the dashboard shows an alarm and the order stays visible on screen, so nothing silently disappears.`,
        `POS hand-off depends entirely on your POS vendor. Some offer an open API or an import format, in which case we send orders straight into the register with the right product codes. Others keep their systems closed; then the practical route is the printer or tablet, and staff ring up the order once. We check your POS documentation before quoting and tell you plainly which of these routes is realistic.`,
      ],
      subs: [
        { heading: "Printer", text: "Cheapest and fastest for one kitchen. Needs a supported network model and a stable connection." },
        { heading: "Tablet screen", text: "Good for kitchens with several stations; shows timers and lets staff mark orders ready." },
        { heading: "POS integration", text: "Best for reporting and stock, possible only where the POS vendor allows it." },
      ],
    },
    {
      id: "allergens",
      heading: "Allergen information on your online menu: what does the NVWA expect?",
      paragraphs: [
        `Guests must be able to find allergen information for your dishes before they order. The Dutch food safety authority <a href='https://www.nvwa.nl/onderwerpen/voedselveiligheid/allergenen/allergenen-bij-onverpakte-levensmiddelen' rel='noopener'>NVWA says on its allergen guidance page</a> that a webshop must state which allergens its products contain, or give a telephone number where customers can ask.`,
        `The NVWA lists 14 allergens that businesses must always inform customers about: cereals containing gluten, crustaceans, eggs, fish, peanuts, soy, milk including lactose, tree nuts, celery, mustard, sesame, sulphur dioxide and sulphites, lupin and molluscs. For gluten and nuts, the NVWA asks you to name the specific cereal or nut rather than a general warning.`,
        `In the online ordering system for restaurants we build, allergens are stored per dish and per option, because a topping can add an allergen the base dish does not have. The dish page shows icons with text labels, the basket repeats them, and the kitchen ticket prints any remark a guest types, such as “no sesame, allergy”. We can also add a visible line with your phone number for allergen questions.`,
      ],
      after: [
        `What we do not do: decide which allergens your recipes contain. You or your chef supply the allergen list; we make sure the system displays it correctly everywhere. For formal questions about your obligations, speak with the NVWA or a food-law adviser.`,
      ],
    },
    {
      id: "whatsapp-loyalty",
      heading: "Loyalty and reorder via WhatsApp: how does it work without spamming guests?",
      paragraphs: [
        `Guests opt in at checkout to receive order updates on WhatsApp, and optionally occasional offers. From then on your system can confirm the order, say when the driver leaves, and later send a reorder link for their usual meal. Without that opt-in, no marketing messages go out.`,
        `Order updates travel through the WhatsApp Business Platform using message templates that Meta reviews before use. Promotional messages need their own permission and should be rare; a message every Friday at dinnertime will get you blocked quickly. A loyalty rule works well alongside: every tenth order earns a free side, and the WhatsApp message tells the guest when they are one order away.`,
        `We also build the simplest version for owners who are not ready for the platform: a “share my order on WhatsApp” button and a click-to-chat link to your business number. It costs almost nothing extra and still keeps the conversation with you instead of a marketplace inbox.`,
      ],
      list: [
        "Checkout checkbox for order updates, separate checkbox for offers.",
        "Templates for confirmation, driver on the way, and delayed order.",
        "Reorder link that refills the basket with the guest's last order.",
        "Easy stop: a reply of ‘stop’ removes the guest from offers.",
      ],
      after: [
        `More detail on bots and templates lives on the <a href='/netherlands/whatsapp-chatbot-for-business/'>WhatsApp chatbot page for Dutch businesses</a>.`,
      ],
    },
    {
      id: "site-or-app",
      heading: "Ordering website, web app or native app: which should a restaurant build first?",
      paragraphs: [
        `Build the website version of your online ordering system for restaurants first. Every guest can open a link without installing anything, Google can index it, and it is the cheaper of the two. Add a native app once you have enough regulars who would use it weekly.`,
        `A mobile-first ordering site can behave much like an app: it remembers the address, offers reorder, and can be added to the home screen. What it cannot do as well is send reliable push messages on every phone, show in the App Store and Google Play, or feel as smooth as a native app on older devices.`,
        `A branded app built in Flutter for Android and iOS makes sense for restaurants with a strong following, multiple branches or a loyalty scheme that people check often. It is published under your own Google Play and Apple developer accounts: Google Play charges a one-time US$25 registration fee and the Apple Developer Program costs US$99 a year, both paid by you.`,
      ],
      subs: [
        { heading: "Choose the website alone when", text: "You have one location, most guests order a few times a month and you want the lowest cost to start." },
        { heading: "Add the app when", text: "A large group of regulars orders weekly, you run loyalty points, or you operate several branches under one brand." },
      ],
      after: [
        `Thinking about an app? The <a href='/netherlands/app-development-company/'>app development page for the Netherlands</a> compares cross-platform and native builds in more depth.`,
      ],
    },
    {
      id: "cost",
      heading: "How much does an online ordering system for restaurants cost?",
      paragraphs: [
        `With BtechWaleTech an online ordering system for restaurants starts from ${P.shop} for the website version, from ${P.app} for Android and iOS apps, and from ${P.software} for multi-branch custom software. Care after the five free months starts from ${P.care}. All are starting prices; your written quote lists each part.`,
        `What moves the price up or down? The number of menu option rules, how many branches share or split the menu, whether we integrate with a POS or just print, loyalty logic, and how many languages the menu needs. A single pizzeria with 60 dishes and a printer sits at the lower end. A group with three brands from one kitchen, separate menus per brand and a central stock view sits much higher.`,
        `Costs that are not ours: the payment provider's transaction fees, hosting, your domain, a receipt printer, app store accounts and any WhatsApp Business Platform conversation charges from Meta. You pay those providers directly, so you can see and control them. Quotes from other developers and SaaS vendors vary widely because they bundle these differently; ask each one which running costs are included before comparing.`,
      ],
      after: [
        `For a line-by-line view of Dutch shop budgets, read <a href='/netherlands/webshop-cost/'>what a webshop costs in the Netherlands</a>; the pricing table below this guide lists all our starting prices.`,
      ],
    },
    {
      id: "timeline",
      heading: "How long does it take to launch a restaurant ordering system?",
      paragraphs: [
        `An online ordering system for restaurants in website form usually goes live in four to eight weeks from written approval; a native app takes six to ten weeks. The slowest step is rarely the code. It is collecting a clean menu with prices, options, photos and allergens.`,
        `Week one is menu and rules: you send your current menu, we turn it into a spreadsheet with option groups and allergen columns, and you correct it. Weeks two to four cover design, the menu front end, basket and checkout. Weeks four to six bring the payment connection, delivery zones, the printer link and the dashboard. The last stretch is testing in your real kitchen: we place test orders during a quiet afternoon while you check tickets, and then a soft launch to a few regulars before you announce it.`,
      ],
      list: [
        "Before we start: merchant account application with your payment provider (their approval time varies).",
        "Week 1: menu spreadsheet, option groups, allergens, zones.",
        "Weeks 2–4: design, menu pages, basket, checkout.",
        "Weeks 4–6: payments, printer or POS, dashboard, WhatsApp templates.",
        "Final week: kitchen test orders, soft launch, fixes, public launch.",
      ],
      after: [
        `Tip from our side: apply for the payment account on day one. Everything else can run in parallel, but a live checkout cannot.`,
      ],
    },
    {
      id: "google",
      heading: "How will guests find your ordering site on Google and in AI answers?",
      paragraphs: [
        `An online ordering system for restaurants only earns direct orders if guests can find it. They arrive mostly through searches for your name and “pizza bezorgen” style queries near them, so the ordering site needs strong local basics: a Google Business Profile that links to it, crawlable menu pages, correct opening hours and restaurant structured data. Nobody can promise rankings, but these basics are what search engines and AI assistants read.`,
        `We build the menu as real HTML pages rather than a picture or a PDF, so each dish with its description and price is readable by Google and by AI search tools that summarise local options. Restaurant schema marks up your address, cuisine, hours and the ordering URL. The site is tuned for Core Web Vitals on mid-range phones, because most orders happen on a phone, often on mobile data.`,
        `Then the ordering link goes everywhere guests already are: the Google Business Profile, your Instagram bio, the menu card QR code and the WhatsApp business profile. Reviews stay on Google, where you control the replies, instead of inside a marketplace app.`,
      ],
      after: [
        `If you want ongoing help, local SEO starts from ${P.seo} a month; the <a href='/netherlands/technical-seo-services/'>technical SEO page</a> explains what that covers for Dutch sites.`,
      ],
    },
    {
      id: "working-from-nl",
      heading: "What is it like to work with an Indian team from the Netherlands?",
      paragraphs: [
        `Practical and quick, if you like WhatsApp. India is three and a half hours ahead of the Netherlands in summer and four and a half in winter, so our afternoon is your morning and we overlap with most of your working day from late morning. Restaurant owners tend to reply between lunch and dinner service; that window suits us well.`,
        `Here is how it runs. You message us on WhatsApp with your menu and a few photos of your current setup. Within about two working days you get an itemised quote in USD. Nothing is billed before you approve it in writing. You pay in milestones by Wise, bank wire or PayPal, and invoices come from India. We hold short video calls in English when a decision needs a screen; most day-to-day questions are settled in chat.`,
      ],
      list: [
        "Days 1–2: menu review, questions about zones, payments and printer, written quote.",
        "Days 3–5: after approval, menu spreadsheet and design direction shared for your comments.",
        "Days 6–10: first clickable menu and basket on a test link you can open on your phone.",
        "Days 11–14: payment provider in test mode, first test ticket printed in your kitchen.",
      ],
      after: [
        `What we cannot do: visit your restaurant, install hardware or train staff in person. We guide the printer setup over video, and the three of us (Ankur on the build, Santosh on hosting and search, Vedansh on planning and automation) stay reachable seven days a week. More on our remote model: <a href='/hire-indian-developers/'>hiring developers in India</a>.`,
      ],
    },
    {
      id: "ownership",
      heading: "Who owns the ordering system, the menu data and the customer list?",
      paragraphs: [
        `You do. With an online ordering system for restaurants built by us, the domain, hosting account, source code, payment merchant account, app store listings and the customer database are all registered in your restaurant's name, and we work inside them with access you grant and can revoke.`,
        `That matters more for ordering than for most websites, because the customer list is the whole point. Names, addresses, order history and WhatsApp opt-ins belong to you and sit in a database you control. If you ever switch developers, you hand the new team the repository and hosting access; there is no export request to beg for.`,
        `Because you hold personal data, the AVG (the Dutch name for the GDPR) applies to you as the controller. We help the build support your obligations: only the fields you actually need at checkout, a privacy page you provide, a cookie banner that keeps non-essential cookies off until consent, encrypted connections, staff accounts with limited rights, and a way to delete a guest's data on request. Your own adviser should sign off the privacy wording; we do not give legal advice.`,
      ],
      after: [
        `For a deeper look at privacy-by-design builds, see <a href='/netherlands/gdpr-compliant-website-development/'>GDPR-compliant website development</a>.`,
      ],
    },
    {
      id: "red-flags",
      heading: "Red flags when choosing an online ordering system for restaurants",
      paragraphs: [
        `Walk away, or at least ask hard questions, when a provider will not tell you where your customer data lives, charges a hidden percentage on top of its subscription, or keeps the domain in its own name. Any of those can trap you later.`,
        `Other warning signs are quieter. A demo that only shows a simple menu with no options usually means the system struggles with real pizza or bowl logic. An order that prints before the payment is confirmed is a bug waiting for a busy Friday. A checkout that asks for an account before showing the delivery fee loses guests. And if nobody can explain what happens when the printer goes offline, assume the answer is “the order is lost”.`,
      ],
      list: [
        "Domain, merchant account or app listing held in the provider's name.",
        "No export of customers and order history in a standard format.",
        "Orders sent to the kitchen before the payment webhook confirms payment.",
        "No allergen fields per option, only per dish.",
        "Delivery fee hidden until the last step.",
        "Support only by ticket, with no one reachable during dinner service.",
      ],
      after: [
        `Ask us the same questions. The answers should be short: your name on every account, full exports, payment-first printing, allergens per option, fees shown at the postcode step, and WhatsApp replies seven days a week.`,
      ],
    },
    {
      id: "example",
      heading: "Worked example: a hypothetical pizzeria in Utrecht moves its regulars",
      paragraphs: [
        `Here is an illustrative scenario, not a client story. Say a pizzeria near the Utrecht city centre gets most of its delivery orders through a marketplace, and the owner notices the same names and streets every week. She wants her own online ordering system for restaurants without dropping the marketplace.`,
        `Her brief: pizza sizes and extras, pickup and delivery, three delivery zones by postcode, iDEAL and card payments, tickets on the existing kitchen printer, a loyalty stamp after every tenth direct order, and WhatsApp messages when the driver leaves. No app for now.`,
        `We would quote the ordering website from ${P.shop}, with the loyalty rule and WhatsApp templates listed as separate lines. Week one goes on her menu spreadsheet: 48 dishes, 7 option groups, allergens per topping. By week five she tests orders from her own phone while the printer runs in the kitchen. At launch, every marketplace customer who comes for pickup gets a menu card with a QR code and a first-order perk for ordering direct.`,
        `After three months she compares her platform statements with the dashboard to see how many regulars have moved. If the number is low, the fix is usually marketing at the counter, not more software. If it is high, the next step might be a branded app from ${P.app}.`,
      ],
    },
    {
      id: "checklist",
      heading: "Checklist before you order an online ordering system for restaurants",
      paragraphs: [
        `Gather these before you ask anyone to quote an online ordering system for restaurants, and you will get a sharper price and a faster launch. Most can be done from your phone in an evening.`,
      ],
      list: [
        "Current menu with prices, sizes, extras and deals, as a document or photos.",
        "Allergen list per dish and per extra, confirmed by your kitchen.",
        "Delivery area as postcodes, with minimums and fees you want per zone.",
        "Opening hours, holiday closures and busiest time slots.",
        "Kitchen printer or POS brand and model, with a photo of its label.",
        "Your domain name (or the one you want) and who currently controls it.",
        "Whether you will deliver yourself, use a courier service or offer pickup only.",
        "Last three months of platform statements, to run the commission sums.",
        "Logo, brand colours and a few good food photos.",
      ],
      after: [
        `Send what you have on WhatsApp through our <a href='/contact/'>contact page</a>; missing items can follow later.`,
      ],
    },
  ],
  tables: [
    {
      id: "cost-by-scope",
      eyebrow: "Budget",
      heading: "Online ordering system for restaurants: cost by scope",
      note: `Starting prices in USD. Your written quote itemises each part. See all plans on the <a href='/pricing/'>pricing page</a>.`,
      columns: ["Scope", "Typical restaurant", "What is included", "Starts from", "Timeline"],
      rows: [
        ["Ordering website", "One takeaway or pizzeria", "Menu with options, basket, iDEAL and cards, zones, printer link, dashboard", P.shop, "4–8 weeks"],
        ["Ordering website plus loyalty and WhatsApp", "Busy takeaway with many regulars", "The above plus stamps or points and opt-in WhatsApp updates", P.shop, "5–8 weeks"],
        ["Branded app", "Restaurant with a strong following", "Flutter app for Android and iOS, reorder, push messages, store listings", P.app, "6–10 weeks"],
        ["Multi-branch or multi-brand system", "Dark kitchen or small chain", "Central menu, per-branch stock, staff roles, reports", P.software, "6–12 weeks"],
        ["Automation add-on", "Owner drowning in messages", "AI replies to common WhatsApp questions, order summaries to the owner", P.ai, "2–4 weeks"],
        ["Care plan", "Any of the above after launch", "Menu updates, payment and hosting checks, fixes", P.care, "Monthly, after 5 free months"],
      ],
      hideSm: [2],
    },
    {
      id: "channel-features",
      eyebrow: "Comparison",
      heading: "Marketplace listing versus your own ordering channel, feature by feature",
      note: "Use this to decide which orders belong where, not to pick one channel forever.",
      columns: ["Feature", "Marketplace listing", "Own ordering channel"],
      rows: [
        ["Found by people who don't know you", "Yes, inside the app", "Only through Google, social media and word of mouth"],
        ["Guest contact details", "Limited, per platform terms", "Full, with consent, in your database"],
        ["Menu option logic", "Platform's option model", "Built to your menu"],
        ["Payment methods", "Platform's checkout", "iDEAL and cards through your own merchant account"],
        ["Delivery zones", "Platform settings", "Postcode ranges and exceptions you edit"],
        ["Loyalty and reorder", "Platform programmes", "Your own stamps, points and WhatsApp reorder"],
        ["Cost model", "Percentage per order per your contract", "One-off build plus running costs"],
      ],
    },
    {
      id: "launch-checklist",
      eyebrow: "Go-live",
      heading: "Kitchen-ready launch checklist",
      note: "We run through this with you on a video call before the public launch.",
      columns: ["Check", "Who", "How we test it"],
      rows: [
        ["Payment confirmed before ticket prints", "BtechWaleTech", "Test order abandoned in the banking app must not print"],
        ["Postcode outside zones refused", "BtechWaleTech", "Try three postcodes just outside each zone"],
        ["Allergens shown per dish and option", "You and your chef", "Spot-check ten dishes against the kitchen list"],
        ["Printer offline alarm", "Both", "Unplug the printer, place an order, confirm the dashboard alert"],
        ["Refund of a missing item", "You", "Partial refund on a test order from the dashboard"],
        ["Opening hours and pause switch", "You", "Pause orders from a phone; confirm the site shows it"],
        ["WhatsApp opt-in and stop", "BtechWaleTech", "Opt in, receive the update, reply stop, confirm removal"],
      ],
    },
  ],
  areas: {
    eyebrow: "Across the Netherlands",
    heading: "Dutch cities where direct restaurant ordering makes sense",
    note: "We work remotely for restaurants anywhere in the country. These notes describe typical local demand, not clients.",
    cards: [
      { name: "Amsterdam", note: "Dense neighbourhoods and many expat households ordering in English make a bilingual menu and tight postcode zones worthwhile for takeaways in areas like De Pijp or Oost." },
      { name: "Rotterdam", note: "A large mix of cuisines and many independent takeaways; bridges across the Maas make postcode zones more realistic than a simple radius for delivery." },
      { name: "The Hague", note: "Government offices and international organisations create weekday lunch orders, while residential districts drive evening delivery for pizzerias and Surinamese kitchens." },
      { name: "Utrecht", note: "Students and young families order often; a pickup-first ordering site suits compact city-centre kitchens where parking for drivers is hard." },
      { name: "Eindhoven", note: "Tech employers around the city bring office lunch orders and international staff, so English menus and pre-order time slots help." },
      { name: "Groningen", note: "A large student population orders late and on budget; clear minimum baskets per zone and a pause switch protect small kitchens on busy nights." },
      { name: "Tilburg", note: "Snackbars and grill restaurants with loyal local customers are good candidates for stamp-card loyalty on their own ordering channel." },
      { name: "Almere", note: "A young, spread-out city where many families order in; postcode zones keep drivers from travelling across the whole municipality." },
      { name: "Breda", note: "Restaurants serving both the city and surrounding villages benefit from zone-specific delivery fees and earlier cut-off times for the outer ring." },
      { name: "Nijmegen", note: "Students and hospital staff on shifts order at odd hours; pre-ordering slots and a reliable kitchen printer matter more than extra features." },
      { name: "Haarlem", note: "Well-known local restaurants with strong reputations can often move regulars to direct ordering with little more than a QR menu card." },
      { name: "Arnhem", note: "Takeaways serving both city districts and nearby towns need clear zones, pickup options and WhatsApp updates for longer delivery times." },
      { name: "Maastricht", note: "Visitors from Belgium and Germany plus local students suggest a menu in Dutch and English, with guests supplying or approving any other language." },
      { name: "Leiden", note: "A compact historic centre with limited parking makes pickup ordering and bicycle-courier zones sensible for small kitchens." },
    ],
  },
  process: {
    heading: "From your menu card to the first direct order",
    steps: [
      ["Menu and numbers", "You send the menu, a platform statement and your delivery area on WhatsApp. We ask about options, allergens, drivers and printer, then run the break-even sum with you."],
      ["Written quote", "Within about two working days you get an itemised USD quote with timeline. Nothing is billed until you approve it in writing."],
      ["Menu spreadsheet", "We convert your menu into structured option groups and allergen columns. Your kitchen corrects it; this becomes the single source for site and tickets."],
      ["Build on a test link", "Design, menu, basket and checkout appear on a private link you can try on your phone. Feedback happens in chat, with short video calls when needed."],
      ["Payments and kitchen", "We connect your merchant account in test mode, set up zones and the printer or tablet, then place test orders during a quiet afternoon."],
      ["Soft launch and care", "Regulars get the link first, we fix what they notice, then you announce it. Five months of free care follow, then plans from the maintenance price."],
    ],
  },
  faqHeading: "Questions restaurant owners ask about online ordering",
  faqs: [
    { question: "What is the best online ordering system for restaurants in the Netherlands?", answer: "The best choice depends on your volume and goals. A marketplace listing brings new guests; a monthly ordering subscription is quick to start; your own online ordering system for restaurants gives full control of data, design and costs. For a takeaway with many regulars, owning the system usually wins over time. For a new place with no following, a marketplace listing is often the better first step." },
    { question: "How much does an online ordering system for restaurants cost?", answer: `With BtechWaleTech, an ordering website starts from ${P.shop}, a branded Android and iOS app from ${P.app}, and multi-branch custom software from ${P.software}. Care starts from ${P.care} after five free months. Payment fees, hosting, a printer and app store accounts are paid by you directly to those providers. You get an itemised written quote in about two working days.` },
    { question: "Can I stop paying commission to Thuisbezorgd by having my own site?", answer: "You stop paying commission on orders that come through your own site, not on orders that still come through the marketplace. Most restaurants keep the listing for discovery and move regulars to the direct channel with QR cards, pickup bags and a first-order perk. Check your platform contract first, since it may limit how you contact customers who ordered through the platform." },
    { question: "Do you take a commission on orders?", answer: `No. You pay for the build, starting from ${P.shop} for a website, and optional care from ${P.care} after the free months. Your payment provider charges its own transaction fees, which you see on your merchant account. The money from guests goes from the provider straight to your bank account and never passes through us.` },
    { question: "Does the system support iDEAL?", answer: "Yes. We connect your ordering site to a payment provider that supports iDEAL and cards, using a merchant account in your restaurant's name. Orders are only sent to the kitchen once the provider confirms payment through a webhook. Abandoned or failed payments keep the basket so the guest can retry, and partial refunds for missing items can be made from the dashboard." },
    { question: "How do delivery zones by postcode work?", answer: "You define zones as ranges of four-digit postcode areas, with single six-character postcodes excluded or added where needed. Each zone has its own minimum basket, delivery fee, estimated time and hours. The guest enters a postcode before paying, so an order outside your area is refused before any money moves, with a pickup option offered instead." },
    { question: "Can orders print automatically in the kitchen?", answer: "Yes, on a supported network receipt printer connected to your kitchen network. Each paid order prints a ticket with the order number, time, items by station, options and allergen remarks. A second copy can print for the counter or driver. If the printer is offline, the dashboard raises an alert and the order stays visible on screen." },
    { question: "Can an online ordering system for restaurants connect to my POS?", answer: "Only if your POS vendor provides an open API or an import method. When it does, orders arrive in the register with the right product codes, which keeps reporting and stock in one place. When it does not, a printer or kitchen tablet is the practical route. We read your POS documentation before quoting and tell you which option is realistic." },
    { question: "What allergen information must an online menu show?", answer: "The NVWA says a webshop must state which allergens its products contain or give a phone number where customers can ask. It lists 14 allergens, including gluten cereals, milk, eggs, nuts, peanuts, soy, sesame and celery. We display allergens per dish and per option; you and your chef supply the allergen data, and a food-law adviser can confirm your obligations." },
    { question: "How long does it take to build my own ordering website?", answer: "An online ordering system for restaurants usually takes four to eight weeks from written approval, and six to ten weeks for a native app. The first week is spent turning your menu into a clean spreadsheet with options and allergens. Apply for your payment merchant account on day one, because the provider's approval can take longer than the build itself." },
    { question: "Should I build an app or a website first?", answer: "Start with the ordering website. Guests can open a link without installing anything, Google can index your menu, and it costs less. Add a Flutter app for Android and iOS when you have enough regulars ordering weekly or you run a loyalty scheme people check often. The app is then published under your own developer accounts." },
    { question: "Can guests reorder through WhatsApp?", answer: "Yes. Guests who opt in at checkout receive order updates through the WhatsApp Business Platform, and later a reorder link that refills their basket with their last order. Offers need a separate opt-in and should be sent rarely. A simpler option is a click-to-chat link to your business number for questions." },
    { question: "Who owns the customer data from my ordering site?", answer: "You do. The database, domain, hosting, code and merchant account are all in your restaurant's name. As the controller under the AVG, you decide what to collect; we build the system to collect only what checkout needs, encrypt connections, limit staff rights and support deletion requests. Your own adviser should approve the privacy text." },
    { question: "Is it safe to hire developers in India for a restaurant system?", answer: "It can be, if the working rules are clear. With us, every account is in your name, you approve an itemised quote before anything is billed, and payments go in milestones by Wise, bank wire or PayPal. The overlap with Dutch hours runs from your late morning, and we reply on WhatsApp seven days a week." },
    { question: "Can you visit my restaurant to install the printer?", answer: "No. We are three freelance developers working remotely from India and do not make site visits. We guide the printer and network setup over a video call, and most owners or a local IT helper can finish it in under an hour. If your setup needs cabling or hardware repairs, a local technician is the right person." },
    { question: "Will my ordering site show up on Google?", answer: "It can, but nobody can guarantee rankings. We build the menu as real pages with prices and descriptions, add restaurant structured data, tune speed for phones and link the site from your Google Business Profile. Local SEO support starts from the monthly SEO price if you want ongoing work on content and listings." },
    { question: "Can the system handle multiple branches or brands?", answer: `Yes, as a custom build starting from ${P.software}. A central menu can be shared or split per branch, with separate stock, opening hours, zones and staff logins. Dark kitchens running several brands from one kitchen can route every brand's orders to the same printer while keeping separate storefronts.` },
    { question: "What happens after launch if something breaks on a Friday night?", answer: "You message us on WhatsApp, which we answer seven days a week. During the five free months after launch, fixes are included. After that, care plans start from the maintenance price. Exact response commitments are set out in your written quote rather than promised here, so you know precisely what is covered." },
    { question: "Can guests pay cash or by card at the door?", answer: "Yes, if you want to offer it. Pay on delivery can be switched on per zone or per order size, and the ticket marks it clearly so the driver brings a card terminal or change. Many owners limit it to regulars or small baskets, because unpaid no-shows cost more than online payment fees." },
    { question: "Do you write the Dutch menu text?", answer: "No. We work in English and build the site in Dutch and English, but you supply or approve the Dutch dish names and descriptions. Most owners already have them on their paper menu or marketplace listing, and we import those into the menu spreadsheet for your kitchen to check." },
    { question: "How do I move from a monthly ordering subscription to my own system?", answer: "Export your menu, customers and order history from the current vendor if their terms allow it, and check who owns your domain. We rebuild the menu with options and allergens, import the customers who consented, and point your domain to the new site once testing is finished, so guests keep using the same address." },
  ],
  related: {
    heading: "More for Dutch hospitality and ecommerce",
    links: [
      { name: "iDEAL payment integration", href: "/netherlands/ideal-payment-integration/" },
      { name: "What a webshop costs in the Netherlands", href: "/netherlands/webshop-cost/" },
      { name: "App development for Dutch businesses", href: "/netherlands/app-development-company/" },
      { name: "WhatsApp chatbot for business", href: "/netherlands/whatsapp-chatbot-for-business/" },
      { name: "Shopify developer Netherlands", href: "/netherlands/shopify-developer/" },
      { name: "WooCommerce developer Netherlands", href: "/netherlands/woocommerce-developer/" },
      { name: "Exact Online integration", href: "/netherlands/exact-online-integration/" },
      { name: "Technical SEO services", href: "/netherlands/technical-seo-services/" },
      { name: "GDPR-compliant website development", href: "/netherlands/gdpr-compliant-website-development/" },
      { name: "Web developer for Amsterdam businesses", href: "/netherlands/web-developer-for-amsterdam-businesses/" },
      { name: "All services for the Netherlands", href: "/netherlands/" },
      { name: "Hire developers in India", href: "/hire-indian-developers/" },
      { name: "Starting prices", href: "/pricing/" },
    ],
  },
  cta: {
    heading: "Send us your menu and last month's platform statement",
    note: "We will run the break-even sum with you, tell you honestly whether your own ordering channel is worth it yet, and send an itemised quote in about two working days.",
  },
};

export default content;
