import React from "react";
import { Typography } from "@mui/material";
import LiquidFillGauge from "react-liquid-gauge";

import xp from "../../xp";

const Gauge = ({ color, player, playerName }) => (
    <div>
        <Typography variant="h2" textAlign="center">
            {playerName}
        </Typography>
        <LiquidFillGauge
            waveAmplitude={0}
            textStyle={{ fill: "white" }}
            waveStyle={{ fill: color ?? "cyan" }}
            circleStyle={{ fill: color ?? "cyan" }}
            value={(player?.skills.Firemaking.experience ?? 0) / xp[99] * 100}
        />
        <Typography variant="h3" textAlign="center" marginTop={1}>
            Kills {player?.bosses.Wintertodt.level ?? "?"}
        </Typography>
        <Typography textAlign="center">
            <small>HP {player?.skills.Hitpoints.level}</small>
        </Typography>
    </div>
);

export default Gauge;
