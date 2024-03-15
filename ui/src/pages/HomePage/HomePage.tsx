import { Preference } from "../../util/interfaces/Preference";
import { PreferenceInput } from "../../components/PreferenceInput/PreferenceInput";

interface Props {
  getPreferences: (preferences: Preference) => void;
  email: string | undefined;
}

export const HomePage: React.FC<Props> = ({ getPreferences, email }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <PreferenceInput getPreferences={getPreferences} email={email} />
    </div>
  );
};