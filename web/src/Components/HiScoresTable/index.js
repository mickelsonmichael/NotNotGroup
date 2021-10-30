import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Typography } from "@mui/material";

const HiScoresTable = ({ skills }) => skills == null ? null : (
    <TableContainer>
        <Table size="small" striped>
            <TableHead>
                <TableRow sx={{ backgroundColor: "rgba(1,1,1,0.2)" }}>
                    <TableCell>
                        <Typography fontWeight={700}>
                            Skill
                        </Typography>
                    </TableCell>
                    <TableCell sx={{ textAlign: "right" }}>
                        <Typography fontWeight={700}>
                            Level
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    Object.keys(skills).map((key, i) => (
                        <TableRow key={key} sx={{ backgroundColor: i % 2 != 0 ? "rgba(1,1,1,0.2)" : "transparent" }}>
                            <TableCell>{key}</TableCell>
                            <TableCell sx={{ textAlign: "right" }}>{skills[key].level}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
);

export default HiScoresTable;
