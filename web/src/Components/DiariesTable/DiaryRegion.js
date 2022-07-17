import React from "react";
import { useNavigate } from "react-router-dom";

import completedQuests from "@data/completedQuests.json";

const getNumberCompletedTasks = (player, tasks) => tasks.filter(task => task.players.includes(player?.name)).length;

const getNumberReadyTasks = (player, tasks) => {
    const lowerCasePlayerName = player?.name.toLowerCase();

    return tasks.filter(task => !task.players.some(p => p.toLowerCase() === lowerCasePlayerName)
        && task.quests.every(q => completedQuests[lowerCasePlayerName]?.includes(q))
        && Object.keys(task.skills).every(skillName => player?.skills[skillName].level >= task.skills[skillName])).length;
}

const DiaryRegion = ({ name, player, difficulties }) => {
    const navigate = useNavigate();

    return (
        <div className="diary-region">
            <div className="diary-region__name" onClick={() => navigate(`/diaries/${name}/${player?.name}`)}>
                {name}
            </div>
            <div className="diary-region__progress">
                {
                    Object.keys(difficulties)
                        .map(diffKey => {
                            const numberOfTasks = difficulties[diffKey].length;
                            const completedTasks = getNumberCompletedTasks(player, difficulties[diffKey]);
                            const readyTasks = getNumberReadyTasks(player, difficulties[diffKey]);
                            const notReadyTasks = numberOfTasks - (completedTasks + readyTasks);

                            return (
                                <div key={diffKey} className="diary-region__progress-wrapper">
                                    <span
                                        className="diary-region__progress-indicator"
                                        style={{
                                            width: `${completedTasks / numberOfTasks * 100}%`
                                        }}
                                    >
                                        {completedTasks > 0 && completedTasks}
                                    </span>
                                    <span
                                        className="diary-region__potential-indicator"
                                        style={{
                                            width: `${readyTasks / numberOfTasks * 100}%`
                                        }}
                                    >
                                        {readyTasks > 0 && readyTasks}
                                    </span>
                                    <span
                                        className="diary-region__remaining-indicator"
                                        style={{ width: `${notReadyTasks / numberOfTasks * 100}%` }}
                                    >
                                        {notReadyTasks > 0 && notReadyTasks}
                                    </span>
                                </div>
                            )
                        })

                }
            </div>
        </div>
    )
};

export default DiaryRegion;
