import { useAuth0 } from "@auth0/auth0-react";

export const RedirectToLogin: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="h-full w-full">
      <div className="flex items-end justify-center h-1/2 w-full text-xs">
        Already have an account?
      </div>
      <button
        onClick={() => loginWithRedirect()}
        className="flex items-start justify-center h-1/2 w-full text-sm underline"
      >
        log in
      </button>
    </div>
  );
};
