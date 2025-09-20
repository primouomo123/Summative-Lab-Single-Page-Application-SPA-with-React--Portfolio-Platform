import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

// Header
export const HeaderContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  borderBottom: "1px solid #9c9999ff",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: "black",
  backgroundColor: "#d3d3d3",
  marginBottom: "1.5rem"
}));

// Add Project Form
export const FormContainer = styled(Box)(({ theme }) => ({
  border: "1px solid #ccc",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  color: "black",
  backgroundColor: "#d3d3d3"
}));

export const FormTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: "100%",
}));

export const AddButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
}));

// Project Cards Container
export const CardsContainer = styled(Box)(({ theme }) => ({
  border: "1px solid #ccc",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  backgroundColor: "#d3d3d3"
}));

// Search Input
export const SearchInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: "100%",
}));

// Individual Project Card
export const ProjectCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  transition: "all 0.3s ease", // smooth animation
  backgroundColor: "#ecececff",
  borderRadius: "15px",

  "&:hover": {
    backgroundColor: "white", // change background
    transform: "scale(1.03)",   // slightly bigger
    boxShadow: theme.shadows[4], // add shadow
  },
}));

export const ProjectContent = styled(Box)(({ theme }) => ({
  flex: 1, // take the remaining space next to the delete button
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // vertical centering
  alignItems: "center",     // horizontal centering
  textAlign: "center",      // ensures text itself is centered
}));

export const DeleteButton = styled(Button)(({ theme }) => ({
  minWidth: "40px",
  height: "40px",
  borderRadius: "4px",
  padding: 0,
  marginRight: theme.spacing(1),
  textTransform: "none",
}));