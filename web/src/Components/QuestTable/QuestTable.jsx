import React from "react";
import {
    Input,
    InputAdornment,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableFooter,
    TablePagination
} from "@mui/material";
import FilterIcon from "@mui/icons-material/FilterAlt"

import useQuestTable from "./useQuestTable";
import QuestStatus from "./QuestStatus";

const QuestTable = ({ players }) => {
    const {
        filter,
        page,
        quests,
        totalQuests,
        questsPerPage,
        setPage,
        setFilter,
        setPageSize
    } = useQuestTable(players);

    const handleChangePageSize = ({ target: { value } }) => setPageSize(value);

    const handlePageChange = (_, newPage) => setPage(newPage);

    return (
        <>
            <div>
                <Input
                    name="filter"
                    placeholder="Filter"
                    value={filter?.source ?? ""}
                    onChange={({ target: { value } }) => setFilter(value)}
                    fullWidth
                    startAdornment={
                        <InputAdornment position="start">
                            <FilterIcon />
                        </InputAdornment>
                    }
                />
            </div>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            {players.map(p => (
                                <TableCell key={p.name} align="center">
                                    <div>NotNot</div>
                                    {p.name.substr(6)}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {quests.map(q => (<TableRow key={q.name}>
                            <TableCell>{q.name}</TableCell>
                            {players.map(p => (
                                <TableCell key={p.name} align="center">
                                    <QuestStatus player={p} quest={q} />
                                </TableCell>
                            ))}
                        </TableRow>))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                                colSpan={1 + players.length}
                                count={totalQuests}
                                page={page}
                                rowsPerPage={questsPerPage}
                                onRowsPerPageChange={handleChangePageSize}
                                onPageChange={handlePageChange}
                                labelRowsPerPage="Show"
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    )
}

export default QuestTable;
