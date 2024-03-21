export interface SignUpDetails {
  userId: string;
  password: string;
  name: string;
  birthday: string;
  age: number;
  userGender: "MALE" | "FEMALE" | "SELECT";
  picture: string;
  role: "USER" | "ADMIN";
  description: string;
  instagram: string;
}
