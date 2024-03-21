export interface PutBody {
  preferenceId: string;
  budgetMin: number;
  budgetMax: number;
  ageMin: number;
  ageMax: number;
  gender: "MALE" | "FEMALE" | "UNSPECIFIED";
  location1: string;
  location2: string;
  location3: string;
}
