import React from "react";
import { Typography } from "@mui/material";
import LiquidFillGauge from "react-liquid-gauge";

import xp from "../../xp";

const BossTrackerGauge = ({
  color = "cyan",
  player,
  primarySkill,
  secondarySkills,
  hiScoresName,
}) => (
  <div className="boss-tracker-wrapper">
    <Typography variant="h4" textAlign="center" marginBottom={3}>
      {player?.name}
    </Typography>
    <LiquidFillGauge
      waveAmplitude={0}
      textStyle={{ fill: "white" }}
      waveStyle={{ fill: color }}
      circleStyle={{ fill: color }}
      value={((player?.skills[primarySkill]?.experience ?? 0) / xp[99]) * 100}
    />
    <Typography variant="h3" textAlign="center" marginTop={3}>
      {player?.bosses[hiScoresName]?.level ?? 0} Kills
    </Typography>
    <Typography textAlign="center">
      <div className="boss-tracker__skill">
        <span>{primarySkill}</span>
        <span style={{ backgroundColor: color, color: "#333" }}>
          {player?.skills[primarySkill]?.level ?? 0}
        </span>
      </div>
      {secondarySkills.map((sk) => (
        <div key={sk} className="boss-tracker__skill secondary">
          <span>{sk}</span>
          <span>{player?.skills[sk]?.level ?? 0}</span>
        </div>
      ))}
    </Typography>
  </div>
);

export default BossTrackerGauge;
