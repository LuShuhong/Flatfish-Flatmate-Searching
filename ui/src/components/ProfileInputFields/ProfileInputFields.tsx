import { NameInputs } from "../NameInputs/NameInputs";
import { EmailInput } from "../EmailInput/EmailInput";

export const ProfileInputFields: React.FC = () => {
  return (
    <div className="h-4/5 w-full">
      <NameInputs />
      <EmailInput fieldEmail="email" />
    </div>
  );
};
