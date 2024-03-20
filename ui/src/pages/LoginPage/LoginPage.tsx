import { LoginForm } from "./components/LoginForm/LoginForm";
import { LoginDetails } from "../../util/interfaces/LoginDetails";
import { useState } from "react";

export const LoginPage: React.FC = () => {
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    userId: "",
    password: "",
  });
  const updateField = (updatedField: Partial<LoginDetails>): void => {
    setLoginDetails((details) => ({ ...details, ...updatedField }));
  };
  return (
    <div className="flex justify-center h-full w-full">
      <LoginForm loginDetails={loginDetails} updateField={updateField} />
    </div>
  );
};
