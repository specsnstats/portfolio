import React from "react";
import ProjectBox from "./ProjectBox";
import projects from "./projects";

function App() {
  console.log(projects)
  return (
    <div>
      <ProjectBox projects={projects}/>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;