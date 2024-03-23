import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { Matches } from "./pages/Matches/Matches";
import { Saved } from "./pages/Saved/Saved";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Preference } from "./util/interfaces/Preference";
import { getProfiles, getAllMatchedProfiles } from "./requests/getRequests";
import { Profile } from "./util/interfaces/Profile";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { SignUpDetails } from "./util/interfaces/SignUpDetails";
import { defaultSignUpDetails } from "./util/constants/defaultSignUpDetails";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { LoadingPage } from "./pages/LoadingPage/LoadingPage";
import { SignUpFieldWarning } from "./util/interfaces/SignUpFieldWarning";
import { noFieldWarnings } from "./util/constants/noFieldWarnings";
import React from "react";

function App() {
  const { user } = useAuth0();
  const [userDetails, setUserDetails] =
    useState<SignUpDetails>(defaultSignUpDetails);
  const [fieldWarning, setFieldWarning] =
    useState<SignUpFieldWarning>(noFieldWarnings);
  const updateField = (updatedField: Partial<SignUpDetails>) => {
    setFieldWarning(() => noFieldWarnings);
    setUserDetails((u) => ({ ...u, ...updatedField }));
  };
  const [curPage, setCurPage] = useState<string>("Home");
  const [matchedProfiles, setMatchedProfiles] = useState<Profile[] | null>(null);
  const [navBarVisibility, setNavBarVisibility] = useState<boolean>(false);
  const makeNavBarVisible = (): void => {
    setNavBarVisibility(() => true);
  };
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

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:8080/api/v1/users/${user.email}`).then((resp) => {
        if (resp.ok) {
          resp.json().then((data) => setUserDetails(() => data));
          setNavBarVisibility(() => true);
          navigate("/home");
        } else {
          setUserDetails((details) => {
            const copy: SignUpDetails = { ...details };
            copy.userId = user.email as string;
            copy.name = user.name as string;
            copy.picture = user.picture as string;
            return copy;
          });
        }
      });
    }
  }, [user]);
  console.log(userDetails);

  const handlePageChange = (newPage: string): void => {
    setCurPage(() => newPage);
  };
  const getPreferences = (p: Preference): void => {
    console.log(
      `http://localhost:8080/api/v1/matches?userId=${p.userId}&gender=${p.gender}&ageMin=${p.ageRange[0]}&ageMax=${p.ageRange[1]}&budgetMin=${p.budgetRange[0]}&budgetMax=${p.budgetRange[1]}&location1=${p.location[0]}&location2=${p.location[1]}&location3=${p.location[2]}`
    );
    // https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/matches?
    // http://localhost:8080/api/v1/matches?
    getAllMatchedProfiles(
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
        user={userDetails}
        navBarVisibility={navBarVisibility}
      />
      <div className="h-70%">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route
            path="/signup"
            element={
              <SignUpPage
                user={userDetails}
                updateField={updateField}
                fieldWarning={fieldWarning}
                setFieldWarning={setFieldWarning}
                makeNavBarVisible={makeNavBarVisible}
              />
            }
          />
          <Route
            path="/home"
            element={
              <HomePage
                user={userDetails}
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
            element={
              <Matches
                profiles={matchedProfiles}
                userEmail={userDetails.userId}
              />
            }
          />
          <Route
            path="/saved"
            element={<Saved currentUserEmail={userDetails.userId} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
