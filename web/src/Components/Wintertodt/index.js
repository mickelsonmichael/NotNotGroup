import { Grid, Typography } from "@mui/material";
import React from "react";

import { useAccounts } from "../../Context/AccountContext";
import Gauge from "./Gauge";

const Wintertodt = () => {
    const { notNotThomas, notNotMike } = useAccounts();

    return (
        <>
            <Typography sx={{ typography: { xs: "h2", sm: "h1" } }} textAlign="center">
                Wintertodt
            </Typography>

            <Grid container spacing={1} justifyContent="space-around" sx={{ marginTop: "1rem" }}>
                <Grid item>
                    <Gauge player={notNotMike} playerName="NotNotMike" />
                </Grid>
                <Grid item>
                    <Gauge player={notNotThomas} playerName="NotNotThomas" color="gold" />
                </Grid>
            </Grid>
        </>
    );
};

export default Wintertodt;
