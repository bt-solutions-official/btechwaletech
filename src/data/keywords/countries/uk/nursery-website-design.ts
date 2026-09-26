import { usd } from "@data/countries/international";
import type { FreelanceContent } from "@data/freelance/types";

const P = {
  site: usd("Static"), seoSite: usd("SEO website"), shop: usd("Ecommerce"), app: usd("Android"),
  software: usd("Custom web app"), ai: usd("AI automation"), seo: usd("Monthly SEO"), care: usd("Maintenance"),
};

const FUNDED = `<a href='https://www.gov.uk/free-childcare-if-working' rel='noopener'>GOV.UK page on free childcare for working parents</a>`;
const OFSTED = `<a href='https://www.gov.uk/find-ofsted-inspection-report' rel='noopener'>find an Ofsted inspection report</a>`;
const GUIDANCE = `<a href='https://www.gov.uk/government/publications/early-education-and-childcare--2' rel='noopener'>early education and childcare statutory guidance</a>`;

const content: FreelanceContent = {
  path: "/uk/nursery-website-design/",
  crumb: "Nursery website design",
  updated: "2026-09-25",
  meta: {
    title: `Nursery Website Design UK: Fill Places, from ${P.site}`,
    description: `Nursery website design for UK day nurseries: Ofsted report link, funded hours explained, clear fees, tour booking and waiting-list forms. From ${P.site}.`,
    keywords: [
      "nursery website design", "nursery website design uk", "day nursery website", "private nursery website design",
      "childcare website design uk", "preschool website design", "early years website design", "nursery website examples",
      "how to fill nursery places", "nursery marketing website", "nursery website cost", "how much does a nursery website cost",
      "ofsted rating on nursery website", "explain 30 hours free childcare on website", "funded hours nursery website",
      "nursery fees page", "nursery waiting list form online", "nursery registration form online", "nursery tour booking online",
      "famly website integration", "blossom educational website link", "nursery seo", "nursery near me website",
      "nursery website london", "nursery website manchester", "nursery website bristol",
    ],
  },
  hero: {
    eyebrow: "For private day nurseries, preschools and nursery groups in the UK",
    h1: "Nursery website design that turns parents' late-night research into show-round bookings",
    lede: `Nursery website design in the UK succeeds when a parent, usually searching on a phone after bedtime, can answer four questions in a few minutes: what did Ofsted say, how do funded hours work here, what will we actually pay, and how do we visit? BtechWaleTech is three freelance developers working remotely from India who build owned nursery websites with <strong>your Ofsted report linked, funded hours explained in plain English, a transparent fees page, tour booking and a waiting-list form</strong> that feeds your team, not a messy inbox. Sites start at ${P.site}. Also run a care setting for adults? See our <a href='/uk/care-home-website-design/'>care home website design</a> guide.`,
    pills: ["Ofsted report one tap away", "Funded hours explained simply", "Fees with chargeable extras listed", "Show-round booking online", "Waiting list and registration forms", "Links to Famly or Blossom", `From ${P.site}`],
    origin: "Three freelance developers in India · WhatsApp replies 7 days a week, so weekend admin questions get answered",
  },
  facts: [
    ["Nursery website from", P.site],
    ["Build time", "1–2 weeks after photos and fees arrive"],
    ["Nursery group, many settings", `From ${P.seoSite}`],
    ["Custom registration portal", `From ${P.software}`],
    ["Free maintenance", "5 months after launch"],
    ["Itemised quote", "About 2 working days"],
  ],
  stats: [
    { value: "3", label: "Freelance developers: build, forms and local search" },
    { value: "7", label: "Days a week we answer WhatsApp" },
    { value: "5", label: "Months of free maintenance included" },
    { value: "100", label: "Pages covered by the starting website plan" },
  ],
  answer: {
    heading: "What should nursery website design include to fill places?",
    text: `Nursery website design should put your latest Ofsted outcome and report link on the home page, explain funded childcare hours and what you charge on top, publish session fees clearly, and let parents book a show-round and join the waiting list online. Photos need parental consent. BtechWaleTech builds owned nursery websites from ${P.site}, linked to your parent app.`,
    more: `Want parents found locally? Pair the site with <a href='/uk/local-seo-services/'>local SEO services</a>. Running a school-age club or tutoring too? A <a href='/uk/booking-system-development/'>custom booking system</a> can handle sessions.`,
  },
  snapshot: {
    caption: "Nursery website design at a glance",
    rows: [
      { label: "Top of the home page", value: "Ofsted outcome, ages taken, opening hours, show-round button" },
      { label: "Funded hours", value: "Plain explanation of what you offer, how parents apply, what is chargeable" },
      { label: "Fees", value: "Session prices, what is included, chargeable extras listed in full" },
      { label: "Forms", value: "Show-round booking, waiting list, registration, secure document upload" },
      { label: "Parent app", value: "Links to Famly, Blossom or the app you use, not a rebuilt copy" },
      { label: "Photos", value: "Only children whose parents have given written consent" },
      { label: "Starting price", value: `From ${P.site}; portals from ${P.software}` },
    ],
  },
  services: {
    eyebrow: "Nursery website work we take on",
    heading: "What a nursery website build can include",
    note: "Single-setting nurseries usually need the first two cards. Groups add location pages and search work.",
    cards: [
      { name: "Complete nursery website", note: `Home, rooms and ages, day in the life, food, Ofsted, funded hours, fees, team, FAQs and contact, from ${P.site}. You own the domain and hosting.`, href: "/services/web-development/", size: "lg" },
      { name: "Waiting list and registration", note: "Online waiting-list and registration forms with preferred start dates and sessions, routed to your office securely and exportable to your nursery software.", href: "/uk/booking-system-development/", size: "lg" },
      { name: "Show-round booking", note: "Parents pick a visit slot from times you set, get a confirmation and reminder, and you see all tours in one list.", size: "md" },
      { name: "Nursery group sites", note: `One brand with a page per setting, each with its own Ofsted link, fees and manager, from ${P.seoSite} for large groups.`, href: "/uk/local-seo-services/", size: "md" },
      { name: "Recruitment pages", note: "Practitioner, room leader and apprentice vacancies with a short application form, because staffing decides how many places you can offer.", size: "md" },
      { name: "Parent enquiry assistant", note: `A chat or WhatsApp assistant answering hours, funded-hours basics and tour questions, handing anything sensitive to staff, from ${P.ai}.`, href: "/uk/ai-chatbot-development/", size: "md" },
      { name: "Accessibility check", note: "Text, contrast, forms and keyboard use checked against WCAG 2.2 AA so every parent can use the site.", href: "/uk/website-accessibility-audit/", size: "sm" },
      { name: "Care plan", note: `Fee updates each April, new staff and photo refreshes from ${P.care} after five free months.`, href: "/uk/wordpress-maintenance-services/", size: "sm" },
    ],
  },
  comparison: {
    heading: "Three ways nurseries usually get a website",
    note: "The realistic choices are a childcare-sector marketing specialist, a DIY website builder, or an independent build that you own.",
    columns: ["Consideration", "Childcare marketing specialist", "DIY website builder", "BtechWaleTech build"],
    rows: [
      ["Up-front cost", "Project fee, sometimes a retainer", "Low, monthly subscription", `One-off build from ${P.site}`],
      ["Time needed from you", "Low", "High: you build it", "Medium: you supply content and approve"],
      ["Funded hours explained", "Usually templated", "You write it", "Written for your offer; you approve"],
      ["Waiting list and registration", "Often included", "Basic form tools", "Secure forms routed to your office"],
      ["Parent app links", "Varies", "Manual links", "Linked cleanly from parent pages"],
      ["Photography", "May visit", "You supply", "You supply; we are remote"],
      ["Ownership", "Check the contract", "Tied to the builder", "Domain, hosting and code in your name"],
      ["Local search", "Often offered", "Basic", `Set-up included; monthly work from ${P.seo}`],
    ],
    fine: "If you want a specialist to photograph your rooms, write your newsletters and run paid social campaigns, a childcare marketing agency will serve you better than a remote build team.",
  },
  pricing: {
    heading: "Nursery website design prices",
    note: `A nursery website of up to 100 pages starts at ${P.site}. That covers rooms and age groups, a day-in-the-life page, food and allergies, your Ofsted outcome and report link, a funded-hours explainer, a fees page with chargeable extras, team profiles, show-round booking and a waiting-list form. Nursery groups with many settings start at ${P.seoSite}. A custom registration portal with document upload and staff review starts at ${P.software}. Local search help starts at ${P.seo} a month, and care plans start at ${P.care} after five free months. All starting prices, itemised in your quote.`,
  },
  guideLabel: "Nursery website design guide",
  guide: [
    {
      id: "what-it-does",
      heading: "What should nursery website design do for a UK private day nursery?",
      paragraphs: [
        `Nursery website design should turn a parent's search into a booked show-round and then a waiting-list place, by answering the questions parents weigh up before they ever phone. A nursery site is a trust document first and a brochure second.`,
        `Nursery website design matters because choosing childcare is one of the most anxious decisions a family makes, and most of the early research happens online, often late in the evening. Parents compare three or four settings on the same night. The nursery whose website answers their questions calmly and completely usually gets the visit.`,
        `That shapes nursery website design from the first page. Rather than leading with a slogan, the home page states the ages you take, opening hours, your Ofsted outcome, whether you offer funded hours, and a button to book a visit. Deeper pages then cover rooms, the daily routine, food and allergies, settling in, fees, staff and how to register.`,
      ],
      list: [
        "Who you care for: age range, rooms, numbers",
        "When: opening hours, weeks open per year, session patterns",
        "How good: Ofsted outcome and full report link",
        "How much: fees, funded hours and chargeable extras",
        "What next: book a show-round, join the waiting list",
      ],
    },
    {
      id: "parent-journey",
      heading: "How do parents choose a nursery online?",
      paragraphs: [
        `Most parents move through five stages: they search locally, shortlist on reputation and cost, visit, register, and then settle their child in. Good nursery website design has a page ready for each stage and a clear next step from each one.`,
      ],
      subs: [
        { heading: "1. Search", text: "“Nursery near me”, “day nursery [town]”, “nursery with 30 hours [area]”. Your Google Business Profile and home page do the work here." },
        { heading: "2. Shortlist", text: "Ofsted outcome, fees, funded hours, opening hours and distance. Parents want these on one screen, not buried in PDFs." },
        { heading: "3. Visit", text: "A show-round booked online at a time that suits working parents, with directions and parking notes." },
        { heading: "4. Register", text: "Waiting list or registration form with preferred start date and sessions, plus any registration fee or deposit you set." },
        { heading: "5. Settle", text: "Settling-in sessions, what to bring, and a link to the parent app you use for daily updates." },
      ],
      after: [
        `If one stage is missing, parents fill the gap by phoning, which is fine when the office is staffed and costly when it is not. Every call a page can answer is time given back to your team.`,
      ],
    },
    {
      id: "ofsted",
      heading: "How should a nursery website show its Ofsted outcome?",
      paragraphs: [
        `Show your latest Ofsted outcome near the top of the home page, quote it exactly as Ofsted published it, give the inspection date and link to the full report. Parents check it anyway, so making it easy builds trust.`,
        `GOV.UK points parents to Ofsted's search service to ${OFSTED} for childminders and childcare providers. Linking directly to your own report on that service is better than uploading a PDF that goes out of date. When a new inspection is published, you update one field on the site and the link, date and summary change everywhere.`,
        `In nursery website design, inspection frameworks and report formats are a moving target, so we build the Ofsted panel as a flexible block: outcome text, date, a short quote from the report you choose, and the link. That way the site keeps working whatever format your next report takes. If an inspection went less well than you hoped, the same panel can link to a short page on what you have changed since, written in your own words.`,
      ],
      after: [
        `In Scotland, Wales and Northern Ireland different bodies inspect childcare. We label the panel with whichever regulator inspects each of your settings.`,
      ],
    },
    {
      id: "funded-hours",
      heading: "How to explain funded childcare hours on a nursery website",
      paragraphs: [
        `Explain in plain English which funded hours your nursery offers, for which ages, how parents apply and confirm their code, and what you charge on top. Funded hours are the most confusing part of choosing a nursery, and clear answers win enquiries.`,
        `The ${FUNDED} explains that working parents in England may get 30 hours of free childcare a week for children aged 9 months to 4 years, if they meet the work and earnings conditions, and that parents must sign in to their childcare account every three months to confirm their details. It also refers to the separate 15 hours for all 3 to 4 year olds. Link to GOV.UK for eligibility rather than trying to restate every rule, because the rules change.`,
        `What only your own nursery website can explain is how funding works at your setting: which session patterns you offer funded hours in, whether you stretch hours across more weeks, and what is chargeable. Parents do not need a policy document. They need a short page with a worked example in hours, not pounds, and a link to your fees.`,
      ],
      list: [
        "Which funded entitlements you accept, by age",
        "Session patterns funded hours can be used in",
        "Whether hours can be stretched across the year",
        "What parents do: apply, get a code, reconfirm every three months",
        "Link to GOV.UK for eligibility and the Childcare Choices information",
      ],
    },
    {
      id: "fees",
      heading: "Should a nursery publish its fees online?",
      paragraphs: [
        `Yes. Publish session fees, what each session includes and every chargeable extra. Parents shortlist on cost, and the Department for Education's ${GUIDANCE} now includes a “chargeable extras” template that local authorities can use to help providers give information on their websites about costs for chargeable extras and the pattern of hours parents can take their entitlement.`,
        `A good fees page has three parts: a table of full-day, half-day and hourly sessions by age group; a section on funded hours and exactly what is charged alongside them, such as meals, consumables or trips; and a short list of other terms, such as registration fees, deposits, notice periods and late collection. Your local authority's funding agreement and terms decide what you may charge, so your manager or adviser confirms the wording.`,
        `Nursery fees usually change in April and September, so nursery website design should make updates painless. We build the fees table as one editable block, so updating it once changes every page and the waiting-list form's session options together.`,
      ],
    },
    {
      id: "show-rounds",
      heading: "Online show-round booking for nurseries",
      paragraphs: [
        `Good nursery website design lets parents book a visit online from times you control. Working parents want to arrange a show-round at 10pm, not wait for the office to open, and a booked slot is far more likely to turn up than a vague “pop in any time”.`,
        `You set the available windows each week, for example two mid-morning slots and one late-afternoon slot, with a limit per slot so rooms are not disrupted. The parent chooses a time, adds their child's age and preferred start date, and receives a confirmation with directions, parking and what to expect. A reminder goes out the day before.`,
        `Tour requests can come through a simple scheduling tool, your nursery software if it supports visits, or a small custom module. Whatever the tool, the manager sees one list of upcoming visits with each family's details, so the show-round can be tailored to the room their child would join.`,
      ],
    },
    {
      id: "waiting-list",
      heading: "Waiting-list and registration forms on a nursery website",
      paragraphs: [
        `A waiting-list form should capture the child's date of birth, preferred start date, sessions wanted and funding the family expects to use, then land in a list your office can sort by start date and room. Registration, which comes later, collects the fuller details.`,
        `In nursery website design, keep the two separate. A waiting-list form asks for the minimum needed to plan places. Registration collects contact details for several adults, collection passwords, medical needs, allergies, dietary requirements and consents. Much of that is sensitive: information about a child's health is special category data under UK GDPR, so the registration form should be served securely, send data to a protected store or your nursery software rather than email, and be visible only to named staff.`,
        `We build the technical side to support your obligations: HTTPS, restricted access, retention settings you choose and no analytics on form pages. Your privacy notice, lawful basis and retention periods are decisions for you and your adviser.`,
      ],
      list: [
        "Waiting list: child's date of birth, start date, sessions, funding expected",
        "Registration: adults, emergency contacts, health and allergy information",
        "Consents: photos, outings, sun cream, first aid, as your policies require",
        "Documents: proof of birth date and funding code, uploaded securely",
      ],
    },
    {
      id: "parent-app",
      heading: "Linking your parent app (Famly, Blossom and others) to your website",
      paragraphs: [
        `Link to the parent app you already use rather than rebuilding its features on your website. Apps such as Famly and Blossom handle daily updates, learning journals and invoices; the website's job is to win and welcome families, then hand them to the app.`,
        `In nursery website design terms, that means a “Current parents” area in the menu with app login links, app store links for parents' phones, a short guide to what the app is used for, and contacts for the office. Staff links can sit there too, out of the main navigation.`,
        `Some nurseries want waiting-list or registration data to flow straight into their nursery software. Where the software offers an import format or a supported integration, we can connect to it; where it does not, forms export cleanly for the office to import. We use only integrations the software provider officially supports, with access you grant.`,
      ],
    },
    {
      id: "photos",
      heading: "Using photos of children on a nursery website",
      paragraphs: [
        `Use photos only of children whose parents have given written consent for website use, avoid names and identifying details, and prefer shots of hands, activities and rooms over faces. Parents looking at your site notice how carefully you treat other families' children.`,
        `For nursery website design, your photo consent form should cover the website specifically, not only internal displays. We add a simple field to each gallery image recording the consent reference and review date, and the gallery hides any image whose consent has lapsed. File names and alt text never include children's names.`,
        `Well-chosen photos of empty rooms, garden spaces, meals and resources do as much selling as faces. Short captions (“Toddler room garden, used every morning”) help parents picture the day and help search engines understand the page.`,
      ],
    },
    {
      id: "cost",
      heading: "How much does nursery website design cost?",
      paragraphs: [
        `Nursery website design with us starts at ${P.site} for up to 100 pages, which covers most single-setting nurseries. Groups with many settings start at ${P.seoSite}, and a custom registration portal starts at ${P.software}.`,
        `The main cost drivers are the number of settings, whether tour booking uses a ready-made tool or a custom module, how registration data is handled, and how much copy we draft for you. Running costs, such as domain, hosting and any scheduling tool, are paid by you directly.`,
        `Quotes for nursery website design in the UK vary widely, because some include photography and marketing and others rent you a template monthly. Compare what you own at the end and what any monthly fee covers. Our <a href='/uk/website-design-cost/'>UK website cost guide</a> lists the running costs every site carries.`,
      ],
    },
    {
      id: "groups",
      heading: "Nursery website design for groups with several settings",
      paragraphs: [
        `A nursery group needs one brand site with a proper page for each setting, each with its own Ofsted link, fees, opening hours, manager, photos and waiting-list form. Parents choose a setting, not a group, so the setting page must stand on its own.`,
        `Group nursery website design fails when every location page is the same text with a new address. Google treats near-identical pages as thin, and parents can tell. We build a template that forces the unique parts, such as the manager's welcome, the garden, the local walks, the room layout and the inspection outcome, to be filled for each setting.`,
        `Waiting-list forms on a group site should route to the right setting's office automatically, and the fees block should allow different prices per setting where your local authority areas differ.`,
      ],
    },
    {
      id: "local-seo",
      heading: "Local SEO for nurseries: being found when parents search nearby",
      paragraphs: [
        `Parents search locally, so nursery visibility depends on a complete Google Business Profile, consistent details, genuine reviews and a site that clearly states your area, ages and funded hours. Nobody can promise a position, but those foundations decide who shows up.`,
        `Your Google Business Profile should use an accurate childcare category, show opening hours, real photos (with consent) and link to your website. Many local authorities run a Family Information Service directory; keeping your listing there consistent with your site helps both parents and search engines.`,
        `On the website, name your area naturally, mention nearby landmarks parents use (“five minutes from the station”), and answer common searches on-page: “Do you take babies?”, “Do you offer 30 hours?”, “Are you open all year?”. Those question-and-answer sections are also what AI assistants quote. Our <a href='/uk/ai-search-optimisation/'>AI search optimisation</a> page explains more.`,
      ],
    },
    {
      id: "recruitment",
      heading: "Staff recruitment pages on a nursery website",
      paragraphs: [
        `Add a careers page, because staffing decides how many places you can fill. A clear page listing roles, qualifications needed, training and progression, and a short application form brings in candidates who already like your setting.`,
        `When planning nursery website design, remember that early years practitioners compare employers the way parents compare nurseries. Say what makes your setting a good place to work: training funded, ratios, planning time, staff benefits, apprenticeship routes. Keep the application form short, ask for a CV upload and route it to the manager. The same recruitment page doubles as reassurance for parents that you invest in your team.`,
      ],
    },
    {
      id: "remote-team",
      heading: "Working with our team in India on your nursery website",
      paragraphs: [
        `We overlap the UK working day from late morning and reply on WhatsApp seven days a week, which suits nursery managers who catch up on admin at weekends. India is four and a half hours ahead of UK summer time and five and a half hours ahead in winter.`,
        `Calls take place on Teams, Zoom or Meet, usually during nap time or after collection. You receive an itemised quote in USD; payment can be in USD or GBP by Wise, bank wire or PayPal, with invoices from India. Nothing is billed before you approve the quote in writing, and the domain, hosting and code are yours from the start.`,
      ],
      subs: [
        { heading: "Days 1–4", text: "Kick-off call, rooms and ages, fees, funded-hours offer, Ofsted details, photo consent position, sitemap agreed." },
        { heading: "Days 5–9", text: "Pages built on a staging link, fees and funded-hours pages drafted for your review, forms set up." },
        { heading: "Days 10–14", text: "Test tour bookings and waiting-list forms, check on phones, launch, update Google Business Profile." },
      ],
      after: [
        `What we do not do: visit settings, photograph children, advise on funding agreements or give legal advice.`,
      ],
    },
    {
      id: "worked-example",
      heading: "Worked example: a 60-place day nursery in Stockport (hypothetical)",
      paragraphs: [
        `Imagine a 60-place day nursery in Stockport with baby, toddler and preschool rooms, a waiting list kept in a spreadsheet and a parent app for daily updates. This is an illustration of how we would plan the site, not a real client.`,
        `The home page would show ages, hours, the Ofsted outcome with a report link and a show-round button. Room pages would describe each space and routine. A funded-hours page would explain which entitlements the nursery accepts and which sessions they apply to, with an example in hours. The fees page would list sessions and every chargeable extra. Tour booking would offer three slots a week, and the waiting-list form would replace the spreadsheet with a sortable list by start date and room.`,
        `A “Current parents” page would link to the app. Photos would show rooms, garden and activities, with faces only where consent is recorded. The build would sit in the ${P.site} tier, with local search help from ${P.seo} a month if the owner wanted it.`,
      ],
    },
    {
      id: "checklist",
      heading: "Nursery website design checklist before launch",
      paragraphs: [
        `Go through this nursery website design list with your manager and deputy before the site goes live. We test the technical items; you confirm the facts.`,
      ],
      list: [
        "Ofsted outcome, date and report link on the home page",
        "Ages, rooms, opening hours and weeks open per year stated clearly",
        "Funded hours page links to GOV.UK and explains your offer",
        "Fees page lists sessions and every chargeable extra",
        "Show-round booking tested on a phone",
        "Waiting-list and registration forms deliver to a secure destination",
        "Every photo of a child has recorded website consent",
        "Parent app links in a ‘Current parents’ section",
        "Cookie banner keeps analytics off until consent",
        "Google Business Profile links to the website",
      ],
    },
  ],
  tables: [
    {
      id: "parent-questions",
      eyebrow: "Content plan",
      heading: "Parent questions and the page that should answer them",
      note: "Use this to plan your sitemap. Every question a page answers is one fewer phone call to the office.",
      columns: ["Parent's question", "Page that answers it", "What to include"],
      rows: [
        ["Is this nursery any good?", "Home page and Ofsted panel", "Outcome, date, report link, a short quote you choose"],
        ["Can we afford it?", "Fees page", "Sessions by age, chargeable extras, other terms"],
        ["Can we use our funded hours?", "Funded hours page", "Entitlements accepted, session patterns, GOV.UK link"],
        ["What will my child do all day?", "Rooms and day-in-the-life pages", "Routine, activities, outdoor time, sleep"],
        ["What will they eat?", "Food page", "Menus, allergy handling, who cooks"],
        ["Who looks after them?", "Team page", "Manager, room leaders, qualifications, training"],
        ["How do we start?", "Visit and register pages", "Show-round booking, waiting list, settling in"],
      ],
    },
    {
      id: "funded-hours-basics",
      eyebrow: "Funded hours",
      heading: "Funded childcare basics to link from your website (England)",
      note: `Summarised from GOV.UK at the time of writing. Rules change, so link parents to GOV.UK for eligibility rather than restating it.`,
      columns: ["Topic", "What GOV.UK says", "What your site adds"],
      rows: [
        ["Working parents entitlement", "Up to 30 hours a week for eligible working parents of children aged 9 months to 4 years", "Which ages and sessions you offer it in"],
        ["Universal 3 to 4 year old entitlement", "15 hours for all 3 to 4 year olds, a separate scheme", "Whether you offer it and in which sessions"],
        ["Keeping a code valid", "Parents sign in every 3 months to confirm details", "A reminder on the funded hours page"],
        ["Where to live", "Schemes described apply in England", "Links to the right scheme if you are elsewhere"],
        ["Chargeable extras", "DfE template helps providers show costs of extras on websites", "Your full list of extras and prices"],
      ],
    },
    {
      id: "cost-by-scope",
      eyebrow: "Budget",
      heading: "Nursery website design cost by scope",
      note: "Starting prices. Your quote is itemised once we know your settings, forms and content.",
      columns: ["Nursery type", "What the site includes", "Starts at", "Typical time"],
      rows: [
        ["Preschool or pack-away setting", "Sessions, Ofsted, funded hours, fees, waiting list", P.site, "1 week"],
        ["Single day nursery", "Rooms, day in the life, food, team, fees, tours, waiting list", P.site, "1–2 weeks"],
        ["Nursery group", "Setting pages with own Ofsted, fees and forms; 299+ pages", P.seoSite, "3–5 weeks"],
        ["Registration portal", "Secure registration, document upload, staff review, exports", P.software, "6–12 weeks"],
        ["Parent enquiry assistant", "Chat or WhatsApp answers with human handoff", P.ai, "2–4 weeks"],
        ["Uniform or book shop", "Online shop with card and wallet checkout", P.shop, "4–8 weeks"],
      ],
    },
  ],
  areas: {
    eyebrow: "Nurseries around the UK",
    heading: "Nursery website design for settings across the UK",
    note: "We work remotely with nurseries in every nation of the UK. How local demand shapes a nursery website.",
    cards: [
      { name: "London", note: "London nurseries with long opening hours for commuting parents should put hours, fees and funded-hours rules at the top, since families compare many settings nearby." },
      { name: "Stockport", note: "Stockport and south Manchester nurseries serve commuters into the city, so early opening, late collection and parking notes are worth stating clearly." },
      { name: "Bristol", note: "Bristol nurseries with outdoor and forest-school approaches can use garden and outing pages to stand out, with photo consent handled carefully." },
      { name: "Surrey", note: "Surrey towns have many private nurseries competing for the same families, so transparent fees and a well-presented Ofsted panel help parents shortlist quickly." },
      { name: "Hertfordshire", note: "Hertfordshire commuter towns see parents researching before returning to work, so online show-round booking in evening hours suits them well." },
      { name: "Birmingham", note: "Birmingham nursery groups across several postcodes need setting pages with their own manager, Ofsted link and fees so each stands on its own." },
      { name: "Leeds", note: "Leeds nurseries serving growing suburbs benefit from clear waiting-list forms that capture start dates, since baby rooms often fill well in advance." },
      { name: "Kent", note: "Kent nurseries covering rural villages and towns should include catchment notes and travel times so parents know whether the daily drop-off is realistic." },
      { name: "Cambridge", note: "Cambridge nurseries used by university and science-park families often want clear pages on term-time versus all-year places and funded-hours patterns." },
      { name: "Nottingham", note: "Nottingham nurseries can list languages spoken by staff and include translated information you supply and approve for families new to the area." },
      { name: "Milton Keynes", note: "Milton Keynes nurseries near business parks attract working parents who value online registration and document upload rather than paperwork at drop-off." },
      { name: "Edinburgh", note: "Scottish nurseries follow Scotland's own funded early learning scheme and inspection bodies, so we label funding and inspection details for Scotland, not England." },
      { name: "Cardiff", note: "Welsh settings work under Welsh childcare funding and inspection arrangements, and can add Welsh-language content you supply for bilingual families." },
      { name: "Belfast", note: "Northern Ireland nurseries have different funding and registration arrangements, so the site links to the right local information rather than England's schemes." },
    ],
  },
  process: {
    heading: "How we build a nursery website",
    steps: [
      ["Gather the essentials", "You share rooms and ages, session patterns, fees and extras, your funded-hours offer, Ofsted details, photo consent status and the parent app you use."],
      ["Quote and sitemap", "Within about two working days you receive an itemised quote in USD and a sitemap. Nothing is billed until you approve it in writing."],
      ["Draft the hard pages first", "Funded hours, fees and registration are drafted early so your manager and adviser have time to check the wording against your funding agreement."],
      ["Build on staging", "Pages, tour booking and forms go up on a private link. You check them on your phone, and every form is tested to confirm where data arrives."],
      ["Launch and switch links", "We publish on your hosting, connect Search Console, and help update your Google Business Profile and local directory links to point at the site."],
      ["Five months of care", "Fee updates, new staff profiles and fixes are covered free for five months. After that, a care plan is optional."],
    ],
  },
  faqHeading: "Nursery website design: questions nursery owners ask",
  faqs: [
    { question: "How much does nursery website design cost?", answer: `With BtechWaleTech, nursery website design starts at ${P.site} for up to 100 pages, usually built in one to two weeks. Nursery groups with many settings start at ${P.seoSite}, and a custom registration portal starts at ${P.software}. These are starting prices; your quote is itemised once we know your settings, forms and how much copy you need.` },
    { question: "Should our nursery website show our Ofsted rating?", answer: "Yes, near the top of the home page, quoted exactly as Ofsted published it, with the inspection date and a link to the full report. Parents check it anyway. We build a panel you update in one place when a new inspection is published, so the outcome, date and link never fall out of step across the site." },
    { question: "How do we explain 30 hours free childcare on our website?", answer: "Explain which funded entitlements you accept, for which ages, and in which session patterns, then link to GOV.UK for eligibility. GOV.UK says eligible working parents in England may get 30 hours a week for children aged 9 months to 4 years and must reconfirm their details every three months. Add a clear list of anything you charge alongside funded hours." },
    { question: "Should a nursery publish its fees online?", answer: "Yes. Parents shortlist nurseries on cost, and hiding fees usually loses enquiries. Publish sessions by age, what each includes and every chargeable extra. The Department for Education's statutory guidance includes a chargeable extras template that local authorities can use to help providers show those costs on their websites. Your adviser should confirm the wording." },
    { question: "Can parents join our waiting list online?", answer: "Yes. A waiting-list form captures the child's date of birth, preferred start date, sessions and expected funding, and lands in a list your office can sort by start date and room. Registration details come later on a separate, more secure form, so you only collect sensitive information once a place is being offered." },
    { question: "Is it safe to collect children's health information on a website form?", answer: "It can be, with the right set-up. Information about a child's health, such as allergies or medical needs, is special category data under UK GDPR. We build registration forms that are served securely, send data to a protected store or your nursery software rather than email, and are visible only to named staff. Your privacy notice and lawful basis are your decisions." },
    { question: "Can our website connect to Famly or Blossom?", answer: "We link your website to the parent app you use, with login and app store links in a Current parents section, rather than rebuilding its features. Where your nursery software supports an import format or official integration, waiting-list or registration data can flow into it; otherwise forms export cleanly for the office to import." },
    { question: "Can parents book a nursery show-round online?", answer: "Yes. You set the visit windows each week and a limit per slot, parents choose a time, add their child's age and preferred start date, and get a confirmation with directions and a reminder the day before. The manager sees all upcoming visits in one list, so each show-round can focus on the right room." },
    { question: "Can we use photos of children on our nursery website?", answer: "Only with written parental consent that covers website use specifically. Avoid names and identifying details, and favour activities, hands and rooms over faces. We record a consent reference and review date against each gallery image, and images with lapsed consent are hidden automatically. File names and alt text never include children's names." },
    { question: "How long does it take to build a nursery website?", answer: "Most single-setting nurseries launch in one to two weeks after we receive photos, fees, room details and the funded-hours offer. A preschool can be quicker. Nursery group sites take three to five weeks, and custom registration portals six to twelve weeks. The slowest step is usually checking fees and funded-hours wording, so we draft those pages first." },
    { question: "How can our nursery appear when parents search nearby?", answer: `Local visibility depends on a complete Google Business Profile, consistent details, genuine reviews and a website that clearly states your area, ages and funded hours. Keeping your local authority directory listing consistent helps too. Nobody can guarantee positions. Monthly local search help starts at ${P.seo} if you want support after launch.` },
    { question: "Do AI tools like ChatGPT recommend nurseries?", answer: "AI assistants increasingly answer questions such as nurseries with 30 hours near a town. They draw on clear, consistent information: a website stating ages, hours, funded-hours offer and Ofsted outcome in short direct answers, matching details on your Google profile and directories. Question-and-answer sections on your site are exactly what they tend to quote." },
    { question: "Should we use a childcare marketing agency or a small team?", answer: "A childcare marketing agency suits nurseries wanting photography, newsletters and paid social campaigns handled. A small freelance team like ours suits nurseries that want a well-built site they own, with forms and search set-up done properly, at a lower starting price. We work remotely and do not visit settings or take photographs." },
    { question: "Can a team in India handle nursery website design for a UK setting?", answer: "Yes. The build, forms, booking and search set-up are all done remotely. We work from GOV.UK and Ofsted sources and your own policies, and your manager approves every page on a staging link. Our hours overlap the UK day from late morning, and we reply on WhatsApp seven days a week." },
    { question: "Who owns the site after nursery website design is finished?", answer: "Your nursery does. The domain is registered in your name, hosting sits in your account, and the code and content belong to you. We work with access you grant and hand every login over at launch. If you change developer later, there is nothing to buy back or transfer from us." },
    { question: "Does our nursery website need a cookie banner?", answer: "If the site uses analytics, advertising pixels or embedded content that sets non-essential cookies, PECR requires consent before those cookies are set, and the ICO says carrying on browsing does not count as consent. We build a banner with clear accept and reject choices and keep tracking off form pages entirely." },
    { question: "Can we build a site for several nursery settings?", answer: `Yes. A group site gives each setting its own page with its Ofsted link, fees, hours, manager, photos and waiting-list form routed to the right office. We build templates that force unique content per setting so pages do not repeat each other. Larger group builds start at ${P.seoSite}.` },
    { question: "Can our website help recruit nursery staff?", answer: "Yes. A careers page listing roles, required qualifications, training, progression and apprenticeship routes, with a short application form and CV upload routed to the manager, brings in candidates who already know your setting. It also reassures parents that you invest in your team, which matters when they are choosing." },
    { question: "How do we pay for the website from the UK?", answer: "Your quote is itemised in USD. You can pay in USD or GBP through Wise, bank wire or PayPal, and invoices come from India. Payment milestones are written into the quote you approve, and nothing is billed before that. For VAT or tax questions about an overseas supplier, speak to your accountant." },
    { question: "What happens after our nursery website goes live?", answer: `Five months of maintenance are included free: fee updates, new staff profiles, photo refreshes and fixes. After that, care plans start at ${P.care}, or your team can manage the site itself since you hold every login. We build the fees and Ofsted panels so your office can update them without us.` },
    { question: "Do you build nursery websites in Scotland, Wales and Northern Ireland?", answer: "Yes. The build is the same, but funded childcare schemes and inspection bodies differ in each nation. We label funding and inspection panels for the right nation and link parents to the correct official information, rather than using England's scheme wording. You confirm the details for your settings." },
  ],
  related: {
    heading: "Related UK pages for nurseries and care settings",
    links: [
      { name: "UK hub", href: "/uk/" },
      { name: "Care home website design", href: "/uk/care-home-website-design/" },
      { name: "Private clinic website design", href: "/uk/private-clinic-website-design/" },
      { name: "Salon website with booking", href: "/uk/salon-website-with-booking/" },
      { name: "Aesthetics clinic website design", href: "/uk/aesthetics-clinic-website-design/" },
      { name: "Custom booking system development", href: "/uk/booking-system-development/" },
      { name: "Local SEO services UK", href: "/uk/local-seo-services/" },
      { name: "Website accessibility audit UK", href: "/uk/website-accessibility-audit/" },
      { name: "UK GDPR cookie banner", href: "/uk/gdpr-cookie-banner-setup/" },
      { name: "Charity website design", href: "/uk/charity-website-design/" },
      { name: "Offshore web development team", href: "/offshore-web-development-team/" },
      { name: "Contact", href: "/contact/" },
    ],
  },
  cta: {
    heading: "Tell us about your nursery and how parents find you",
    note: `Send your rooms and ages, fees, funded-hours offer and the parent app you use, and we will reply in about two working days with a sitemap and itemised quote. Nursery websites start at ${P.site}.`,
  },
};

export default content;
