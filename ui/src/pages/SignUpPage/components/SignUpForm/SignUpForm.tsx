import { TextInput } from "../TextInput/TextInput";
import { OptionsInput } from "../OptionsInput/OptionsInput";
import { Birthday } from "../Birthday/Birthday";
import { Age } from "../Age/Age";
import { Description } from "../Description/Description";
import { RegisterButton } from "../RegisterButton/RegisterButton";
import { RedirectToLogin } from "../RedirectToLogin/RedirectToLogin";
import { SignUpDetails } from "../../../../util/interfaces/SignUpDetails";
import { getAge } from "../../../../util/ageCalculator";
import { SignUpFieldWarning } from "../../../../util/interfaces/SignUpFieldWarning";

interface Props {
  signUpDetails: SignUpDetails;
  updateField: (updatedField: Partial<SignUpDetails>) => void;
  handleRegistration: () => void;
  fieldWarning: SignUpFieldWarning;
  userInDb: boolean;
}

export const SignUpForm: React.FC<Props> = ({
  signUpDetails,
  updateField,
  handleRegistration,
  fieldWarning,
  userInDb,
}) => {
  const handleNameChange = (val: string): void => updateField({ name: val });
  const handleGenderChange = (val: "MALE" | "FEMALE" | "SELECT"): void =>
    updateField({ userGender: val });
  const handleEmailChange = (val: string): void => updateField({ userId: val });
  const handlePasswordChange = (val: string): void =>
    updateField({ password: val });
  const handleBirthdayChange = (val: string): void => {
    updateField({ birthday: val });
    updateField({ age: getAge(val) });
  };
  const handleInstagramChange = (val: string): void =>
    updateField({ instagram: val });
  const handleDescriptionChange = (val: string): void =>
    updateField({ description: val });
  return (
    <div className="h-full w-30%">
      <div className="flex h-1/8 w-full">
        <div className="flex items-center w-2/3 h-full">
          <TextInput
            fieldName="name"
            placeholder="John"
            type="text"
            mandatory
            value={signUpDetails.name}
            handleChange={handleNameChange}
            warning={fieldWarning.name}
          />
        </div>
        <div className="w-1/3">
          <OptionsInput
            fieldName="gender"
            value={signUpDetails.userGender}
            handleChange={handleGenderChange}
            warning={fieldWarning.userGender}
          />
        </div>
      </div>
      <div className="flex h-1/8 w-full">
        <TextInput
          fieldName="email"
          placeholder="johnsmith69@gmail.com"
          type="email"
          mandatory
          value={signUpDetails.userId}
          handleChange={handleEmailChange}
          warning={fieldWarning.userId}
        />
      </div>
      <div className="flex h-1/8 w-full">
        <TextInput
          fieldName="password"
          placeholder="Enter password ..."
          type="password"
          mandatory
          value={signUpDetails.password}
          handleChange={handlePasswordChange}
          warning={fieldWarning.password}
        />
      </div>
      <div className="flex h-1/8 w-full">
        <div className="flex items-center w-2/3 h-full">
          <Birthday
            value={signUpDetails.birthday}
            handleChange={handleBirthdayChange}
            warning={fieldWarning.birthday}
          />
        </div>
        <div className="w-1/3">
          <Age value={signUpDetails.age} />
        </div>
      </div>
      <div className="flex h-1/8 w-full">
        <TextInput
          fieldName="instagram"
          placeholder="JohnSmithInstaFollow"
          type="text"
          value={signUpDetails.instagram}
          handleChange={handleInstagramChange}
        />
      </div>
      <div className="flex flex-col h-1/4 w-full">
        <Description
          value={signUpDetails.description}
          handleChange={handleDescriptionChange}
        />
        {userInDb && (
          <div className="text-xs text-red-700">
            Email already registered, please login
          </div>
        )}
      </div>
      <div className="flex justify-center h-1/8 w-full">
        <div className="flex items-center h-full w-60%">
          <RegisterButton handleRegistration={handleRegistration} />
        </div>
        <div className="h-full w-40%">
          <RedirectToLogin />
        </div>
      </div>
    </div>
  );
};
