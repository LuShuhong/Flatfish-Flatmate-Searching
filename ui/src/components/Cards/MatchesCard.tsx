import React, { useEffect, useState } from "react";
import "../../pages/Matches/Matches.css";
import { Profile } from "../../util/interfaces/Profile";
import { postrq } from "../../requests/savedPostRequest";
import "./MatchesCard.css";
import { SaveButton } from "../SaveButton/SaveButton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  profile: Profile;
  userEmail: any;
  curUserId: any;
  // isMatchCardLoading: boolean;
}
export const MatchesCard: React.FC<Props> = ({ userEmail, profile }) => {
  const [buttonText, setButtonText] = useState("Save This Profile");

  const handleClick = () => {
    postrq(
      `https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/savedprofiles/${userEmail}/${profile.userId}`,
      // http://localhost:8080/api/v1
      // https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1
      userEmail,
      profile.userId
    );
    setButtonText("Saved");

    setTimeout(() => {
      setButtonText("Save This Profile");
    }, 1000);
  };

  return (
    <div id="container" className="container">
      <div className="user-details flex justify-center w-full">
        <h1 className="font-serif-display">{profile.name}</h1>
        <p className="information font-roboto-condensed">
          {profile.description}
        </p>

        <div className="flex justify-center">
          <button
            className="btn font-serif-display shadow-lg"
            onClick={handleClick}
            disabled={buttonText === "Saved" ? true : false}
          >
            {buttonText}
          </button>
        </div>
      </div>

      <div className="user-image">
        <img src={profile.picture} alt="person image" />

        <div className="info">
          <div className="information">
            <h2 className="font-serif-display text-xl p-4">About Me</h2>
            <ul>
              <li className="p-3">
                <strong className="font-serif-display text-xl ">
                  Gender:{" "}
                </strong>
                <span className="font-roboto-condensed text-lg">
                  {profile.userGender}
                </span>
              </li>
              <li className="p-3">
                <strong className="font-serif-display text-xl">Age : </strong>{" "}
                <span className="font-roboto-condensed text-lg">
                  {profile.age}
                </span>
              </li>
              <li className="p-3">
                <strong className="font-serif-display text-xl">
                  Preferred Locations:{" "}
                </strong>
                <span className="font-roboto-condensed text-lg">
                  {profile.location1}{" "}
                  {profile.location2 ? ", " + profile.location2 : ""}{" "}
                  {profile.location3 ? ", " + profile.location3 : ""}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
