import { SignUpDetails } from "../../util/interfaces/SignUpDetails";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import React from "react";

interface Props {
  curPage: string;
  handlePageChange: (newPage: string) => void;
  user: SignUpDetails;
  navBarVisibility: boolean;
}

export const NavBar: React.FC<Props> = ({
  curPage,
  handlePageChange,
  user,
  navBarVisibility,
}) => {
  return (
    <div className="flex items-center justify-center w-full h-18% bg-transparent">
      <div className="flex w-95% h-full justify-between items-center">
        <Logo />
        {navBarVisibility ? (
          <Navigation
            curPage={curPage}
            handlePageChange={handlePageChange}
            user={user}
          />
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
};
