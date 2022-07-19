import React from "react";
import { Grid, Typography } from "@mui/material"

import { useAccounts } from "../../Context/AccountContext";

import BossTrackerGauge from "./BossTrackerGuage";
import "./BossTracker.css";

const BossTracker = ({
  primarySkill,
  secondarySkills,
  bossName,
  hiScoresName,
}) => {
  const { notNotMike, notNotThomas } = useAccounts();
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
        <Grid item>
          <BossTrackerGauge
            player={notNotMike}
            primarySkill={primarySkill}
            secondarySkills={secondarySkills}
            hiScoresName={hiScoresName}
          />
        </Grid>
        <Grid item>
          <BossTrackerGauge
            player={notNotThomas}
            primarySkill={primarySkill}
            secondarySkills={secondarySkills}
            hiScoresName={hiScoresName}
            color="gold"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BossTracker;
