import { MainPage } from "./pages/MainPage/MainPage";
import { NavBar } from "./components/NavBar/NavBar";
import { Matches } from "./components/Matches/Matches";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/matches" element={<Matches />} />
      </Routes>
    </div>
  );
}

export default App;
