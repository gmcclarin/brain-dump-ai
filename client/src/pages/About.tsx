// src/pages/About.tsx
import { Box, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function About() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        🧠 Brain Dump
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        Brain Dump is a minimalist note-taking app built for thinkers, not hoarders.
        Capture your thoughts, and let AI help you sort, summarize, and synthesize them.
      </Typography>

      <Typography
        variant="caption"
        color="text.disabled"
        sx={{ fontStyle: "italic", mt: 3 }}
      >
        Built with React, Supabase, OpenAI — and a love for clarity.
      </Typography>

      <Box mt={5}>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
        >
          ← Back to Notes
        </Button>
      </Box>
    </Container>
  );
}
