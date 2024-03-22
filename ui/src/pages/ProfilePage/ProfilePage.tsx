import React from "react";
import { ProfileForm } from "./components/ProfileForm/ProfileForm";
import { SignUpDetails } from "../../util/interfaces/SignUpDetails";

interface Props {
  user: SignUpDetails;
  updateField: (updatedField: Partial<SignUpDetails>) => void;
}

export const ProfilePage: React.FC<Props> = ({ user, updateField }) => {
  return (
    <div className="flex justify-center h-full w-full">
      <ProfileForm user={user} updateField={updateField} />
    </div>
  );
};
