import React from "react";

interface Props {
  handleRemovePreference: (remove: string) => void;
  preferenceEntry: string;
}

export const LocationEntry: React.FC<Props> = ({
  handleRemovePreference,
  preferenceEntry,
}) => {
  return (
    <div className="flex">
      <p className="mx-5">{preferenceEntry}</p>
      <button
        className="text-slate-500 italic grey hover:not-italic"
        onClick={(e) => handleRemovePreference(preferenceEntry)}
      >
        Remove
      </button>
    </div>
  );
};
