import { Preference } from "../../util/interfaces/Preference";
import { PreferenceInput } from "../../components/PreferenceInput/PreferenceInput";

interface Props {
  getPreferences: (preferences: Preference) => void;
}

export const MainPage: React.FC<Props> = ({ getPreferences }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <PreferenceInput getPreferences={getPreferences} />
    </div>
  );
};
