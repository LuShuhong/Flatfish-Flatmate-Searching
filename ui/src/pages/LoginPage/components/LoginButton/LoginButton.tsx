interface Props {
  handleLogin: () => void;
}

export const LoginButton: React.FC<Props> = ({ handleLogin }) => {
  return (
    <button
      className="h-2/3 w-full bg-[#FEEEDE] shadow-defaultButton rounded-lg text-xl hover:text-2xl"
      onClick={handleLogin}
    >
      Login
    </button>
  );
};
