import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Link as UILink,
  Typography,
} from "@mui/material";
import { Storage, EmojiEvents, GitHub, Cached } from "@mui/icons-material";
import { Link } from "react-router-dom";

import NavDropdown from "./NavDropdown";
import { useAccounts } from "../../Context/AccountContext";

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
  const { refetch } = useAccounts();

  return (
    <Box sx={{ padding: "1rem", backgroundColor: "primary.dark" }}>
      <Grid container spacing={2}>
        <Grid
          item
          columns={{ xs: 12, sm: "auto" }}
          display="flex"
          alignItems="center"
        >
          <NavLink to="/">
            <Typography fontWeight={700}>NotNotGroup</Typography>
          </NavLink>
        </Grid>
        <Grid
          item
          columns={{ xs: 12, sm: "auto" }}
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <NavLink to="/quests">Quests</NavLink>
          <NavLink to="/diaries">Diaries</NavLink>
          <NavDropdown
            text="Bosses"
            items={[
              { to: "/bosses/wintertodt", text: "Wintertodt" },
              {
                to: "/bosses/guardians-of-the-rift",
                text: "Guardians of the Rift",
              },
              {
                to: "/bosses/tempoross",
                text: "Tempoross",
              },
            ]}
          />
          <NavLink to="/memories">Memories</NavLink>
        </Grid>
        <Grid item marginLeft="auto">
          <IconButton onClick={refetch} size="small">
            <Cached />
          </IconButton>
          <IconButton
            href={process.env.GITHUB_URL}
            target="_blank"
            size="small"
          >
            <GitHub />
          </IconButton>
          <IconButton
            href={process.env.HISCORE_OFFICIAL_URL}
            target="_blank"
            size="small"
          >
            <EmojiEvents />
          </IconButton>
          <IconButton href={process.env.SHEET_URL} target="_blank" size="small">
            <Storage />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navigation;
