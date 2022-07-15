import React from "react";

import diaries from "@data/diaries.json";

import DiaryRegion from "./DiaryRegion";
import "./DiariesTable.css";

const DiariesTable = ({ player }) => (
    <div className="diaries-table">
        {Object.keys(diaries).map(region => (
            <DiaryRegion
                key={region}
                name={region}
                difficulties={diaries[region]}
                player={player}
            />
        ))}
    </div>
);

export default DiariesTable;
