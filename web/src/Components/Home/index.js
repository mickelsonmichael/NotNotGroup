import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { useAccounts } from "../../Context/AccountContext";
import HiScoresTable from "../HiScoresTable";

const wrapperStyle = {
    borderColor: "text.primary",
    border: 1,
    borderRadius: 2,
}

const h2Style = {
    margin: "0",
    textAlign: "center"
};

const commaPattern = /\B(?=(\d{3})+(?!\d))/g;

const Overall = ({ overall }) => (
    <Typography textAlign="center" margin="0.5rem" fontWeight={700}>
        Overall {overall?.level.replace(commaPattern)} levels with {overall?.experience.replace(commaPattern, ",")} XP
    </Typography>
);

const Home = () => {
    const { notNotMike, notNotThomas } = useAccounts();

    return (
        <Box>
            <Grid container justifyContent="space-between">
                <Grid item sm={6} sx={{ padding: "1rem" }}>
                    <h2 style={h2Style}>NotNotMike</h2>
                    <Box sx={wrapperStyle}>
                        <HiScoresTable skills={notNotMike?.skills} />

                        <Overall overall={notNotMike?.Overall} />
                    </Box>
                </Grid>
                <Grid item sm={6} sx={{ padding: "1rem" }}>
                    <h2 style={h2Style}>NotNotThomas</h2>
                    <Box sx={wrapperStyle}>
                        <HiScoresTable skills={notNotThomas?.skills} />

                        <Overall overall={notNotThomas?.Overall} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;
