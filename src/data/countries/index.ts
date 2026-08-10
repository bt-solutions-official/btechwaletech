import type { Country } from "@app-types/location";

export const countries: Country[] = [
  { name: "India", slug: "india", isoCode: "IN", path: "/india/", enabled: true },
  { name: "United Arab Emirates", slug: "uae", isoCode: "AE", path: "/uae/", enabled: false },
  { name: "Australia", slug: "australia", isoCode: "AU", path: "/australia/", enabled: false },
  { name: "United States", slug: "usa", isoCode: "US", path: "/usa/", enabled: false },
];
