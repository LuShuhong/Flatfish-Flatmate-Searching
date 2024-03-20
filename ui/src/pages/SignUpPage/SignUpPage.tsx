import { useState } from "react";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";
import { SignUpDetails } from "../../util/interfaces/SignUpDetails";
import { convertDateToString } from "../../util/dateConverter";

export const SignUpPage: React.FC = () => {
  const [signUpDetails, setSignUpDetails] = useState<SignUpDetails>({
    userId: "",
    password: "",
    name: "",
    birthday: convertDateToString(new Date()),
    age: 0,
    userGender: "SELECT",
    picture: "",
    role: "USER",
    description: "",
    instagram: "",
  });
  const updateField = (updatedField: Partial<SignUpDetails>): void =>
    setSignUpDetails((details) => ({ ...details, ...updatedField }));
  return (
    <div className="flex justify-center h-full w-full">
      <SignUpForm signUpDetails={signUpDetails} updateField={updateField} />
    </div>
  );
};
