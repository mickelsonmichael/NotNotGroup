import React, { useState } from "react";
import { IconButton, TableCell, TableRow, Collapse } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

const FancyTableRow = ({ columns, item, expandItem }) => {
  const [expandIsOpen, setExpandOpen] = useState(false);
  const toggleOpen = () => setExpandOpen((isOpen) => !isOpen);

  const toggleButton =
    expandItem != null ? (
      <IconButton size="small" onClick={toggleOpen}>
        {expandIsOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </IconButton>
    ) : null;

  return (
    <>
      <TableRow key={item.key}>
        {columns.map((colInfo) => (
          <TableCell
            key={`${item.key}-${colInfo.header}`}
            align={colInfo.alignment}
          >
            {typeof colInfo.cell === "function" ? (
              colInfo.cell(item, toggleButton)
            ) : (
              <span style={{ textTransform: "capitalize" }}>
                {item[colInfo.cell]}
              </span>
            )}
          </TableCell>
        ))}
      </TableRow>
      {expandItem && (
        <TableRow>
          <TableCell style={{ padding: 0 }} colSpan={columns.length}>
            <Collapse
              in={expandIsOpen}
              unmountOnExit
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
            >
              {expandItem(item)}
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default FancyTableRow;
