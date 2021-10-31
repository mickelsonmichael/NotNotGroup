import { Box } from "@mui/system";
import React from "react";

import "./Skill.css"

const Skill = ({ skillName, skillData }) => {
    return (
        <Box className="skill" border={1} padding={1}>
            <div className="skill__inner">
                <img src={`./images/${skillName}_icon.png`} />
                <span className="skill__inner-level">{(skillData?.level ?? "1").toString().padStart(4, " ")}</span>
            </div>
            <div className="skill__hover">
                <span>
                    Rank {skillData?.rank}
                </span>

                <span>
                    experience {skillData?.experience}
                </span>
            </div>
        </Box>
    )
}

export default Skill;
