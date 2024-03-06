import { GenderPreference } from "../GenderPreference/GenderPreference";
import { AgePreference } from "../AgePreference/AgePreference";
import { BudgetPreference } from "../BudgetPreference/BudgetPreference";
import { LocationPreference } from "../LocationPreference/LocationPreference";
import { MatchButton } from "../MatchButton/MatchButton";

export const InputFields: React.FC = () => {
  return (
    <div className="w-full h-4/5 rounded-bl-xl rounded-br-xl">
      <GenderPreference />
      <AgePreference />
      <BudgetPreference />
      <LocationPreference />
      <div className="flex h-1/6 w-70% pl-8">
        <MatchButton />
      </div>
    </div>
  );
};
