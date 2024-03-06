import { Link } from "react-router-dom";

export const NavigationButtons: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-1/2 h-full text-sm text-white">
      <div className="flex items-center justify-center h-full duration-200 cursor-pointer hover:scale-110 hover:mt-3">
        <Link to="/" className="p-2">
          Home
        </Link>
      </div>
      <div className="flex items-center justify-center h-full hover:scale-110 duration-200 cursor-pointer hover:mt-3">
        <Link to="/matches" className="p-2">
          My Matches
        </Link>
      </div>
      <div className="flex items-center justify-center h-full hover:scale-110 duration-200 cursor-pointer hover:mt-3">
        Saved
      </div>
      <div className="flex items-center justify-center h-full hover:scale-110 duration-200 cursor-pointer hover:mt-3">
        Option
      </div>
    </div>
  );
};
