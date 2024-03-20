import { useNavigate } from "react-router-dom";

export const SignUpButton: React.FC = () => {
  const navigate = useNavigate();
  const HandleSignUp = (): void => {
    navigate("/signup");
  };
  return (
    <button
      className="bg-[#9BBFBB] rounded-md h-1/6 w-2/5 shadow-defaultButton font-playfair-display hover:bg-[#89ada9]"
      onClick={() => HandleSignUp()}
    >
      Sign up
    </button>
  );
};
