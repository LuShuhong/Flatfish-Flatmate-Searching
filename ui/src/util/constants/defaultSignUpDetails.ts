import { SignUpDetails } from "../interfaces/SignUpDetails";
import { convertDateToString } from "../dateConverter";

export const defaultSignUpDetails: SignUpDetails = {
  userId: "",
  password: "0Auth",
  name: "",
  birthday: convertDateToString(new Date()),
  age: 0,
  userGender: "SELECT",
  picture: "",
  role: "USER",
  description: "",
  instagram: "",
};
