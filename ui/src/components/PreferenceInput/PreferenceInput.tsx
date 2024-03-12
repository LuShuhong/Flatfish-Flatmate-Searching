import { Preference } from "../../util/interfaces/Preference";
import { InputFields } from "../InputFields/InputFields";

interface Props {
  getPreferences: (preferences: Preference) => void;
}

export const PreferenceInput: React.FC<Props> = ({ getPreferences }) => {
  return (
    <div className="flex flex-col items-center w-30% h-full">
      <div className="flex items-center justify-center h-1/5 w-full rounded-tl-xl rounded-tr-xl">
        <div className="text-2xl">Find a Flatmate...</div>
      </div>
      <InputFields getPreferences={getPreferences} />
    </div>
  );
};
