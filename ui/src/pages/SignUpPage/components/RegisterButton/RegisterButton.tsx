interface Props {
  handleRegistration: () => void;
}

export const RegisterButton: React.FC<Props> = ({ handleRegistration }) => {
  return (
    <button
      className="h-2/3 w-full bg-[#FEEEDE] shadow-defaultButton rounded-lg text-xl hover:text-2xl duration-300"
      onClick={() => handleRegistration()}
    >
      Register
    </button>
  );
};
