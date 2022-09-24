import { Grid, Typography } from "@mui/material";
import React from "react";
import { useMemo } from "react";
import { useAccounts } from "../../Context/AccountContext";

import "./Tracker.css";

const Tracker = ({ track, displayName }) => {
  const { accounts } = useAccounts();

  const total = useMemo(
    () =>
      accounts.reduce(
        (tot, acct) =>
          tot + Math.max(Number(acct.trackers[track]?.level ?? 0), 0),
        0
      ),
    [accounts]
  );

  return (
    <Grid className="tracker" display="flex" flexDirection="row">
      <div
        className="tracker-image-container"
        style={{ backgroundImage: `url(images/${track}.png)` }}
      />

      <Grid flexGrow={1} className="tracker-text-container">
        <Typography
          fontSize="large"
          fontWeight="bold"
          display="flex"
          justifyContent="space-between"
          borderBottom="1px solid white"
        >
          <span>{displayName}</span> <span>{total}</span>
        </Typography>

        <div>
          {accounts.map(({ trackers, name }) => {
            const lvl = Number(trackers[track]?.level ?? 0);

            return (
              <Typography
                key={name}
                fontSize="smaller"
                display="flex"
                justifyContent="space-between"
                fontWeight="light"
              >
                <span>{name}</span>
                <span>{lvl < 0 ? 0 : lvl}</span>
              </Typography>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default Tracker;
