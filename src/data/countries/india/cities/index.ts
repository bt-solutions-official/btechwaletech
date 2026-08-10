import { delhiCities } from "./delhi";
import { gujaratCities } from "./gujarat";
import { haryanaCities } from "./haryana";
import { karnatakaCities } from "./karnataka";
import { keralaCities } from "./kerala";
import { maharashtraCities } from "./maharashtra";
import { rajasthanCities } from "./rajasthan";
import { tamilNaduCities } from "./tamil-nadu";
import { telanganaCities } from "./telangana";
import { uttarPradeshCities } from "./uttar-pradesh";
import { westBengalCities } from "./west-bengal";

export const indiaCities = [
  ...delhiCities,
  ...haryanaCities,
  ...maharashtraCities,
  ...karnatakaCities,
  ...uttarPradeshCities,
  ...telanganaCities,
  ...tamilNaduCities,
  ...rajasthanCities,
  ...gujaratCities,
  ...westBengalCities,
  ...keralaCities,
];

export function getIndiaCity(regionSlug: string, citySlug: string) {
  const city = indiaCities.find((item) => item.regionSlug === regionSlug && item.slug === citySlug);
  if (!city) throw new Error(`Unknown India city route: ${regionSlug}/${citySlug}`);
  return city;
}
