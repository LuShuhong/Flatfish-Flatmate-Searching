import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { Matches } from "./pages/Matches/Matches";
import { Saved } from "./pages/Saved/Saved";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Preference } from "./util/interfaces/Preference";
import { getProfiles } from "./requests/getRequests";
import { Profile } from "./util/interfaces/Profile";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignUpDetails } from "./util/interfaces/SignUpDetails";
import { convertDateToString } from "./util/dateConverter";

function App() {
  const [loggedInId, setLoggedInId] = useState<string>("");
  const [user, setUser] = useState<SignUpDetails>({
    userId: "",
    password: "",
    name: "",
    birthday: convertDateToString(new Date()),
    age: 0,
    userGender: "SELECT",
    picture: "",
    role: "USER",
    description: "",
    instagram: "",
  });
  useEffect(() => {
    if (loggedInId) {
      fetch(`http://localhost:8080/api/v1/users/${loggedInId}`)
        .then((resp) => resp.json())
        .then((data) => setUser(() => data));
    }
  }, []);
  console.log(loggedInId);
  const [curPage, setCurPage] = useState<string>("Home");
  const [matchedProfiles, setMatchedProfiles] = useState<Profile[]>([]);
  const [curUser, setCurUser] = useState<Partial<Profile>>();

  const updateProfile = (updatedField: Partial<Profile>): void =>
    setCurUser((u) => ({ ...u, ...updatedField }));

  const navigate = useNavigate();
  const handlePageChange = (newPage: string): void => {
    setCurPage(() => newPage);
  };
  const getPreferences = (p: Preference): void => {
    getProfiles(
      `http://localhost:8080/api/v1/matches?
      userId=${p.userId}&
      gender=${p.gender}&
      ageMin=${p.ageRange[0]}&
      ageMax=${p.ageRange[1]}&
      budgetMin=${p.budgetRange[0]}&
      budgetMax=${p.budgetRange[1]}`,
      setMatchedProfiles
    );
    setCurPage(() => "My Matches");
    navigate("/matches");
    console.log("my matches" + matchedProfiles);
  };
  return (
    <div className="h-screen w-screen bg-[#C6E2FF]">
      <NavBar
        curPage={curPage}
        handlePageChange={handlePageChange}
        user={curUser}
        loggedInId={loggedInId}
      />
      <div className="h-70%">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/login"
            element={<LoginPage setLoggedInId={setLoggedInId} />}
          />
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
            element={<ProfilePage user={user} updateProfile={updateProfile} />}
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
