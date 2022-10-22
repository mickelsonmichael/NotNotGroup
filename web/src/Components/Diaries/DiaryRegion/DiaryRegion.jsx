import React, { useMemo } from "react";
import { Grid, Typography } from "@mui/material";

import diaries from "@data/diaries";

import DiaryDifficulty from "@components/Diaries/DiaryDifficulty";

const DiaryRegion = ({ region }) => {
  const difficulties = useMemo(() => diaries[region.toLowerCase()], [region]);

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ height: "100%", paddingBottom: "5rem" }}
    >
      <Grid item lg={8} md={12} sx={{ height: "100%", maxWidth: "100%" }}>
        <Typography
          sx={{
            typography: { xs: "h3", sm: "h2" },
            textTransform: "capitalize",
          }}
          textAlign="center"
          marginBottom={2}
          paddingBottom={2}
        >
          {region}
        </Typography>
        {Object.keys(difficulties).map((diffKey) => (
          <DiaryDifficulty key={diffKey} region={region} difficulty={diffKey} />
        ))}
      </Grid>
    </Grid>
  );
};

export default DiaryRegion;
