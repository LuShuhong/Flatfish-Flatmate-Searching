import { GenderOption } from "../GenderOption/GenderOption";
import { genders } from "../../util/constants/genders";

interface Props {
  handleGender: (val: "m" | "f" | "none") => void;
}

export const GenderPreference: React.FC<Props> = ({ handleGender }) => {
  return (
    <div className="flex flex-col w-full mb-4">
      <div className="flex justify-center italic">Gender:</div>
      <div className="flex justify-evenly">
        {Object.entries(genders).map(([gender, genderCode]) => (
          <GenderOption
            key={genderCode}
            gender={gender}
            genderCode={genderCode}
            handleGender={handleGender}
          />
        ))}
      </div>
    </div>
  );
};
