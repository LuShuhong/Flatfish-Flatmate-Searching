import React from "react";
// import person from "../../img/funcat.jpeg";
import { MdDelete } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { SavedCard } from "../../util/interfaces/SavedCard";
import { Profile } from "../../util/interfaces/Profile";
import * as DeleteApi from "../../requests/deleteRequests";
import { getProfiles } from "../../requests/getRequests";
import { InstagramButton } from "./InstagramButton";
import { InstagramIcon } from "./InstagramIcon";

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
    <div className="flex justify-start flex-col bg-[#E5E5E5] rounded-3xl w-1/4 m-8 p-4 shadow-md min-w-96 min-h-[444px] h-100%">
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
        <p className="fonto-roboto-condensed bg-[#E5E5E5] text-center p-7 pb-10">
          {description}
        </p>
        <div className="flex flex-row justify-around">
          <button
            style={{ width: "150px" }}
            // className="flex flex-row align-center justify-center bg-sea-green p-2 m-4 rounded-lg shadow-md hover:bg-[#89ada9]"
            className="flex flex-row align-center justify-center rounded-lg shadow-md p-2 m-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            onClick={() =>
              (window.location.href = `https://www.instagram.com/${instagram}`)
            }
          >
            <div className="flex pt-0.5 pr-1 pl-1">
              <InstagramIcon />
            </div>
            <div className="font-roboto-condensed">Message</div>
          </button>
          <button
            style={{ width: "150px" }}
            onClick={handleClickDelete}
            className="flex flex-row justify-center bg-sea-green p-2 m-4 rounded-lg shadow-md hover:bg-[#89ada9] font-roboto-condensed text-sm"
          >
            <MdOutlineDelete className="flex mt-1 mb-0.5 mr-1 ml-1" />
            <span className="pt-0.5">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
