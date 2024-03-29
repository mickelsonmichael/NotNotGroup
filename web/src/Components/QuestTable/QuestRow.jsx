import React, { useState } from "react";
import { Box, TableRow, TableCell, Collapse } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import QuestDescription from "./QuestDescription";
import Requirements from "./Requirements";
import QuestStatus from "./QuestStatus";

const QuestRow = ({ quest, players }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(o => !o);

    return (
        <>
            <TableRow>
                <TableCell>
                    {quest.name}
                    <IconButton size="small" onClick={handleToggle}>
                        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {players.map(p => (
                    <TableCell key={p.name} align="center" sx={{ width: "20%" }}>
                        <QuestStatus player={p} quest={quest} />
                    </TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ padding: 0 }}
                    colSpan={1 + players.length}
                >
                    <Collapse in={isOpen} unmountOnExit sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                        <QuestDescription quest={quest} />
                        <Requirements quest={quest} players={players} />
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

export default QuestRow;
