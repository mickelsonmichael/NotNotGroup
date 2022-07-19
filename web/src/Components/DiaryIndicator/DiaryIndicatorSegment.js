import React from "react";
import { Tooltip } from "@mui/material";

const DiaryIndicatorSegment = ({ color, value, total }) => (
  <Tooltip title={`${value > 0 && value}`} placement="top">
    <span
      className="diary-indicator__segment"
      style={{ backgroundColor: color, width: `${(value / total) * 100}%` }}
    />
  </Tooltip>
);

export default DiaryIndicatorSegment;
