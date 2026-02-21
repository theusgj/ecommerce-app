'use client';

import { theme } from "@/theme/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    {children}
                </CssBaseline>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
} 