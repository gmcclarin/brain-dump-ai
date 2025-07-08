import { Box, Typography } from "@mui/material";

export default function Home () {
    return (
        <Box
        sx={{
            display:"flex",
            width: "100%",
            justifyContent: "center",
            flex: 1
        }}>
           <Typography variant="h2">Brain Dump 🧠 ✨</Typography> 
        </Box>
    )
}