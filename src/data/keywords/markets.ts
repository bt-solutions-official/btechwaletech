/** A country with /{slug}/{service}/ keyword pages (src/data/keywords/countries/{slug}/*.ts). */
export interface Market {
  slug: string;
  name: string;
  /** Open Graph locale, e.g. "en_US". */
  locale: string;
  /** WebPage inLanguage, e.g. "en-US". */
  lang: string;
}

export const markets: Market[] = [
  { slug: "usa", name: "United States", locale: "en_US", lang: "en-US" },
  { slug: "uk", name: "United Kingdom", locale: "en_GB", lang: "en-GB" },
  { slug: "canada", name: "Canada", locale: "en_CA", lang: "en-CA" },
  { slug: "australia", name: "Australia", locale: "en_AU", lang: "en-AU" },
  { slug: "uae", name: "United Arab Emirates", locale: "en_AE", lang: "en-AE" },
  { slug: "singapore", name: "Singapore", locale: "en_SG", lang: "en-SG" },
  { slug: "germany", name: "Germany", locale: "en_DE", lang: "en-DE" },
  { slug: "saudi-arabia", name: "Saudi Arabia", locale: "en_SA", lang: "en-SA" },
  { slug: "netherlands", name: "Netherlands", locale: "en_NL", lang: "en-NL" },
  { slug: "new-zealand", name: "New Zealand", locale: "en_NZ", lang: "en-NZ" },
  { slug: "japan", name: "Japan", locale: "en_JP", lang: "en-JP" },
];
