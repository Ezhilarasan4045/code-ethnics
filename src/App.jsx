// src/App.jsx
import React from "react";
import Hero from "./sections/Hero";
import VisionMission from "./sections/VisionMission";
import Features from "./sections/Features";
import FutureUpdates from "./sections/FutureUpdates";
const App = () => {
  return (
    <div className="App  bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <Hero />
      {/* Other sections will come below here... */}
       <VisionMission/>
       <Features/>
       <FutureUpdates/>
    </div>
  );
};

export default App;
