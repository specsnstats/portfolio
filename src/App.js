import React, {useState} from "react";
import ProjectBox from "./ProjectBox";
import ResumeModal from "./ResumeModal";
import Slideshow from "./Slideshow";
import Socials from "./Socials";
import Contact from "./Contact";

function App() {

  const [colorState, setColorState] = useState("")

  return (
    <div className="uk-flex uk-margin-small-left">
      <div className="uk-flex-box" style={{width:"50%"}}>
        <Slideshow colorState={colorState}/>
        <Socials />
      </div>
      <div style={{width:"50%"}}>
        <ResumeModal />
        <ProjectBox setColorState={setColorState}/>
        <Contact />
      </div>
    </div>
  );
}

export default App;