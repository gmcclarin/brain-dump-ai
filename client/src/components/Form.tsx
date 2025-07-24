import { Button } from "@mui/material";
import type { ReactNode } from "react";

type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  submitLabel?: string;
};
export default function Form({ onSubmit, children, submitLabel="Post" }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {children}
      <Button
        type="submit"
        sx={{
          fontWeight: "bold",
          backgroundColor: "black",
          "&:hover" : {
            backgroundColor: "gray"
          }
        }}
      >
        {submitLabel}
      </Button>
    </form>
  );
}
