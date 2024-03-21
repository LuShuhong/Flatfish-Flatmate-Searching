import { LoginForm } from "./components/LoginForm/LoginForm";
import { LoginDetails } from "../../util/interfaces/LoginDetails";
import { useState } from "react";
import { post } from "../../requests/postRequests";
import { useNavigate } from "react-router-dom";
import { SignUpDetails } from "../../util/interfaces/SignUpDetails";

interface Props {
  setUser: React.Dispatch<React.SetStateAction<SignUpDetails>>;
}

export const LoginPage: React.FC<Props> = ({ setUser }) => {
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
    post("https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/auth/login", loginDetails)
      .then((resp) => {
        if (resp.ok) {
          fetch(`https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/users/${loginDetails.userId}`)
            .then((resp) => resp.json())
            .then((data) => setUser(() => data))
            .catch((err) => console.log(err));
          navigate("/home");
        } else {
          setIncorrectLoginDetails(() => true);
        }
      })
      .catch((error) => console.log(error));
  };

  // http://localhost:8080/api/v1/
  // https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/

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
