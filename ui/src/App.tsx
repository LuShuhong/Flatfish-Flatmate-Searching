import { MainPage } from "./pages/MainPage/MainPage";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-[#D7CEC7] to-[#D7CEC7]">
      <NavBar />
      <div className="h-92%">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Other pages */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
