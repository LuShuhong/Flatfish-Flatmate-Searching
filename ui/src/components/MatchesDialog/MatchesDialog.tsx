import { Person } from "../../person";
import "./MatchesDialog.css";
import { FaHeart } from "react-icons/fa6";
import image from "/Users/sreshthamahmud/flatfish/ui/src/img/personimg.jpeg";
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
        <div className="flex justify-end w-full p-2">
          <button className="hover:duration-200 cursor-pointer">
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  ) : null;
};
