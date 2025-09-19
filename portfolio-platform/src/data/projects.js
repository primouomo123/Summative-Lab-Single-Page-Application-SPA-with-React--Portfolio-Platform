import { v4 as uuid } from "uuid";

const projects = [
  {
    id: uuid(),
    name: "Personal Portfolio Website",
    description: "A responsive website to showcase my projects and skills using React and CSS."
  },
  {
    id: uuid(),
    name: "Task Manager App",
    description: "A full-stack app to manage daily tasks with user authentication and CRUD operations."
  },
  {
    id: uuid(),
    name: "Weather Dashboard",
    description: "A web app that displays real-time weather information using a public API."
  },
  {
    id: uuid(),
    name: "E-commerce Store",
    description: "A mock online store with product listings, shopping cart, and checkout functionality."
  },
  {
    id: uuid(),
    name: "Blog Platform",
    description: "A blogging platform where users can create, edit, and comment on posts."
  },
];

export default projects;