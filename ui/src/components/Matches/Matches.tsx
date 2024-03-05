import { NavBar } from "../NavBar/NavBar";
import { Person } from "../../person";
import data from "/Users/sreshthamahmud/flatfish/ui/src/data.json";

export const Matches: React.FC = () => {
  return (
    <>
      <div>
        {data.map((person: Person, index: number) => (
          <div key={index}>
            <h2>{person.name}</h2>
            <p>Age: {person.age}</p>
            <p>Job Title: {person.job_title}</p>
            <p>Instagram: {person.instagram}</p>
          </div>
        ))}
      </div>
    </>
  );
};
