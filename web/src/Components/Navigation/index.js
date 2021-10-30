import React from "react";
import { Box, Grid, Link as UILink, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => (
    <UILink to={to}
        component={Link}
        underline="none"
        color="text.primary"
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
                <NavLink to="/Wintertodt">Wintertodt</NavLink>
            </Grid>
        </Grid>
    </Box>
);

export default Navigation;
