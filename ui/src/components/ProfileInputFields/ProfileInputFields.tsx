import { NameInputs } from "../NameInputs/NameInputs";
import { EmailInput } from "../EmailInput/EmailInput";
import { BirthdayInput } from "../BirthdayInput/BirthdayInput";
import { AgeInput } from "../AgeInput/AgeInput";
import { GenderInput } from "../GenderInput/GenderInput";

export const ProfileInputFields: React.FC = () => {
  return (
    <div className="h-4/5 w-full">
      <NameInputs />
      <EmailInput />
      <div className="flex justify-between h-1/5 w-97.5%">
        <BirthdayInput />
        <AgeInput />
        <GenderInput />
      </div>
    </div>
  );
};
