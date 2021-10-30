import { createTheme, CssBaseline, ThemeProvider, Box } from "@mui/material";
import React from "react";
import { Switch, Route } from "react-router";
import { HashRouter } from "react-router-dom";

import Navigation from "../Components/Navigation";
import "./App.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#444477",
            dark: "#333366"
        },
        text: {
            primary: "#FFFFFF"
        }
    },
    typography: {
        fontFamily: [
            '"Segoe UI"',
            "sans-serif"
        ],
        fontSize: 14
    }
});

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
            <Box backgroundColor="primary.main" sx={{ height: "100%" }}>

                <Navigation />

                <Box sx={{ padding: "1rem" }}>
                    <Switch>
                        <Route path="/">
                            Home
                        </Route>
                        <Route path="winterhodt">
                            Winterhodt
                        </Route>
                    </Switch>
                </Box>
            </Box>
        </HashRouter>
    </ThemeProvider>
);

export default App;
