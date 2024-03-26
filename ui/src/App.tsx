import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { Matches } from "./pages/Matches/Matches";
import { Saved } from "./pages/Saved/Saved";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getAllMatchedProfiles } from "./requests/getRequests";
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
import { post } from "./requests/postRequests";
import React from "react";
import { convertName } from "./util/nameConverter";
import AnimatedCursor from "react-animated-cursor";
import { put } from "./requests/putRequests";

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
  const [tick, setTick] = useState<boolean>(false);
  const changeTick = (val: boolean): void => {
    setTick(() => val);
  };
  const [curPage, setCurPage] = useState<string>("Home");
  const [matchedProfiles, setMatchedProfiles] = useState<Profile[] | null>(
    null
  );
  const [navBarVisibility, setNavBarVisibility] = useState<boolean>(false);
  const [postFailed, setPostFailed] = useState<boolean>(false);
  const makeNavBarVisible = (): void => {
    setNavBarVisibility(() => true);
  };
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/users/${user.email}`
      ).then((resp) => {
        // http://localhost:8080/api/v1
        if (resp.ok) {
          resp.json().then((data) => setUserDetails(() => data));
          setNavBarVisibility(() => true);
          navigate("/home");
        } else {
          setUserDetails((details) => {
            const copy: SignUpDetails = { ...details };
            copy.userId = user.email as string;
            copy.name = convertName(user.name as string);
            copy.picture = user.picture as string;
            return copy;
          });
        }
      });
    }
  }, [user]);

  const handlePost = (): void => {
    let warnings = 0;
    if (!userDetails.userId) {
      setFieldWarning((w) => ({ ...w, ...{ userId: true } }));
      warnings++;
    }
    if (!userDetails.password) {
      setFieldWarning((w) => ({ ...w, ...{ password: true } }));
      warnings++;
    }
    if (userDetails.userGender === "SELECT") {
      setFieldWarning((w) => ({ ...w, ...{ userGender: true } }));
      warnings++;
    }
    if (!userDetails.name) {
      setFieldWarning((w) => ({ ...w, ...{ name: true } }));
      warnings++;
    }
    if (!userDetails.age) {
      setFieldWarning((w) => ({ ...w, ...{ birthday: true } }));
      warnings++;
    }

    // http://localhost:8080/api/v1/
    // https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/
    if (!warnings) {
      if (curPage === "Home") {
        post(
          "https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1",
          userDetails
        )
          .then((resp) => {
            if (!resp.ok) {
              setPostFailed(() => true);
            } else {
              makeNavBarVisible();
              navigate("/home");
            }

            // } else {
            //   // profile page
            //   setTick(() => true);
            // }
          })
          .catch((err) => console.log(err));
      } else {
        put(
          `https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/${userDetails.userId}`,
          userDetails
        ).then((resp) => {
          if (!resp.ok) {
            setPostFailed(() => true);
          } else {
            setTick(() => true);
          }
        });
      }
    }
  };
  const handlePageChange = (newPage: string): void => {
    setCurPage(() => newPage);
  };
  const getPreferences = (userDetails: SignUpDetails): void => {
    setIsLoading(true); // Start loading before fetching data
    // https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/matches?
    // http://localhost:8080/api/v1/matches?
    getAllMatchedProfiles(
      `https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/matchuser?userId=${userDetails.userId}`,
      (profiles) => {
        setMatchedProfiles(profiles);
        // setIsLoading(false);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    );
    setCurPage(() => "My Matches");
    navigate("/matches");
  };
  return (
    <div className="h-screen w-screen bg-[#C6E2FF]">
      <AnimatedCursor color="97,126,153" />
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
                handleRegistration={handlePost}
                postFailed={postFailed}
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
              <ProfilePage
                user={userDetails}
                updateField={updateField}
                handleSave={handlePost}
                postFailed={postFailed}
                fieldWarning={fieldWarning}
                tick={tick}
                changeTick={changeTick}
              />
            }
          />
          <Route
            path="/matches"
            element={
              <Matches
                profiles={matchedProfiles}
                userEmail={userDetails.userId}
                isLoading={isLoading}
                // setIsLoading={setIsLoading}
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
