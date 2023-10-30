import { Box } from "@mui/system";
import React from "react";

import maximums, { diaryMaximums, questMaximums } from "@data/maximums";
import formatNum from "../../formatNum";
import "./Skill.css"

const getStyle = (skillName, skillLevel) => {

    if (skillName === "Overall") {
        return {};
    }

    const questsMax = questMaximums[skillName];
    const diaryMax = diaryMaximums[skillName];
    const requiredLevel = maximums[skillName];

    if (skillLevel == 99) {
        return {
            border: "2px solid gold"
        }
    }
    else if (skillLevel < 99 && skillLevel >= requiredLevel) {
        return {
            border: "2px solid silver"
        }
    } else if (questsMax > diaryMax && skillLevel >= diaryMax) {
        return {
            border: "2px solid green"
        }
    } else if (diaryMax > questsMax && skillLevel >= questsMax) {
        return {
            border: "2px solid skyblue"
        }
    }

    return {
        border: "2px solid transparent"
    };
}

const Skill = ({ skillName, skillData }) => {

    const style = getStyle(skillName, skillData?.level ?? 0);

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
                    <tbody>
                        <tr>
                            <td>Rank</td>
                            <td>{skillData?.rank > -1 ? formatNum(skillData?.rank) : "Unranked"}</td>
                        </tr>
                        <tr>
                            <td>XP</td>
                            <td>{formatNum(skillData?.xp)}</td>
                        </tr>
                        {skillName !== "Overall" && (
                            <>
                                <tr>
                                    <td>Diaries</td>
                                    <td>{formatNum(diaryMaximums[skillName])}</td>
                                </tr>
                                <tr>
                                    <td>Quests</td>
                                    <td>{formatNum(questMaximums[skillName])}</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </Box>
    )
};

export default Skill;
