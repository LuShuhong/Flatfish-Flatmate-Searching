import { IoMdCheckmark } from "react-icons/io";

interface Props {
  handleSaveProfile: () => void;
  status: boolean;
}

export const SaveProfileButton: React.FC<Props> = ({
  handleSaveProfile,
  status,
}) => {
  return (
    <button
      className={`flex justify-center items-center h-1/2 w-1/2 ${
        status ? "bg-[#D9D9D9]" : "bg-[#FEEEDE]"
      } shadow-defaultButton rounded-lg text-xl hover:text-2xl`}
      onClick={() => handleSaveProfile()}
    >
      Save {status ? <IoMdCheckmark /> : ""}
    </button>
  );
};
