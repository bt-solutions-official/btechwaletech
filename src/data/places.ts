/**
 * Places with their own /{place}/{service}/ page set, rendered by FreelancePage.
 * Each place keeps its plan (pages.json), hub copy (hub.ts) and pages (content/*.ts) in src/data/{dir}/.
 */
export interface Place {
  /** Shown in the quote card and meeting button, e.g. "Bhiwadi". */
  name: string;
  /** Hub path; service pages live under it. */
  path: string;
  /** Breadcrumbs after Home, ending with the hub. */
  crumbs: { label: string; href: string }[];
  /** schema.org areaServed for the ProfessionalService. */
  areaServed: Record<string, unknown>[];
  /** Set where we meet clients in person: adds the meeting button and quote-card line. */
  meetIn?: string;
}

export const bhiwadi: Place = {
  name: "Bhiwadi",
  path: "/bhiwadi-rajasthan/",
  crumbs: [
    { label: "India", href: "/india/" },
    { label: "Rajasthan", href: "/india/rajasthan/" },
    { label: "Bhiwadi", href: "/bhiwadi-rajasthan/" },
  ],
  areaServed: [
    { "@type": "City", name: "Bhiwadi", containedInPlace: { "@type": "State", name: "Rajasthan" } },
    { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 28.21, longitude: 76.87 }, geoRadius: 30000 },
  ],
  meetIn: "Bhiwadi",
};

export const gujarat: Place = {
  name: "Gujarat",
  path: "/gujarat/",
  crumbs: [
    { label: "India", href: "/india/" },
    { label: "Gujarat", href: "/india/gujarat/" },
    { label: "Website development", href: "/gujarat/" },
  ],
  areaServed: [{ "@type": "State", name: "Gujarat", containedInPlace: { "@type": "Country", name: "India" } }],
};
