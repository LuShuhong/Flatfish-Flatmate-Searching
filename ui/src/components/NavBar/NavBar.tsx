import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

export const NavBar: React.FC = () => {
  const user = {
    img: "pic",
    name: "jason",
  };

  return (
    <div className="flex items-center justify-center w-full h-navBarHeight bg-gradient-to-tr from-[#76323F] to-[#5c0705]">
      <div className="flex w-95% h-full justify-between items-center">
        <Logo />
        <Navigation profilePic={user.img} name={user.name} />
      </div>
    </div>
  );
};
