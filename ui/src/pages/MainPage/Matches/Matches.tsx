import { Person } from "../../../person";
import data from "/Users/sreshthamahmud/flatfish/ui/src/data.json";

export const Matches: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap bgTan text-slate-600 justify-center">
        {data.map((person: Person, index: number) => (
          <div
            className="w-64 h-32 border-2 border-slate-500 rounded-lg m-2 p-2"
            key={index}
          >
            <h2>{person.name}</h2>
            <p>Age: {person.age}</p>
            <p>Job: {person.job_title}</p>
            <p>Instagram: {person.instagram}</p>
          </div>
        ))}
      </div>
    </>
  );
};
