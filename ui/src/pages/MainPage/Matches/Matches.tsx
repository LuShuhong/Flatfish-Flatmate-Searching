import { Person } from "../../../person";
import data from "/Users/sreshthamahmud/flatfish/ui/src/data.json";
import "./Matches.css";

export const Matches: React.FC = () => {
  return (
    <>
      <div className="flip-card-container flex flex-wrap bg-tan justify-center">
        {data.map((person: Person, index: number) => (
          <div className="flip-card w-64 h-40 rounded-lg m-2 p-3" key={index}>
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
    </>
  );
};
