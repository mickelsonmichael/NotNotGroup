import React from "react";
import { Box } from "@mui/material";

import PlayerPanel from "../../Components/PlayerPanel/PlayerPanel";

const HomePage = () => (
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    }}
    >
        <Box padding={1}>
            <PlayerPanel playerName="NotNotMike" />
        </Box>
        <Box padding={1}>
            <PlayerPanel playerName="NotNotThomas" />
        </Box>
    </Box>
);

export default HomePage;
