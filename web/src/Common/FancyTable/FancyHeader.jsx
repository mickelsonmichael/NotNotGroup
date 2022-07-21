import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

import { useFancyTableContext } from "./FancyTableContext";

const FancyHeader = () => {
  const { columns } = useFancyTableContext();

  return (
    <TableHead>
      <TableRow>
        {columns.map((c) => (
          <TableCell key={c.header} align={c.alignment}>
            {c.header}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default FancyHeader;
