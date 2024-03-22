import React from "react";
import { LoginButton } from "./components/LoginButton/LoginButton";

export const LandingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center h-1/2 w-1/2">
        <div className="flex items-center text-center align-center justify-center text-2xl h-4/5 w-full font-playfair-display pb-10">
          Welcome to FlatFish, where finding the perfect flatmate is smooth
          sailing! We've revolutionized the roommate search by focusing on what
          truly matters: compatibility. With our intuitive platform, you can
          easily connect with like-minded individuals who share your living
          standards and aspirations. Say goodbye to endless searching and
          "ahoy!" to your ideal flat-sharing experience.
        </div>
        <div className="flex items-center text-center align-center justify-center text-2xl h-4/5 w-full font-playfair-display pb-10">
          Reel in your next flatmate today!
        </div>
        <LoginButton />
      </div>
    </div>
  );
};
