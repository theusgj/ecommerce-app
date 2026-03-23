"use client";

import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export default function Header() {
    return (
        <AppBar position="sticky" elevation={1}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component={Link}
                    href="/"
                    sx={{ color: "inherit", textDecoration: "none", fontWeight: 700 }}
                >
                    E-commerce App
                </Typography>

                <Button color="inherit" component={Link} href="api/products">
                    Product
                </Button>
                <Button color="inherit" component={Link} href="/Login">
                    Login
                </Button>

                <Box sx={{ flexGrow: 1 }} />

                <IconButton color="inherit" component={Link} href="/cart">
                    <Badge badgeContent={0} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )

}