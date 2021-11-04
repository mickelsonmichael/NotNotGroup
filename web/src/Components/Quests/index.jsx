import React from "react";
import { Grid } from "@mui/material";

import { useAccounts } from "../../Context/AccountContext";
import QuestData from "../../Data/questData.json";
import QuestRow from "./QuestRow";
import NameHeader from "../NameHeader";

const Quests = () => {

    const { notNotMike, notNotThomas } = useAccounts();

    return (
        <Grid container spacing={2}>
            <Grid item sm={6}>
                <NameHeader name="NotNotMike" />
                {QuestData.quests.map(q => (<QuestRow key={q.name} quest={q} player={notNotMike} />))}
            </Grid>
            <Grid item sm={6}>
                <NameHeader name="NotNotThomas" />
                {QuestData.quests.map(q => (<QuestRow key={q.name} quest={q} player={notNotThomas} />))}
            </Grid>
        </Grid>
    )
}

export default Quests;
