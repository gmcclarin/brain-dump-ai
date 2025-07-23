import { Box, Grid } from "@mui/material";
import NoteCard from "./NoteCard";
import { useNotes } from "../api/notes";
import type { Note } from "../types/Notes";
import NoteForm, { type NoteFormValues } from "../components/NoteForm";
import { useCreateNote } from "../api/notes";


export default function Notes() {
  const { data, isLoading } = useNotes();
  const { mutateAsync: createNote} = useCreateNote();

  if (isLoading) {
    return "Loading ..."
  }
  const handleCreateNote = (note: NoteFormValues) => {
    createNote(note);
  }
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6 }}>
        <Box sx={{
          // backgroundColor: "#393E46"
          // backgroundColor: "white"
        }}>
          <NoteForm onSubmit={handleCreateNote} submitLabel="Save" />
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
