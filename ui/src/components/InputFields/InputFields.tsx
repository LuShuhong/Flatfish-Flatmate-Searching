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
import { SetDefaultButton } from "../SetDefaultButton/SetDefaultButton";
import { post } from "../../requests/postRequests";

interface Props {
  getPreferences: (preferences: Preference) => void;
  email: string | undefined;
}

export const InputFields: React.FC<Props> = ({ getPreferences, email }) => {
  const [preferences, setPreferences] =
    useState<Preference>(defaultPreferences);

  const handleGender = (val: "MALE" | "FEMALE" | "UNSPECIFIED"): void => {
    setPreferences((p) => {
      const copy = { ...p };
      copy.gender = val;
      console.log(val);
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

  const handleSetDefault = (): void => {
    if (!ageIsValid(preferences.ageRange)) {
      alert("Maximum age must be bigger than minimum age");
    } else if (!budgetIsValid(preferences.budgetRange)) {
      alert("Maximum budget must be bigger than minimum budget");
    } else if (!locationIsValid(preferences.location)) {
      alert("Please select a location");
    } else {
      post("http://localhost:8080/api/v1/preferences", {
        userId: email ? email : "",
        gender: preferences.gender,
        ageRange: preferences.ageRange,
        budgetRange: preferences.budgetRange,
        location: "test1",
      });
    }
  };

  return (
    <div className="w-full h-4/5">
      <GenderPreference
        curGender={preferences.gender}
        handleGender={handleGender}
      />
      <AgePreference ageRange={preferences.ageRange} handleAge={handleAge} />
      <BudgetPreference
        budgetRange={preferences.budgetRange}
        handleBudget={handleBudget}
      />
      <LocationPreference
        location={preferences.location}
        handleLocation={handleLocation}
      />
      <div className="flex items-center justify-between h-1/8 w-full">
        <MatchButton handleMatch={handleMatch} />
        <SetDefaultButton handleSetDefault={handleSetDefault} />
      </div>
    </div>
  );
};
