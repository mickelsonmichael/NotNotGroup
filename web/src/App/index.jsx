import { createTheme, CssBaseline, ThemeProvider, Box } from "@mui/material";
import React from "react";
import { Switch, Route } from "react-router";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor  } from "react-query/createWebStoragePersistor-experimental";

import Navigation from "../Components/Navigation";
import { AccountProvider } from "../Context/AccountContext";
import Home from "../Components/Home";
import "./App.css";
import Wintertodt from "../Components/Wintertodt";
import Quests from "../Components/Quests";

const queryClient = new QueryClient();
const localStoragePersistor = createWebStoragePersistor ({ storage: window.localStorage });

persistQueryClient({
    queryClient,
    persistor: localStoragePersistor
});

const theme = createTheme({
    palette: {
        primary: {
            main: "#444477",
            dark: "#333366"
        },
        text: {
            primary: "#FFFFFF"
        },
        white: {
            main: "#FFFFFF",
            backgroundColor: "transparent"
        }
    },
    typography: {
        fontFamily: [
            '"Segoe UI"',
            "sans-serif"
        ].join(","),
        fontSize: 14
    }
});

const App = () => (
    <QueryClientProvider client={queryClient}>
        <AccountProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <HashRouter>
                    <Box backgroundColor="primary.main" sx={{ height: "100%", overflowY: "auto", maxHeight: "100%" }}>

                        <Navigation />

                        <Box sx={{ padding: "1rem" }}>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/wintertodt" component={Wintertodt} />
                                <Route path="/quests" component={Quests} />
                            </Switch>
                        </Box>
                    </Box>
                </HashRouter>
            </ThemeProvider>
        </AccountProvider>
    </QueryClientProvider>
);

export default App;