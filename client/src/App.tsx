import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Box } from "@mui/material";

function App() {

  return (
    <Box sx={{
      display: "flex",
      padding: 5
    }}>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    </Box>
  )
}

export default App
