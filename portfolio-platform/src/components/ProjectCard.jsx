import React, { useContext, useState } from "react";
import {
  ProjectCard,
  ProjectContent,
  DeleteButton,
  FormTextField,
  AddButton,
} from "../styles/styles.js";
import { ProjectsContext } from "../context/ProjectsContext.jsx";

function SingleProject({ id, title, description }) {
  const { deleteProject, editProject } = useContext(ProjectsContext);
  const [editToggle, setEditToggle] = useState(false);

  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    editProject(id, { name: editTitle, description: editDescription });
    setEditToggle(false);
  };

  return (
    <ProjectCard>
      <DeleteButton aria-label="delete project" variant="outlined" onClick={() => deleteProject(id)}>
        X
      </DeleteButton>
      <ProjectContent>
        {!editToggle ? (
          <>
            <h3>{title}</h3>
            <p>{description}</p>
            <AddButton variant="outlined" onClick={() => setEditToggle(true)}>
              Edit
            </AddButton>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>Title</h3>
            <FormTextField
              label="Title"
              variant="outlined"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <h3>Description</h3>
            <FormTextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <AddButton type="submit" variant="contained">
              Save
            </AddButton>
          </form>
        )}
      </ProjectContent>
    </ProjectCard>
  );
}

export default SingleProject;