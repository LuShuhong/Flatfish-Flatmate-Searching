import "./Saved.css";
import data from "../../data.json";
import { Profile } from "../../util/interfaces/Profile";
import { SavedCards } from "../../components/Cards/SavedCards";
import React, { useEffect, useState } from "react";
import { getProfiles } from "../../requests/getRequests";
import { SavedCard } from "../../util/interfaces/SavedCard";
import * as DeleteApi from "../../requests/deleteRequests";

interface Props {
  currentUserEmail: string;
  savedProfiles: Profile[];
  refreshProfiles: () => void;
}
export const Saved: React.FC<Props> = ({ currentUserEmail, savedProfiles, refreshProfiles }) => {
  const [savedUsers, setSavedUsers] = useState<Profile[]>([]);
  console.log(currentUserEmail);

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
    const profiles = await getProfiles(`http://localhost:8080/api/v1/savedprofiles/${currentUserEmail}`, setSavedUsers);
    console.log("Fetched saved profiles:", profiles)
  };

  console.log(savedUsers.map((savedUser) => {savedUser.userId}))
  const handleDeleteSavedProfile = async (savedUserId: string) => {
    try {
      await DeleteApi.deleteSavedProfile(currentUserEmail, savedUserId);
      refreshSavedProfiles();
    } catch (error) {
      console.error('Failed to delete saved profile', error);
    }
  };

  return (
    <>
      <div className="card-ctn ">
        {savedUsers.map((savedUser) => (
          <div
            className="flex justify-center align-center h-full w-full">
            <SavedCards
              savedUser={savedUser}
              key={savedUser.userId}
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
