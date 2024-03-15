import { NameInputs } from "../NameInputs/NameInputs";
import { EmailInput } from "../EmailInput/EmailInput";
import { BirthdayInput } from "../BirthdayInput/BirthdayInput";
import { AgeInput } from "../AgeInput/AgeInput";
import { GenderInput } from "../GenderInput/GenderInput";
import { InstagramInput } from "../InstagramInput/InstagramInput";
import { SaveProfileButton } from "../SaveProfileButton/SaveProfileButton";
import { Profile } from "../../util/interfaces/Profile";
import { getAge } from "../../util/ageCalculator";

interface Props {
  user: Partial<Profile>;
  updateProfile: (updatedField: Partial<Profile>) => void;
}

export const ProfileInputFields: React.FC<Props> = ({
  user,
  updateProfile,
}) => {
  const handleFirstName = (val: string): void => updateProfile({ name: val });
  const handleUserEmail = (val: string): void => updateProfile({ email: val });
  const handleUserBirthdate = (val: string): void => {
    updateProfile({ birthday: val });
    updateProfile({ age: getAge(val).toString() });
  };
  const handleUserGender = (val: string): void =>
    updateProfile({ gender: val });
  const handleUserInstagram = (val: string): void =>
    updateProfile({ instagram: val });

  const handleSaveProfile = () => {
    // post request
    console.log("save");
  };
  return (
    <div className="h-4/5 w-full">
      <NameInputs username={user.name} handleFirstName={handleFirstName} />
      <EmailInput email={user.email} handleUserEmail={handleUserEmail} />
      <div className="flex justify-between w-97.5%">
        <BirthdayInput
          birthday={user.birthday ? user.birthday : ""}
          handleUserBirthdate={handleUserBirthdate}
        />
        <AgeInput age={user.birthday ? getAge(user.birthday) : 0} />
        <GenderInput gender={user.gender} handleUserGender={handleUserGender} />
      </div>
      <InstagramInput
        instagram={user.instagram}
        handleUserInstagram={handleUserInstagram}
      />
      <div className="flex items-center justify-center w-97.5% h-1/5">
        <SaveProfileButton handleSaveProfile={handleSaveProfile} />
      </div>
    </div>
  );
};
