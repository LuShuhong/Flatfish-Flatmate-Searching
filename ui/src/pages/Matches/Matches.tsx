import "./Matches.css";
import { useEffect, useState } from "react";
import { Preference } from "../../util/interfaces/Preference";
import { getProfiles } from "../../requests/getRequests";
import { Profile } from "../../util/interfaces/Profile";
import React from "react";
import { MatchesCard } from "../../components/Cards/MatchesCard";
import { ShuffleButton } from "../../components/ShuffleButton/ShuffleButton";

interface Props {
  preferences: Preference;
}

export const Matches: React.FC<Props> = ({ preferences }) => {
  // const [openDialog, setOpenDialog] = useState<boolean>(false);
  // const [selectedPerson, setSelectedPerson] = useState<Profile | null>(null);
  const [matchedProfiles, setMatchedProfiles] = useState<Profile[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    getProfiles(
      `http://localhost:8080/api/v1/matches?userId=${preferences.userId}&gender=${preferences.gender}&ageMin=${preferences.ageRange[0]}&ageMax=${preferences.ageRange[1]}&budgetMin=${preferences.budgetRange[0]}&budgetMax=${preferences.budgetRange[1]}`,
      setMatchedProfiles
    );
  }, []);

  const handleShuffle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % matchedProfiles.length);
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex justify-center h-full flex-col items-center">
        {matchedProfiles.length && (
          <MatchesCard
            name={matchedProfiles[currentIndex].name}
            age={matchedProfiles[currentIndex].age}
            jobTitle={matchedProfiles[currentIndex].jobTitle}
            instagram={matchedProfiles[currentIndex].instagram}
            description={matchedProfiles[currentIndex].description}
            email={matchedProfiles[currentIndex].email}
            gender={matchedProfiles[currentIndex].gender}
            smoker={matchedProfiles[currentIndex].smoker}
          />
        )}
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
    </div>
  );
};
