import React from "react";
import { Table, TableContainer, Box } from "@mui/material";

import FancyFilters from "./FancyFilters";
import FancyTableContextProvider from "./FancyTableContext";
import FancyBody from "./FancyBody";
import FancyFooter from "./FancyFooter";
import FancyHeader from "./FancyHeader";

const FancyTable = ({ items, columns, expandItem, filters }) => (
  <FancyTableContextProvider
    items={items}
    filters={filters}
    expandItem={expandItem}
    columns={columns}
  >
    <Box display="flex" flexDirection="row" justifyItems="space-between">
      <FancyFilters />
    </Box>

    <TableContainer>
      <Table size="small">
        <FancyHeader />
        <FancyBody />
        <FancyFooter />
      </Table>
    </TableContainer>
  </FancyTableContextProvider>
);

export default FancyTable;
