"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer(){
    return (
        <Box component="footer" sx={{ py:3, textAlign: "center", opacity: 0.8  }}>
            <Typography variant="body2">
              © {new Date().getFullYear()} E-Commerce App  
            </Typography>
        </Box>
    );
}