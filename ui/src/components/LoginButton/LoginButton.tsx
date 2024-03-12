import { useAuth0 } from "@auth0/auth0-react";

<<<<<<< HEAD
const LoginButton: React.FC = () => {
=======
export const LoginButton: React.FC = () => {
>>>>>>> dev
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-[#9BBFBB] rounded-md h-1/6 w-2/5 shadow-defaultButton"
    >
      Log In
    </button>
  );
};
<<<<<<< HEAD

export default LoginButton;
=======
>>>>>>> dev
