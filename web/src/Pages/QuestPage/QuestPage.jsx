import React, { useMemo } from "react";
import Grid from "@mui/material/Grid"

import { useAccounts } from "../../Context/AccountContext";
import QuestTable from "../../Components/QuestTable";

const QuestPage = () => {

    const { notNotMike, notNotThomas } = useAccounts();

    const players = useMemo(() => [notNotMike, notNotThomas].filter(p => p != null), [notNotMike, notNotThomas]);

    return (
        <Grid container justifyContent="center" sx={{ height: "100%", paddingBottom: "5rem" }}>
            <Grid item lg={6} md={12} sx={{ height: "100%", maxWidth: "100%" }}>
                <QuestTable players={players} />
            </Grid>
        </Grid>
    )
};

export default QuestPage;
