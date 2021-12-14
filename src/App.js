import React from "react";
import ProjectBox from "./ProjectBox";
import ResumeModal from "./ResumeModal";
import Slideshow from "./Slideshow"

function App() {
  return (
    <div className="uk-flex">
      <div style={{width:"50%"}}>
        <Slideshow/>
      </div>
      <div style={{width:"50%"}}>
        <ResumeModal />
        <ProjectBox />
      </div>
    </div>
  );
}

export default App;