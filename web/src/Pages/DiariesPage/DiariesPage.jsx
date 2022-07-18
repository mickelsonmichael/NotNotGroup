import React, { useMemo } from "react";
import { Grid, Typography } from "@mui/material";
import { useParams, Navigate } from "react-router-dom";

import { usePlayer } from "../../Context/AccountContext";
import diaries from "@data/diaries";
import TaskRow from "@components/DiariesTable/TaskRow";

const DiariesPage = () => {
    const { region, playerName } = useParams();

    const difficulties = useMemo(() => diaries[region.toLowerCase()], [region]);

    const player = usePlayer(playerName);

    if (difficulties == null) {
        return <div>
            <Navigate to="/" />
        </div>
    }

    return (
        <Grid container justifyContent="center" sx={{ height: "100%", paddingBottom: "5rem" }}>
            <Grid item lg={8} md={12} sx={{ height: "100%", maxWidth: "100%" }}>
                <Typography sx={{ typography: { xs: "h3", sm: "h2" }, textTransform: "capitalize" }} textAlign="center" borderBottom={1} marginBottom={2} paddingBottom={5}>
                    {playerName} {region}
                </Typography>
                {
                    Object.keys(difficulties)
                        .map(diffKey => (
                            <div key={diffKey} className="diary-difficulty">
                                <Typography sx={{ typography: { xs: "h4", sm: "h3" }, textTransform: "capitalize" }} textAlign="center">
                                    {diffKey}
                                </Typography>
                                <div className="diary-difficulty__tasks">
                                    {
                                        difficulties[diffKey].map(task => (
                                            <TaskRow key={task.description} player={player} task={task} />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                }
            </Grid>
        </Grid>)
};

export default DiariesPage;
