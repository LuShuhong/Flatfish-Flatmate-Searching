import { NavigationButtons } from "../NavigationButtons/NavigationButtons";
import { useState } from "react";
import MenuIcon from "../MenuIcon/MenuIcon";
import Xmark from "../XmarkIcon/Xmark";
import { Profile } from "../../util/interfaces/Profile";
import { ProfileContainer } from "../ProfileContainer/ProfileContainer";
import React from "react";

interface Props {
  curPage: string;
  handlePageChange: (newPage: string) => void;
  user: Partial<Profile>;
}

export const Navigation: React.FC<Props> = ({
  curPage,
  handlePageChange,
  user,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="flex justify-end">
        {!isMenuOpen && (
          <div className="lg:hidden mr-10">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon />
            </button>
          </div>
        )}

        {isMenuOpen && (
          <div className="lg:hidden w-3/4 p-4">
            <NavigationButtons
              curPage={curPage}
              handlePageChange={handlePageChange}
            />
          </div>
        )}

        {isMenuOpen && (
          <div className="lg:hidden flex mr-8 ps-3">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Xmark />
            </button>
          </div>
        )}
      </div>

      <div className="hidden lg:flex w-45% h-full items-center justify-between">
        <NavigationButtons
          curPage={curPage}
          handlePageChange={handlePageChange}
        />
        <ProfileContainer name={user.name} profilePic={user.picture} />
      </div>
    </>
  );
};
