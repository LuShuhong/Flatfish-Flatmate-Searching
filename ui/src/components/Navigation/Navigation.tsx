import { NavigationButtons } from "../NavigationButtons/NavigationButtons";
import { Profile } from "../Profile/Profile";
import { Matches } from "../Matches/Matches";

export const Navigation: React.FC = () => {
  return (
    <div className="bg-white">
      <NavigationButtons />
      <Profile />
      <Matches />
    </div>
  );
};
