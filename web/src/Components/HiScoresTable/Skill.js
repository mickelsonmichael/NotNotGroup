import { Box } from "@mui/system";
import React from "react";

import formatNum from "../../formatNum";
import "./Skill.css"

const Skill = ({ skillName, skillData }) => (
    <Box className="skill" border={1} padding={1}>
        <div className="skill__inner">
            <img src={`images/${skillName}_icon.png`} />
            <span className="skill__inner-level">{(skillData?.level ?? "1").toString().padStart(4, " ")}</span>
        </div>
        <div className="skill__hover">
            <div><strong>{skillName}</strong></div>
            <div>Rank | {formatNum(skillData?.rank)}</div>
            <div>XP | {formatNum(skillData?.experience)}</div>
        </div>
    </Box>
);

export default Skill;
