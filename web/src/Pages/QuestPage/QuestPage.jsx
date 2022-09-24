import React, { useMemo } from "react";
import Grid from "@mui/material/Grid";

import { useAccounts } from "../../Context/AccountContext";
import QuestTable from "../../Components/QuestTable";

const QuestPage = () => {
  const { accounts } = useAccounts();

  const players = useMemo(() => accounts.filter((p) => p != null), [accounts]);

  return (
    <Grid
      sx={{ height: "100%", paddingBottom: "5rem" }}
    >
      <Grid item sx={{ height: "100%", maxWidth: "100%" }}>
        <QuestTable players={players} />
      </Grid>
    </Grid>
  );
};

export default QuestPage;
