import { GenderPreference } from "../GenderPreference/GenderPreference";
import { AgePreference } from "../AgePreference/AgePreference";
import { BudgetPreference } from "../BudgetPreference/BudgetPreference";
import { LocationPreference } from "../LocationPreference/LocationPreference";
import { MatchButton } from "../MatchButton/MatchButton";
import { useState } from "react";
import { Preference } from "../../util/Preference";

const MIN_AGE: number = 16,
  MAX_AGE: number = 80;
const MIN_BUDGET: number = 16,
  MAX_BUDGET: number = 80;

export const InputFields: React.FC = () => {
  // put request
  const [preferences, setPreferences] = useState<Preference>({
    gender: "na",
    ageRange: [MIN_AGE, MAX_AGE],
    budgetRange: [MIN_BUDGET, MAX_BUDGET],
    location: "",
  });
  const handleGender = (val: "m" | "f" | "na"): void => {
    setPreferences((p) => {
      const copy = { ...p };
      copy.gender = val;
      return copy;
    });
  };
  const handleAge = (val: number, index: 0 | 1): void => {
    setPreferences((p) => {
      const copy = { ...p };
      copy.ageRange[index] = val;
      return copy;
    });
  };
  const handleBudget = (val: number, index: 0 | 1): void => {
    setPreferences((p) => {
      const copy = { ...p };
      copy.budgetRange[index] = val;
      return copy;
    });
  };
  const handleLocation = (val: string) => {
    setPreferences((p) => {
      const copy = { ...p };
      copy.location = val;
      return copy;
    });
  };

  return (
    <div className="w-full h-4/5 rounded-bl-xl rounded-br-xl">
      <GenderPreference handleGender={handleGender} />
      <AgePreference ageRange={preferences.ageRange} handleAge={handleAge} />
      <BudgetPreference
        budgetRange={preferences.budgetRange}
        handleBudget={handleBudget}
      />
      <LocationPreference
        location={preferences.location}
        handleLocation={handleLocation}
      />
      <div className="flex h-1/6 w-70% pl-8">
        <MatchButton />
      </div>
    </div>
  );
};
