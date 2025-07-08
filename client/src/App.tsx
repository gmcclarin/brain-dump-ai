import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Notes from "./pages/Notes";

function App() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      <Header />
      <Box
      component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: 5,
          minHeight: 0,
          overFlow: "auto"
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />}/>
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
