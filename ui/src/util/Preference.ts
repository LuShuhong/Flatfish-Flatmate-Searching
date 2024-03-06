export interface Preference {
  id: number;
  gender: "m" | "f" | "na";
  ageRange: [min: number, max: number];
  budgetRange: [min: number, max: number];
  location: string;
}
