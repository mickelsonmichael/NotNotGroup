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
    TablePagination,
    Select,
    Box
} from "@mui/material";
import FilterIcon from "@mui/icons-material/FilterAlt"

import useQuestTable from "./useQuestTable";
import QuestRow from "./QuestRow";

const QuestTable = ({ players }) => {
    const {
        filter,
        page,
        quests,
        totalQuests,
        questsPerPage,
        filterOptions,
        setPage,
        setFilter,
        setPageSize,
        setSelectedFilter
    } = useQuestTable(players);

    const handleChangePageSize = ({ target: { value } }) => setPageSize(value);

    const handlePageChange = (_, newPage) => setPage(newPage);

    return (
        <>
            <Box display="flex" flexDirection="row" justifyItems="space-between">
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

                <Select
                    onChange={({ target: { value }}) => setSelectedFilter(value)}
                    defaultValue=""
                    native
                    variant="standard"
                >
                    <option value="">#NoFilter</option>
                    {filterOptions.map(f => (<option key={f.value} value={f.value}>{f.label}</option>))}
                </Select>
            </Box>

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
                        {quests.map(q => (
                            <QuestRow key={q.name} quest={q} players={players} />
                        ))}
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
