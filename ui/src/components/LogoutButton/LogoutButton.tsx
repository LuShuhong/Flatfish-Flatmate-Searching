import React from "react";
import { MdOutlineLogout } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";

<<<<<<< HEAD
const LogoutButton: React.FC = () => {
=======
export const LogoutButton: React.FC = () => {
>>>>>>> dev
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
<<<<<<< HEAD
      Log Out
=======
      <MdOutlineLogout />
>>>>>>> dev
    </button>
  );
};
