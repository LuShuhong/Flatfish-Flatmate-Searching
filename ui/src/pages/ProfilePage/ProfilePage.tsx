import { Profile } from "../../util/interfaces/Profile";
import React from "react";
import { ProfileForm } from "./components/ProfileForm/ProfileForm";
import { SignUpDetails } from "../../util/interfaces/SignUpDetails";

interface Props {
  user: SignUpDetails;
  updateProfile: (updatedField: Partial<Profile>) => void;
}

export const ProfilePage: React.FC<Props> = ({ user, updateProfile }) => {
  return (
    <div className="flex justify-center h-full w-full">
      <ProfileForm user={user} />
    </div>
    // <div className="flex justify-center items-center w-full h-full">
    //   <ProfileInput user={user} updateProfile={updateProfile} />
    // </div>
  );
};
