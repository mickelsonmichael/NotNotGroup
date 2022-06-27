import { Box } from "@mui/system";
import React from "react";

import maximums from "@data/maximums";
import formatNum from "../../formatNum";
import "./Skill.css"

const getStyle = (skillName, skillLevel) => {

    if (skillName === "Overall") {
        return {};
    }

    const requiredLevel = maximums[skillName];

    if (skillLevel == 99) {
        // background: "linear-gradient(320deg, rgba(218, 222, 45, .6) 0%, rgba(218, 222, 45, 0.6) 6%, rgba(255, 255, 255, 0.6) 9%, rgba(255, 255, 255, 0.6) 8%, rgba(218, 222, 45, 0.6) 15%)"
        return {
            border: "1px solid gold"
        }
    } else if (skillLevel < 99 && skillLevel >= requiredLevel) {
        return {
            border: "1px solid lightblue"
        }
    }

    return {};
}

const Skill = ({ skillName, skillData }) => {

    const style = getStyle(skillName, skillData?.level ?? 0);
    const requiredLevel = maximums[skillName];

    return (
        <Box className="skill" sx={style}>
            <div className="skill__inner">
                <img src={`images/${skillName}_icon.png`} />
                <span
                    className="skill__inner-level"
                >
                    {(skillData?.level ?? "1").toString().padStart(4, " ")}
                </span>
            </div>
            <div className="skill__hover">
                <div><strong>{skillName}</strong></div>
                <table>
                    <tr>
                        <td>Rank</td>
                        <td>{skillData?.rank > -1 ? formatNum(skillData?.rank) : "Unranked"}</td>
                    </tr>
                    <tr>
                        <td>XP</td>
                        <td>{formatNum(skillData?.experience)}</td>
                    </tr>
                    {skillName !== "Overall" && (
                        <tr>
                            <td>Required</td>
                            <td>{formatNum(requiredLevel.toString())}</td>
                        </tr>
                    )}
                </table>
            </div>
        </Box>
    )
};

export default Skill;
