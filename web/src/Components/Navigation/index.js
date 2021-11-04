import React from "react";
import { Box, Grid, Link as UILink, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => (
    <UILink to={to}
        component={Link}
        underline="none"
        color="text.primary"
        sx={{
            paddingRight: "1.5rem",
            display: "inline-block",
            ":hover": {
                color: "#AAAAFF"
            }
        }}
    >
        {children}
    </UILink>
);

const Navigation = () => (
    <Box sx={{ padding: "1rem", backgroundColor: "primary.dark" }}>
        <Grid container spacing={2}>
            <Grid item columns={{ xs: 12, sm: "auto" }}>
                <NavLink to="/">
                    <Typography fontWeight={700}>
                        NotNotGroup
                    </Typography>
                </NavLink>
            </Grid>
            <Grid item columns={{ xs: 12, sm: "auto" }}>
                <NavLink to="/wintertodt">Wintertodt</NavLink>
                <NavLink to="/quests">Quests</NavLink>
            </Grid>
        </Grid>
    </Box>
);

export default Navigation;
