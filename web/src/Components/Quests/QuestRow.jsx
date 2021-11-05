import React from "react";
import { Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, AccordionDetails, styled } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Requirements from "./Requirements";
import QuestStatus from "./QuestStatus";

const Accordion = styled((props) => (
    <MuiAccordion {...props} />
))(() => ({
    backgroundColor: "#222255"
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />
))(() => ({
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: "white"
    }
}))

const QuestRow = ({ quest, players }) => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ display: "flex", flexDirection: "row", paddingX: "1rem", alignItems: "center" }}>
            <strong style={{ marginRight: "auto", fontSize: "105%" }}>{quest.name}</strong>
            {
                players.map(p => (<QuestStatus key={p.name} player={p} quest={quest} />))
            }
        </AccordionSummary>
        <AccordionDetails>
            <div>"{quest.description}"</div>
            {
                quest.notes && (
                    <ul>
                        {quest.notes.map((n, i) => (<li key={i}>{n}</li>))}
                    </ul>
                )
            }
            <br />
            <Requirements quest={quest} players={players} />
        </AccordionDetails>
    </Accordion>
);

export default QuestRow;
