import { NavigationButtons } from "../NavigationButtons/NavigationButtons";
import { Profile } from "../Profile/Profile";

export const Navigation: React.FC = () => {
  return (
    <div className="flex w-1/2 justify-between items-center">
      <NavigationButtons />
      <Profile />
    </div>
  );
};
