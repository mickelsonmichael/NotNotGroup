import React, { useMemo } from "react";
import { Grid } from "@mui/material";

import { useAccounts } from "../../Context/AccountContext";
import QuestData from "../../Data/questData.json";
import QuestRow from "./QuestRow";

const Quests = () => {

    const { notNotMike, notNotThomas } = useAccounts();

    const players = useMemo(() => [notNotMike, notNotThomas].filter(p => p!=null), [notNotMike, notNotThomas]);

    return (
        <Grid container justifyContent="center">
            <Grid item lg={6} md={12}>
                {QuestData.quests.map(q => (<QuestRow key={q.name} quest={q} players={players} />))}
            </Grid>
        </Grid>
    )
}

export default Quests;
