import React from "react";
import { CheckOutlined, CancelOutlined } from "@mui/icons-material";
import { Tooltip, styled } from "@mui/material"

const YesIcon = () => (<CheckOutlined sx={{ color: "#33DD66" }} />);
const NoIcon = () => (<CancelOutlined sx={{ color: "#DD3366" }} />);

const Table = styled((props) => (
    <table {...props} />
))(() => ({
    boxSizing: "border-box",
    width: "100%",
    borderCollapse: "collapse",
    "td": {
        padding: "0.25rem 0.5rem"
    },
    "tbody tr:nth-of-type(even)": {
        backgroundColor: "rgba(0, 0, 0, 0.1)"
    },
    "svg": {
        verticalAlign: "middle"
    }
}));

const QuestList = ({ quests, players }) => (
    quests.map(questName => (
        <tr key={questName}>
            <td>{questName}</td>
            {
                players.map(player => (
                    <td key={player.name} style={{ textAlign: "center" }}>
                        <Tooltip
                            id={`quest-${questName}-${player.name}`}
                            title={player.name}
                            arrow
                            describeChild
                            disableInteractive
                        >
                            <div>
                                {
                                    player.quests.includes(questName)
                                        ? <YesIcon />
                                        : <NoIcon />
                                }
                            </div>
                        </Tooltip>
                    </td>
                ))
            }
        </tr>
    ))
);

const SkillList = ({ skills, players }) => (
    skills.map(skill => (
        <tr key={skill.name}>
            <td>{skill.level} {skill.name}</td>
            {
                players.map(player => (
                    <td key={player.name} style={{ textAlign: "center" }}>
                        <Tooltip
                            id={`skill-${skill.name}-${player.name}`}
                            title={`${player.name}: ${player.skills[skill.name].level}`}
                            arrow
                            describeChild
                            disableInteractive
                        >
                            <span>
                                {
                                    skill.level <= player.skills[skill.name]?.level
                                        ? <YesIcon />
                                        : <NoIcon />
                                }
                            </span>
                        </Tooltip>
                    </td>
                ))
            }
        </tr>
    ))
);

const Requirements = ({ quest, players }) => (
    <>
        {
            quest.skills.length > 0 || quest.quests.length > 0
                ? (
                    <Table>
                        <tbody>
                            <QuestList quests={quest.quests} players={players} />
                            <SkillList skills={quest.skills} players={players} />
                        </tbody>
                    </Table>
                ) : (
                    <div style={{ textAlign: "center" }}>No requirements</div>
                )
        }
    </>
);

export default Requirements;
