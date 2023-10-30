import React, { useState, useMemo } from "react";
import { Grid, Input, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import Tracker from "../../Components/Tracker";

const toTrack = [
  { id: 6, displayName: "All Clues" },
  { id: 7, displayName: "Beginner Clues" },
  { id: 8, displayName: "Easy Clues" },
  { id: 9, displayName: "Medium Clues" },
  { id: 10, displayName: "Hard Clues" },
  { id: 11, displayName: "Elite Clues" },
  { id: 12, displayName: "Master Clues" },
  { id: 20, displayName: "Barrows" },
  { id: 21, displayName: "Bryophyta" },
  { id: 27, displayName: "Chaos Elemental" },
  { id: 31, displayName: "Crazy Archaeologist" },
  { id: 35, displayName: "Deranged Archaeologist" },
  { id: 16, displayName: "Guardians of the Rift" },
  { id: 40, displayName: "Hespori" },
  { id: 42, displayName: "King Black Dragon" },
  { id: 50, displayName: "Obor" },
  { id: 52, displayName: "Sarachnis" },
  { id: 54, displayName: "Skotizo" },
  { id: 56, displayName: "Tempoross" },
  { id: 72, displayName: "Wintertodt" },
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
      <Grid
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        marginTop="1rem"
      >
        {filteredTrackers.map(({ id, displayName }) => (
          <Tracker key={id} id={id} displayName={displayName} />
        ))}
      </Grid>
    </div>
  );
};

export default TrackersPage;
