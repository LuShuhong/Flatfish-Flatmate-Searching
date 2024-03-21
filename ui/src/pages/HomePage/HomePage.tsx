import { Preference } from "../../util/interfaces/Preference";
import { PreferenceInput } from "../../components/PreferenceInput/PreferenceInput";
import MapComponent from "../../components/Map/Map";
import { SignUpDetails } from "../../util/interfaces/SignUpDetails";

interface Props {
  getPreferences: (preferences: Preference) => void;
  email: string | undefined;
  user: SignUpDetails;
}

export const HomePage: React.FC<Props> = ({ getPreferences, email, user }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <PreferenceInput
        user={user}
        getPreferences={getPreferences}
        email={email}
      />
      <MapComponent></MapComponent>
    </div>
  );
};
