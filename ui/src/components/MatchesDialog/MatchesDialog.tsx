import { Person } from "../../person";
import "./MatchesDialog.css";
interface Props {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPerson: Person;
  setSelectedPerson: React.Dispatch<React.SetStateAction<any>>;
}

export const MatchesDialog: React.FC<Props> = ({
  openDialog,
  setOpenDialog,
  selectedPerson,
  setSelectedPerson,
}) => {
  const handleDeselect = () => {
    setOpenDialog((prev) => !prev);
  };
  return openDialog ? (
    <>
      <div
        className="background"
        onClick={() => {
          handleDeselect();
        }}
      ></div>
      <div className="container rounded-lg">
        <p>name: {selectedPerson.name}</p>
        <p>age: {selectedPerson.age}</p>
        <p>job title: {selectedPerson.job_title}</p>
        <p>instagram: {selectedPerson.instagram}</p>
      </div>
    </>
  ) : null;
};
