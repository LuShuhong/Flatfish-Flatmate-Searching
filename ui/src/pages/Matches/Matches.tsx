import "./Matches.css";
import { useState } from "react";
import { Profile } from "../../util/interfaces/Profile";
import data from "../../data.json";
import React from "react";
import { MatchesCard } from "../../components/Cards/MatchesCard";
import { ShuffleButton } from "../../components/ShuffleButton/ShuffleButton";

interface Props {
  profiles: Profile[];
}

export const Matches: React.FC<Props> = ({ profiles }) => {
  // const [openDialog, setOpenDialog] = useState<boolean>(false);
  // const [selectedPerson, setSelectedPerson] = useState<Profile | null>(null);
  // const [matchedProfiles, setMatchedProfiles] = useState<Profile[]>([]);
  // const [openDialog, setOpenDialog] = useState<boolean>(false);
  // const [selectedPerson, setSelectedPerson] = useState<Profile | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleShuffle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      {profiles.length ? (
        <div className="flex justify-center h-full flex-col items-center">
          {profiles.length && (
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
      ) : (
        <div className="">no matches</div>
      )}
    </div>
  );
};
