import { Route, Routes } from "react-router-dom";

import NavBar from "@components/NavBar";
import UpArrow from "@components/UpArrow";
import Home from "@pages/Home";

import "@styles/App.css";
import "@styles/HexagonGrid.css";
import "@styles/HexagonAlone.css";

function App() {
  return (
    <div className="App ">
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
      <UpArrow />
    </div>
  );
}

export default App;
