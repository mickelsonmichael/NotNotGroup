import React from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const linkStyle = {
  paddingRight: "1.5rem",
  display: "inline-block",
  cursor: "pointer",
  ":hover": {
    color: "#AAAAFF",
  },
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
        aria-role="button"
        onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
        sx={linkStyle}
      >
        {text}
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
