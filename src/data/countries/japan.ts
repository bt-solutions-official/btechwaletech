import { pricingPlans } from "@data/pricing/plans";
import { siteBrand, siteContact } from "@data/site/site-config";
import { usd } from "@data/countries/international";
import { canonicalUrl } from "@lib/urls/url-utils";

/** Yen figures are for comparison with Japanese quotes only; the written quote fixes the real amount. */
export const JPY_PER_USD = 155;

/** "¥23,000" or "¥19,000/mo", rounded to the nearest ¥1,000. */
export const jpy = (prefix: string) => {
  const u = usd(prefix);
  const yen = Math.round((Number(u.replace(/[^\d]/g, "")) * JPY_PER_USD) / 1000) * 1000;
  return `¥${yen.toLocaleString("en-US")}${u.endsWith("/mo") ? "/mo" : ""}`;
};

/** "US$150 (about ¥23,000)". */
export const both = (prefix: string) => `${usd(prefix)} (about ${jpy(prefix)})`;

/** Marks Japanese terms inside set:html paragraphs for screen readers and search engines. */
export const ja = (text: string) => `<span lang="ja">${text}</span>`;

/** Japan's 8 regions and 47 prefectures. */
export const japanRegions = [
  { name: "Hokkaido", prefectures: ["Hokkaido"] },
  { name: "Tohoku", prefectures: ["Aomori", "Iwate", "Miyagi", "Akita", "Yamagata", "Fukushima"] },
  { name: "Kanto", prefectures: ["Ibaraki", "Tochigi", "Gunma", "Saitama", "Chiba", "Tokyo", "Kanagawa"] },
  { name: "Chubu", prefectures: ["Niigata", "Toyama", "Ishikawa", "Fukui", "Yamanashi", "Nagano", "Gifu", "Shizuoka", "Aichi"] },
  { name: "Kansai", prefectures: ["Mie", "Shiga", "Kyoto", "Osaka", "Hyogo", "Nara", "Wakayama"] },
  { name: "Chugoku", prefectures: ["Tottori", "Shimane", "Okayama", "Hiroshima", "Yamaguchi"] },
  { name: "Shikoku", prefectures: ["Tokushima", "Kagawa", "Ehime", "Kochi"] },
  { name: "Kyushu and Okinawa", prefectures: ["Fukuoka", "Saga", "Nagasaki", "Kumamoto", "Oita", "Miyazaki", "Kagoshima", "Okinawa"] },
];

/** Tokyo, the 20 designated cities and other regional capitals, for schema areaServed. */
export const japanCities = [
  "Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kawasaki", "Kyoto", "Saitama", "Hiroshima",
  "Sendai", "Chiba", "Kitakyushu", "Sakai", "Niigata", "Hamamatsu", "Kumamoto", "Sagamihara", "Shizuoka", "Okayama",
  "Naha", "Kanazawa", "Kagoshima", "Matsuyama", "Takamatsu", "Nagasaki",
];

const japan = { "@type": "Country", name: "Japan" };

/** Country, all 47 prefectures and the main cities, for schema areaServed. */
export const japanAreaServed = [
  japan,
  ...japanRegions
    .flatMap((r) => r.prefectures)
    .map((p) => ({ "@type": "State", name: p === "Tokyo" ? "Tokyo Metropolis" : p === "Hokkaido" ? p : `${p} Prefecture`, containedInPlace: japan })),
  ...japanCities.map((name) => ({ "@type": "City", name, containedInPlace: japan })),
];

/**
 * WebPage + Service schema for a /japan/<service>/ page. The team is in India and serves
 * Japan remotely, so the provider address stays IN and Japan goes in areaServed only.
 */
export function japanServiceSchema(o: { path: string; title: string; description: string; serviceName: string; serviceType: string; plans: string[] }) {
  const url = canonicalUrl(o.path);
  const plans = o.plans.map((prefix) => {
    const plan = pricingPlans.find((p) => p.name.startsWith(prefix));
    if (!plan) throw new Error(`Unknown pricing plan: ${prefix}`);
    return plan;
  });
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: o.title,
      description: o.description,
      inLanguage: "en-JP",
      about: { "@id": `${url}#service` },
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["#quick-answer", "h1"] },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: o.serviceName,
      serviceType: o.serviceType,
      description: o.description,
      url,
      provider: {
        "@type": "ProfessionalService",
        name: siteBrand.name,
        url: siteBrand.domain,
        email: siteContact.email,
        telephone: siteContact.phone,
        image: `${siteBrand.domain}/banner_logo.png`,
        address: { "@type": "PostalAddress", addressCountry: "IN" },
      },
      areaServed: japanAreaServed,
      availableLanguage: ["en"],
      offers: plans.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: p.includes.join(", "),
        url,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: Number(usd(p.name).replace(/[^\d]/g, "")),
          priceCurrency: "USD",
        },
      })),
    },
  ];
}
