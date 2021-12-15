import React from "react";
import ProjectBox from "./ProjectBox";
import ResumeModal from "./ResumeModal";
import Slideshow from "./Slideshow";
import Socials from "./Socials";
import Contact from "./Contact";

function App() {
  return (
    <div className="uk-flex uk-margin-small-left">
      <div className="uk-flex-box" style={{width:"50%"}}>
        <Slideshow />
        <Socials />
      </div>
      <div style={{width:"50%"}}>
        <ResumeModal />
        <ProjectBox />
        <Contact />
      </div>
    </div>
  );
}

export default App;