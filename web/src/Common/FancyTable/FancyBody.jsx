import React from "react";
import { TableBody } from "@mui/material";

import { useFancyTableContext } from "./FancyTableContext";
import FancyTableRow from "./FancyTableRow";

const FancyBody = () => {
  const { visibleItems, columns, expandItem } = useFancyTableContext();

  return (
    <TableBody>
      {visibleItems.map((item) => (
        <FancyTableRow
          key={item.description}
          columns={columns}
          item={item}
          expandItem={expandItem}
        />
      ))}
    </TableBody>
  );
};

export default FancyBody;
