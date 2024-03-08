import React from "react";
import data from "../../data.json"; // Import data from JSON file
import { Person } from "../../util/person";

export const Saved: React.FC = () => {
  return (
    <>
      <div className="card-ctn flex h-full overflow-x-auto">
        {data.map((savedPerson: Person, index: number) => (
          <div
            key={index}
            className="card w-64 border bg-white rounded-lg shadow-md mx-2"
          >
            <p>age: {savedPerson.age}</p>
            <p>job title: {savedPerson.job_title}</p>
            <p>instagram: {savedPerson.instagram}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Saved;
