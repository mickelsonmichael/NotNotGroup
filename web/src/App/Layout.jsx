import React from "react";
import { Box } from "@mui/material";
import { Switch, Route } from "react-router";

import Navigation from "../Components/Navigation";
import Home from "../Components/Home";
import Wintertodt from "../Components/Wintertodt";
import QuestPage from "../Pages/QuestPage";
import TreasureTrailsPage from "../Pages/TreasureTrailsPage";

const Layout = () => (
    <Box
        backgroundColor="primary.main"
        sx={{
            height: "100%",
            overflowY: "auto",
            maxHeight: "100%",
            display: "flex",
            flexDirection: "column"
        }}
    >
        <Navigation />

        <Box sx={{ padding: "1rem", flexGrow: 1 }}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/wintertodt" component={Wintertodt} />
                <Route path="/quests" component={QuestPage} />
                <Route path="/treasure-trails" component={TreasureTrailsPage} />
            </Switch>
        </Box>
    </Box>
);

export default Layout;
