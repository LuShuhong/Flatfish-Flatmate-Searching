import { Profile } from "../../util/interfaces/Profile";
import { ProfileInputFields } from "../ProfileInputFields/ProfileInputFields";

interface Props {
  user: Partial<Profile>;
  updateProfile: (updatedField: Partial<Profile>) => void;
}

export const ProfileInput: React.FC<Props> = ({ user, updateProfile }) => {
  return (
    <div className="flex flex-col items-center w-30% h-full">
      <div className="flex items-center justify-center h-1/6 w-full">
        <div className="text-2xl">My Profile</div>
      </div>
      <ProfileInputFields user={user} updateProfile={updateProfile} />
    </div>
  );
};
