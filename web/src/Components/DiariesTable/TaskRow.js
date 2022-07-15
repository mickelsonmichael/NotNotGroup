import React, { useMemo } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material"

import YesIcon from "@common/YesIcon";
import NoIcon from "@common/NoIcon";
import completedQuests from "@data/completedQuests.json";

const TaskRow = ({ task, player }) => {
    const isDone = useMemo(() => task.players.includes(player?.name), [task, player]);

    return (
        <Accordion className={"diary-difficulty__tasks-task"}>
            <AccordionSummary
                id={task.description.replace(/\s\'\./ig, "-")}
                expandIcon={<ExpandMore />}
            >
                {isDone ? <YesIcon mr="0.5rem" /> : <NoIcon mr="0.5rem" />}
                {task.description}
            </AccordionSummary>
            <AccordionDetails>
                {
                    task.quests.length === 0 && Object.keys(task.skills).length === 0
                        ? <div>No requirements</div>
                        : (
                            <div className="diary-difficulty__tasks-requirements">
                                {
                                    task.quests.map(q => (
                                        <div className="diary-difficulty__tasks-requirements__req">
                                            {
                                                completedQuests[player?.name.toLowerCase()]?.includes(q)
                                                    ? <YesIcon mr="0.5rem" />
                                                    : <NoIcon mr="0.5rem" />
                                            }
                                            {q}
                                        </div>
                                    ))
                                }
                                {
                                    Object.keys(task.skills).map(skillName => (
                                        <div className="diary-difficulty__tasks-requirements__req">
                                            {
                                                player?.skills[skillName].level >= task.skills[skillName]
                                                    ? <YesIcon mr="0.5rem" />
                                                    : <NoIcon mr="0.5rem" />
                                            }
                                            {task.skills[skillName]} {skillName}
                                        </div>
                                    ))
                                }
                            </div>
                        )
                }
            </AccordionDetails>
        </Accordion>
    )
};

export default TaskRow;
