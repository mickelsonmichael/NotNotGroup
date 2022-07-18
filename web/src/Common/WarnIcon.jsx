import React from "react";
import { ErrorOutlineOutlined } from "@mui/icons-material";

const WarnIcon = ({ mr }) => (
    <ErrorOutlineOutlined
        sx={{ color: "#DDDD66", marginRight: mr }}
    />
);

export default WarnIcon;
