import { useState } from "react";
import { NavigationButton } from "../NavigationButton/NavigationButton";

export const NavigationButtons: React.FC = () => {
  const [page, setPage] = useState<string>("Home");
  const navButtons: string[] = [
    "Home",
    "My Profile",
    "My Matches",
    "Saved Matches",
  ];
  const routing: string[] = ["/", "/", "/matches", "/"];
  const handlePageChange = (newPage: string): void => {
    setPage(() => newPage);
  };
  return (
    <div className="flex justify-between items-center w-7/12 h-full text-sm text-white">
      {navButtons.map((pageName: string, index: number) => (
        <NavigationButton
          pageName={pageName}
          curPage={page}
          handlePageChange={handlePageChange}
          routeTo={routing[index]}
          key={index}
        />
      ))}
    </div>
  );
};
