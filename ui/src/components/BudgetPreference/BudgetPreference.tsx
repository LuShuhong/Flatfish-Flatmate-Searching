import { MIN_BUDGET, MAX_BUDGET } from "../../util/constants/budget";

interface Props {
  budgetRange: [min: number, max: number];
  handleBudget: (val: number, index: 0 | 1) => void;
}

export const BudgetPreference: React.FC<Props> = ({
  budgetRange,
  handleBudget,
}) => {
  return (
    <div className="flex flex-col pl-8 mb-4">
      <div>
        <div className="italic">Minimum weekly budget</div>
        <div className="flex items-center justify-between w-8/12">
          <input
            type="range"
            min={MIN_BUDGET}
            max={MAX_BUDGET}
            value={budgetRange[0]}
            onInput={(e) => handleBudget(e.currentTarget.valueAsNumber, 0)}
          />
          <div className="">{budgetRange[0]}</div>
        </div>
      </div>
      <div>
        <div className="italic">Maximum weekly budget</div>
        <div className="flex items-center justify-between w-8/12">
          <input
            type="range"
            min={MIN_BUDGET}
            max={MAX_BUDGET}
            value={budgetRange[1]}
            onInput={(e) => handleBudget(e.currentTarget.valueAsNumber, 1)}
          />{" "}
          <div className="">{budgetRange[1]}</div>
        </div>
      </div>
    </div>
  );
};
