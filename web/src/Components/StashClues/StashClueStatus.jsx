import React from "react";

import YesIcon from "../../Common/YesIcon";
import NoIcon from "../../Common/NoIcon";

const StashClueStatus = ({ player: { name }, clue: { players } }) => (
    <>
        {
            players.includes(name)
                ? <YesIcon />
                : <NoIcon />
        }
        <span style={{ marginLeft: "0.5rem"}}>{name}</span>
    </>
);

export default StashClueStatus;
