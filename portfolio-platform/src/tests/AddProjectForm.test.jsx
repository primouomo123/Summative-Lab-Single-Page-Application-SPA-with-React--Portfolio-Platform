import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import { ProjectsProvider } from "../context/ProjectsContext.jsx";
import AddProjectForm from "../components/AddProjectForm.jsx";
import ProjectsContainer from "../components/ProjectsContainer.jsx";


test("renders AddProjectForm and allows adding a project", async () => {
  render(
    <ProjectsProvider>
      <AddProjectForm />
      <ProjectsContainer />
    </ProjectsProvider>
  );

  const titleInput = screen.getByLabelText(/title/i);
  const descriptionInput = screen.getByLabelText(/description/i);
  const addButton = screen.getByRole("button", { name: /add/i });

  // Fill form
  await userEvent.type(titleInput, "Test Project");
  await userEvent.type(descriptionInput, "This is a test description");

  // Submit form
  await userEvent.click(addButton);

  // Check if project appears in the list
  expect(screen.getByText("Test Project")).toBeInTheDocument();
  expect(screen.getByText("This is a test description")).toBeInTheDocument();
});
