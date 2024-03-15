import "./MatchesDialog.css";
import image from "../../img/personimg.jpeg";
import { Profile } from "../../util/interfaces/Profile";

interface Props {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPerson: Profile;
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
        <p>job title: {selectedPerson.jobTitle}</p>
        <p>instagram: {selectedPerson.userInsta}</p>
      </div>
    </>
  ) : null;
};
