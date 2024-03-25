import React from "react";
interface Props {
  handleSetDefault: () => void;
}

export const SetDefaultButton: React.FC<Props> = ({ handleSetDefault }) => {
  return (
    <button
      className="flex items-center justify-center w-1/4 h-1/2 bg-[#D9D9D9] rounded-lg cursor-pointer shadow-defaultButton font-playfair-display"
      onClick={() => handleSetDefault()}
    >
      Set Default
    </button>
  );
};
