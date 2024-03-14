import { GenderOption } from "../GenderOption/GenderOption";
import { genders } from "../../util/constants/genders";

interface Props {
  curGender: "MALE" | "FEMALE" | "UNSPECIFIED";
  handleGender: (val: "MALE" | "FEMALE" | "UNSPECIFIED") => void;
}

export const GenderPreference: React.FC<Props> = ({
  curGender,
  handleGender,
}) => {
  return (
    <div className="flex flex-col w-full mb-4">
      <div className="flex italic">Gender:</div>
      <div className="flex justify-between">
        {Object.entries(genders).map(([gender, genderCode]) => (
          <GenderOption
            key={genderCode}
            curGender={curGender}
            gender={gender}
            genderCode={genderCode}
            handleGender={handleGender}
          />
        ))}
      </div>
    </div>
  );
};
