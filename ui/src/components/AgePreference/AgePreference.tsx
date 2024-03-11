import { MIN_AGE, MAX_AGE } from "../../util/constants/age";

interface Props {
  ageRange: [min: number, max: number];
  handleAge: (val: number, index: 0 | 1) => void;
}

export const AgePreference: React.FC<Props> = ({ ageRange, handleAge }) => {
  return (
    <div className="flex flex-col pl-8 mb-4">
      <div>
        <div className="italic">Minimum age</div>
        <div className="flex items-center justify-between w-8/12">
          <input
            type="range"
            className="ageSlider"
            min={MIN_AGE}
            max={MAX_AGE}
            value={ageRange[0]}
            onInput={(e) => handleAge(e.currentTarget.valueAsNumber, 0)}
          />
          <div className="">{ageRange[0]}</div>
        </div>
      </div>
      <div>
        <div className="italic">Maximum age</div>
        <div className="flex items-center justify-between w-8/12">
          <input
            type="range"
            className="ageSlider"
            min={MIN_AGE}
            max={MAX_AGE}
            value={ageRange[1]}
            onInput={(e) => handleAge(e.currentTarget.valueAsNumber, 1)}
          />
          <div className="">{ageRange[1]}</div>
        </div>
      </div>
    </div>
  );
};
