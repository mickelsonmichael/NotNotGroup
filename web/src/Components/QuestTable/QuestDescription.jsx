import React from "react";
import { Box } from "@mui/material";

const QuestDescription = ({ quest: { description, notes } }) => description || notes ? (
    <Box textAlign="center" padding="1rem">
        {description}
        {notes && (
            <Box paddingTop="0.5rem">
                The following are required or recommended.
            <ul style={{ listStyle: "none" }}>
                {notes.map(n => (<li key={n}>{n}</li>))}
            </ul>
            </Box>
        )}
    </Box>
) : null;

export default QuestDescription;