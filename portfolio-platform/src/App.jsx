import React, {useState} from "react";
import projectsData from "./data/projects.js"
import Header from "./components/Header.jsx"
import AddProjectForm from "./components/AddProjectForm.jsx"
import ProjectsContainer from "./components/ProjectsContainer.jsx"
import './App.css'

function App() {

  return (
    <div className="app-container">
      <Header />
      <div className="form">
        <AddProjectForm/>
      </div>
      
      <ProjectsContainer />

    </div>
  )
}

export default App