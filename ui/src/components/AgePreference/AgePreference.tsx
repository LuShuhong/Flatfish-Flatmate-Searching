import { SliderOption } from "../SliderOption/SliderOption";
import { MIN_AGE, MAX_AGE } from "../../util/constants/age";

interface Props {
  ageRange: [min: number, max: number];
  handleAge: (val: number, index: 0 | 1) => void;
}

export const AgePreference: React.FC<Props> = ({ ageRange, handleAge }) => {
  return (
    <div className="flex flex-col mb-4">
      <SliderOption
        sliderName="Minimum age"
        value={ageRange[0]}
        handleFunction={handleAge}
        range={[MIN_AGE, MAX_AGE]}
        index={0}
      />
      <SliderOption
        sliderName="Maximum age"
        value={ageRange[1]}
        handleFunction={handleAge}
        range={[MIN_AGE, MAX_AGE]}
        index={1}
      />
    </div>
  );
};
