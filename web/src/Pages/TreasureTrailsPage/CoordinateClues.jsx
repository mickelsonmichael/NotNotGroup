import React from "react";
import { Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Clue from "../../Components/Clue";

const CoordinateClues = ({ clues }) => (
    <div>
        <Typography variant="h3">Coordinate Clues</Typography>
        <Accordion sx={{ marginTop: "1rem" }}>
            <AccordionSummary
                id="how-to-solve"
                expandIcon={<ExpandMoreIcon color="white" />}
            >
                How do you solve a coordinate clue?
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    When performing coordinate clues, you require a <code>Chart</code>, <code>Sextant</code>, and <code>Watch</code>. To get these items, you must
                    talk to the astronomer at the observatory, <em>then</em> the fishing captain
                    at Fishing Trawler, and <em>finally</em> the monk inside the Watchtower.
                    These individuals must be spoken to <strong>in this order</strong>.
                    <br />
                    With all three, you can click on the <code>Sextant</code> to open the
                    interface. Simply align the horizon and sun into the center of the
                    eyepiece on the right side. The exact areas where this is achieved
                    will depend on your location within the world.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                id="how-do-they-work"
                expandIcon={<ExpandMoreIcon color="white" />}
            >
                How do coordinates work?
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    Every tile corresponds to <code>2 minutes</code> in any direction.
                    For example, moving one tile to the east will increase the current
                    position by two minutes.
                </Typography>
            </AccordionDetails>
        </Accordion>
        
        <ul className="clue-list">
            {clues.map(c => (
                <li key={c.text}>
                    <Clue clueText={c.text} clueSolution={c.solution} />
                </li>
            ))}
        </ul>
    </div>
);

export default CoordinateClues;
