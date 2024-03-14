import React from "react";
import { MdOutlineLogout } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      <MdOutlineLogout />
    </button>
  );
};
