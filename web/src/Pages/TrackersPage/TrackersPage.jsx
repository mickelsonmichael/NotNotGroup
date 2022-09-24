import React, { useState, useMemo } from "react";
import { Grid, Input, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import Tracker from "../../Components/Tracker";

const toTrack = [
  { track: "ClueScrollsall", displayName: "All Clues" },
  { track: "ClueScrollsbeginner", displayName: "Beginner Clues" },
  { track: "ClueScrollseasy", displayName: "Easy Clues" },
  { track: "ClueScrollsmedium", displayName: "Medium Clues" },
  { track: "ClueScrollshard", displayName: "Hard Clues" },
  { track: "ClueScrollselite", displayName: "Elite Clues" },
  { track: "ClueScrollsmaster", displayName: "Master Clues" },
  { track: "ChaosElemental", displayName: "Chaos Elemental" },
  { track: "Obor", displayName: "Obor" },
  { track: "Bryophyta", displayName: "Bryophyta" },
  { track: "Sarachnis", displayName: "Saranchnis" },
];

const TrackersPage = () => {
  const [filter, setFilter] = useState("");
  const filterPattern = useMemo(() => new RegExp(filter), [filter]);

  const filteredTrackers = useMemo(
    () =>
      filter === ""
        ? toTrack
        : toTrack.filter(({ displayName }) => filterPattern.test(displayName)),
    [filter]
  );

  return (
    <div>
      <Input
        name="filter"
        placeholder="Filter"
        value={filter}
        onChange={({ target: { value } }) => setFilter(value)}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
      <Grid display="flex" justifyContent="center" flexWrap="wrap" marginTop="1rem">
        {filteredTrackers.map(({ track, displayName }) => (
          <Tracker key={track} track={track} displayName={displayName} />
        ))}
      </Grid>
    </div>
  );
};

export default TrackersPage;
