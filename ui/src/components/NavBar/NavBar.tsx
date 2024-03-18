import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

interface Props {
  curPage: string;
  handlePageChange: (newPage: string) => void;
  user: any;
  authenticated: boolean;
}

export const NavBar: React.FC<Props> = ({
  curPage,
  handlePageChange,
  user,
  authenticated,
}) => {
  return (
    <div className="flex items-center justify-center w-full h-18% bg-transparent">
      <div className="flex w-95% h-full justify-between items-center">
        <Logo />
        {authenticated && (
          <Navigation
            curPage={curPage}
            handlePageChange={handlePageChange}
            user={user}
          />
        )}
      </div>
    </div>
  );
};
