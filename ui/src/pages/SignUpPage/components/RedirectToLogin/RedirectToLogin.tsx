export const RedirectToLogin: React.FC = () => {
  return (
    <div className="h-full w-full">
      <div className="flex items-end justify-center h-1/2 w-full text-xs">
        Already have an account?
      </div>
      <button className="flex items-start justify-center h-1/2 w-full text-sm">
        log in
      </button>
    </div>
  );
};
