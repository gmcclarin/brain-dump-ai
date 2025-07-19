import { Card, CardContent } from "@mui/material";
import type { Note } from "../types/Notes";

export type NoteProps = {
    note: Note;

}

export default function NoteCard ({note}:NoteProps) {
    return (
        <Card>
            <CardContent>
                {note.content}
            </CardContent>
        </Card>
    )
}