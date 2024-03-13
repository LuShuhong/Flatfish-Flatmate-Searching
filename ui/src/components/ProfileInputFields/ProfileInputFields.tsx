import { NameInputs } from "../NameInputs/NameInputs";
import { EmailInput } from "../EmailInput/EmailInput";
import { BirthdayInput } from "../BirthdayInput/BirthdayInput";
import { AgeInput } from "../AgeInput/AgeInput";
import { GenderInput } from "../GenderInput/GenderInput";
import { InstagramInput } from "../InstagramInput/InstagramInput";
import { SaveProfileButton } from "../SaveProfileButton/SaveProfileButton";
import { Profile } from "../../util/interfaces/Profile";

interface Props {
  user: Partial<Profile>;
}

export const ProfileInputFields: React.FC<Props> = ({ user }) => {
  return (
    <div className="h-4/5 w-full">
      <NameInputs username={user.name} />
      <EmailInput />
      <div className="flex justify-between w-97.5%">
        <BirthdayInput />
        <AgeInput />
        <GenderInput />
      </div>
      <InstagramInput />
      <div className="flex items-center justify-center w-97.5% h-1/5">
        <SaveProfileButton />
      </div>
    </div>
  );
};
