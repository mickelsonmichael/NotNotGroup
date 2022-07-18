import React from "react";

const DiaryIndicatorSegment = ({ color, value, total }) => (
  <span
    className="diary-indicator__segment"
    style={{ backgroundColor: color, width: `${(value / total) * 100}%` }}
  >
    {value > 0 && value}
  </span>
);

export default DiaryIndicatorSegment;
