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
        <Box>
            <Grid container justifyContent="space-between">
                <Grid item sm={6} sx={{ padding: "1rem" }}>
                    <h2 style={h2Style}>NotNotMike</h2>
                    <Box sx={wrapperStyle}>
                        <HiScoresTable skills={notNotMike?.skills} overall={notNotMike?.Overall} />
                    </Box>
                </Grid>
                <Grid item sm={6} sx={{ padding: "1rem" }}>
                    <h2 style={h2Style}>NotNotThomas</h2>
                    <Box sx={wrapperStyle}>
                        <HiScoresTable skills={notNotThomas?.skills} overall={notNotThomas?.Overall} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;
