import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { Matches } from "./pages/Matches/Matches";
import { Saved } from "./pages/Saved/Saved";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Preference } from "./util/interfaces/Preference";
import { getProfiles } from "./requests/getRequests";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "./util/interfaces/Profile";
import { MyProfile } from "./pages/MyProfile/MyProfile";
import { convertDateToString } from "./util/dateConverter";
import React from "react";

function App() {
  const { user, isAuthenticated } = useAuth0();
  const [curPage, setCurPage] = useState<string>("Home");
  const [matchedProfiles, setMatchedProfiles] = useState<Profile[]>([]);
  const initialDetails: Partial<Profile> = {
    name: user?.name,
    picture: user?.picture,
    gender: user?.gender,
    email: user?.email,
    birthday: convertDateToString(new Date()),
  };
  const [curUser, setCurUser] = useState<Partial<Profile>>(initialDetails);
  // matchedProfiles.forEach((profile) => {
  //   console.log("Name:", profile.name);
  //   console.log("Age:", profile.age);
  //   console.log("email", profile.userId);
  //   // Add more attributes as needed
  // });

  const updateProfile = (updatedField: Partial<Profile>): void =>
    setCurUser((u) => ({ ...u, ...updatedField }));

  const navigate = useNavigate();
  const handlePageChange = (newPage: string): void => {
    setCurPage(() => newPage);
  };
  const getPreferences = (p: Preference): void => {
    console.log(
      `http://localhost:8080/api/v1/matches?userId=${p.userId}&gender=${p.gender}&ageMin=${p.ageRange[0]}&ageMax=${p.ageRange[1]}&budgetMin=${p.budgetRange[0]}&budgetMax=${p.budgetRange[1]}&location1=${p.location[0]}&location2=${p.location[1]}&location3=${p.location[2]}`
    );
    // https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/matches?
    // http://localhost:8080/api/v1/matches?
    getProfiles(
      `http://localhost:8080/api/v1/matches?userId=${p.userId}&gender=${p.gender}&ageMin=${p.ageRange[0]}&ageMax=${p.ageRange[1]}&budgetMin=${p.budgetRange[0]}&budgetMax=${p.budgetRange[1]}&location1=${p.location[0]}&location2=${p.location[1]}&location3=${p.location[2]}`,
      setMatchedProfiles
    );
    setCurPage(() => "My Matches");
    navigate("/matches");
  };

  return (
    <div className="h-screen w-screen bg-[#C6E2FF]">
      <NavBar
        curPage={curPage}
        handlePageChange={handlePageChange}
        user={curUser}
        authenticated={isAuthenticated}
      />
      <div className="h-70%">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={
              <HomePage
                getPreferences={getPreferences}
                email={curUser?.email}
              />
            }
          />
          <Route
            path="/profile"
            element={<MyProfile user={curUser} updateProfile={updateProfile} />}
          />
          <Route
            path="/matches"
            element={
              <Matches
                profiles={matchedProfiles}
                userEmail={initialDetails.email}
              />
            }
          />
          <Route
            path="/saved"
            element={<Saved currentUserEmail={initialDetails.email} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
