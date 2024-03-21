import { Link } from "react-router-dom";

export const RedirectToLogin: React.FC = () => {
  return (
    <div className="h-full w-full">
      <div className="flex items-end justify-center h-1/2 w-full text-xs">
        Already have an account?
      </div>
      <Link
        to="/login"
        className="flex items-start justify-center h-1/2 w-full text-sm underline"
      >
        log in
      </Link>
    </div>
  );
};
