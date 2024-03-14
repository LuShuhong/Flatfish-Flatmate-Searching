import React from "react";
import "../../pages/Matches/Matches.css";
interface Props {
  name: string;
  age: string;
  jobTitle: string;
  userInsta: string;
}
export const MatchesCard: React.FC<Props> = ({
  name,
  age,
  jobTitle,
  userInsta,
}) => {
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
    </>
  );
};
