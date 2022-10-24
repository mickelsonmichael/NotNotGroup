import React from "react";
import { Tooltip } from "@mui/material";
import { Check } from "@mui/icons-material";

const DiaryIndicatorSegment = ({ color, value, total, type }) => (
  <Tooltip title={`${value > 0 && value}`} placement="top">
    <span
      className="diary-indicator__segment"
      style={{ backgroundColor: color, width: `${(value / total) * 100}%` }}
    >
      {type == "done" && value == total && <Check className="diary-indicator__segment-icon" />}
    </span>
  </Tooltip>
);

export default DiaryIndicatorSegment;
