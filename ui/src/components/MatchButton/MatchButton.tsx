interface Props {
  handleMatch: () => void;
}

export const MatchButton: React.FC<Props> = ({ handleMatch }) => {
  return (
    <button
      className="rounded-xl bg-[#9BBFBB] w-60% h-full hover:text-xl shadow-matchButton"
      onClick={() => handleMatch()}
    >
      Match
    </button>
  );
};
