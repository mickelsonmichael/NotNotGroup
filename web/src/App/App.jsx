import { createTheme, CssBaseline, ThemeProvider, Box } from "@mui/material";
import React from "react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";

import { AccountProvider } from "../Context/AccountContext";

import useTheme from "./useTheme";
import Layout from "./Layout";
import "./App.css";

const queryClient = new QueryClient();
const localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage });

persistQueryClient({
    queryClient,
    persistor: localStoragePersistor
});

const theme = useTheme();

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
