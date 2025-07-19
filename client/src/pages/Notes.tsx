import { Box, Grid } from "@mui/material";
import NoteCard from "./NoteCard";
import { useNotes } from "../api/notes";
import type { Note } from "../types/Notes";

export default function Notes() {
  const { data, isLoading } = useNotes();

  if (isLoading) {
    return "Loading ..."
  }
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6 }}>
        <Box></Box>
      </Grid>
      <Grid size={{ xs: 6 }}>
        {data.map((note: Note, idx: number) => {
          <NoteCard note={note} key={idx} />;
        })}
      </Grid>
    </Grid>
  );
}
