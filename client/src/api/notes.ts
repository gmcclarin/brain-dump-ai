import { useQuery } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const PATH = "notes";

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