import { MIN_AGE, MAX_AGE } from "../../util/constants/age";

interface Props {
  ageName: string;
  age: number;
  index: 0 | 1;
  handleAge: (val: number, index: 0 | 1) => void;
}

export const AgeOption: React.FC<Props> = ({
  ageName,
  age,
  index,
  handleAge,
}) => {
  return (
    <div>
      <div className="italic">{ageName}</div>
      <div className="flex items-center justify-between">
        <input
          type="range"
          className="ageSlider"
          min={MIN_AGE}
          max={MAX_AGE}
          value={age}
          onInput={(e) => handleAge(e.currentTarget.valueAsNumber, index)}
        />
        <div className="">{age}</div>
      </div>
    </div>
  );
};
