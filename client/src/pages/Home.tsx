import { Box, Typography } from "@mui/material";

export default function Home () {
    return (
        <Box
        sx={{
            display:"flex",
            width: "100%",
            justifyContent: "center"
        }}>
           <Typography variant="h2">Brain Dump 🧠 ✨</Typography> 
        </Box>
    )
}