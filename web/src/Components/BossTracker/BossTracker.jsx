import React from "react";
import { Grid, Typography } from "@mui/material";

import { useAccounts } from "../../Context/AccountContext";

import BossTrackerGauge from "./BossTrackerGuage";
import "./BossTracker.css";

const BossTracker = ({
  primarySkill,
  secondarySkills,
  bossName,
  hiScoresName,
}) => {
  const { accounts } = useAccounts();

  return (
    <>
      <Typography
        sx={{ typography: { xs: "h3", sm: "h2" } }}
        textAlign="center"
      >
        {bossName}
      </Typography>

      <Grid
        container
        spacing={1}
        justifyContent="center"
        sx={{ marginTop: "1rem" }}
      >
        {accounts.map((account) => (
          <Grid item key={account.name}>
            <BossTrackerGauge
              player={account}
              primarySkill={primarySkill}
              secondarySkills={secondarySkills}
              hiScoresName={hiScoresName}
              color={account.color}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BossTracker;
