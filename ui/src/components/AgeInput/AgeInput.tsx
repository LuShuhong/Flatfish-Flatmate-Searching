import { MIN_AGE, MAX_AGE } from "../../util/constants/age";

interface Props {
  age: number;
}

export const AgeInput: React.FC<Props> = ({ age }) => {
  return (
    <div className="w-1/4">
      <label className="flex flex-col text-xs w-full">
        age
        <input
          type="number"
          className="p-agePadding text-sm bg-[#E5E5E5] border border-gray-400 rounded-xl mt-1"
          min={MIN_AGE}
          max={MAX_AGE}
          value={age}
          readOnly
        />
      </label>
    </div>
  );
};
