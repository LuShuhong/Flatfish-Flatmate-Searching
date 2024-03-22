import { Link } from "react-router-dom";
import React from "react";
export const RedirectToSignUp: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-end justify-center h-1/2 w-full text-xs">
        Don't have an account?
      </div>
      <Link
        to="/signup"
        className="flex items-start justify-center h-1/2 w-full text-sm underline"
      >
        Sign up
      </Link>
    </div>
  );
};
