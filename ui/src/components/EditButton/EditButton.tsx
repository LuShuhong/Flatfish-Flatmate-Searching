import { FaUserEdit } from "react-icons/fa";

interface Props {
  handleEdit: () => void;
}

export const EditButton: React.FC<Props> = ({ handleEdit }) => {
  return <FaUserEdit className="cursor-pointer" onClick={() => handleEdit()} />;
};
