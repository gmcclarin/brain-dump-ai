import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {type NoteFormValues } from "../components/NoteForm";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const PATH = "notes";

// GET 
const getNotes = async() => {
    const response = await fetch(`${BASE_URL}/${PATH}`);
    if (!response.ok) throw new Error("Failed to get notes");
    return response.json();
}

export const useNotes = () => {
    return useQuery({
        queryKey: ["notes"],
        queryFn: getNotes
    })
}

//POST
const createNote = async (note: NoteFormValues) => {
    const response = await fetch(`${BASE_URL}/${PATH}`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(note)
    });

    if (!response.ok) throw new Error ("Failed to create note");
    return response.json();
}

export const useCreateNote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createNote,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["notes"]})
        }
    })
}