"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <Container 
                component="main"
                maxWidth="lg"
                sx={{ flexGrow: 1, py: 3}}
            >
                {children}
            <Container/>
            <Footer />
        </Box>
    );
}