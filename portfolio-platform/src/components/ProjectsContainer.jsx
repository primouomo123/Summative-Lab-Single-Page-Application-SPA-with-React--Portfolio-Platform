import React, { useContext, useState } from "react";
import { CardsContainer, SearchInput } from "../styles/styles.js";
import SingleProject from "./ProjectCard.jsx";
import { ProjectsContext } from "../context/ProjectsContext.jsx";

function ProjectsContainer() {
  const { projects } = useContext(ProjectsContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects dynamically
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CardsContainer>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Projects"
        variant="outlined"
      />
      {filteredProjects.map((project) => (
        <SingleProject
          key={project.id}
          id={project.id}
          title={project.name}
          description={project.description}
        />
      ))}
    </CardsContainer>
  );
}

export default ProjectsContainer;
