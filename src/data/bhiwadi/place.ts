/**
 * The Indian town with its own /{place}/{service}/ page set (content in ./content, plan in ./pages.json).
 * FreelancePage uses it for breadcrumbs, City areaServed schema and the in-person meeting button.
 */
export const bhiwadi = {
  name: "Bhiwadi",
  state: "Rajasthan",
  stateHref: "/india/rajasthan/",
  path: "/bhiwadi-rajasthan/",
  lat: 28.21,
  lng: 76.87,
};

export type Place = typeof bhiwadi;
