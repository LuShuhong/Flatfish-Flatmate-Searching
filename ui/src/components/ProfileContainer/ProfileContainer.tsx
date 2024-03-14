import { convertName } from "../../util/nameConverter";
import { LogoutButton } from "../LogoutButton/LogoutButton";

interface Props {
  profilePic: string | undefined;
  name: string | undefined;
}

export const ProfileContainer: React.FC<Props> = ({ profilePic, name }) => {
  return (
    <div className="flex items-center justify-between h-5/6 w-1/4 rounded-profileBR">
      <div className="flex items-center w-5/6">
        <img
          src={profilePic}
          alt={name}
          className="h-10 w-10 rounded-1/2 flex justify-center items-center"
        ></img>
        <div className="ml-2 text-xs font-serif-display">
          {convertName(name)}
        </div>
      </div>
      <LogoutButton />
    </div>
  );
};
