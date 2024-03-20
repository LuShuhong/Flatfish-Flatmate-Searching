import { LoginForm } from "./components/LoginForm/LoginForm";
import { LoginDetails } from "../../util/interfaces/LoginDetails";
import { useState } from "react";
import { post } from "../../requests/postRequests";
import { useNavigate } from "react-router-dom";

interface Props {
  setLoggedInId: React.Dispatch<React.SetStateAction<string>>;
}

export const LoginPage: React.FC<Props> = ({ setLoggedInId }) => {
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    userId: "",
    password: "",
  });
  const [incorrectLoginDetails, setIncorrectLoginDetails] =
    useState<boolean>(false);
  const updateField = (updatedField: Partial<LoginDetails>): void => {
    setLoginDetails((details) => ({ ...details, ...updatedField }));
  };
  const navigate = useNavigate();
  const handleLogin = (): void => {
    post("http://localhost:8080/api/v1/auth/login", loginDetails)
      .then((resp) => {
        if (resp.ok) {
          setLoggedInId(() => loginDetails.userId);
          navigate("/home");
        } else {
          setIncorrectLoginDetails(() => true);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-center h-full w-full">
      <LoginForm
        loginDetails={loginDetails}
        updateField={updateField}
        handleLogin={handleLogin}
        incorrectLoginDetails={incorrectLoginDetails}
      />
    </div>
  );
};
