import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const TREATWELL = `<a href='https://www.treatwell.co.uk/partners/pricing/' rel='noopener'>Treatwell's partner pricing page</a>`;
const BOOKSY = `<a href='https://biz.booksy.com/en-gb/pricing' rel='noopener'>Booksy's UK pricing page</a>`;
const FRESHA = `<a href='https://www.fresha.com/pricing' rel='noopener'>Fresha's pricing page</a>`;

const content: FreelanceContent = {
  path: "/uk/salon-website-with-booking/",
  crumb: "Salon website with booking",
  updated: "2026-09-25",
  meta: {
    title: `Salon Website with Booking UK: Own It, from ${P.site}`,
    description: `Salon website with booking for UK hair and beauty salons: direct booking links, deposits against no-shows, service menus and local SEO. From ${P.site}.`,
    keywords: [
      "salon website with booking", "salon website with online booking", "hair salon website with booking uk", "beauty salon website with booking",
      "salon booking website uk", "salon website design uk", "hairdresser website design", "nail salon website with booking",
      "barber website with booking", "salon website deposit no show", "fresha commission new clients", "treatwell commission uk",
      "booksy boost fee", "how to avoid fresha new client fee", "salon website cost uk", "how much does a salon website cost",
      "salon website instagram feed", "salon price list website", "salon local seo", "hairdresser near me website",
      "salon website london", "salon website glasgow", "salon website leeds", "salon website manchester",
      "salon gift vouchers online", "own salon booking system",
    ],
  },
  hero: {
    eyebrow: "For UK hair, beauty, nail and barber salons",
    h1: "A salon website with booking that sends your regulars straight to your diary",
    lede: `A salon website with booking gives your clients one place you control to see your menu, check stylists and book, instead of reaching you through a marketplace that charges commission on new clients. BtechWaleTech is three freelance developers working remotely from India who build owned salon sites with <strong>direct booking links, deposits for long appointments, clear price lists and Google visibility for your area</strong>. Keep the booking software you like; we build the front door you own. Sites start at ${P.site}. Running a clinic-led skin business instead? See our <a href='/uk/aesthetics-clinic-website-design/'>aesthetics clinic website design</a> guide.`,
    pills: ["Direct booking links for regulars", "Deposits for colour and long services", "Price list by stylist level", "Curated Instagram-style gallery", "Google Business Profile set-up", "Gift vouchers and retail", `From ${P.site}`],
    origin: "Three freelance developers in India · WhatsApp replies 7 days a week, including Sundays when salons plan the week",
  },
  facts: [
    ["Salon website from", P.site],
    ["Build time", "1–2 weeks after your menu and photos arrive"],
    ["Website with product shop", `From ${P.shop}`],
    ["Custom booking system", `From ${P.software}`],
    ["Free maintenance", "5 months from launch"],
    ["Written quote", "About 2 working days"],
  ],
  stats: [
    { value: "3", label: "Developers: build, booking set-up and local search" },
    { value: "0", label: "Commission taken by us on any booking" },
    { value: "5", label: "Months of free maintenance after going live" },
    { value: "2", label: "Working days to an itemised quote" },
  ],
  answer: {
    heading: "Why build a salon website with booking instead of relying on a marketplace?",
    text: `A salon website with booking lets clients book you directly, so regulars and people who find you on Google never pass through a marketplace that charges a new-client commission. Treatwell, Fresha and Booksy all charge that commission on marketplace-sourced first bookings only. BtechWaleTech builds owned salon websites, linked to your booking software, from ${P.site}.`,
    more: `Want booking rules your software cannot do? Read about <a href='/uk/booking-system-development/'>custom booking system development</a>, or pair the site with <a href='/uk/local-seo-services/'>local SEO for your high street</a>.`,
  },
  snapshot: {
    caption: "Salon website with booking in brief",
    rows: [
      { label: "Main goal", value: "Regulars and Google visitors book you directly, not through a marketplace listing" },
      { label: "Booking engine", value: "Your existing salon software's direct link or widget, or a custom system" },
      { label: "No-show protection", value: "Deposits or card details for long, colour or first-time appointments" },
      { label: "Menu", value: "Services by category and stylist level, ‘from’ prices, durations" },
      { label: "Social proof", value: "Curated gallery, stylist profiles, Google reviews" },
      { label: "Local search", value: "Google Business Profile, area wording, fast mobile pages" },
      { label: "Starting price", value: `From ${P.site}; custom booking from ${P.software}` },
    ],
  },
  services: {
    eyebrow: "Salon website packages, built in pieces",
    heading: "What goes into a salon website with booking",
    note: "Most independent salons need the first two cards. Groups and salons selling products add the shop and search work.",
    cards: [
      { name: "Salon website with booking buttons", note: `Home, services and prices, stylists, gallery, reviews, FAQs and booking buttons that open your salon software's direct link, from ${P.site}.`, href: "/services/web-development/", size: "lg" },
      { name: "Your own booking system", note: `A custom diary with deposits, stylist rules, reminders and a client login, for salons that want to leave subscription software. From ${P.software}.`, href: "/uk/booking-system-development/", size: "lg" },
      { name: "Retail and gift voucher shop", note: `Sell haircare, gift vouchers and bundles with card and wallet checkout, from ${P.shop} for a full shop.`, href: "/uk/ecommerce-website-design/", size: "md" },
      { name: "Local search for your area", note: `Google Business Profile, service-and-area pages and review requests from ${P.seo}. Rankings are never guaranteed.`, href: "/uk/local-seo-services/", size: "md" },
      { name: "WhatsApp booking replies", note: `Automatic WhatsApp replies with your booking link, opening hours and aftercare notes, from ${P.ai}.`, href: "/uk/whatsapp-business-api-integration/", size: "md" },
      { name: "Moving off a rented site", note: "Rebuild from a template or marketplace mini-site onto hosting you own, with redirects so Google keeps finding you.", href: "/uk/website-redesign-services/", size: "md" },
      { name: "Salon app", note: `A branded app for loyalty and rebooking, from ${P.app}. Worth it for groups, rarely for one salon.`, href: "/uk/flutter-app-development/", size: "sm" },
      { name: "Care plan", note: `Price updates, new stylists and backups from ${P.care} after the five free months.`, href: "/uk/wordpress-maintenance-services/", size: "sm" },
    ],
  },
  comparison: {
    heading: "Marketplace listing, free booking mini-site or your own salon website",
    note: "Most salons already have one of the first two. The question is whether a site you own is worth adding on top.",
    columns: ["Point", "Marketplace listing only", "Booking software's free mini-site", "BtechWaleTech salon website"],
    rows: [
      ["Who clients see first", "Your salon next to competitors", "Your salon, in the software's layout", "Only your salon, in your branding"],
      ["Commission risk", "Charged on marketplace-sourced new clients", "Direct bookings usually commission-free", "No commission from us; booking stays direct"],
      ["Google visibility for your name", "Listing often outranks you", "Limited page content", "Full pages built for your area and services"],
      ["Service menu detail", "Platform format", "Platform format", "Your categories, levels, notes and ‘from’ prices"],
      ["Deposits", "Set in the platform", "Set in the software", "Set in your software, shown clearly on the site"],
      ["Gallery and stylist pages", "Basic", "Basic", "Full profiles and curated gallery"],
      ["Selling products and vouchers", "Depends on platform", "Depends on software", `Your own shop, from ${P.shop}`],
      ["If you switch software", "Listing and reviews stay behind", "Mini-site disappears", "Website stays; only booking links change"],
    ],
    fine: "Marketplaces genuinely bring new clients, and many salons keep a listing for that reason. A website you own is about stopping regulars and Google visitors from being routed through it, not about quitting it overnight.",
  },
  pricing: {
    heading: "Salon website with booking: prices",
    note: `A salon website of up to 100 pages starts at ${P.site} and covers your menu with ‘from’ prices, stylist profiles, a gallery, reviews, FAQs and booking buttons for every service category, linked to the direct booking page of your salon software. If you sell haircare or gift vouchers, a full shop starts at ${P.shop}. Salons wanting their own booking system with deposits and client logins start at ${P.software}. Local search help starts at ${P.seo} a month, and care plans start at ${P.care} after five free months. Every figure here is a starting price, itemised in your quote.`,
  },
  guideLabel: "Salon website with booking guide",
  guide: [
    {
      id: "what-it-means",
      heading: "What is a salon website with booking, and what does owning your bookings mean?",
      paragraphs: [
        `A salon website with booking is a site on your own domain where clients read your menu and book an appointment, with the booking going straight into your diary rather than through a marketplace. Owning your bookings means the route from “I need a trim” to a confirmed slot runs through pages you control.`,
        `Most UK salons already use salon software such as Fresha, Treatwell or Booksy. Those tools do two different jobs: a diary and booking engine for your salon, and a public marketplace where people discover salons they have never visited. The diary is usually a subscription. The marketplace is where commission appears, because the platform charges for new clients it introduces.`,
        `The trouble starts when regulars and people who already know your name end up booking through the marketplace listing because it is the first thing they find on Google or Instagram. A salon website with booking fixes that: your name search lands on your site, and every “Book” button uses the direct link your software provides.`,
      ],
    },
    {
      id: "commission",
      heading: "How much commission do Fresha, Treatwell and Booksy charge salons?",
      paragraphs: [
        `Each platform charges a one-time commission on the first booking of a new client who found you through its marketplace, and nothing on repeat visits. The rates differ, and so do the conditions, so check the current pricing page before deciding anything.`,
        `${TREATWELL} states a 35% commission on first bookings by new clients from the marketplace, 0% on repeat bookings, and no commission on appointments booked directly, including through buttons on your own website or social media. ${FRESHA} lists a one-time 20% commission on new clients acquired through its marketplace, with no fee on returning clients, subject to a minimum fee per client. ${BOOKSY} describes a one-time 30% fee on a new client's first visit when its Boost marketplace feature is switched on, subject to a minimum, and no commission for clients who find you through your own marketing.`,
        `Put in plain terms, at 20% every five marketplace first visits cost you roughly the value of one service; at 30% it is about three services in every ten; at 35% it is a little over one in three. That can be a fair price for a genuinely new client. It is a poor price for someone who already knew you and simply clicked the wrong link.`,
      ],
      after: [
        `Rates, minimums and conditions change, and processing fees on card payments are separate. Treat the figures above as what each platform published at the time of writing, and confirm them in your own account.`,
      ],
    },
    {
      id: "leaks",
      heading: "Where salons lose bookings to marketplace commission without noticing",
      paragraphs: [
        `With or without a salon website with booking, commission usually leaks through links, not loyalty. A regular searches your salon's name, the marketplace listing appears above your own site, and the booking is recorded as marketplace-sourced. Or the link in your Instagram bio points at the marketplace profile rather than your direct booking link.`,
      ],
      list: [
        "Instagram and TikTok bio links pointing at a marketplace profile",
        "Google Business Profile booking button connected to a marketplace listing",
        "Old flyers, cards and QR codes printed with the listing address",
        "A website that is slow or thin, so the listing outranks it for your own name",
        "Staff texting clients the marketplace link from habit",
      ],
      after: [
        `A salon website with booking helps with all five: one short, memorable address to print and share, direct booking links throughout, and pages strong enough to rank for your own name. Booksy's own pricing page recommends sharing your direct profile link so clients booking through it are not charged a commission, which shows how much depends on the link used.`,
      ],
    },
    {
      id: "keep-or-leave",
      heading: "Do you need to leave Fresha, Treatwell or Booksy to own your bookings?",
      paragraphs: [
        `Usually not. Most salons keep their current software as the diary and use a website they own as the front door. Leaving only makes sense when the subscription and payment fees outweigh the cost of your own booking system, or when you need rules the software cannot handle.`,
        `Pairing your software with a salon website with booking means your diary, client records, card terminals and staff rotas carry on unchanged. We add booking buttons across the site that open the software's direct booking page for the right service category, so clients never land on the marketplace.`,
        `Building your own booking system starts at ${P.software} and suits salon groups, salons with complicated rules (stylist levels, processing time between colour stages, multi-stage appointments) or businesses that want client logins and memberships under their own brand. It is a bigger commitment: someone has to maintain it, and you give up the marketplace's discovery unless you keep a listing alongside it.`,
      ],
      subs: [
        { heading: "Keep the software when", text: "You are happy with the diary, the payment terminal works and your problem is mainly links and visibility." },
        { heading: "Build your own when", text: "You run several sites, need custom rules or memberships, or subscription and processing fees have grown beyond what a one-off build would cost you over a few years." },
      ],
    },
    {
      id: "booking-options",
      heading: "What are the booking options for a salon website?",
      paragraphs: [
        `There are three practical set-ups: booking buttons that open your software's direct booking page, an embedded booking widget shown inside your site, or a custom booking system. All three keep the salon website with booking as your main address.`,
        `Buttons are simplest and most reliable. Embedded widgets keep clients on your page but depend on what the software supports and can be heavier on mobile. A custom system gives full control over look, rules and data, with the maintenance that implies.`,
        `Whichever you choose, put the booking button where decisions happen: at the top of each service category, on each stylist's profile, beside the price list and fixed on phone screens. Clients should never have to scroll back to the top to book a balayage they have just read about.`,
      ],
    },
    {
      id: "deposits",
      heading: "Should a salon take deposits online to stop no-shows?",
      paragraphs: [
        `For long, expensive or first-time appointments, yes. A deposit or card held on file at booking reduces no-shows, and most salon software supports it. The website's job is to explain the policy clearly before the client commits.`,
        `Most salons do not need a deposit on every trim. A sensible pattern is deposits for colour, extensions, bridal trials and anything over a set length, plus first visits from new clients. Regulars with a good record can book freely.`,
        `On the website, the deposit and cancellation policy sits on its own short page, is linked beside every booking button and appears again at the payment step in your software. Clear wording such as how much notice is needed to move an appointment without losing the deposit prevents most disputes. The policy is yours to write; we make sure nobody can miss it.`,
      ],
      list: [
        "Deposit amounts and which services need one",
        "Notice needed to rebook or cancel without losing the deposit",
        "Patch tests for colour and lash services, and when to book them",
        "Late arrival policy",
        "How refunds of deposits are handled, if at all",
      ],
    },
    {
      id: "menu",
      heading: "How to present a salon service menu and prices online",
      paragraphs: [
        `On a salon website with booking, group services the way clients think (cuts, colour, treatments, nails, brows and lashes), show a ‘from’ price and a typical duration for each, and explain what changes the price. Clear menus reduce phone calls and set expectations before the client sits in the chair.`,
        `Hair salons often price by stylist level (junior, senior, director) and hair length. A small table per service with those columns works far better on a phone than a long list. For services that genuinely need a consultation, such as colour corrections or extensions, say so and offer a consultation booking instead of a price that will change.`,
        `Keep one master price list that feeds every page. When prices rise in January, you change them once and the menu, service pages and structured data all update. Mismatched prices across pages are one of the commonest complaints on salon reviews.`,
      ],
    },
    {
      id: "instagram",
      heading: "Should a salon website show an Instagram feed?",
      paragraphs: [
        `Show your best work, but think twice about a live feed. A curated gallery of your strongest photos, chosen and captioned by you, looks better, loads faster and never pulls an off-brand post onto the home page.`,
        `Live feed widgets rely on Instagram's developer access and third-party tools, both of which change from time to time and can break without warning. They also load extra scripts that slow phones down, and some set cookies that need consent. A gallery you update monthly avoids those problems and lets you add proper descriptions (“copper balayage on shoulder-length fine hair”) that help search engines understand the page.`,
        `If you still want a live feed, we can add a lightweight one below the fold, behind your cookie banner, with the curated gallery above it. Either way, the Instagram bio link should point to your salon website with booking, not the marketplace.`,
      ],
    },
    {
      id: "local-seo",
      heading: "Local SEO for a salon website with booking",
      paragraphs: [
        `Searches that lead to a salon website with booking are local and immediate: “hairdresser near me”, “balayage Leeds”, “nail salon open Sunday”. Winning them depends on your Google Business Profile, consistent details everywhere, reviews and a fast site that clearly states what you do and where.`,
        `Your Google Business Profile should use the right primary category, list services with ‘from’ prices that match the website, show real photos and link to your website, not a marketplace listing. The website then needs one page per main service with your area named naturally, opening hours, parking and transport notes and an embedded map.`,
        `Reviews matter more for salons than almost any other local business. Ask at the end of an appointment or in the follow-up message, never offer an incentive for a review, and reply to every one. We can add a review request link to your booking confirmations.`,
      ],
      list: [
        "Salon name, address and phone identical on the site and Business Profile",
        "Service pages for cuts, colour, treatments, nails, brows",
        "Opening hours including late nights and Sundays",
        "LocalBusiness structured data with price range and hours",
      ],
    },
    {
      id: "cost",
      heading: "How much does a salon website with booking cost?",
      paragraphs: [
        `With us, a salon website with booking starts at ${P.site} for up to 100 pages, using your existing salon software for the diary. A retail and voucher shop starts at ${P.shop}, and a fully custom booking system starts at ${P.software}.`,
        `Cost is driven by how many services and stylists you list, whether booking is by button, embed or custom build, whether you sell products and vouchers, and how much of the copy we write versus you. Running costs are separate: your domain, hosting and your salon software subscription, all paid directly by you so there is no mark-up.`,
        `Quotes from UK salon web designers vary widely because some sell a rented template with a monthly fee and others build a site you own. Before comparing, ask what you own at the end and what the monthly fee pays for. Our <a href='/uk/website-design-cost/'>UK website cost guide</a> covers the running costs in more detail.`,
      ],
    },
    {
      id: "choosing",
      heading: "How to choose someone to build your salon website",
      paragraphs: [
        `Choose someone who will put the domain and hosting in your name, connect booking to the direct link your software provides, and show you how to update prices and stylists yourself. Anything else is detail.`,
      ],
      list: [
        "Whose name will the domain be registered in?",
        "Will every booking button use my direct booking link?",
        "Can I edit prices, stylists and opening hours myself?",
        "How fast does the home page load on a phone?",
        "Which cookies load before a visitor agrees?",
        "What happens to the site if I stop paying you?",
        "Will you promise me the top spot on Google? (A yes is a red flag.)",
      ],
      after: [
        `Other warning signs: templates shared across dozens of salons with identical wording, sites built inside a platform you cannot export from, and anyone who wants your booking software login but cannot explain why.`,
      ],
    },
    {
      id: "vouchers-retail",
      heading: "Gift vouchers and retail products on a salon website",
      paragraphs: [
        `Gift vouchers are the easiest extra revenue a salon website can add, especially before Christmas, Mother's Day and Valentine's Day. Many salon software packages sell vouchers; if yours does, we link to it. If not, a small shop handles vouchers and retail together.`,
        `Retail haircare and skincare can be sold through a proper shop with card and wallet checkout, delivery options and click-and-collect from the salon, starting at ${P.shop}. For salons selling a handful of products, click-and-collect only is simpler and avoids postage.`,
        `If you sell online, UK consumer rules on distance selling apply to product sales, so the shop needs clear delivery, returns and cancellation information. We build those pages into the shop layout; your wording should be checked by your own adviser.`,
      ],
    },
    {
      id: "stylists-recruitment",
      heading: "Stylist profiles and recruitment pages",
      paragraphs: [
        `On a salon website with booking, clients book people as much as salons, so each stylist or therapist deserves a short profile: specialisms, level, the days they work, a few examples of their work and a button that books them directly. That profile often ranks for the stylist's own name too.`,
        `Salons are always hiring, and a simple careers page does real work. List current roles, what training and progression you offer, whether you take apprentices, and a short application form that asks for a portfolio link. When a stylist leaves, their profile is hidden, not deleted, and their booking button redirects to the team page so no client hits a dead end.`,
      ],
    },
    {
      id: "remote-team",
      heading: "Working with our team in India on your salon website",
      paragraphs: [
        `Our hours overlap the UK day from late morning, and we reply on WhatsApp seven days a week, which suits salon owners who plan admin on Sundays or Mondays. India is four and a half hours ahead of UK summer time and five and a half in winter.`,
        `Calls happen on WhatsApp video, Zoom or Meet between clients. You send your price list, stylist details and photos; we send back a staging link to check on your phone. The quote is itemised in USD and you pay in USD or GBP through Wise, bank wire or PayPal, with invoices from India. Nothing is billed until you approve the quote in writing.`,
      ],
      subs: [
        { heading: "First week", text: "Menu and stylists collected, booking software direct links gathered, sitemap and home page layout agreed, photos chosen." },
        { heading: "Second week", text: "Pages built on staging, every booking button tested on a phone, Google Business Profile updated to point at the site, launch." },
      ],
      after: [
        `We do not visit salons or take photos, and we do not run your social media. The domain, hosting and code are yours from day one.`,
      ],
    },
    {
      id: "worked-example",
      heading: "Worked example: a six-chair salon in Cheltenham (hypothetical)",
      paragraphs: [
        `Picture a six-chair hair salon in Cheltenham with a nail bar, using Fresha for its diary and marketplace, and an Instagram bio linking to the marketplace profile. This is an illustration of how we would approach it, not a real client.`,
        `We would build a salon website with booking on the salon's own domain: a menu split into cuts, colour, treatments and nails with prices by stylist level, six stylist profiles with direct booking buttons, a curated gallery, a deposit policy page for colour and nail extensions, a voucher link and a careers page. The Instagram bio and Google Business Profile would both be switched to the website.`,
        `The salon would keep Fresha as its diary and keep a marketplace presence for genuinely new clients, but regulars would now reach the direct booking link from every route they use. The build would sit in the ${P.site} tier, with local search help from ${P.seo} a month if the owner wanted it.`,
      ],
    },
    {
      id: "checklist",
      heading: "Salon website with booking: launch checklist",
      paragraphs: [
        `Before your salon website with booking goes live, click through it on a phone as if you were a client, then work through this list with your front-of-house team.`,
      ],
      list: [
        "Every booking button opens your direct booking link, not a marketplace page",
        "Instagram, TikTok and Facebook bio links point to the website",
        "Google Business Profile website and booking links updated",
        "Prices and durations match your salon software",
        "Deposit and cancellation policy linked beside booking buttons",
        "Stylist profiles show working days and book the right person",
        "Gallery photos are yours, with clients' permission where faces show",
        "Cookie banner holds back tracking until consent",
        "Opening hours, parking and transport notes on the contact page",
        "QR codes on cards and mirrors point to the new address",
      ],
    },
  ],
  tables: [
    {
      id: "platform-fees",
      eyebrow: "Commission",
      heading: "New-client commission published by the main UK salon platforms",
      note: `Percentages as published on each platform's pricing page at the time of writing; minimum fees, subscriptions and card processing are extra. Check your own account for current terms.`,
      columns: ["Platform", "When commission applies", "Published rate", "Repeat and direct bookings"],
      rows: [
        ["Treatwell", "First booking by a new client from the marketplace", "35%", "0% on repeat bookings; no commission on direct bookings"],
        ["Fresha", "New client acquired through the marketplace", "20% one-time, with a minimum fee", "No fee on returning clients"],
        ["Booksy", "First visit of a new client with Boost switched on", "30% one-time, with a minimum fee", "No commission without Boost or for your own marketing"],
        ["Your own website + direct link", "Never, from us", "0% from BtechWaleTech", "Your software's own terms apply to its booking"],
      ],
    },
    {
      id: "commission-in-services",
      eyebrow: "Plain maths",
      heading: "What marketplace commission means in appointments",
      note: "A money-free way to see the cost: how many full services the commission on ten marketplace first visits adds up to.",
      columns: ["Commission rate", "Ten first visits cost roughly", "Worth paying when", "Not worth paying when"],
      rows: [
        ["20%", "Two full services", "The client is genuinely new and becomes a regular", "A regular booked via the listing by mistake"],
        ["30%", "Three full services", "It fills quiet weekday slots", "Your own Google listing could have won them"],
        ["35%", "Three and a half services", "A high-value first visit leads to repeat colour work", "The client found you on Instagram first"],
        ["0% (direct)", "Nothing", "Always, for regulars and name searches", "Not applicable"],
      ],
    },
    {
      id: "cost-by-scope",
      eyebrow: "Budget",
      heading: "Salon website with booking: cost by scope",
      note: "Starting prices. Your quote is itemised after we see your menu, team and booking software.",
      columns: ["Salon set-up", "What you get", "Starts at", "Typical time"],
      rows: [
        ["Solo stylist or barber", "One-page menu, gallery, booking button, reviews", P.site, "1 week"],
        ["Independent salon", "Menu by category and level, stylist profiles, deposit page, careers", P.site, "1–2 weeks"],
        ["Salon with retail", "Salon website plus product and voucher shop", P.shop, "4–8 weeks"],
        ["Multi-site group", "Location pages, area content, 299+ pages", P.seoSite, "3–5 weeks"],
        ["Own booking system", "Custom diary, deposits, reminders, client login", P.software, "6–12 weeks"],
        ["WhatsApp booking assistant", "Auto-replies with booking link, hours and aftercare", P.ai, "2–4 weeks"],
      ],
    },
  ],
  areas: {
    eyebrow: "Salons around the UK",
    heading: "Salon websites with booking for towns and cities across the UK",
    note: "We work remotely for salons in every part of the UK. How the local market changes what a salon site needs.",
    cards: [
      { name: "London", note: "London salons face heavy marketplace competition in every postcode, so ranking for your own name and neighbourhood keeps regulars off listing pages where rivals appear alongside you." },
      { name: "Glasgow", note: "Glasgow's Merchant City and West End salons draw late-night and weekend bookings, so opening hours and a fixed booking button on phones do much of the selling." },
      { name: "Leeds", note: "Leeds salons serving students and professionals benefit from clear price tables by stylist level, so both budgets can see what they will pay before booking." },
      { name: "Manchester", note: "Manchester's Northern Quarter and suburban salons compete on colour work, where a curated gallery and deposit policy for long appointments matter most." },
      { name: "Cheltenham", note: "Cheltenham salons see peaks around race weeks and weddings, so event styling pages and deposits for bridal trials are worth building in from the start." },
      { name: "Bath", note: "Bath salons serving visitors and residents benefit from pages that explain parking and walking routes, plus gift vouchers for tourists buying presents." },
      { name: "Milton Keynes", note: "Milton Keynes clients drive to appointments, so parking details, map embeds and early and late slots should be prominent on the booking pages." },
      { name: "Cardiff", note: "Cardiff salons can add Welsh-language page elements you supply and approve, alongside English, for clients who prefer booking in Welsh." },
      { name: "Newcastle", note: "Newcastle barbers and salons with walk-in and booked chairs need the website to explain both options so clients know when to just turn up." },
      { name: "Southampton", note: "Southampton salons near the universities and port see changing client bases each term, so strong Google visibility matters more than repeat word of mouth." },
      { name: "Belfast", note: "Belfast salons can reach clients who travel in from across Northern Ireland with clear location pages and booking that works well on mobile data." },
      { name: "Edinburgh", note: "Edinburgh salons busy during festival season benefit from deposit rules on long appointments and clear notice periods for cancellations during peak weeks." },
      { name: "Coventry", note: "Coventry nail and beauty salons with several therapists need therapist profiles and booking by person, since clients often follow one technician." },
      { name: "Bournemouth", note: "Bournemouth salons with seasonal visitors and a large retired population benefit from larger text, simple booking and a phone option beside every button." },
    ],
  },
  process: {
    heading: "How we build a salon website with booking",
    steps: [
      ["Collect menu, team and links", "You send your price list, stylist details, photos and the direct booking links from your salon software. We check which services need deposits or consultations."],
      ["Quote and page plan", "In about two working days you receive an itemised quote in USD and a page plan. Nothing is billed until you approve it in writing."],
      ["Design on a staging link", "We build the menu, stylist profiles and gallery on a private link you can check from your phone between clients."],
      ["Booking wired everywhere", "Every service, stylist and price table gets a booking button using your direct link. We test each one on a phone, including deposits."],
      ["Switch every route", "At launch we help update your Google Business Profile, and give you a list of bio links, QR codes and printed materials to switch to the new address."],
      ["Five months of support", "Price changes, new stylists and fixes are covered for five months after launch. Care plans follow only if you want them."],
    ],
  },
  faqHeading: "Salon website with booking: questions salon owners ask",
  faqs: [
    { question: "How much does a salon website with booking cost?", answer: `With BtechWaleTech, a salon website with booking starts at ${P.site} for up to 100 pages, linked to your existing salon software for the diary. A product and voucher shop starts at ${P.shop}, and a fully custom booking system starts at ${P.software}. These are starting prices; your quote is itemised after we see your menu and team.` },
    { question: "Can I keep using Fresha, Treatwell or Booksy with my own website?", answer: "Yes, and most salons should. Your software stays as the diary, card terminal and client record. We put booking buttons across your website that open its direct booking link, so regulars and Google visitors book directly. You can keep a marketplace listing for genuinely new clients if it is worth the commission to you." },
    { question: "Does Treatwell charge commission on bookings from my own website?", answer: "According to Treatwell's partner pricing page, commission is charged on the first booking of a new client who comes from the Treatwell marketplace, and not on direct bookings, including those made through buttons on your own website or social media. Repeat bookings carry no commission. Check your own account terms, as pricing can change." },
    { question: "How do I avoid the Fresha new client fee?", answer: "Fresha's pricing page describes a one-time commission on new clients acquired through its marketplace, with no fee on returning clients. The practical step is making sure clients reach your direct booking link rather than the marketplace listing: link it from your website, Instagram bio and Google Business Profile, and share it in messages. Confirm the details in your account." },
    { question: "What is Booksy Boost and does it charge commission?", answer: "Booksy's UK pricing page describes Boost as a marketplace feature with a one-time fee on a new client's first visit when it is switched on, and no commission for clients who find you through your own marketing or when Boost is off. Booksy itself recommends sharing your direct profile link with clients so they are not counted as Boost bookings." },
    { question: "Should my salon take deposits online?", answer: "For colour, extensions, bridal trials and first visits, deposits reduce no-shows and are supported by most salon software. Many salons skip deposits for regulars and short services. The website should explain the policy on its own page, link it beside every booking button and repeat it at payment. The policy wording is yours to decide." },
    { question: "How long does it take to build a salon website?", answer: "A salon website with booking usually takes one to two weeks once we have your price list, stylist details, photos and direct booking links. A solo stylist site can be ready in about a week. Adding a full product shop takes four to eight weeks, and a custom booking system six to twelve weeks." },
    { question: "Should I show an Instagram feed on my salon website?", answer: "A curated gallery usually works better than a live feed. It loads faster, shows only your best work, never breaks when Instagram changes its developer access and lets you write descriptions that help search engines. If you want a live feed too, we add a lightweight one lower on the page, behind the cookie banner." },
    { question: "How do I show prices on a salon website?", answer: "Group services by category, show a ‘from’ price and duration for each, and explain what changes the price, such as hair length or stylist level. Tables per service work well on phones. For colour corrections or extensions, offer a consultation booking instead of a price that will change. Keep one master list so every page matches." },
    { question: "Will a salon website help me rank on Google Maps?", answer: `It helps, alongside your Google Business Profile, reviews and consistent details. The website gives Google clear service pages, your area, hours and structured data to connect with your profile. Nobody can guarantee a map position, but these are the foundations. Local search help starts at ${P.seo} a month.` },
    { question: "Can clients book a specific stylist on my website?", answer: "Yes. Each stylist profile gets a booking button that opens your software's booking page for that person where the software supports it. Profiles show specialisms, level, working days and examples of work. When someone leaves, their profile is hidden and their button redirects to the team page so no client hits a dead link." },
    { question: "Can I sell gift vouchers and products on my salon website?", answer: `Yes. If your salon software sells vouchers, we link to it. For retail haircare and skincare, a proper shop with card and wallet checkout, delivery and click-and-collect starts at ${P.shop}. Shops need clear delivery and returns information under UK distance-selling rules, which we lay out and your adviser checks.` },
    { question: "Is a freelancer, small team or agency best for a salon website?", answer: "A salon-specialist agency suits owners who want photography and social media handled too. A single freelancer can be cheaper but you depend on one person. A small team like ours builds and supports the site with three people who can cover for each other, at a lower starting price, though we do not visit or take photos." },
    { question: "Can a team in India build a website for a UK salon?", answer: "Yes. Everything a salon website needs, from the menu and booking links to local search set-up, is done remotely. Our hours overlap the UK day from late morning, and we reply on WhatsApp seven days a week. You supply photos and approve every page on a staging link before anything goes live." },
    { question: "Who owns the salon website?", answer: "You do. The domain is registered in your name, the hosting is in your account and the content and code are yours. If you change booking software later, only the booking links change and the website stays. If you change developer, you already hold every login, so nothing needs transferring from us." },
    { question: "Can I build my own booking system instead of paying for salon software?", answer: `Yes, from ${P.software}, usually six to twelve weeks. It makes sense for salon groups, complex booking rules or memberships under your brand. Weigh it carefully: you take on maintenance, card payment set-up and hosting, and you lose marketplace discovery unless you keep a listing. For most single salons, keeping the software is cheaper.` },
    { question: "Do I need a cookie banner on my salon website?", answer: "If your site uses analytics, advertising pixels or social embeds that set non-essential cookies, PECR requires consent before they load. The ICO says simply continuing to browse is not consent. We build a banner with clear accept and reject options that keeps those tags off until a visitor agrees. Your cookie notice text is yours to approve." },
    { question: "Can clients get booking replies on WhatsApp?", answer: `Yes. An automated WhatsApp setup can reply with your booking link, opening hours, parking notes and aftercare advice, and pass anything else to you. It starts at ${P.ai}. Marketing messages need clients' consent under PECR, so we keep booking replies and promotions separate and add an opt-in on the booking form.` },
    { question: "How do I pay for the project from the UK?", answer: "Your quote is itemised in USD. You can pay in USD or GBP by Wise, bank wire or PayPal, and invoices come from India. Milestones are written into the quote, and nothing is billed until you approve it. For VAT or tax questions about paying an overseas supplier, speak to your accountant." },
    { question: "What support do I get after the site launches?", answer: `Five months of maintenance are free: price updates, new stylists, fixes and software updates. After that, care plans start at ${P.care}, or you can manage the site yourself because you hold every login. Most salons only need help around January price rises and new staff.` },
    { question: "Can you move my salon off a rented template website?", answer: "Yes. We rebuild the pages on hosting you own, move your content and photos, set up redirects from old addresses so Google keeps finding you, and switch booking to your direct link. Check your current contract for notice terms first, and make sure the domain is registered in your name before you cancel." },
  ],
  related: {
    heading: "Related UK pages for salons and beauty businesses",
    links: [
      { name: "UK hub", href: "/uk/" },
      { name: "Aesthetics clinic website design", href: "/uk/aesthetics-clinic-website-design/" },
      { name: "Custom booking system development", href: "/uk/booking-system-development/" },
      { name: "Local SEO services UK", href: "/uk/local-seo-services/" },
      { name: "WhatsApp Business API integration", href: "/uk/whatsapp-business-api-integration/" },
      { name: "Ecommerce website design UK", href: "/uk/ecommerce-website-design/" },
      { name: "Small business website design UK", href: "/uk/small-business-website-design/" },
      { name: "Website redesign services UK", href: "/uk/website-redesign-services/" },
      { name: "Private clinic website design", href: "/uk/private-clinic-website-design/" },
      { name: "Nursery website design", href: "/uk/nursery-website-design/" },
      { name: "White-label web development", href: "/white-label-web-development/" },
      { name: "Pricing", href: "/pricing/" },
    ],
  },
  cta: {
    heading: "Send us your price list and booking link",
    note: `Share your menu, your team and the salon software you use, and we will reply in about two working days with a page plan and itemised quote. Salon websites with booking start at ${P.site}.`,
  },
};

export default content;
