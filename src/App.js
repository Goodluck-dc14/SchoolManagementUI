import React from "react";
import Heropage from "./HeroPage/Heropage";
import LearningExperience from "./schoolManagement/LearningExperience";
// import Footer from "./Victor/Footer";
import Layer from "./Victor/Layer/Layer";

const App = () => {
  return (
    <div>
      <Heropage />
      <LearningExperience />
      <Layer />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
