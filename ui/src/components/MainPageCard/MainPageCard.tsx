import { Preference } from "../../util/interfaces/Preference";
import { PreferenceInput } from "../PreferenceInput/PreferenceInput";
import { SlideShow } from "../SlideShow/SlideShow";

interface Props {
  getPreferences: (preferences: Preference) => void;
}

export const MainPageCard: React.FC<Props> = ({ getPreferences }) => {
  return (
    <div className="flex justify-center items-center w-full h-5/6 bg-black bg-opacity-70">
      <SlideShow />
      <PreferenceInput getPreferences={getPreferences} />
    </div>
  );
};
