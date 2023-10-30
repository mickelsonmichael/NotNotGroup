import React from "react";
import Grid from "@mui/material/Grid";

import QuestTable from "../../Components/QuestTable";

const QuestPage = () => (
  <Grid sx={{ height: "100%", paddingBottom: "5rem" }}>
    <Grid item sx={{ height: "100%", maxWidth: "100%" }}>
      <QuestTable />
    </Grid>
  </Grid>
);

export default QuestPage;
