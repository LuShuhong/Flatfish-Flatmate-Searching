import { Link } from "react-router-dom";

interface Props {
  pageName: string;
  curPage: string;
  handlePageChange: (newPage: string) => void;
  routeTo: string;
}

export const NavigationButton: React.FC<Props> = ({
  pageName,
  curPage,
  handlePageChange,
  routeTo,
}) => {
  return (
    <div className="flex justify-center h-full duration-200 cursor-pointer hover:scale-110 hover:mt-3 items-center font-serif-display">
      <Link
        to={routeTo}
        className={`p-3 ${
          curPage === pageName ? "bg-[#E5E5E5] rounded-2xl" : ""
        }`}
        onClick={() => handlePageChange(pageName)}
      >
        {pageName}
      </Link>
    </div>
  );
};
