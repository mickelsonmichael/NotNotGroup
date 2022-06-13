import React from "react";

import "./Clue.css";

const Clue = ({ clueText, clueSolution }) => (
    <div className="clue">
        <div className="clue-text">{clueText.split('\n').map(text => <p key={text} style={{ marginTop: "0" }}>{text}</p>)}</div>
        {clueSolution && <div className="clue-solution">{clueSolution}</div>}
    </div>
);

export default Clue;
