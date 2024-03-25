import React, { useEffect, useState } from "react";
import "../../pages/Matches/Matches.css";
import person from "../../img/O-O.jpeg";
// import { post } from "../../requests/postRequests";
import { Profile } from "../../util/interfaces/Profile";
import { postrq } from "../../requests/savedPostRequest";
import { SaveButton } from "../SaveButton/SaveButton";

interface Props {
  profile: Profile;
  userEmail: any;
  curUserId: any;
}
export const MatchesCard: React.FC<Props> = ({ userEmail, profile }) => {
  console.log(profile.userId);
  console.log(userEmail);

  const handleClick = () => {
    postrq(
      `http://localhost:8080/api/v1/savedprofiles/${userEmail}/${profile.userId}`,
      userEmail,
      profile.userId
    );
  };

  return (
    <>
      <div className="flex bg-sea-green justify-center align-center w-5/6 h-5/6 rounded-xl shadow-md">
        <div className="flex justify-center align-center p-5">
          <img src={person} alt="img of person" className="rounded-xl" />
        </div>
        <div className="flex flex-col justify-between items-start p-8 w-full">
          <div className="flex flex-col  align-center h-full">
            <h1 className="font-serif-display text-5xl mb-3">{profile.name}</h1>
            <h2 className="font-playfair-display text-lg">{profile.age}</h2>
            <p className="font-roboto-condensed text-lg">
              {profile.description}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              malesuada orci eu viverra posuere. Etiam est libero, interdum quis
              dui at, condimentum dapibus enim. Nullam tincidunt imperdiet ex ut
              iaculis. Nulla facilisi. Curabitur sodales ultricies justo, sit
              amet sollicitudin est malesuada vel. Donec dapibus sagittis ante,
              in pulvinar tellus congue eu. Nunc blandit sapien mi, sit amet
              ullamcorper est tempus sed.
            </p>
          </div>
          <div className="flex justify-end w-full">
            <SaveButton onClick={() => handleClick()} />
          </div>
        </div>
      </div>
    </>
  );
};
