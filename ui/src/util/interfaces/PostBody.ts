export interface PostBody {
  userId: string;
  budgetMin: number;
  budgetMax: number;
  ageMin: number;
  ageMax: number;
  gender: "MALE" | "FEMALE" | "UNSPECIFIED";
  smoker: boolean;
  location: string;
}
