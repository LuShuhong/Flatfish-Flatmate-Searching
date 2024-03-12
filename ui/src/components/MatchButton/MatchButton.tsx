interface Props {
  handleMatch: () => void;
}

export const MatchButton: React.FC<Props> = ({ handleMatch }) => {
  return (
    <button
      className="rounded-2xl bg-[#9BBFBB] w-full h-1/2 hover:text-xl shadow-matchButton"
      onClick={() => handleMatch()}
    >
      Match
    </button>
  );
};
