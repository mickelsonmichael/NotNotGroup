import React from "react";

import diaries from "@data/diaries";
import DiaryIndicator from "@components/DiaryIndicator";

const DiaryPanel = ({ player }) => (
    <div className="diaries-table">
        {Object.keys(diaries).map(region => (
            <DiaryIndicator
                key={region}
                name={region}
                difficulties={diaries[region]}
                player={player}
            />
        ))}
    </div>
);

export default DiaryPanel;
