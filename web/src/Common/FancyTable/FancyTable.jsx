import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableFooter,
  TablePagination,
  Box,
} from "@mui/material";

import Filters from "./Filters";
import useFilterState from "./useTableState";

const FancyTable = ({
  items,
  columns,
  expandedContent,
  filters,
  onSetActiveFilter,
}) => {
  const {
    searchValue,
    page,
    itemsPerPage,
    handleSearchValueChange,
    setPageSize,
    setPage,
  } = useFilterState();

  const handleChangePageSize = ({ target: { value } }) => setPageSize(value);

  const handlePageChange = (_, newPage) => setPage(newPage);

  return (
    <>
      <Box display="flex" flexDirection="row" justifyItems="space-between">
        <Filters
          searchValue={searchValue}
          onSearchValueChange={handleSearchValueChange}
          filters={filters}
          onSetActiveFilter={onSetActiveFilter}
        />
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((c) => (
                <TableCell key={c.header} align={alignment}>
                  {text}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <FancyTableRow
                columns={columns}
                item={item}
                expandedContent={expandedContent}
              />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={columns.length}
                count={items.length}
                page={page}
                rowsPerPage={itemsPerPage}
                onRowsPerPageChange={handleChangePageSize}
                onPageChange={handlePageChange}
                labelRowsPerPage="Show"
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default FancyTable;
