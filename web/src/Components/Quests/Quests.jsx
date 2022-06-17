import React, { useMemo, useState } from "react";
import { Grid, Input, InputAdornment } from "@mui/material";
import FilterIcon from "@mui/icons-material/FilterAlt"

import { useAccounts } from "../../Context/AccountContext";
import QuestData from "../../Data/questData.json";
import QuestRow from "./QuestRow";

const Quests = () => {

    const { notNotMike, notNotThomas } = useAccounts();

    const players = useMemo(() => [notNotMike, notNotThomas].filter(p => p != null), [notNotMike, notNotThomas]);

    const [filter, setFilter] = useState(null);

    const filteredQuests = useMemo(() => QuestData.quests.filter(q => filter == null || (q.name.match(filter) || q.description.match(filter))), [players, filter]);

    return (
        <Grid container justifyContent="center">
            <Grid item lg={6} md={12}>
                <div>
                    <Input
                        name="filter"
                        placeholder="Filter"
                        value={filter?.source ?? ""}
                        onChange={({ target: { value }}) => setFilter(value ? new RegExp(value, "i") : null)}
                        fullWidth
                        startAdornment={
                            <InputAdornment position="start">
                                <FilterIcon />
                            </InputAdornment>
                        }
                    />
                </div>
                {filteredQuests.map(q => (<QuestRow key={q.name} quest={q} players={players} />))}
            </Grid>
        </Grid>
    )
}

export default Quests;
