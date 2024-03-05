import { MainPage } from "./pages/MainPage/MainPage";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Other pages */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
