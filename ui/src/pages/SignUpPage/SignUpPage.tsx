import { useState } from "react";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";
import { SignUpDetails } from "../../util/interfaces/SignUpDetails";
import { SignUpFieldWarning } from "../../util/interfaces/SignUpFieldWarning";
import { post } from "../../requests/postRequests";
import { useNavigate } from "react-router-dom";

interface Props {
  user: SignUpDetails;
}

export const SignUpPage: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate();
  if (user.age) {
    navigate("/home");
  }
  const noWarnings: SignUpFieldWarning = {
    userId: false,
    password: false,
    userGender: false,
    name: false,
    birthday: false,
  };
  const [fieldWarning, setFieldWarning] =
    useState<SignUpFieldWarning>(noWarnings);
  const handleRegistration = (): void => {
    let warnings = 0;
    if (!user.userId) {
      setFieldWarning((w) => ({ ...w, ...{ userId: true } }));
      warnings++;
    }
    if (!user.password) {
      setFieldWarning((w) => ({ ...w, ...{ password: true } }));
      warnings++;
    }
    if (user.userGender === "SELECT") {
      setFieldWarning((w) => ({ ...w, ...{ userGender: true } }));
      warnings++;
    }
    if (!user.name) {
      setFieldWarning((w) => ({ ...w, ...{ name: true } }));
      warnings++;
    }
    if (!user.age) {
      setFieldWarning((w) => ({ ...w, ...{ birthday: true } }));
      warnings++;
    }

    if (!warnings) {
      // fetch(`http://localhost:8080/api/v1/users/${signUpDetails.userId}`)
      //   .then((resp) => {
      //     if (resp.ok) {
      //     } else {
      //       console.log(signUpDetails);
      //       post(
      //         "http://localhost:8080/api/v1/auth/register",
      //         signUpDetails
      //       ).catch((err) => console.log(err));
      //       navigate("/home");
      //     }
      //   })
      //   .catch((err) => console.log(err));
    }
  };
  const updateField = (updatedField: Partial<SignUpDetails>): void => {};

  return (
    <div className="flex justify-center h-full w-full">
      <SignUpForm
        user={user}
        updateField={updateField}
        handleRegistration={handleRegistration}
        fieldWarning={fieldWarning}
      />
    </div>
  );
};
