export interface Preference {
  preferenceId?: string;
  gender: "m" | "f" | "none";
  ageRange: [min: number, max: number];
  budgetRange: [min: number, max: number];
  location: string;
}
