import { Grid, Typography } from "@mui/material";
import React from "react";
import LiquidFillGauge from "react-liquid-gauge";

import { useAccounts } from "../../Context/AccountContext";

const xp99 = 13034431;
const h2Style = {
    textAlign: "center",
}

const Wintertodt = () => {
    const { notNotThomas, notNotMike } = useAccounts();
console.log(notNotMike);
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
                        value={(notNotMike?.Firemaking.experience ?? 0) / xp99 * 100}
                    />
                    <Typography variant="h3" textAlign="center" marginTop={1}>
                        Kills {notNotMike?.Wintertodt.level ?? "?"}
                    </Typography>
                    <Typography textAlign="center">
                        <small>HP {notNotMike?.Hitpoints.level}</small>
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
                        value={(notNotThomas?.Firemaking.experience ?? 0) / xp99 * 100}
                    />
                    <Typography variant="h3" textAlign="center" marginTop={1}>
                        Kills {notNotThomas?.Wintertodt.level ?? "?"}
                    </Typography>
                    <Typography textAlign="center">
                        <small>HP {notNotThomas?.Hitpoints.level}</small>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Wintertodt;
