import React, { useEffect, useState } from "react";
import ProjectBox from "./ProjectBox";
import ResumeModal from "./ResumeModal";
import Slideshow from "./Slideshow";
import Socials from "./Socials";
import Contact from "./Contact";

function App() {

  const [colorState, setColorState] = useState("")
  const [width, setWindowWidth] = useState()

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  })


  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }


  return (
    <div>
      <div className="uk-margin"
        style={{
          display:"flex",
          flexDirection: width > 1200 ? "row" : "column",
          justifyContent: "center",
          margin: "auto"
        }}>
        <div className="uk-flex-box uk-flex-center" style={{ width: width > 1200 ? "50%" : "100%" }}>
          <Slideshow colorState={colorState} />
          <Socials />
        </div>
        <div className="uk-flex-center" style={{ width: width > 1200 ? "50%" : "100%" }}>
          <ResumeModal />
          <ProjectBox setColorState={setColorState} />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;