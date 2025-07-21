import { Box, Grid } from "@mui/material";
import NoteCard from "./NoteCard";
import { useNotes } from "../api/notes";
import type { Note } from "../types/Notes";
import NoteForm from "../components/NoteForm";


export default function Notes() {
  const { data, isLoading } = useNotes();

  if (isLoading) {
    return "Loading ..."
  }
  const createNote = () => {

  }
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6 }}>
        <Box>
          <NoteForm onSubmit={createNote} submitLabel="Save" />
        </Box>
      </Grid>
      <Grid size={{ xs: 6 }}>
        {data.map((note: Note, idx: number) => {
          <NoteCard note={note} key={idx} />;
        })}
      </Grid>
    </Grid>
  );
}
