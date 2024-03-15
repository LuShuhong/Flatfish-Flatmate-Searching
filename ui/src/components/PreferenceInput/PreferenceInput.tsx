import { Preference } from "../../util/interfaces/Preference";
import { InputFields } from "../InputFields/InputFields";

interface Props {
  getPreferences: (preferences: Preference) => void;
  email: string | undefined;
}

export const PreferenceInput: React.FC<Props> = ({ getPreferences, email }) => {
  return (
    <div className="flex flex-col items-center w-30% h-full">
      <div className="flex items-center justify-center h-1/5 w-full">
        <div className="text-2xl">Find a Flatmate...</div>
      </div>
      <InputFields getPreferences={getPreferences} email={email} />
    </div>
  );
};