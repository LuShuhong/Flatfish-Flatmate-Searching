import { Link } from "react-router-dom";
import React from "react";
export const SignUpButton: React.FC = () => {
  return (
    <Link
      to="/signup"
      className="flex items-center justify-center bg-[#9BBFBB] rounded-md h-1/6 w-2/5 shadow-defaultButton font-playfair-display hover:bg-[#89ada9]"
    >
      Sign up
    </Link>
  );
};
