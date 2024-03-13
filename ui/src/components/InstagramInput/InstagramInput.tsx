interface Props {
  instagram: string | undefined;
  handleUserInstagram: (val: string) => void;
}

export const InstagramInput: React.FC<Props> = ({
  instagram,
  handleUserInstagram,
}) => {
  return (
    <div className="h-1/5 w-full">
      <label className="text-xs w-full">
        Instagram
        <input
          type="text"
          className="w-97.5% h-55% text-lg p-1 rounded-xl border border-gray-400 bg-[#E5E5E5] mt-1"
          value={instagram ? instagram : ""}
          onChange={(e) => handleUserInstagram(e.target.value)}
        />
      </label>
    </div>
  );
};
