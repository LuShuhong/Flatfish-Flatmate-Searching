import { NavigationButton } from "../NavigationButton/NavigationButton";
import { pages } from "../../util/constants/pages";

interface Props {
  curPage: string;
  handlePageChange: (newPage: string) => void;
}

export const NavigationButtons: React.FC<Props> = ({
  curPage,
  handlePageChange,
}) => {
  return (
    <div className="flex justify-between items-center w-2/3 h-full text-xs">
      {Object.entries(pages).map(([page, route]) => (
        <NavigationButton
          pageName={page}
          curPage={curPage}
          handlePageChange={handlePageChange}
          routeTo={route}
          key={page}
        />
      ))}
    </div>
  );
};
