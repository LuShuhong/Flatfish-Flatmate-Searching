import { TextInput } from "../../SignUpPage/components/TextInput/TextInput";

export const LoginForm: React.FC = () => {
  return (
    <div className="flex items-center h-full w-30%">
      <div className="flex flex-col justify-center h-2/5 w-full">
        <div className="flex justify-center items-end w-full h-1/4 text-lg">
          FlatFish Secure Login
        </div>
        <div className="w-full h-1/3">
          <TextInput
            fieldName="email"
            placeholder="Enter your email"
            type="email"
            mandatory={true}
          />
        </div>
        <div className="w-full h-1/3">
          <TextInput
            fieldName="password"
            placeholder="Enter password"
            type="password"
            mandatory={true}
          />
        </div>
      </div>
    </div>
  );
};
