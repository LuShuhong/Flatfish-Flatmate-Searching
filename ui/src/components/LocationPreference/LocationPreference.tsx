import React from "react";
import Select, { MultiValue } from "react-select";
import { Preference } from "../../util/interfaces/Preference";
import "../LocationPreference/LocationPreference.css";
import makeAnimated from "react-select/animated";
interface Option {
  label: string;
  value: string;
}
// import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
// import { MyComponent } from "../../components/InstagramButton/MyComponent";

interface Props {
  location: string[];
  preferences: Preference;
  setPreferences: React.Dispatch<React.SetStateAction<Preference>>;
  selectedCities: string[];
  setSelectedCities: React.Dispatch<React.SetStateAction<string[]>>;
  updatePreferences: (updatedField: Partial<Preference>) => void;
  // name: string;
  // handleLocation: (
  // selectedOptions: MultiValue<{ label: string; value: string }> | null
  // ) => void;
}

const locations = [
  "Ancoats and Beswick",
  "Ardwick",
  "Baguley",
  "Brooklands",
  "Burnage",
  "Charlestown",
  "Cheetham",
  "Chorlton",
  "Chorlton Park",
  "Deansgate",
  "City Wide",
  "Crumpsall",
  "Didsbury East",
  "Didsbury West",
  "Fallowfield",
  "Gorton and Abbey Hey",
  "Harpurhey",
  "Higher Blackley",
  "Hulme",
  "Levenshulme",
  "Longsight",
  "Miles Platting and Newton Heath",
  "Moss Side",
  "Moston",
  "Northenden",
  "Old Moat",
  "Piccadilly",
  "Rusholme",
  "Sharston",
  "Whalley Range",
  "Withington",
  "Woodhouse Park",
  "Salford",
  "Salford Quays",
];

export const LocationPreference: React.FC<Props> = ({
  // name,
  location,
  preferences,
  selectedCities,
  setSelectedCities,
  updatePreferences,
}) => {
  const maxSelections = 3;

  const handleSelection = (
    selectedOptions: MultiValue<{ label: string; value: string }> | null
  ) => {
    const selectedValues = selectedOptions?.map((option) => option.value) || [];
    if (selectedValues.length < selectedCities.length) {
      const removedOption = selectedCities.find(
        (city) => !selectedValues.includes(city)
      );
      if (removedOption) {
        // Remove the removed option from preferences
        const updatedLocations = preferences.location.filter(
          (city) => city !== removedOption
        );
        updatePreferences({ location: updatedLocations });
      }
    }
    if (selectedCities.length > maxSelections) {
      console.error("Cannot select more than three locations");
      setSelectedCities(selectedValues.slice(0, maxSelections));
    } else if (selectedCities.length < maxSelections) {
      updatePreferences({ location: selectedValues });
    }
  };
  const animatedComponents = makeAnimated();
  return (
    <div className="flex flex-col mb-4">
      <div className="flex w-full">
        <div className=" flex justify-content-center w-full">
          <Select
            className="w-full font-roboto-condensed text-md"
            placeholder="Select up to 3 locations..."
            // defaultValue="choose up to 3 locations"
            // components={animatedComponents}
            options={locations.map((location: string) => ({
              label: location,
              value: location,
            }))}
            isMulti
            onChange={(selectedOptions) => handleSelection(selectedOptions)}
            isOptionDisabled={(o) => selectedCities.length >= 3}
          />

          {/* <span className="flex-1 italic">Location:</span>
          <select
            className="border-2 w-9/12 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
            value={locations}
            onChange={(e) => handleLocation(e.target.value)}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select> */}
        </div>
      </div>
    </div>
  );
};
