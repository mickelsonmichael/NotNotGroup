import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Link as UILink,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Storage } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import NavDropdown from "./NavDropdown";

const linkStyle = {
  paddingRight: "1.5rem",
  display: "inline-block",
  cursor: "pointer",
  ":hover": {
    color: "#AAAAFF",
  },
};

const NavLink = ({ to, children }) => (
  <UILink
    to={to}
    component={Link}
    underline="none"
    color="text.primary"
    sx={linkStyle}
  >
    {children}
  </UILink>
);

const Navigation = () => {
  return (
    <Box sx={{ padding: "1rem", backgroundColor: "primary.dark" }}>
      <Grid container spacing={2}>
        <Grid item columns={{ xs: 12, sm: "auto" }}>
          <NavLink to="/">
            <Typography fontWeight={700}>NotNotGroup</Typography>
          </NavLink>
        </Grid>
        <Grid
          item
          columns={{ xs: 12, sm: "auto" }}
          display="flex"
          flexDirection="row"
        >
          <NavLink to="/quests">Quests</NavLink>
          <NavLink to="/diaries">Diaries</NavLink>
          <NavLink to="/treasure-trails">Treasure Trails</NavLink>
          <NavDropdown
            text="Bosses"
            items={[
              { to: "/bosses/wintertodt", text: "Wintertodt" },
              {
                to: "/bosses/guardians-of-the-rift",
                text: "Guardians of the Rift",
              },
            ]}
          />
        </Grid>
        <Grid item marginLeft="auto">
          <IconButton href={process.env.SHEET_URL} target="_blank" size="small">
            <Storage />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navigation;
