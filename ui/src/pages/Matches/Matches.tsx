import "./Matches.css";
import { useEffect, useState } from "react";
import { Preference } from "../../util/interfaces/Preference";
import { getProfiles } from "../../requests/getRequests";
import { Profile } from "../../util/interfaces/Profile";
import React from "react";
import { MatchesCard } from "../../components/Cards/MatchesCard";
import { ShuffleButton } from "../../components/ShuffleButton/ShuffleButton";
import { post } from "../../requests/postRequests";

interface Props {
  profiles: Profile[];
  userEmail: any;
}

export const Matches: React.FC<Props> = ({ profiles, userEmail }) => {
  // console.log(userEmail);
  // const [openDialog, setOpenDialog] = useState<boolean>(false);
  // const [selectedPerson, setSelectedPerson] = useState<Profile | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const [id, setId] = useState<any>();
  const initialDetails: Partial<Profile> = {
    // name: profiles[currentIndex].name,
    userId: profiles[currentIndex]?.userId,
    // birthday: convertDateToString(new Date()),
  };
  // const [curUser, setCurUser] = useState<Partial<Profile>>(initialDetails);

  const handleShuffle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  // const onClick = () => {
  //   post("http://localhost:8080/api/v1/savedprofiles", {
  //     userEmail,
  //     profiles.email,
  //   });
  // };
  // matchedProfiles.map((profile: Profile)=> profile.email)
  return (
    <div className="flex items-center justify-center w-full h-full">
      {profiles.length ? (
        <div className="flex justify-center h-full flex-col items-center">
          {profiles.length && (
            <MatchesCard
              profile={profiles[currentIndex]}
              userEmail={userEmail}
              curUserId={initialDetails.userId}
              // name={profiles[currentIndex].name}
              // age={profiles[currentIndex].age}
              // instagram={profiles[currentIndex].instagram}
              // description={profiles[currentIndex].description}
              // email={profiles[currentIndex].email}
              // gender={profiles[currentIndex].gender}
              // userEmail={userEmail}
            />
          )}
          {/* {console.log(profiles[currentIndex].email)} */}
          <div className="flex justfy-center p-3">
            <button
              className=""
              onClick={() => {
                handleShuffle();
              }}
            >
              <ShuffleButton />
            </button>
          </div>
        </div>
      ) : (
        <div className="">no matches</div>
      )}
    </div>
  );
};
