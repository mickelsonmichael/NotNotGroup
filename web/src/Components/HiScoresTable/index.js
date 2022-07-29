import { Typography } from "@mui/material";
import React from "react";

import Skill from "./Skill";

const HiScoresTable = ({ skills, overall, combatLevel }) =>
  skills == null ? null : (
    <>
      <div className="skill-grid">
        {Object.keys(skills).map((key, i) => (
          <Skill key={key} skillName={key} skillData={skills[key]} />
        ))}
        <Skill skillName="Overall" skillData={overall} />
      </div>
      <Typography textAlign="center">Combat Level {combatLevel}</Typography>
    </>
  );

export default HiScoresTable;
