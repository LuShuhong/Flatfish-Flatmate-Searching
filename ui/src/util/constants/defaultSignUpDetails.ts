import { SignUpDetails } from "../interfaces/SignUpDetails";
import { convertDateToString } from "../dateConverter";

export const defaultSignUpDetails: SignUpDetails = {
  userId: "",
  password: "",
  name: "",
  birthday: convertDateToString(new Date()),
  age: 0,
  userGender: "SELECT",
  picture:
    "https://i.seadn.io/gae/IJpqaGRflNtIYcpzE4Y9g3Rerxnf5DQj6qL1qHqdFea8jG8P0imxVamF4Tzu-HSLD-adot6skRF_fcJncpmUymqNaNUEuELcvi5YEQ?auto=format&dpr=1&w=1000",
  role: "USER",
  description: "",
  instagram: "",
};
