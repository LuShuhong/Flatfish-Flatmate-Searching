import { GenderPreference } from "../GenderPreference/GenderPreference";
import { AgePreference } from "../AgePreference/AgePreference";
import { BudgetPreference } from "../BudgetPreference/BudgetPreference";
import { LocationPreference } from "../LocationPreference/LocationPreference";
import { MatchButton } from "../MatchButton/MatchButton";
import { useState } from "react";
import { Preference } from "../../util/interfaces/Preference";
import { defaultPreferences } from "../../util/constants/defaultPreferences";
import {
  ageIsValid,
  budgetIsValid,
  locationIsValid,
} from "../../util/validPreferenceChecker";

interface Props {
  getPreferences: (preferences: Preference) => void;
}

export const InputFields: React.FC<Props> = ({ getPreferences }) => {
  const [preferences, setPreferences] =
    useState<Preference>(defaultPreferences);

  const handleGender = (val: "m" | "f" | "none"): void => {
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
  const handleMatch = (): void => {
    if (!ageIsValid(preferences.ageRange)) {
      alert("Maximum age must be bigger than minimum age");
    } else if (!budgetIsValid(preferences.budgetRange)) {
      alert("Maximum budget must be bigger than minimum budget");
    } else if (!locationIsValid(preferences.location)) {
      alert("Please select a location");
    } else {
      getPreferences(preferences);
    }
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
        <MatchButton handleMatch={handleMatch} />
      </div>
    </div>
  );
};
