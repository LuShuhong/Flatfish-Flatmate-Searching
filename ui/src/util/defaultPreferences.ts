import { Preference } from "./Preference";

const MIN_AGE: number = 16,
  MAX_AGE: number = 80;
const MIN_BUDGET: number = 16,
  MAX_BUDGET: number = 80;

export const defaultPreferences: Preference = {
  gender: "na",
  ageRange: [MIN_AGE, MAX_AGE],
  budgetRange: [MIN_BUDGET, MAX_BUDGET],
  location: "",
};
