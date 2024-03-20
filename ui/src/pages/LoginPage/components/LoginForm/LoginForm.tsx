import { LoginDetails } from "../../../../util/interfaces/LoginDetails";
import { TextInput } from "../../../SignUpPage/components/TextInput/TextInput";
import { LoginButton } from "../LoginButton/LoginButton";
import { RedirectToSignUp } from "../RedirectToSignUp/RedirectToSignUp";

interface Props {
  loginDetails: LoginDetails;
  updateField: (updatedField: Partial<LoginDetails>) => void;
  handleLogin: () => void;
  incorrectLoginDetails: boolean;
}

export const LoginForm: React.FC<Props> = ({
  loginDetails,
  updateField,
  handleLogin,
  incorrectLoginDetails,
}) => {
  const handleEmailChange = (val: string): void => {
    updateField({ userId: val });
  };
  const handlePasswordChange = (val: string): void => {
    updateField({ password: val });
  };
  return (
    <div className="flex items-center h-full w-30%">
      <div className="flex flex-col justify-center h-1/2 w-full">
        <div className="flex justify-center items-center w-full h-1/4 text-lg">
          FlatFish Secure Login
        </div>
        <div className="w-full h-1/4">
          <TextInput
            fieldName="email"
            placeholder="Enter your email"
            type="email"
            mandatory
            value={loginDetails.userId}
            handleChange={handleEmailChange}
          />
        </div>
        <div className="w-full h-1/4">
          <TextInput
            fieldName="password"
            placeholder="Enter password"
            type="password"
            mandatory
            value={loginDetails.password}
            handleChange={handlePasswordChange}
          />
        </div>
        {incorrectLoginDetails && (
          <div className="text-xs text-red-700">
            The username or password you entered is incorrect
          </div>
        )}
        <div className="flex justify-center h-1/4 w-full">
          <div className="flex items-center h-full w-60%">
            <LoginButton handleLogin={handleLogin} />
          </div>
          <div className="h-full w-40%">
            <RedirectToSignUp />
          </div>
        </div>
      </div>
    </div>
  );
};
