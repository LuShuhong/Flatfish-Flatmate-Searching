import "./Matches.css";
import { useState, useEffect } from "react";
import { Profile } from "../../util/interfaces/Profile";
import React from "react";
import { MatchesCard } from "../../components/Cards/MatchesCard";
import { ShuffleButton } from "../../components/ShuffleButton/ShuffleButton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import PuffLoader from "react-spinners/PuffLoader";

interface Props {
  profiles: Profile[] | null;
  userEmail: any;
  isLoading: boolean;
  // setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Matches: React.FC<Props> = ({
  profiles,
  userEmail,
  isLoading,
  // setIsLoading
}) => {
  // const [selectedPerson, setSelectedPerson] = useState<Profile | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [clicked, setClicked] = useState<boolean>(false);
  // const [isMatchCardLoading, setIsMatchCardLoading] = useState(false);

  // const handleShuffle = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  //   setClicked(true);
  // };

  setTimeout(() => {
    setClicked(false);
  }, 1000);

  const hasSubmittedPreferences = profiles !== null;
  const hasMatches = profiles && profiles.length > 0;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <PuffLoader
          cssOverride={{}}
          size={250}
          color={"#78aba5"}
          loading={isLoading}
        />
      </div>
    );
  }

  const handleShuffle = () => {
    if (profiles && profiles.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
      setClicked(true);
    }
  };

  if (!hasSubmittedPreferences) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex items-center text-center align-center justify-center text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-smh-4/5 font-playfair-display">
          It appears that you haven't added any bait to your hook.
        </div>
        <div className="flex items-center text-center align-center justify-center text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-smh-4/5 font-playfair-display">
          Ready to fish for your ideal flatmate? Head to the home page and
          submit your preferences!
        </div>
      </div>
    );
  }

  if (!hasMatches) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="grid grid-cols-1 justify-items-center w-1/2">
          <div className="font-playfair-display text-2xl">
            😭 No Matches Found 🥵
          </div>
          <div className="font-playfair-display text-large text-pretty text-center">
            We pay over 100 retired fishermen a LOT of mackerel to match
            profiles together. Unfortumately, they weren't able to find anyone
            who meets your preferences. Try relaxing your requirements, and
            they'll give it another go.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex justify-center h-full flex-col items-center">
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          {profiles.length && (
            <MatchesCard
              profile={profiles[currentIndex]}
              userEmail={userEmail}
              curUserId={profiles[currentIndex].userId}
              // isMatchCardLoading={isMatchCardLoading}
            />
          )}
        </SkeletonTheme>
        {/* {console.log(profiles[currentIndex].email)} */}
        <div className="flex justfy-center p-3">
          <button
            className={`shuffle-button ${clicked ? "clicked" : ""}`}
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
