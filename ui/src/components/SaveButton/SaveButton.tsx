import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { Person } from "../../person";

interface Props {
  selectedPerson: Person;
}
export const SaveButton: React.FC<Props> = ({ selectedPerson }) => {
  // i want a list of saved people. when the heart is clicked, it saves the list to the database then also have a saved page of people that you can horizontal scroll through
  const [saved, setSaved] = useState<Person[]>([]);

  const handleSave = () => {
    setSaved((prevState) => [...prevState, selectedPerson]);
    console.log(saved);
  };
  return (
    <button
      className="hover:duration-200 cursor-pointer"
      onClick={() => handleSave()}
    >
      <FaHeart />
    </button>
  );
};
