// src/pages/Home.tsx
import { Box, Typography } from "@mui/material";
import FadeInOnScroll from "../components/FadeOnScroll";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <FadeInOnScroll>
        <Typography variant="h2" textAlign="center">
          Brain Dump 🧠 ✨
        </Typography>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.3}>
        <Typography variant="h5" textAlign="center">
          Write freely. Let AI distill the rest.
        </Typography>
      </FadeInOnScroll>

      {/* Add more animated sections below! */}
    </Box>
  );
}
