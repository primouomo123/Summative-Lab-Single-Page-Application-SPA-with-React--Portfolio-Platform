import React, { createContext, useState } from "react";
import projectsData from "../data/projects.js";
import { v4 as uuid } from "uuid";

// 1. Create context
export const ProjectsContext = createContext();

// 2. Provider component
export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState(projectsData);

  // Add new project
  const addProject = (newProject) => {
    setProjects((prev) => [...prev, { id: uuid(), ...newProject }]);
  };

  // Delete project
  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  return (
    <ProjectsContext.Provider value={{ projects, addProject, deleteProject }}>
      {children}
    </ProjectsContext.Provider>
  );
}
