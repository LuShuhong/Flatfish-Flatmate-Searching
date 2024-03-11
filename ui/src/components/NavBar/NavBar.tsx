import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

interface Props {
  curPage: string;
  handlePageChange: (newPage: string) => void;
}

export const NavBar: React.FC<Props> = ({ curPage, handlePageChange }) => {
  const user = {
    img: "pic",
    name: "jason",
  };

  return (
    <div className="flex items-center justify-center w-full h-18% bg-transparent">
      <div className="flex w-95% h-full justify-between items-center">
        <Logo />
        <Navigation
          curPage={curPage}
          handlePageChange={handlePageChange}
          profilePic={user.img}
          name={user.name}
        />
      </div>
    </div>
  );
};
