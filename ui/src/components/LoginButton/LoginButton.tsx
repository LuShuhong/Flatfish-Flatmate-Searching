import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-[#9BBFBB] rounded-md h-1/6 w-2/5 shadow-defaultButton font-playfair-display hover:bg-[#89ada9]"
    >
      Log In
    </button>
  );
};
