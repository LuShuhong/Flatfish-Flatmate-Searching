import { NavigationButton } from "../NavigationButton/NavigationButton";

interface Props {
  curPage: string;
  handlePageChange: (newPage: string) => void;
}

export const NavigationButtons: React.FC<Props> = ({
  curPage,
  handlePageChange,
}) => {
  const navButtons: string[] = [
    "Home",
    "My Profile",
    "My Matches",
    "Saved Matches",
  ];
  const routing: string[] = ["/", "/", "/matches", "/"];
  return (
    <div className="flex justify-between items-center w-7/12 h-full text-sm text-white">
      {navButtons.map((pageName: string, index: number) => (
        <NavigationButton
          pageName={pageName}
          curPage={curPage}
          handlePageChange={handlePageChange}
          routeTo={routing[index]}
          key={index}
        />
      ))}
    </div>
  );
};
