import { NavigationButtons } from "../NavigationButtons/NavigationButtons";
import { Profile } from "../Profile/Profile";
import { useState } from "react";
import MenuIcon from "../MenuIcon/MenuIcon";
import Xmark from "../XmarkIcon/Xmark";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import UserProfile from "../UserProfile/UserProfile";

interface Props {
  curPage: string;
  handlePageChange: (newPage: string) => void;
  profilePic: string;
  name: string;
}

export const Navigation: React.FC<Props> = ({
  curPage,
  handlePageChange,
  profilePic,
  name,
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


    <div className="hidden lg:flex w-1/2 h-full justify-center items-center">
      
        <NavigationButtons
          curPage={curPage}
          handlePageChange={handlePageChange}
        />

      <Profile profilePic={profilePic} name={name} />
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <UserProfile></UserProfile>
      
    </div>
    </>
  );
};
