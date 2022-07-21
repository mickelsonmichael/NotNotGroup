import React from "react";
import { TableFooter, TableRow, TablePagination } from "@mui/material";
import { useFancyTableContext } from "./FancyTableContext";

const FancyFooter = () => {
  const { columns, effectiveItems, page, itemsPerPage, setPageSize, setPage } =
    useFancyTableContext();

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={columns.length}
          count={effectiveItems.length}
          page={page}
          rowsPerPage={itemsPerPage}
          onRowsPerPageChange={({ target: { value } }) => setPageSize(value)}
          onPageChange={(_, newPage) => setPage(newPage)}
          labelRowsPerPage="Show"
        />
      </TableRow>
    </TableFooter>
  );
};

export default FancyFooter;
