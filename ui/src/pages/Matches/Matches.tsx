import "./Matches.css";
import { useEffect, useState } from "react";
import { Preference } from "../../util/interfaces/Preference";
import { getProfiles } from "../../requests/getRequests";
import { Profile } from "../../util/interfaces/Profile";
import React from "react";
import { MatchesCard } from "../../components/Cards/MatchesCard";
import { ShuffleButton } from "../../components/ShuffleButton/ShuffleButton";

interface Props {
  profiles: Profile[];
}

export const Matches: React.FC<Props> = ({ profiles }) => {
  console.log(profiles.length);
  // const [openDialog, setOpenDialog] = useState<boolean>(false);
  // const [selectedPerson, setSelectedPerson] = useState<Profile | null>(null);
  // const [matchedProfiles, setMatchedProfiles] = useState<Profile[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // useEffect(() => {
  //   getProfiles(
  //     `http://localhost:8080/api/v1/matches?userId=${profiles.userId}&gender=${profiles.gender}&ageMin=${profiles.ageRange[0]}&ageMax=${profiles.ageRange[1]}&budgetMin=${profiles.budgetRange[0]}&budgetMax=${profiles.budgetRange[1]}`,
  //     setMatchedProfiles
  //   );
  // }, []);

  const handleShuffle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      {profiles.length ? (
        <div className="flex justify-center h-full flex-col items-center">
          <MatchesCard
            name={profiles[currentIndex].name}
            age={profiles[currentIndex].age}
            jobTitle={profiles[currentIndex].jobTitle}
            instagram={profiles[currentIndex].instagram}
            description={profiles[currentIndex].description}
            email={profiles[currentIndex].email}
            gender={profiles[currentIndex].gender}
            smoker={profiles[currentIndex].smoker}
          />
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
        <div className="grid grid-cols-1 justify-items-center w-1/2">
          <div className="font-playfair-display text-2xl">
            😭 No Matches Found 🥵
          </div>
          <div className="font-playfair-display text-large text-pretty">
            We pay over 100 retired fishermen a LOT of mackerel to match
            profiles together. Unfortumately, they weren't able to find anyone
            who meets your preferences. Try relaxing your requirements, and
            they'll give it another go.
          </div>
        </div>
      )}
    </div>
  );
};
