import { Person } from "../../person";
import data from "../../data.json";
import "./Matches.css";
import { useState } from "react";
import { MatchesDialog } from "../../components/MatchesDialog/MatchesDialog";

export const Matches: React.FC = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  // will need a useeffect when fetching all the data from matches list
  const handleClick = (person: Person) => {
    setOpenDialog(true);
    setSelectedPerson(person);
  };

  return (
    <>
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
          setSelectedPerson={setSelectedPerson}
        />
      )}
    </>
  );
};
