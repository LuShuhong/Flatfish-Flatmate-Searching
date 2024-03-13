import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { Matches } from "./pages/Matches/Matches";
import { Saved } from "./pages/Saved/Saved";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Preference } from "./util/interfaces/Preference";
import { defaultPreferences } from "./util/constants/defaultPreferences";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "./util/interfaces/Profile";
import { MyProfile } from "./pages/MyProfile/MyProfile";
import { getCurDate } from "./util/curDateCalculator";

function App() {
  const { user, isAuthenticated } = useAuth0();
  const curUser: Partial<Profile> = {
    name: user?.name,
    picture: user?.picture,
    userGender: user?.gender,
    email: user?.email,
    birthday: getCurDate(),
  };
  const [curPage, setCurPage] = useState<string>("Home");
  const navigate = useNavigate();
  const handlePageChange = (newPage: string): void => {
    setCurPage(() => newPage);
  };
  let preferences: Preference = defaultPreferences;
  const getPreferences = (p: Preference): void => {
    preferences = p;
    setCurPage(() => "My Matches");
    navigate("/matches");
  };
  // After OAuth
  // post("http://localhost:8080/api/v1", {
  //   userId: "dfdffddfds",
  //   name: "jason",
  //   jobTitle: "homeless",
  //   description: "still homeless",
  //   email: "jason@gmail.com",
  //   userGender: "male",
  //   userInsta: "...",
  // });
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
            element={<HomePage getPreferences={getPreferences} />}
          />
          <Route path="/profile" element={<MyProfile user={curUser} />} />
          <Route
            path="/matches"
            element={<Matches preferences={preferences} />}
          />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
