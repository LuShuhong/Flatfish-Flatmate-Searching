import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const RedirectToLogin: React.FC = () => {
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <div className="h-full w-full">
      <div className="flex items-end justify-center h-1/2 w-full text-xs pl-3 font-roboto-condensed">
        Already have an account?
      </div>
      <button
        onClick={() => {
          logout({ logoutParams: { returnTo: window.location.origin } });
          loginWithRedirect();
        }}
        className="flex items-start justify-center h-1/2 w-full text-sm underline font-roboto-condensed"
      >
        log in
      </button>
    </div>
  );
};
