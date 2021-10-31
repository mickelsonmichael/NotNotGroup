import { Grid, Typography } from "@mui/material";
import React from "react";
import LiquidFillGauge from "react-liquid-gauge";

import { useAccounts } from "../../Context/AccountContext";

const xp99 = 13034431;

const Wintertodt = () => {
    const { notNotThomas, notNotMike } = useAccounts();

    return (
        <>
            <Typography variant="h1" textAlign="center">
                Wintertodt
            </Typography>
            
            <Grid container spacing={1} justifyContent="space-around" sx={{ marginTop: "1rem" }}>
                <Grid item>
                    <Typography variant="h2" textAlign="center">
                        NotNotMike
                    </Typography>
                    <LiquidFillGauge
                        waveAnimation
                        textStyle={{ fill: "white" }}
                        value={(notNotMike?.skills.Firemaking.experience ?? 0) / xp99 * 100}
                    />
                    <Typography variant="h3" textAlign="center" marginTop={1}>
                        Kills {notNotMike?.bosses.Wintertodt.level ?? "?"}
                    </Typography>
                    <Typography textAlign="center">
                        <small>HP {notNotMike?.skills.Hitpoints.level}</small>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h2" textAlign="center">
                        NotNotThomas
                    </Typography>
                    <LiquidFillGauge
                        textStyle={{ fill: "white" }}
                        waveStyle={{ fill: "gold" }}
                        circleStyle={{ fill: "gold" }}
                        waveAnimation
                        value={(notNotThomas?.skills.Firemaking.experience ?? 0) / xp99 * 100}
                    />
                    <Typography variant="h3" textAlign="center" marginTop={1}>
                        Kills {notNotThomas?.bosses.Wintertodt.level ?? "?"}
                    </Typography>
                    <Typography textAlign="center">
                        <small>HP {notNotThomas?.skills.Hitpoints.level}</small>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Wintertodt;
