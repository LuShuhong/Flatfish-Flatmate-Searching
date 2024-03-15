import { ProfileInput } from "../../components/ProfileInput/ProfileInput";
import { Profile } from "../../util/interfaces/Profile";

interface Props {
  user: Partial<Profile>;
}

export const MyProfile: React.FC<Props> = ({ user }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <ProfileInput user={user} />
    </div>
  );
};
