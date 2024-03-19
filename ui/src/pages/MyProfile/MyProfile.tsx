import { ProfileInput } from "../../components/ProfileInput/ProfileInput";
import { Profile } from "../../util/interfaces/Profile";
import React from "react";

interface Props {
  user: Partial<Profile>;
  updateProfile: (updatedField: Partial<Profile>) => void;
}

export const MyProfile: React.FC<Props> = ({ user, updateProfile }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <ProfileInput user={user} updateProfile={updateProfile} />
    </div>
  );
};
