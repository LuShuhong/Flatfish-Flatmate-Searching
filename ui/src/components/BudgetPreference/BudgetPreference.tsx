import { MIN_BUDGET, MAX_BUDGET } from "../../util/constants/budget";
import { SliderOption } from "../SliderOption/SliderOption";

interface Props {
  budgetRange: [min: number, max: number];
  handleBudget: (val: number, index: 0 | 1) => void;
}

export const BudgetPreference: React.FC<Props> = ({
  budgetRange,
  handleBudget,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <SliderOption
        sliderName="Minimum weekly budget"
        value={budgetRange[0]}
        range={[MIN_BUDGET, MAX_BUDGET]}
        index={0}
        handleFunction={handleBudget}
        prefix="£"
      />
      <SliderOption
        sliderName="Maximum weekly budget"
        value={budgetRange[1]}
        range={[MIN_BUDGET, MAX_BUDGET]}
        index={1}
        handleFunction={handleBudget}
        prefix="£"
      />
    </div>
  );
};
