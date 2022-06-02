import React from "react";
import { Typography } from "@mui/material";
import LiquidFillGauge from "react-liquid-gauge";

import xp from "../../xp";

const Gauge = ({ color, player, playerName }) => (
    <div className="wintertodt-wrapper">
        <Typography variant="h4" textAlign="center" marginBottom={3}>
            {playerName}
        </Typography>
        <LiquidFillGauge
            waveAmplitude={0}
            textStyle={{ fill: "white" }}
            waveStyle={{ fill: color ?? "cyan" }}
            circleStyle={{ fill: color ?? "cyan" }}
            value={(player?.skills.Firemaking.experience ?? 0) / xp[99] * 100}
        />
        <Typography variant="h3" textAlign="center" marginTop={3}>
            Kills {player?.bosses.Wintertodt.level ?? "?"}
        </Typography>
        <Typography textAlign="center">
            <div>
                <small>HP | {player?.skills.Hitpoints.level}</small>
            </div>
            <div>
                <small>Fletching | {player?.skills.Fletching.level}</small>
            </div>
            <div>
                <small>Woodcutting | {player?.skills.Woodcutting.level}</small>
            </div>
        </Typography>
    </div>
);

export default Gauge;
