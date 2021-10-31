import React from "react";

import Skill from "./Skill";

const HiScoresTable = ({ skills, overall }) => skills == null ? null : (
    <>
        <div className="skill-grid">
            {
                Object.keys(skills)
                    .map((key, i) => (
                        <Skill skillName={key} skillData={skills[key]} />
                    ))
            }
            <Skill skillName="Overall" skillData={overall} />
        </div>
    </>
);

export default HiScoresTable;
