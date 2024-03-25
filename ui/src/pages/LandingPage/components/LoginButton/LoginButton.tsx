import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="flex items-center justify-center bg-[#9BBFBB] rounded-md h-1/6 w-2/5 shadow-defaultButton font-serif-display hover:bg-[#89ada9] min-h-10"
    >
      Login
    </button>
  );
};
