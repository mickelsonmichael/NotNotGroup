import React from "react";
import LoadingIcon from "../../Common/Icons/LoadingIcon";

import "./NameHeader.css";

const NameHeader = ({ name, loading, color }) => (
  <div className="name-header">
    <div className="name-header__left">{loading && <LoadingIcon color={color} />}</div>
    <div>{name}</div>
    <div />
  </div>
);

export default NameHeader;
