import React from "react";
import { Box, Grid } from "@mui/material";

import { useAccounts } from "../../Context/AccountContext";
import HiScoresTable from "../HiScoresTable";

const wrapperStyle = {
    borderColor: "text.primary",
    textAlign: "center"
}

const h2Style = {
    margin: "0",
    textAlign: "center"
};

const Home = () => {
    const { notNotMike, notNotThomas } = useAccounts();

    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "row", flexWrap: "wrap" }}>
            <Box padding={1}>
                <h2 style={h2Style}>NotNotMike</h2>
                <Box sx={wrapperStyle}>
                    <HiScoresTable skills={notNotMike?.skills} overall={notNotMike?.Overall} />
                </Box>
            </Box>
            <Box padding={1}>
                <h2 style={h2Style}>NotNotThomas</h2>
                <Box sx={wrapperStyle}>
                    <HiScoresTable skills={notNotThomas?.skills} overall={notNotThomas?.Overall} />
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
