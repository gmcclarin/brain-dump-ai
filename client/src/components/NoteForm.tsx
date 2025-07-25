import React, { useState } from "react";
import Form from "./Form";
import { FormGroup, TextField } from "@mui/material";

export type NoteFormValues = {
    title?: string;
    content: string;
}

type NoteFormProps = {
    initialValues?: NoteFormValues;
    onSubmit: (values:NoteFormValues) => void;
    submitLabel?: string;
}

export default function NoteForm ({  
    initialValues = { title: "", content: "" },
    onSubmit, 
    submitLabel}: 
    NoteFormProps) {
      const [form, setForm] = useState<NoteFormValues>(initialValues);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {     
        const { name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
      }

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
      }
    return (
       <Form onSubmit={handleSubmit} submitLabel={submitLabel}>
        <FormGroup sx={{
          margin:1
        }}>
            <TextField 
            onChange={handleChange}
            label="title"
            name="title"
            variant="standard"
            /></FormGroup>
            <FormGroup sx={{margin:1}}>
            <TextField
            required
            onChange={handleChange}
            label="content"
            name="content"
            variant="standard"
            multiline
            />
            </FormGroup>
        
       </Form> 
    )
}