import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { Matches } from "./pages/Matches/Matches";
import { Saved } from "./pages/Saved/Saved";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Preference } from "./util/interfaces/Preference";
import { getProfiles } from "./requests/getRequests";
import { Profile } from "./util/interfaces/Profile";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { SignUpDetails } from "./util/interfaces/SignUpDetails";
import { defaultSignUpDetails } from "./util/constants/defaultSignUpDetails";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

function App() {
  const { user } = useAuth0();
  const [userDetails, setUserDetails] =
    useState<SignUpDetails>(defaultSignUpDetails);
  const [curPage, setCurPage] = useState<string>("Home");
  const [matchedProfiles, setMatchedProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/users/${user?.email}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => setUserDetails(() => data));
      } else {
        setUserDetails((details) => ({
          ...details,
          ...{ userId: user?.email ? user.email : "" },
        }));
      }
    });
  }, [user]);
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

  console.log(userDetails);
  const updateField = (updatedField: Partial<SignUpDetails>) =>
    setUserDetails((u) => ({ ...u, ...updatedField }));

  return (
    <div className="h-screen w-screen bg-[#C6E2FF]">
      <NavBar
        curPage={curPage}
        handlePageChange={handlePageChange}
        user={userDetails}
      />
      <div className="h-70%">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage user={userDetails} />} />
          {/* <Route path="/login" element={<LoginPage setUser={setUser} />} /> */}
          <Route
            path="/home"
            element={
              <HomePage
                getPreferences={getPreferences}
                email={userDetails.userId}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProfilePage user={userDetails} updateField={updateField} />
            }
          />
          <Route
            path="/matches"
            element={<Matches profiles={matchedProfiles} />}
          />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
