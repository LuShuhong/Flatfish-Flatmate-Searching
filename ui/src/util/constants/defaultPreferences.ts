import { Preference } from "../interfaces/Preference";
import { MIN_AGE, MAX_AGE } from "./age";
import { MIN_BUDGET, MAX_BUDGET } from "./budget";

export const defaultPreferences: Preference = {
  userId: "",
  gender: "UNSPECIFIED",
  ageRange: [MIN_AGE, MAX_AGE],
  budgetRange: [MIN_BUDGET, MAX_BUDGET],
  location: "Select",
};
