import { Preference } from "./Preference";

const MIN_AGE: number = 16,
  MAX_AGE: number = 100;
const MIN_BUDGET: number = 16,
  MAX_BUDGET: number = 100;

export const defaultPreferences: Preference = {
  gender: "none",
  ageRange: [MIN_AGE, MAX_AGE],
  budgetRange: [MIN_BUDGET, MAX_BUDGET],
  location: "Select",
};
