import { Person } from "../../util/person";
import data from "../../data.json";
import "./Matches.css";
import { useEffect, useState } from "react";
import { MatchesDialog } from "../../components/MatchesDialog/MatchesDialog";
import { Preference } from "../../util/interfaces/Preference";
import { getProfiles } from "../../requests/getRequests";
import { Profile } from "../../util/interfaces/Profile";

interface Props {
  preferences: Preference;
}

export const Matches: React.FC<Props> = ({ preferences }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const handleClick = (person: Person) => {
    setOpenDialog(true);
    setSelectedPerson(person);
  };
  const [matchedProfiles, setMatchedProfiles] = useState<Profile[]>([]);
  useEffect(() => {
    getProfiles(
      `http://localhost:8080/api/v1/matches?
    preferenceId=${preferences.preferenceId}
    &gender=${preferences.gender},
    &ageMin=${preferences.ageRange[0]}
    &ageMax=${preferences.ageRange[1]}
    &budgetMin=${preferences.budgetRange[0]}
    &budgetMax=${preferences.budgetRange[1]}`,
      setMatchedProfiles
    );
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex justify-center items-center w-full h-5/6 bg-black bg-opacity-70">
        <div className="flip-card-container flex flex-wrap bg-tan justify-center">
          {data.map((person: Person, index: number) => (
            <div
              className="flip-card w-64 h-40 rounded-lg m-2 p-3"
              key={index}
              onClick={() => {
                handleClick(person);
              }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front"></div>
                <div className="flip-card-back flex flex-col justify-center">
                  <h2>{person.name}</h2>
                  <p>Age: {person.age}</p>
                  <p>Job: {person.job_title}</p>
                  <p>Instagram: {person.instagram}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {openDialog && selectedPerson && (
          <MatchesDialog
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            selectedPerson={selectedPerson}
          />
        )}
      </div>
    </div>
  );
};
