import "./Matches.css";
import { useState } from "react";
// import { MatchesDialog } from "../../components/MatchesDialog/MatchesDialog";
import { Preference } from "../../util/interfaces/Preference";
// import { getProfiles } from "../../requests/getRequests";
// import { Profile } from "../../util/interfaces/Profile";
import data from "../../data.json";
import React from "react";
// import { MatchesCard } from "../../components/Cards/MatchesCard";
import { MatchesCard } from "../../components/Cards/MatchesCard";
import { ShuffleButton } from "../../components/ShuffleButton/ShuffleButton";

interface Props {
  preferences: Preference;
}

export const Matches: React.FC<Props> = ({ preferences }) => {
  // const [openDialog, setOpenDialog] = useState<boolean>(false);
  // const [selectedPerson, setSelectedPerson] = useState<Profile | null>(null);
  // const [matchedProfiles, setMatchedProfiles] = useState<Profile[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // useEffect(() => {
  //   getProfiles(
  //     `http://localhost:8080/api/v1/matches?preferenceId=${preferences.preferenceId}&gender=${preferences.gender}&ageMin=${preferences.ageRange[0]}&ageMax=${preferences.ageRange[1]}&budgetMin=${preferences.budgetRange[0]}&budgetMax=${preferences.budgetRange[1]}`,
  //     setMatchedProfiles
  //   );
  // }, []);

  // const handleClick = (data: Profile) => {
  //   setOpenDialog(true);
  //   setSelectedPerson(data);
  // };

  const handleShuffle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex justify-center h-full flex-col items-center">
        <MatchesCard
          name={data[currentIndex].name}
          age={data[currentIndex].age}
          jobTitle={data[currentIndex].jobTitle}
          userInsta={data[currentIndex].userInsta}
          userId={data[currentIndex].userId}
          description={data[currentIndex].description}
          email={data[currentIndex].email}
          userGender={data[currentIndex].userGender}
        />
        <div className="flex p-3">
          <button
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
