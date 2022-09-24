import React from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { Link } from "react-router-dom";

const linkStyle = {
  paddingRight: "1.5rem",
  display: "inline-flex",
  cursor: "pointer",
  ":hover": {
    color: "#AAAAFF",
  },
  alignItems: "center",
};

const textColor = {
  color: "inherit",
};

const NavDropdown = ({ text, items }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const DropdownItem = ({ to, children }) => (
    <MenuItem onClick={() => setAnchorEl(null)} component={Link} to={to}>
      {children}
    </MenuItem>
  );

  return (
    <>
      <Typography
        onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
        sx={linkStyle}
      >
        {text}
        <ArrowDropDown sx={textColor} />
      </Typography>
      <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
        {items.map(({ to, text }) => (
          <DropdownItem key={to} to={to}>
            {text}
          </DropdownItem>
        ))}
      </Menu>
    </>
  );
};

export default NavDropdown;
