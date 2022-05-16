import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/landingPage";
import Home from "./components/views/comic";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
   
    </div>
  );
}

export default App;
