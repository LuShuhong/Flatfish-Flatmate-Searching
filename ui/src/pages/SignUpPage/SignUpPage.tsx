import { useState } from "react";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";
import { SignUpDetails } from "../../util/interfaces/SignUpDetails";
import { convertDateToString } from "../../util/dateConverter";
import { SignUpFieldWarning } from "../../util/interfaces/SignUpFieldWarning";
import { post } from "../../requests/postRequests";
import { useNavigate } from "react-router-dom";

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
  const [userInDb, setUserInDb] = useState<boolean>(false);
  const [signUpDetails, setSignUpDetails] = useState<SignUpDetails>({
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
  });
  const navigate = useNavigate();
  const handleRegistration = (): void => {
    let warnings = 0;
    if (!signUpDetails.userId) {
      setFieldWarning((w) => ({ ...w, ...{ userId: true } }));
      warnings++;
    }
    if (!signUpDetails.password) {
      setFieldWarning((w) => ({ ...w, ...{ password: true } }));
      warnings++;
    }
    if (signUpDetails.userGender === "SELECT") {
      setFieldWarning((w) => ({ ...w, ...{ userGender: true } }));
      warnings++;
    }
    if (!signUpDetails.name) {
      setFieldWarning((w) => ({ ...w, ...{ name: true } }));
      warnings++;
    }
    if (!signUpDetails.age) {
      setFieldWarning((w) => ({ ...w, ...{ birthday: true } }));
      warnings++;
    }

    if (!warnings) {
      fetch(`http://localhost:8080/api/v1/users/${signUpDetails.userId}`)
        .then((resp) => {
          if (resp.ok) {
            setUserInDb(() => true);
          } else {
            post(
              "http://localhost:8080/api/v1/auth/register",
              signUpDetails
            ).catch((err) => console.log(err));
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const updateField = (updatedField: Partial<SignUpDetails>): void => {
    setSignUpDetails((details) => ({ ...details, ...updatedField }));
    setFieldWarning(() => noWarnings);
    setUserInDb(() => false);
  };
  return (
    <div className="flex justify-center h-full w-full">
      <SignUpForm
        signUpDetails={signUpDetails}
        updateField={updateField}
        handleRegistration={handleRegistration}
        fieldWarning={fieldWarning}
        userInDb={userInDb}
      />
    </div>
  );
};
