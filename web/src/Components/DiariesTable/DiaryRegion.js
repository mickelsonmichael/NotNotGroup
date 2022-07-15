import React, { useState } from "react";
import { Collapse } from "@mui/material";

import TaskRow from "./TaskRow";
import { Link, useNavigate } from "react-router-dom";

const getProgress = (player, tasks) => `${tasks.filter(task => task.players.includes(player?.name)).length / tasks.length * 100}%`;

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
                        .map(diffKey => (
                            <div key={diffKey} className="diary-region__progress-wrapper">
                                <span
                                    className="diary-region__progress-indicator"
                                    style={{
                                        width: getProgress(player, difficulties[diffKey])
                                    }}
                                />
                            </div>
                        ))
                }
            </div>
        </div>
    )
};

export default DiaryRegion;
