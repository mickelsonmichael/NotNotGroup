import React from "react";
import { Typography } from "@mui/material";
import LiquidFillGauge from "react-liquid-gauge";

import xp from "../../xp";

const SkillBossTrackerGauge = ({
  color = "cyan",
  player,
  primarySkill,
  secondarySkills,
  id,
}) => (
  <div className="boss-tracker-wrapper">
    <Typography variant="h4" textAlign="center" marginBottom={1}>
      {player?.name}
    </Typography>
    <div className="boss-tracker-gauge-wrapper">
      <LiquidFillGauge
        waveAmplitude={0}
        width={320}
        textStyle={{ fill: "#eee" }}
        waveStyle={{ fill: color }}
        circleStyle={{ fill: color }}
        value={((player?.skills[primarySkill]?.experience ?? 0) / xp[99]) * 100}
      />
    </div>
    <Typography variant="h4" textAlign="center" marginTop={1}>
      {player?.bosses.find(b => b.id === id)?.level ?? 0} Kills
    </Typography>
    <Typography textAlign="center">
      <div className="boss-tracker__skill">
        <span>{primarySkill}</span>
        <span style={{ backgroundColor: color, color: "#eee" }}>
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

export default SkillBossTrackerGauge;
