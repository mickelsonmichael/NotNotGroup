import React, { useState, useMemo } from "react";
import { Container, Grid, Input, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import clues from "../../Data/clues.json";
import StashClues from "../../Components/StashClues";

import CoordinateClues from "./CoordinateClues";
import AnagramClues from "./AnagramClues";
import "./TreasureTrailsPage.css";

const TreasureTrailsPage = () => {
    const [search, setSearch] = useState("");

    const filteredClues = useMemo(() => {
        const pattern = new RegExp(search, "ig");

        return (
            Object.keys(clues).reduce((result, type) => ({
                ...result,
                [type]: clues[type].filter(clue => clue.solution?.match(pattern) || clue.text?.match(pattern) || clue.location?.match(pattern) || clue.items?.some(i => i.match(pattern)))
            }), {})
        )
    }, [search]);

    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Input
                        onChange={({ target: { value } }) => setSearch(value)}
                        fullWidth
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        sx={{ marginBottom: "1rem" }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CoordinateClues clues={filteredClues.coordinate} />
                </Grid>
                <Grid item xs={12}>
                    <AnagramClues clues={filteredClues.anagram} />
                </Grid>
                <Grid item xs={12}>
                    <StashClues clues={filteredClues.stash} />
                </Grid>
            </Grid>
        </Container>
    )
};

export default TreasureTrailsPage;
