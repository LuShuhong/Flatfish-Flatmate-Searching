import { TextInput } from "../TextInput/TextInput";
import { OptionsInput } from "../OptionsInput/OptionsInput";
import { Birthday } from "../Birthday/Birthday";
import { Age } from "../Age/Age";
import { Description } from "../Description/Description";
import { RegisterButton } from "../RegisterButton/RegisterButton";
import { RedirectToLogin } from "../RedirectToLogin/RedirectToLogin";

export const SignUpForm: React.FC = () => {
  return (
    <div className="h-full w-30%">
      <div className="flex h-1/8 w-full">
        <div className="flex items-center w-2/3 h-full">
          <TextInput
            fieldName="name"
            placeholder="John"
            type="text"
            mandatory={true}
          />
        </div>
        <div className="w-1/3">
          <OptionsInput fieldName="gender" />
        </div>
      </div>
      <div className="flex h-1/8 w-full">
        <TextInput
          fieldName="email"
          placeholder="johnsmith69@gmail.com"
          type="email"
          mandatory={true}
        />
      </div>
      <div className="flex h-1/8 w-full">
        <TextInput
          fieldName="password"
          placeholder="Enter password ..."
          type="password"
          mandatory={true}
        />
      </div>
      <div className="flex h-1/8 w-full">
        <div className="flex items-center w-2/3 h-full">
          <Birthday />
        </div>
        <div className="w-1/3">
          <Age />
        </div>
      </div>
      <div className="flex h-1/8 w-full">
        <TextInput
          fieldName="instagram"
          placeholder="JohnSmithInstaFollow"
          type="text"
          mandatory={false}
        />
      </div>
      <div className="flex h-1/4 w-full">
        <Description />
      </div>
      <div className="flex justify-center h-1/8 w-full">
        <div className="flex items-center h-full w-60%">
          <RegisterButton />
        </div>
        <div className="h-full w-40%">
          <RedirectToLogin />
        </div>
      </div>
    </div>
  );
};
