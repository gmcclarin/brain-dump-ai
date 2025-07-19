import { useQuery } from "@tanstack/react-query";

const BASE_URL = "/notes";

const getNotes = async() => {
    const response = await fetch(BASE_URL);

    if (!response.ok) throw new Error("Failed to get notes");

    return response.json();
}

export const useNotes = () => {
    return useQuery({
        queryKey: ["notes"],
        queryFn: getNotes
    })
}