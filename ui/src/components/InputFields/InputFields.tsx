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
import { LocationEntry } from "../LocationEntry/LocationEntry";
import React from "react";
import { DoubleSlider } from "../DoubleSlider/DoubleSlider";
import { MAX_AGE, MIN_AGE } from "../../util/constants/age";
import { MAX_BUDGET, MIN_BUDGET } from "../../util/constants/budget";

interface Props {
  getPreferences: (preferences: Preference) => void;
  email: string | undefined;
}

export const InputFields: React.FC<Props> = ({ getPreferences, email }) => {
  const [preferences, setPreferences] =
    useState<Preference>(defaultPreferences);

  const updatePreferences = (updatedField: Partial<Preference>): void =>
    setPreferences((p) => ({ ...p, ...updatedField }));

  const handleGender = (val: "MALE" | "FEMALE" | "UNSPECIFIED"): void =>
    updatePreferences({ gender: val });

  // const handleAge = (val: number, index: 0 | 1): void => {
  //   const curAgeRange = preferences.ageRange;
  //   curAgeRange[index] = val;
  //   updatePreferences({ ageRange: curAgeRange });
  // };

  const handleAge = (val: [min: number, max: number]): void => {
    const curAgeRange = val;
    updatePreferences({ ageRange: curAgeRange });
    console.log(preferences.ageRange);
  };

  // const handleBudget = (val: number, index: 0 | 1): void => {
  //   const curBudgetRange = preferences.budgetRange;
  //   curBudgetRange[index] = val;
  //   updatePreferences({ budgetRange: curBudgetRange });
  // };

  const handleBudget = (val: [min: number, max: number]): void => {
    const curBudgetRange = val;
    updatePreferences({ budgetRange: curBudgetRange });
    console.log(preferences.budgetRange);
  };

  const handleLocation = (val: string) => {
    let newLocationList: string[] = preferences.location;
    if (newLocationList[0] === "") {
      newLocationList = [val];
    } else if (newLocationList.length < 3 && !newLocationList.includes(val)) {
      newLocationList.push(val);
    }
    updatePreferences({ location: newLocationList });
    console.log(preferences);
  };

  const handleMatch = (): void => {
    if (!ageIsValid(preferences.ageRange)) {
      alert("Maximum age must be bigger than minimum age");
    } else if (!budgetIsValid(preferences.budgetRange)) {
      alert("Maximum budget must be bigger than minimum budget");
    } else if (!locationIsValid(preferences.location[0])) {
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
    } else if (!locationIsValid(preferences.location[0])) {
      alert("Please select a location");
    } else {
      post("http://localhost:8080/api/v1/preferences", {
        preferenceId: email ? email : "",
        budgetMin: preferences.budgetRange[0],
        budgetMax: preferences.budgetRange[1],
        ageMin: preferences.ageRange[0],
        ageMax: preferences.ageRange[1],
        gender: preferences.gender,
        smoker: false,
        location: "test1",
      });
    }
  };
  // http://localhost:8080/api/v1/preferences
  // https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/preferences

  const handleRemovePreference = (preferenceEntry: string): void => {
    let newLocationList = preferences.location;
    const index = newLocationList.indexOf(preferenceEntry);
    if (index > -1) {
      newLocationList.splice(index, 1);
    }

    setPreferences({ ...preferences, location: newLocationList });
  };

  return (
    <div className="w-full h-4/5">
      <GenderPreference
        curGender={preferences.gender}
        handleGender={handleGender}
      />
      <DoubleSlider
        range={[MIN_AGE, MAX_AGE]}
        handleFunction={handleAge}
        sliderName="Set Age Range"
        sliderProperty="Age"
        thumbNames={["Age minimum", "Age maximum"]}
      />
      {/* <BudgetPreference
        budgetRange={preferences.budgetRange}
        handleBudget={handleBudget}
      /> */}
      <DoubleSlider
        range={[MIN_BUDGET, MAX_BUDGET]}
        handleFunction={handleBudget}
        sliderName="Set Budget Range"
        sliderProperty="Budget"
        thumbNames={["Budget minimum", "Budget maximum"]}
      />
      <LocationPreference
        location={preferences.location}
        handleLocation={handleLocation}
      />
      <div className="mb-5">
        {preferences.location[0] === ""
          ? ""
          : preferences.location.map((loc) => (
              <LocationEntry
                handleRemovePreference={handleRemovePreference}
                preferenceEntry={loc}
              />
            ))}
      </div>
      <div className="flex items-center justify-between h-1/8 w-full">
        <MatchButton handleMatch={handleMatch} />
        <SetDefaultButton handleSetDefault={handleSetDefault} />
      </div>
    </div>
  );
};
