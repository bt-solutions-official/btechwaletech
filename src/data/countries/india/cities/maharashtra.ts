import type { City } from "@app-types/location";
import { createCity } from "./helpers";

export const maharashtraCities: City[] = [
  createCity("Mumbai", "mumbai", "maharashtra"),
  createCity("Pune", "pune", "maharashtra"),
];
