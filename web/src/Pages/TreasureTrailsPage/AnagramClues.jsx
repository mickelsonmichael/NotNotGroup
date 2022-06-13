import React from "react";
import { Typography } from "@mui/material";

import Clue from "../../Components/Clue";

const AnagramClues = ({ clues }) => (
    <div>
        <Typography variant="h3">Anagram Clues</Typography>
        <ul className="clue-list">
            {clues.map(c => (
                <li key={c.text}>
                    <Clue clueText={c.text} clueSolution={c.solution} />
                </li>
            ))}
        </ul>
    </div>
);

export default AnagramClues;
