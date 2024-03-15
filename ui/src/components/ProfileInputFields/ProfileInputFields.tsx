import { NameInputs } from "../NameInputs/NameInputs";
import { EmailInput } from "../EmailInput/EmailInput";
import { BirthdayInput } from "../BirthdayInput/BirthdayInput";
import { AgeInput } from "../AgeInput/AgeInput";
import { GenderInput } from "../GenderInput/GenderInput";
import { InstagramInput } from "../InstagramInput/InstagramInput";
import { SaveProfileButton } from "../SaveProfileButton/SaveProfileButton";
import { Profile } from "../../util/interfaces/Profile";
import { getAge } from "../../util/ageCalculator";
import { useState } from "react";

interface Props {
  user: Partial<Profile>;
}

export const ProfileInputFields: React.FC<Props> = ({ user }) => {
  const [userDetails, setUserDetails] = useState<Partial<Profile>>(user);
  const handleFirstName = (val: string): void => {
    setUserDetails((details) => {
      const copy = { ...details };
      copy.name = val;
      return copy;
    });
  };
  const handleUserEmail = (val: string): void => {
    setUserDetails((details) => {
      const copy = { ...details };
      copy.email = val;
      return copy;
    });
  };
  const handleUserBirthdate = (val: string): void => {
    setUserDetails((details) => {
      const copy = { ...details };
      copy.birthday = val;
      return copy;
    });
  };
  const handleUserGender = (val: string): void => {
    setUserDetails((details) => {
      const copy = { ...details };
      copy.userGender = val;
      return copy;
    });
  };
  const handleUserInstagram = (val: string): void => {
    setUserDetails((details) => {
      const copy = { ...details };
      copy.userInsta = val;
      return copy;
    });
  };
  return (
    <div className="h-4/5 w-full">
      <NameInputs
        username={userDetails.name}
        handleFirstName={handleFirstName}
      />
      <EmailInput email={userDetails.email} handleUserEmail={handleUserEmail} />
      <div className="flex justify-between w-97.5%">
        <BirthdayInput
          birthday={userDetails.birthday ? userDetails.birthday : ""}
          handleUserBirthdate={handleUserBirthdate}
        />
        <AgeInput
          age={userDetails.birthday ? getAge(userDetails.birthday) : 0}
        />
        <GenderInput
          gender={userDetails.userGender}
          handleUserGender={handleUserGender}
        />
      </div>
      <InstagramInput
        instagram={userDetails.userInsta}
        handleUserInstagram={handleUserInstagram}
      />
      <div className="flex items-center justify-center w-97.5% h-1/5">
        <SaveProfileButton />
      </div>
    </div>
  );
};
