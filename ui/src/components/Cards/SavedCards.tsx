import React from "react";
import person from "../../img/funcat.jpeg";
import { MdDelete } from "react-icons/md";
import { SavedCard } from "../../util/interfaces/SavedCard";

// interface Props {
//   name: string;
//   age: string;
//   description: string;
//   email: string;
//   gender: string;
//   instagram: string;
//   userId: string;
// }

type SavedCardProps = {
  savedCard: SavedCard,
  onDeleteSavedCardClicked: (savedCard: SavedCard) => void
}

export const SavedCards: React.FC<SavedCardProps> = ({ savedCard, onDeleteSavedCardClicked }) => {
  const {
    name,
    age,
    email,
    instagram,
  } = savedCard;
  // console.log(email);

  const handleClickIg = () => {};
  return (
    <div className="flex justify-start flex-col bg-[#E5E5E5] rounded-3xl h-full w-1/4 m-8 p-4 shadow-md min-w-96">
      <div className="text-center bg-[#E5E5E5] mt-10">
        <img
          src={person}
          className="rounded-full h-24 w-24 object-cover mx-auto"
          alt="Profile"
        />
        <h1 className="bg-[#E5E5E5] font-serif-display text-4xl mt-5 mb-3">
          {name}
        </h1>
        <h2 className="font-playfair-display text-xl bg-[#E5E5E5] mb-3">
          {age}
        </h2>
        <h1>{email}</h1>
        <p className="fonto-roboto-condensed bg-[#E5E5E5] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          malesuada orci eu viverra posuere. Etiam est libero, interdum quis dui
          at, condimentum dapibus enim. Nullam tincidunt imperdiet ex ut
          iaculis. Nulla facilisi. Curabitur sodales ultricies justo, sit amet
          sollicitudin est malesuada vel. Donec dapibus sagittis ante, in
          pulvinar tellus congue eu. Nunc blandit sapien mi, sit amet
          ullamcorper est tempus sed.
        </p>
        <button className="bg-sea-green p-1 m-4 rounded-lg shadow-md">
          {instagram}
        </button>
<<<<<<< HEAD
        <MdDelete
          onClick={(e) => {
            onDeleteSavedCardClicked(savedCard);
            e.stopPropagation();
          }}
        />
=======
        <button>delete</button>
>>>>>>> dev
      </div>
    </div>
  );
};
