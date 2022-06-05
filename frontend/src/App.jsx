import { Route, Routes } from "react-router-dom";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Home from "@pages/Home";

import "@styles/App.css";
import "@styles/HexagonGrid3x3.css";
import "@styles/HexagonAlone.css";

function App() {
  return (
    <div className="App ">
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
