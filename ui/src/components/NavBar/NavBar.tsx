import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

export const NavBar: React.FC = () => {
  return (
    <div className="flex items-center w-full h-navBarHeight bg-slate-400">
      <Logo />
      <Navigation />
    </div>
  );
};
