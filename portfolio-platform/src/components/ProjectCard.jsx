import React, { useContext } from "react";
import { ProjectCard, ProjectContent, DeleteButton } from "../styles/styles.js";
import { ProjectsContext } from "../context/ProjectsContext.jsx";

function SingleProject({ id, title, description }) {
  const { deleteProject } = useContext(ProjectsContext);

  return (
    <ProjectCard>
      <DeleteButton variant="outlined" onClick={() => deleteProject(id)}>
        X
      </DeleteButton>
      <ProjectContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </ProjectContent>
    </ProjectCard>
  );
}

export default SingleProject;
