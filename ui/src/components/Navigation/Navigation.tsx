import { NavigationButtons } from "../NavigationButtons/NavigationButtons";
import { Profile } from "../Profile/Profile";

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
  return (
    <div className="flex w-1/2 h-full justify-between items-center">
      <NavigationButtons
        curPage={curPage}
        handlePageChange={handlePageChange}
      />
      <Profile profilePic={profilePic} name={name} />
    </div>
  );
};
