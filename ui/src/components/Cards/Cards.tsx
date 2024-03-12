import { Profile } from "../../util/interfaces/Profile";
import person from "../../img/funcat.jpeg";
interface Props {
  userId: string;
  name: string;
  age: string;
  jobTitle: string;
  description: string;
  email: string;
  userGender: string;
  userInsta: string;
}
export const Cards: React.FC<Props> = ({ name, age }) => {
  return (
    <div className="flex justify-start flex-col card-ctn bg-light-tan rounded-3xl h-5/6 w-1/4 m-10 p-4 shadow-md min-w-80">
      <div className="text-center bg-light-tan mt-10">
        <img
          src={person}
          className="rounded-full h-24 w-24 object-cover mx-auto"
          alt="Profile"
        />
        <h1 className="bg-light-tan font-serif-display text-4xl mt-5 mb-3">
          {name}
        </h1>
        <h2 className="font-playfair-display text-xl bg-light-tan mb-3">
          {age}
        </h2>
        <p className="fonto-roboto-condensed bg-light-tan text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          malesuada orci eu viverra posuere. Etiam est libero, interdum quis dui
          at, condimentum dapibus enim. Nullam tincidunt imperdiet ex ut
          iaculis. Nulla facilisi. Curabitur sodales ultricies justo, sit amet
          sollicitudin est malesuada vel. Donec dapibus sagittis ante, in
          pulvinar tellus congue eu. Nunc blandit sapien mi, sit amet
          ullamcorper est tempus sed.
        </p>
        <button className="bg-sea-green p-1 m-4 rounded-lg shadow-md">
          {" "}
          instagram
        </button>
      </div>
    </div>
  );
};
