import { Preference } from "../interfaces/Preference";
import { MIN_AGE, MAX_AGE } from "./age";
import { MIN_BUDGET, MAX_BUDGET } from "./budget";

export const defaultPreferences: Preference = {
  gender: "none",
  ageRange: [MIN_AGE, MAX_AGE],
  budgetRange: [MIN_BUDGET, MAX_BUDGET],
  location: "Select",
};
