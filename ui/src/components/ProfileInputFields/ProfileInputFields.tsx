import { NameInputs } from "../NameInputs/NameInputs";
import { EmailInput } from "../EmailInput/EmailInput";
import { BirthdayInput } from "../BirthdayInput/BirthdayInput";
import { AgeInput } from "../AgeInput/AgeInput";
import { GenderInput } from "../GenderInput/GenderInput";
import { InstagramInput } from "../InstagramInput/InstagramInput";

export const ProfileInputFields: React.FC = () => {
  return (
    <div className="h-4/5 w-full">
      <NameInputs />
      <EmailInput />
      <div className="flex justify-between w-97.5%">
        <BirthdayInput />
        <AgeInput />
        <GenderInput />
      </div>
      <InstagramInput />
    </div>
  );
};
