import { MainPage } from "./pages/MainPage/MainPage";
import { NavBar } from "./components/NavBar/NavBar";
import { Matches } from "./pages/Matches/Matches";
import { Saved } from "./pages/Saved/Saved";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

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
