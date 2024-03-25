import React from "react";
interface Props {
  handleRegistration: () => void;
}

export const RegisterButton: React.FC<Props> = ({ handleRegistration }) => {
  return (
    <button
      className="h-2/3 w-full bg-sea-green shadow-defaultButton rounded-xl text-lg font-serif-display hover:bg-[#89ada9] duration-300 "
      onClick={() => handleRegistration()}
    >
      Register
    </button>
  );
};
