import { FaCheck } from "react-icons/fa6";

interface Props {
  handleSubmitChange: () => void;
}

export const SubmitChangeButton: React.FC<Props> = ({ handleSubmitChange }) => {
  return (
    <FaCheck className="cursor-pointer" onClick={() => handleSubmitChange()} />
  );
};
