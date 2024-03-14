import React from "react";
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
export const SavedCards: React.FC<Props> = ({ name, age }) => {
  return (
    <div className="flex justify-start flex-col bg-[#FEEEDE] rounded-3xl h-full w-1/4 m-8 p-4 shadow-md min-w-96">
      <div className="text-center bg-[#FEEEDE] mt-10">
        <img
          src={person}
          className="rounded-full h-24 w-24 object-cover mx-auto"
          alt="Profile"
        />
        <h1 className="bg-[#FEEEDE] font-serif-display text-4xl mt-5 mb-3">
          {name}
        </h1>
        <h2 className="font-playfair-display text-xl bg-[#FEEEDE] mb-3">
          {age}
        </h2>
        <p className="fonto-roboto-condensed bg-[#FEEEDE] text-center">
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
