import { NavigationButtons } from "../NavigationButtons/NavigationButtons";
import { Profile } from "../Profile/Profile";

interface Props {
  profilePic: string;
  name: string;
}

export const Navigation: React.FC<Props> = ({ profilePic, name }) => {
  return (
    <div className="flex w-1/2 h-full justify-between items-center">
      <NavigationButtons />
      <Profile profilePic={profilePic} name={name} />
    </div>
  );
};
