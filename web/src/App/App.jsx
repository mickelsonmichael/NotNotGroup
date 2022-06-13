import { createTheme, CssBaseline, ThemeProvider, Box } from "@mui/material";
import React from "react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";

import { AccountProvider } from "../Context/AccountContext";

import Layout from "./Layout";
import "./App.css";

const queryClient = new QueryClient();
const localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage });

persistQueryClient({
    queryClient,
    persistor: localStoragePersistor
});

const theme = createTheme({
    palette: {
        primary: {
            main: "#444477",
            dark: "#333366",
        },
        secondary: {
            main: "#ececec"
        },
        text: {
            primary: "#FFFFFF"
        },
        white: {
            main: "#FFFFFF",
            backgroundColor: "transparent"
        },
    },
    typography: {
        fontFamily: [
            '"Segoe UI"',
            "sans-serif"
        ].join(","),
        fontSize: 14
    },
    components: {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    background: "transparent"
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(0, 0, 0, 0.4)"
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(25, 25, 25, 0.4)"
                }
            }
        }
    }
});

const App = () => (
    <QueryClientProvider client={queryClient}>
        <AccountProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <HashRouter>
                    <Layout />
                </HashRouter>
            </ThemeProvider>
        </AccountProvider>
    </QueryClientProvider>
);

export default App;
