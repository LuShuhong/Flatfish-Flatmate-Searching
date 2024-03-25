import "./Saved.css";
import data from "../../data.json";
import { Profile } from "../../util/interfaces/Profile";
import { SavedCards } from "../../components/Cards/SavedCards";
import React, { useEffect, useState } from "react";
import { getProfiles } from "../../requests/getRequests";
import { SavedCard } from "../../util/interfaces/SavedCard";
import * as DeleteApi from "../../requests/deleteRequests";
import PuffLoader from "react-spinners/PuffLoader";

interface Props {
  currentUserEmail: string;
  // savedProfiles: Profile[];
  // refreshProfiles: () => void;
}
export const Saved: React.FC<Props> = ({
  currentUserEmail,
  // savedProfiles,
  // refreshProfiles,
}) => {
  const [savedUsers, setSavedUsers] = useState<Profile[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log(currentUserEmail);
  console.log(savedUsers.map((saved) => saved.userId));

  const hasSavedProfiles = savedUsers === null;
  // useEffect(() => {
  //   getProfiles(
  //     `http://localhost:8080/api/v1/savedprofiles/${currentUserEmail}`,
  //     setSavedUsers
  //   );
  // }, [currentUserEmail]);

  useEffect(() => {
    refreshSavedProfiles();
  }, [currentUserEmail]);

  const refreshSavedProfiles = async () => {
    const profiles = await getProfiles(
      `https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/savedprofiles/${currentUserEmail}`,
      setSavedUsers
    );
    // setIsLoading(true);
    console.log("Fetched saved profiles:", profiles);
  };

  // https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 3000);

  const handleDeleteSavedProfile = async (savedUserId: string) => {
    try {
      await DeleteApi.deleteSavedProfile(currentUserEmail, savedUserId);
      refreshSavedProfiles();
    } catch (error) {
      console.error("Failed to delete saved profile", error);
    }
  };
  // if (isLoading) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-full">
  //       <PuffLoader
  //         cssOverride={{}}
  //         size={250}
  //         color={"#78aba5"}
  //         loading={isLoading}
  //       />
  //     </div>
  //   );
  // }

  if (savedUsers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex items-center text-center align-center justify-center text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-smh-4/5 font-playfair-display">
          It seems like you haven't reeled in any fish yet.
        </div>
        <div className="flex items-center text-center align-center justify-center text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-smh-4/5 font-playfair-display">
          Please return to your matches and save some profiles!
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card-ctn ">
        {savedUsers.map((savedUser) => (
          <div className="flex justify-center align-center h-full w-full">
            <SavedCards
              savedUser={savedUser}
              key={savedUser.userId}
              currentUserEmail={currentUserEmail}
              onDeleteSavedCardClicked={handleDeleteSavedProfile}
            />
          </div>
        ))}
      </div>
      {/* <div className="card-ctn ">
        {savedUsers.map((user: Profile, index: number) => (
          <>
            <div
              key={index}
              className="flex justify-center align-center h-full w-full"
            >
              <SavedCards
                name={user.name}
                age={user.age} // Parse age as a number
                description={user.description}
                email={user.email}
                gender={user.gender}
                instagram={user.instagram}
                userId={user.userId}
              />
            </div>
          </>
        ))}
      </div> */}
    </>
  );
};
