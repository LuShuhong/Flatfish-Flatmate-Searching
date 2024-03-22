import "./Saved.css";
import data from "../../data.json";
import { Profile } from "../../util/interfaces/Profile";
import { SavedCards } from "../../components/Cards/SavedCards";
import React, { useEffect, useState } from "react";
import { getProfiles } from "../../requests/getRequests";

interface Props {
  currentUserEmail: any;
}
export const Saved: React.FC<Props> = ({ currentUserEmail }) => {
  const [savedUsers, setSavedUsers] = useState<Profile[]>([]);
  console.log(currentUserEmail);

  useEffect(() => {
    getProfiles(
      `http://localhost:8080/api/v1/savedprofiles/${currentUserEmail}`,
      setSavedUsers
    );
  }, []);

  return (
    <>
      <div className="card-ctn ">
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
      </div>
    </>
  );
};
