import React, { useState, useContext } from "react";
import { FormContainer, FormTextField, AddButton } from "../styles/styles.js";
import { ProjectsContext } from "../context/ProjectsContext.jsx";

function AddProjectForm() {
  const { addProject } = useContext(ProjectsContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    addProject({ name: title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <FormContainer>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Title</h3>
          <FormTextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <h3>Description</h3>
          <FormTextField
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <AddButton type="submit" variant="contained">
          Add
        </AddButton>
      </form>
    </FormContainer>
  );
}

export default AddProjectForm;
