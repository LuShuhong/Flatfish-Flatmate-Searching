import React from "react";
import "../../pages/Matches/Matches.css";
import person from "../../img/wetcat.jpeg";
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
export const MatchesCard: React.FC<Props> = ({ name, age, jobTitle }) => {
  return (
    <>
      {/* <div className="flex justify-center items-center w-full h-5/6"> */}
      {/* <div className="flip-card-container flex flex-wrap bg-tan justify-center">
        <div className="flip-card w-64 h-40 rounded-lg m-2 p-3">
          <div className="flip-card-inner">
            <div className="flip-card-front"></div>
            <div className="flip-card-back flex flex-col justify-center">
              <h2>{name}</h2>
              <p>Age: {age}</p>
              <p>Job: {jobTitle}</p>
              <p>Instagram: {userInsta}</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* </div> */}
      <div className="flex bg-sea-green justify-center align-center w-5/6 h-5/6 rounded-xl shadow-md">
        <div className="p-5">
          <img src={person} className="rounded-xl" />
        </div>
        <div className="items-center p-8">
          <h1 className="font-serif-display text-5xl">{name}</h1>
          <h2 className="font-playfair-display text-lg">{age}</h2>
          <h2 className="font-playfair-display text-lg">{jobTitle}</h2>
          <p className="font-roboto-condensed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            malesuada orci eu viverra posuere. Etiam est libero, interdum quis
            dui at, condimentum dapibus enim. Nullam tincidunt imperdiet ex ut
            iaculis. Nulla facilisi. Curabitur sodales ultricies justo, sit amet
            sollicitudin est malesuada vel. Donec dapibus sagittis ante, in
            pulvinar tellus congue eu. Nunc blandit sapien mi, sit amet
            ullamcorper est tempus sed.
          </p>
        </div>
      </div>
    </>
  );
};
