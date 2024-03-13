import { MIN_AGE, MAX_AGE } from "../../util/constants/age";

export const AgeInput: React.FC = () => {
  return (
    <div className="h-1/5 w-43% ml-4">
      <label className="flex flex-col text-xs w-full">
        age
        <input
          type="number"
          className="p-agePadding text-sm bg-[#E5E5E5] border border-gray-400 rounded-xl mt-1"
          min={MIN_AGE}
          max={MAX_AGE}
        />
      </label>
    </div>
  );
};
