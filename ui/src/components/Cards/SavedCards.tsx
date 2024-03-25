import React from "react";
import person from "../../img/funcat.jpeg";
import { MdDelete } from "react-icons/md";
import { SavedCard } from "../../util/interfaces/SavedCard";
import { Profile } from "../../util/interfaces/Profile";
import * as DeleteApi from "../../requests/deleteRequests";
import { getProfiles } from "../../requests/getRequests";
import { InstagramButton } from "./InstagramButton";

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
  currentUserEmail: string;
  savedUser: Profile;
  onDeleteSavedCardClicked: (savedUserId: string) => void;
};

export const SavedCards: React.FC<SavedCardProps> = ({
  currentUserEmail,
  savedUser,
  onDeleteSavedCardClicked,
}) => {
  const { name, age, email, instagram, userId, description, picture } =
    savedUser;
  console.log(savedUser);

  const handleClickIg = () => {};

  const handleClickDelete = () => {
    onDeleteSavedCardClicked(savedUser.userId);
  };

  return (
    <div className="flex justify-start flex-col bg-[#E5E5E5] rounded-3xl h-full w-1/4 m-8 p-4 shadow-md min-w-96">
      <div className="text-center bg-[#E5E5E5] mt-10">
        <img
          src={picture}
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
          {description}
        </p>
        {/* <button className="bg-sea-green p-1 m-4 rounded-lg shadow-md">
          instagram
        </button> */}
        {/* <InstagramButton /> */}
        <button className="bg-sea-green p-1 m-4 rounded-lg shadow-md">
          {instagram}
        </button>
        <button
          className="bg-sea-green p-1 m-4 rounded-lg shadow-md"
          onClick={() =>
            (window.location.href = `https://www.instagram.com/${instagram}`)
          }
        >
          Talk To Me in Instagram
        </button>
        <MdDelete onClick={handleClickDelete} />
      </div>
    </div>
  );
};
