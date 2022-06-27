import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Clue from "../../Components/Clue";
import { Box } from "@mui/system";

const AnagramClues = ({ clues }) => (
    <div>
        <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="h3" marginRight="auto">Anagram Clues</Typography>
            <Link
                to="/treasure-trails/anagrams"
                style={{ textDecoration: "none", color: "white" }}
            >
                Helper
            </Link>
        </Box>
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
