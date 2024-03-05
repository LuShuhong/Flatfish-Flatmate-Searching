import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

export const NavBar: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-navBarHeight bg-slate-400">
      <div className="flex w-11/12 justify-between">
        <Logo />
        <Navigation />
      </div>
    </div>
  );
};
