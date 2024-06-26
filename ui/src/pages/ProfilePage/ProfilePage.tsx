import React from "react";
import { ProfileForm } from "./components/ProfileForm/ProfileForm";
import { SignUpDetails } from "../../util/interfaces/SignUpDetails";
import { SignUpFieldWarning } from "../../util/interfaces/SignUpFieldWarning";

interface Props {
  user: SignUpDetails;
  updateField: (updatedField: Partial<SignUpDetails>) => void;
  handleSave: () => void;
  postFailed: boolean;
  fieldWarning: SignUpFieldWarning;
  tick: boolean;
  changeTick: (val: boolean) => void;
}

export const ProfilePage: React.FC<Props> = ({
  user,
  updateField,
  handleSave,
  postFailed,
  fieldWarning,
  tick,
  changeTick,
}) => {
  return (
    <div className="flex justify-center h-full w-full">
      <ProfileForm
        user={user}
        updateField={updateField}
        handleSave={handleSave}
        postFailed={postFailed}
        fieldWarning={fieldWarning}
        tick={tick}
        changeTick={changeTick}
      />
    </div>
  );
};
