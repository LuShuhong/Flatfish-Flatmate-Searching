import { NameInputs } from "../NameInputs/NameInputs";
import { EmailInput } from "../EmailInput/EmailInput";
import { BirthdayInput } from "../BirthdayInput/BirthdayInput";

export const ProfileInputFields: React.FC = () => {
  return (
    <div className="h-4/5 w-full">
      <NameInputs />
      <EmailInput />
      <BirthdayInput />
    </div>
  );
};
