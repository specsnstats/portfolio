import React from "react";
import ProjectBox from "./ProjectBox";
import ResumeModal from "./ResumeModal";

function App() {
  return (
    <div
      style={{
        backgroundColor: "rgb(25,26,27)",
        height: "1000px",
        color: "white"
      }}
    >
      <ResumeModal />
      <ProjectBox />
    </div>
  );
}

export default App;