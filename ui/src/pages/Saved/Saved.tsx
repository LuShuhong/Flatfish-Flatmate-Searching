import "../Saved/Saved.css";
import data from "../../data.json";
import { Profile } from "../../util/interfaces/Profile";
import { Cards } from "../../components/Cards/Cards";

export const Saved: React.FC = () => {
  return (
    <>
      <div className="card-ctn ">
        {data.map((savedPerson: Profile, index: number) => (
          <>
            <div className="flex justify-center align-center h-full w-full">
              <Cards
                userId={savedPerson.userId}
                name={savedPerson.name}
                age={savedPerson.age} // Parse age as a number
                jobTitle={savedPerson.jobTitle}
                description={savedPerson.description}
                email={savedPerson.email}
                userGender={savedPerson.userGender}
                userInsta={savedPerson.userInsta}
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};
