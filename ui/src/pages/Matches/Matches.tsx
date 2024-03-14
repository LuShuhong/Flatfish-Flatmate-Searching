import "./Matches.css";
import { useEffect, useState } from "react";
import { MatchesDialog } from "../../components/MatchesDialog/MatchesDialog";
import { Preference } from "../../util/interfaces/Preference";
import { getProfiles } from "../../requests/getRequests";
import { Profile } from "../../util/interfaces/Profile";
import data from "../../data.json";
import React from "react";
// import { MatchesCard } from "../../components/Cards/MatchesCard";
import { SavedCards } from "../../components/Cards/SavedCards";

interface Props {
  preferences: Preference;
}

export const Matches: React.FC<Props> = ({ preferences }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedPerson, setSelectedPerson] = useState<Profile | null>(null);
  const [matchedProfiles, setMatchedProfiles] = useState<Profile[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    getProfiles(
      `http://localhost:8080/api/v1/matches?preferenceId=${preferences.preferenceId}&gender=${preferences.gender}&ageMin=${preferences.ageRange[0]}&ageMax=${preferences.ageRange[1]}&budgetMin=${preferences.budgetRange[0]}&budgetMax=${preferences.budgetRange[1]}`,
      setMatchedProfiles
    );
  }, []);

  const handleClick = (data: Profile) => {
    setOpenDialog(true);
    setSelectedPerson(data);
  };

  const handleShuffle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      {/* {data.map((data: Profile, index: number) => (
        <>
          <div key={index} onClick={() => handleClick(data)}>
            <MatchesCard
              name={data.name}
              age={data.age}
              jobTitle={data.jobTitle}
              userInsta={data.userInsta}
            />
          </div>
        </>
      ))} */}
      {/* <div className="flex justify-center items-center w-full h-5/6">
        <div className="flip-card-container flex flex-wrap bg-tan justify-center">
          {data.map((data: Profile, index: number) => (
            <div
              className="flip-card w-64 h-40 rounded-lg m-2 p-3"
              key={index}
              onClick={() => {
                handleClick(data);
              }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front"></div>
                <div className="flip-card-back flex flex-col justify-center">
                  <h2>{data.name}</h2>
                  <p>Age: {data.age}</p>
                  <p>Job: {data.jobTitle}</p>
                  <p>Instagram: {data.userInsta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div>
        <SavedCards
          name={data[currentIndex].name}
          age={data[currentIndex].age}
          jobTitle={data[currentIndex].jobTitle}
          userInsta={data[currentIndex].userInsta}
          userId={data[currentIndex].userId}
          description={data[currentIndex].description}
          email={data[currentIndex].email}
          userGender={data[currentIndex].userGender}
        />
      </div>
      <button
        onClick={() => {
          handleShuffle();
        }}
      >
        shuffle
      </button>

      {/* {openDialog && selectedPerson && (
        <MatchesDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          selectedPerson={selectedPerson}
        />
      )} */}
    </div>
  );
};
