import React from "react";
import { ImSpinner9 } from "react-icons/im";

import "./LoadingIcon.css";

const LoadingIcon = ({
  as = ImSpinner9,
  color = "gold",
  style,
}) => (
  <span className="spinner-wrapper spin">
    {as({
      className: "spinner",
      style: { color, ...style },
    })}
  </span>
);

export default LoadingIcon;
