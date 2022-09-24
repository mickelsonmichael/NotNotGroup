import React from "react";
import { Grid, Typography } from "@mui/material";

import { useAccounts } from "../../Context/AccountContext";

import SkillBossTrackerGauge from "./SkillBossTrackerGuage";
import "./SkillBossTracker.css";

const SkillBossTracker = ({
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
            <SkillBossTrackerGauge
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

export default SkillBossTracker;
