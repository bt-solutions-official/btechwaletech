/**
 * Languages the site is being translated into.
 *
 * A translated route is only emitted when real translated content exists for that
 * page, so a half-finished language never produces English pages sitting on a
 * Hindi URL. That is the one rule that keeps this from turning into duplicate
 * content at scale.
 *
 * `review: true` keeps every page in that language out of the index until a
 * native speaker has signed the copy off. Flip it to false per language to go live.
 */
export interface Locale {
  /** URL segment: /hi/..., /gu/..., and so on. English has none. */
  code: string;
  /** Value for <html lang>. */
  htmlLang: string;
  /** Text direction for <html dir>. */
  dir: "ltr" | "rtl";
  /** Name of the language, written in that language. */
  label: string;
  /** Short badge shown in the selector button. */
  short: string;
  /** og:locale value. */
  ogLocale: string;
  /** True while the copy is awaiting native review: pages stay noindex. */
  review: boolean;
}

export const defaultLocale: Locale = {
  code: "",
  htmlLang: "en-IN",
  dir: "ltr",
  label: "English",
  short: "EN",
  ogLocale: "en_IN",
  review: false,
};

export const translatedLocales: Locale[] = [
  { code: "hi", htmlLang: "hi-IN", dir: "ltr", label: "हिन्दी", short: "HI", ogLocale: "hi_IN", review: true },
  { code: "gu", htmlLang: "gu-IN", dir: "ltr", label: "ગુજરાતી", short: "GU", ogLocale: "gu_IN", review: true },
  { code: "ta", htmlLang: "ta-IN", dir: "ltr", label: "தமிழ்", short: "TA", ogLocale: "ta_IN", review: true },
  { code: "ar", htmlLang: "ar", dir: "rtl", label: "العربية", short: "AR", ogLocale: "ar_AE", review: true },
];

export const allLocales: Locale[] = [defaultLocale, ...translatedLocales];

export const localeByCode = new Map(allLocales.map((l) => [l.code, l]));

/** "/hi/pricing/" for hi, "/pricing/" for English. */
export function localePath(code: string, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return code ? `/${code}${clean}` : clean;
}
