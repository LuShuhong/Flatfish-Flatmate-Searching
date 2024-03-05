import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

export const NavBar: React.FC = () => {
  const user = {
    img: "pic",
    name: "jason",
  };

  return (
    <div className="flex items-center justify-center w-full h-navBarHeight bg-slate-400">
      <div className="flex w-95% h-full justify-between items-center">
        <Logo />
        <Navigation profilePic={user.img} name={user.name} />
      </div>
    </div>
  );
};
