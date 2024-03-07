interface Props {
  handleMatch: () => void;
}

export const MatchButton: React.FC<Props> = ({ handleMatch }) => {
  return (
    <button
      className="border-2 w-full h-1/2 hover:text-xl"
      onClick={() => handleMatch()}
    >
      Match
    </button>
  );
};
