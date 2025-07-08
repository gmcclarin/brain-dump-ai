import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={7}
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", borderRadius:"25px", fontWeight: 700, padding: 2, ":hover": {backgroundColor: "gray"} }}
        >
          🧠 Brain Dump
        </Typography>
        <Box>
            <Button
          component={RouterLink}
          to="/about"
          sx={{ textTransform: "none", fontWeight: 700, borderRadius:"25px", fontSize: "1.25rem", color:"white", padding: 2, ":hover": {backgroundColor: "gray"} }}
        >
          About
        </Button>
        <Button
         component={RouterLink}
          to="/notes"
          sx={{ textTransform: "none", fontWeight: 700, borderRadius:"25px", fontSize: "1.25rem", color:"white", padding: 2, ":hover": {backgroundColor: "gray"} }}>
            Notes
        </Button>
        </Box>
        

      </Toolbar>
    </AppBar>
  );
}
