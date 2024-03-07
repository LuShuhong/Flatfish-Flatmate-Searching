import { Person } from "../../util/person";
import "./MatchesDialog.css";
// import { SaveButton } from "../SaveButton/SaveButton";
import image from "../../img/personimg.jpeg";

interface Props {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPerson: Person;
}

export const MatchesDialog: React.FC<Props> = ({
  openDialog,
  setOpenDialog,
  selectedPerson,
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

      <div className="container rounded-xl w-1">
        <h1 className="mb-2 font-abril text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white ">
          {selectedPerson.name}
        </h1>
        <img src={image} alt="default person" className=" rounded-xl" />
        <p>age: {selectedPerson.age}</p>
        <p>job title: {selectedPerson.job_title}</p>
        <p>instagram: {selectedPerson.instagram}</p>
        {/* <div className="flex justify-end w-full p-2">
          <SaveButton selectedPerson={selectedPerson} />
        </div> */}
      </div>
    </>
  ) : null;
};
