import { useState } from "react";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";
import { SignUpDetails } from "../../util/interfaces/SignUpDetails";
import { SignUpFieldWarning } from "../../util/interfaces/SignUpFieldWarning";
import { post } from "../../requests/postRequests";
import { useNavigate } from "react-router-dom";
import React from "react";
interface Props {
  user: SignUpDetails;
  updateField: (updatedField: Partial<SignUpDetails>) => void;
  fieldWarning: SignUpFieldWarning;
  setFieldWarning: React.Dispatch<React.SetStateAction<SignUpFieldWarning>>;
  makeNavBarVisible: () => void;
}

export const SignUpPage: React.FC<Props> = ({
  user,
  updateField,
  fieldWarning,
  setFieldWarning,
  makeNavBarVisible,
}) => {
  const navigate = useNavigate();

  const [postFailed, setPostFailed] = useState<boolean>(false);

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

    // http://localhost:8080/api/v1/
    // https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/
    if (!warnings) {
      post("http://localhost:8080/api/v1", user)
        .then((resp) => {
          if (!resp.ok) {
            setPostFailed(() => true);
          } else {
            makeNavBarVisible();
            navigate("/home");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex justify-center h-full w-full">
      <SignUpForm
        user={user}
        updateField={updateField}
        handleRegistration={handleRegistration}
        fieldWarning={fieldWarning}
        postFailed={postFailed}
      />
    </div>
  );
};
