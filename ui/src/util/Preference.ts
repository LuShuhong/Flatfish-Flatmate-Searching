export interface Preference {
  preferenceId?: string;
  gender: "m" | "f" | "na";
  ageRange: [min: number, max: number];
  budgetRange: [min: number, max: number];
  location: string;
}
