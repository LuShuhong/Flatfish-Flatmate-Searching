interface Props {
  handleSave: () => void;
}

export const Save: React.FC<Props> = ({ handleSave }) => {
  return (
    <button
      className="w-1/2 h-full shadow-defaultButton rounded-sm bg-[#9BBFBB] duration-300 hover:text-xl"
      onClick={() => handleSave()}
    >
      Save
    </button>
  );
};
