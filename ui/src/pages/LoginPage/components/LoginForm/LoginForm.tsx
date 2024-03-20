import { TextInput } from "../../../SignUpPage/components/TextInput/TextInput";
import { LoginButton } from "../LoginButton/LoginButton";
import { RedirectToSignUp } from "../RedirectToSignUp/RedirectToSignUp";

export const LoginForm: React.FC = () => {
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
            mandatory={true}
          />
        </div>
        <div className="w-full h-1/4">
          <TextInput
            fieldName="password"
            placeholder="Enter password"
            type="password"
            mandatory={true}
          />
        </div>
        <div className="flex justify-center h-1/4 w-full">
          <div className="flex items-center h-full w-60%">
            <LoginButton />
          </div>
          <div className="h-full w-40%">
            <RedirectToSignUp />
          </div>
        </div>
      </div>
    </div>
  );
};
