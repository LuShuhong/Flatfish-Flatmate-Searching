import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import "primereact/resources/themes/saga-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons

interface Towns {
  name: string;
}

export const MyComponent = () => {
  // Initialize selectedCities as an array to support multiple selections
  const [selectedCities, setSelectedCities] = useState<Towns[]>([]);
  const maxSelections = 3;

  const Towns: Towns[] = [
    { name: "Ancoats and Beswick" },
    { name: "Ardwick" },
    { name: "Baguley" },
    { name: "Brooklands" },
    { name: "Burnage" },
    { name: "Charlestown" },
    { name: "Cheetham" },
    { name: "Chorlton" },
    { name: "Chorlton Park" },
    { name: "Deansgate" },
    { name: "City Wide" },
    { name: "Crumpsall" },
    { name: "Didsbury East" },
    { name: "Didsbury West" },
    { name: "Fallowfield" },
    { name: "Gorton and Abbey Hey" },
    { name: "Harpurhey" },
    { name: "Higher Blackley" },
    { name: "Hulme" },
    { name: "Levenshulme" },
    { name: "Longsight" },
    { name: "Miles Platting and Newton Heath" },
    { name: "Moss Side" },
    { name: "Moston" },
    { name: "Northenden" },
    { name: "Old Moat" },
    { name: "Piccadilly" },
    { name: "Rusholme" },
    { name: "Sharston" },
    { name: "Whalley Range" },
    { name: "Withington" },
    { name: "Woodhouse Park" },
    { name: "Salford" },
    { name: "Salford Quays" },
  ];
  const handleCityChange = (e: { value: Towns[] }) => {
    // If number of selected cities exceeds maxSelections, slice the array to keep only the first maxSelections
    if (e.value.length > maxSelections) {
      setSelectedCities(e.value.slice(0, maxSelections));
    } else {
      setSelectedCities(e.value);
    }
  };

  return (
    <div className=" flex justify-content-center">
      <MultiSelect
        value={selectedCities}
        onChange={handleCityChange}
        options={Towns}
        optionLabel="name"
        filter
        placeholder="Select Cities"
        maxSelectedLabels={3}
        className="w-full md:w-20rem"
      />
    </div>
  );
};
