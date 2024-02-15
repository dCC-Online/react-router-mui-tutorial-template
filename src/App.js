import "./App.css";
import { CssBaseline, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container component="main" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
