import React from "react";
import { Typography } from "@mui/material";

import StashClue from "./StashClue";

const AnagramClues = ({ clues }) => (
    <div>
        <Typography variant="h3">Stash Clues</Typography>
        <ul className="clue-list">
            {clues.map(c => (
                <li key={c.location}>
                    <StashClue clue={c} />
                </li>
            ))}
        </ul>
    </div>
);

export default AnagramClues;
