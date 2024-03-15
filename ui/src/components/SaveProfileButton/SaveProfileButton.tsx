interface Props {
  handleSaveProfile: () => void;
}

export const SaveProfileButton: React.FC<Props> = ({ handleSaveProfile }) => {
  return (
    <button
      className="flex justify-center items-center h-1/2 w-1/2 bg-[#FEEEDE] shadow-defaultButton rounded-lg text-xl hover:text-2xl"
      onClick={() => handleSaveProfile()}
    >
      Save
    </button>
  );
};
