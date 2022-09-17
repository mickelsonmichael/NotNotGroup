import { Typography } from "@mui/material";
import React from "react";

import Skills from "../../Data/skills.json";

import Skill from "./Skill";

const HiScoresTable = ({ skills, overall, combatLevel }) =>
  skills == null ? null : (
    <>
      <div className="skill-grid">
        {Skills.map((skillName, i) => (
          <Skill
            key={skillName}
            skillName={skillName}
            skillData={skills[skillName]}
          />
        ))}
        <Skill skillName="Overall" skillData={overall} />
      </div>
      <Typography textAlign="center">Combat Level {combatLevel}</Typography>
    </>
  );

export default HiScoresTable;
