import { NameInputs } from "../NameInputs/NameInputs";
import { EmailInput } from "../EmailInput/EmailInput";
import { BirthdayInput } from "../BirthdayInput/BirthdayInput";
import { AgeInput } from "../AgeInput/AgeInput";

export const ProfileInputFields: React.FC = () => {
  return (
    <div className="h-4/5 w-full">
      <NameInputs />
      <EmailInput />
      <div className="flex items-center">
        <BirthdayInput />
        <AgeInput />
      </div>
    </div>
  );
};
