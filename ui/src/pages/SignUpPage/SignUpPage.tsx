import { useState } from "react";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";
import { SignUpDetails } from "../../util/interfaces/SignUpDetails";
import { convertDateToString } from "../../util/dateConverter";
import { SignUpFieldWarning } from "../../util/interfaces/SignUpFieldWarning";

export const SignUpPage: React.FC = () => {
  const noWarnings: SignUpFieldWarning = {
    userId: false,
    password: false,
    userGender: false,
    name: false,
    birthday: false,
  };
  const [fieldWarning, setFieldWarning] =
    useState<SignUpFieldWarning>(noWarnings);
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
  const handleRegistration = (): void => {
    if (!signUpDetails.userId) {
      setFieldWarning((w) => ({ ...w, ...{ userId: true } }));
    }
    if (!signUpDetails.password) {
      setFieldWarning((w) => ({ ...w, ...{ password: true } }));
    }
    if (signUpDetails.userGender === "SELECT") {
      setFieldWarning((w) => ({ ...w, ...{ userGender: true } }));
    }
    if (!signUpDetails.name) {
      setFieldWarning((w) => ({ ...w, ...{ name: true } }));
    }
    if (!signUpDetails.age) {
      setFieldWarning((w) => ({ ...w, ...{ birthday: true } }));
    }
  };
  const updateField = (updatedField: Partial<SignUpDetails>): void => {
    setSignUpDetails((details) => ({ ...details, ...updatedField }));
    setFieldWarning(() => noWarnings);
  };
  return (
    <div className="flex justify-center h-full w-full">
      <SignUpForm
        signUpDetails={signUpDetails}
        updateField={updateField}
        handleRegistration={handleRegistration}
        fieldWarning={fieldWarning}
      />
    </div>
  );
};
