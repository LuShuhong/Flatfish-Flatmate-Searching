import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { Matches } from "./pages/Matches/Matches";
import { Saved } from "./pages/Saved/Saved";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Preference } from "./util/interfaces/Preference";
import { getProfiles, getSavedProfiles } from "./requests/getRequests";
import { Profile } from "./util/interfaces/Profile";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignUpDetails } from "./util/interfaces/SignUpDetails";
import { defaultSignUpDetails } from "./util/constants/defaultSignUpDetails";
import React from "react";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState<SignUpDetails>(defaultSignUpDetails);
  const [curPage, setCurPage] = useState<string>("Home");
  const [matchedProfiles, setMatchedProfiles] = useState<Profile[]>([]);
  // const [savedProfiles, setSavedProfiles] = useState<Profile[]>([]);
  
  // console.log("userId" + user.userId);
  // const initialDetails: Partial<Profile> = {
  //   name: user?.name,
  //   picture: user?.picture,
  // };
  // const [curUser, setCurUser] = useState<Partial<Profile>>(initialDetails);
  // matchedProfiles.forEach((profile) => {
  //   console.log("Name:", profile.name);
  //   console.log("Age:", profile.age);
  //   console.log("email", profile.userId);
  //   // Add more attributes as needed
  // // });

  // const updateProfile = (updatedField: Partial<Profile>): void =>
  //   setCurUser((u) => ({ ...u, ...updatedField }));

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

  const updateField = (updatedField: Partial<SignUpDetails>) =>
    setUser((u) => ({ ...u, ...updatedField }));
  
  // useEffect(() => {
  //   if (user.userId) {
  //     fetchSavedProfiles(user.userId);
  //   }
  // }, [user.userId]);

  // const fetchSavedProfiles = async (userId: string) => {
  //   // Assuming getProfiles is a function that fetches profiles and returns a promise
  //   const profiles = await getSavedProfiles(`http://localhost:8080/api/v1/savedprofiles/${userId}`);
  //   setSavedProfiles(profiles);
  // };

  return (
    <div className="h-screen w-screen bg-[#C6E2FF]">
      <NavBar
        curPage={curPage}
        handlePageChange={handlePageChange}
        user={user}
      />
      <div className="h-70%">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route
            path="/home"
            element={
              <HomePage
                user={user}
                getPreferences={getPreferences}
                email={user.userId}
              />
            }
          />
          <Route
            path="/profile"
            element={<ProfilePage user={user} updateField={updateField} />}
          />
          <Route
            path="/matches"
            element={
              <Matches profiles={matchedProfiles} userEmail={user.userId} />
            }
          />
          <Route
            path="/saved"
            element={<Saved 
                        currentUserEmail={user.userId}
                        // savedProfiles={savedProfiles}
                        // refreshProfiles={() => fetchSavedProfiles(user.userId)}
                      /> 
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
