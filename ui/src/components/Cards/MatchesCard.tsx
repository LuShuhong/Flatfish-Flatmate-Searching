// import React, { useEffect, useState } from "react";
// import "../../pages/Matches/Matches.css";
// import person from "../../img/O-O.jpeg";
// // import { post } from "../../requests/postRequests";
// import { Profile } from "../../util/interfaces/Profile";
// import { postrq } from "../../requests/savedPostRequest";
// import { SaveButton } from "../SaveButton/SaveButton";

// interface Props {
//   profile: Profile;
//   userEmail: any;
//   curUserId: any;
// }
// export const MatchesCard: React.FC<Props> = ({ userEmail, profile }) => {
//   console.log(profile.picture);
//   console.log(userEmail);

//   const handleClick = () => {
//     postrq(
//       `http://localhost:8080/api/v1/savedprofiles/${userEmail}/${profile.userId}`,
//       userEmail,
//       profile.userId
//     );
//   };

//   return (
//     <>
//       <div className="flex bg-sea-green justify-center align-center w-5/6 h-5/6 rounded-xl shadow-md">
//         <div className="flex justify-center align-center p-5">
//           <img
//             src={profile.picture}
//             alt="img of person"
//             className="rounded-xl w-80 h-80"
//           />
//         </div>
//         <div className="flex flex-col justify-between items-start p-8 w-full">
//           <div className="flex flex-col  align-center h-full">
//             <h1 className="font-serif-display text-5xl mb-3">{profile.name}</h1>
//             <h2 className="font-playfair-display text-lg">{profile.age}</h2>
//             <p className="font-roboto-condensed text-lg">
//               {profile.description}
//             </p>
//           </div>
//           <div className="flex justify-end w-full">
//             <SaveButton onClick={() => handleClick()} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

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
      `http://localhost:8080/api/v1/savedprofiles/${userEmail}/${profile.userId}`,
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
            className="btn font-playfair-display"
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
            <h2>About Me</h2>
            <ul>
              <li>
                <strong>Gender: </strong>
                {profile.userGender}{" "}
              </li>
              <li>
                <strong>Age : </strong> {profile.age}
              </li>
              <li>
                <strong>Preferred Locations: </strong>
                {profile.location1}{" "}
                {profile.location2 ? ", " + profile.location2 : ""}{" "}
                {profile.location3 ? ", " + profile.location3 : ""}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
