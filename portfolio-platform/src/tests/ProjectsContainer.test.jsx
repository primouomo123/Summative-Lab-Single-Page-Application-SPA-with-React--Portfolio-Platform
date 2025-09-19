import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProjectsProvider } from "../context/ProjectsContext.jsx";
import ProjectsContainer from "../components/ProjectsContainer.jsx";

test("filters projects based on search input", async () => {
  render(
    <ProjectsProvider>
      <ProjectsContainer />
    </ProjectsProvider>
  );

  const searchInput = screen.getByPlaceholderText(/search projects/i);

  // Type in search
  await userEvent.type(searchInput, "Weather");

  // Only the Weather Dashboard project should appear
  expect(screen.getByText(/weather dashboard/i)).toBeInTheDocument();
  expect(screen.queryByText(/task manager app/i)).not.toBeInTheDocument();
});
