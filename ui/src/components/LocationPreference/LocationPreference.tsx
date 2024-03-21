import React from "react";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import "../LocationPreference/LocationPreference.css";

interface Props {
  location: string[];
  handleLocation: (val: string) => void;
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
  location,
  handleLocation,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex w-full">
        <span className="flex-1 italic">Location:</span>
        <select
          className="border-2 w-9/12 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
          value={location}
          onChange={(e) => handleLocation(e.target.value)}
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      {/* <div className="card flex justify-content-center">
        <MultiSelect
          value={location}
          onChange={(e: MultiSelectChangeEvent) => handleLocation(e.value)}
          options={locations}
          optionLabel="name"
          filter
          placeholder="Select Cities"
          maxSelectedLabels={3}
          className="w-full md:w-20rem"
        />
      </div> */}
    </div>
  );
};
