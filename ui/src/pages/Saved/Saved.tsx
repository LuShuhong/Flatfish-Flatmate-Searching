import "./Saved.css";
import data from "../../data.json";
import { Profile } from "../../util/interfaces/Profile";
import { SavedCards } from "../../components/Cards/SavedCards";
import React from "react";

export const Saved: React.FC = () => {
  return (
    <>
      <div className="card-ctn ">
        {data.map((savedProfile: Profile, index: number) => (
          <>
            <div className="flex justify-center align-center h-full w-full">
              <SavedCards
                name={savedProfile.name}
                age={savedProfile.age} // Parse age as a number
                jobTitle={savedProfile.jobTitle}
                description={savedProfile.description}
                email={savedProfile.email}
                gender={savedProfile.gender}
                instagram={savedProfile.instagram}
                smoker={savedProfile.smoker}
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};
