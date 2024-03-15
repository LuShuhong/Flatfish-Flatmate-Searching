export interface Preference {
  userId: string;
  gender: "MALE" | "FEMALE" | "UNSPECIFIED";
  ageRange: [min: number, max: number];
  budgetRange: [min: number, max: number];
  location: string;
}
