import React from "react";
interface Props {
  handleMatch: () => void;
}

export const MatchButton: React.FC<Props> = ({ handleMatch }) => {
  return (
    <button
      className="rounded-xl bg-[#9BBFBB] w-60% min-h-10 shadow-matchButton hover:bg-[#89ada9] text-lg font-serif-display"
      onClick={() => handleMatch()}
    >
      Set Preferences and Match
    </button>
  );
};
