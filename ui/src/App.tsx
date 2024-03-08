import { MainPage } from "./pages/MainPage/MainPage";
import { NavBar } from "./components/NavBar/NavBar";
import { Matches } from "./pages/Matches/Matches";
import { Saved } from "./pages/Saved/Saved";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { post } from "./requests/postRequests";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [curPage, setCurPage] = useState<string>("Home");
  const navigate = useNavigate();
  const handlePageChange = (newPage: string): void => {
    setCurPage(() => newPage);
  };
  const handleMatch = (): void => {
    // put request
    setCurPage(() => "My Matches");
    navigate("/matches");
  };
  // After OAuth
  post("http://localhost:8080/api/v1", {
    userId: "dfdffddfds",
    name: "jason",
    jobTitle: "homeless",
    description: "still homeless",
    email: "jason@gmail.com",
    userGender: "male",
    userInsta: "...",
  });
  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-[#D7CEC7] to-[#D7CEC7]">
      <NavBar curPage={curPage} handlePageChange={handlePageChange} />
      <div className="h-92%">
        <Routes>
          <Route path="/" element={<MainPage handleMatch={handleMatch} />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
