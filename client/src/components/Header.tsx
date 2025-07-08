import { AppBar, Button, Toolbar, Typography } from "@mui/material";
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
        }}
      >
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", fontWeight: 700 }}
        >
          🧠 Brain Dump
        </Typography>
        <Button
          component={RouterLink}
          to="/about"
          sx={{ textTransform: "none", fontWeight: 700, fontSize: "1.25rem", color:"white", padding: 2 }}
        >
          About
        </Button>

      </Toolbar>
    </AppBar>
  );
}
