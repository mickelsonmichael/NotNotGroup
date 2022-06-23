import React from "react";
import { CheckOutlined, CancelOutlined } from "@mui/icons-material";
import { Tooltip, Table, TableRow, TableCell, TableBody, Box } from "@mui/material"

const YesIcon = () => (<CheckOutlined sx={{ color: "#33DD66" }} />);
const NoIcon = () => (<CancelOutlined sx={{ color: "#DD3366" }} />);

const QuestList = ({ quests, players }) => (
    quests.map(questName => (
        <TableRow key={questName}>
            <TableCell>{questName}</TableCell>
            {
                players.map(player => (
                    <TableCell key={player.name} style={{ textAlign: "center" }} width="20%">
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
                    </TableCell>
                ))
            }
        </TableRow>
    ))
);

const SkillList = ({ skills, players }) => (
    skills.map(skill => (
        <TableRow key={skill.name}>
            <TableCell>{skill.level} {skill.name}</TableCell>
            {
                players.map(player => (
                    <TableCell key={player.name} style={{ textAlign: "center" }} width="20%">
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
                    </TableCell>
                ))
            }
        </TableRow>
    ))
);

const Requirements = ({ quest, players }) => (
    <>
        {
            quest.skills.length > 0 || quest.quests.length > 0
                ? (
                    <Table>
                        <TableBody>
                            <QuestList quests={quest.quests} players={players} />
                            <SkillList skills={quest.skills} players={players} />
                        </TableBody>
                    </Table>
                ) : (
                    <Box textAlign="center" padding="1rem">There are no requirements</Box>
                )
        }
    </>
);

export default Requirements;
