import { MainPageCard } from "../../components/MainPageCard/MainPageCard";
import { Preference } from "../../util/Preference";

interface Props {
  getPreferences: (preferences: Preference) => void;
}

export const MainPage: React.FC<Props> = ({ getPreferences }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <MainPageCard getPreferences={getPreferences} />
    </div>
  );
};
