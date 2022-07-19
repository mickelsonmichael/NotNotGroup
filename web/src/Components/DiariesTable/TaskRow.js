import React, { useMemo } from "react";

import YesIcon from "@common/YesIcon";
import NoIcon from "@common/NoIcon";
import WarnIcon from "@common/WarnIcon";
import useTaskStatus from "./useTaskStatus";

const TaskRow = ({ task, player }) => {
  const { complete, hasQuests, hasSkills, special, hasSkill, hasQuest } = useTaskStatus(
    task,
    player
  );

  return (
    <div className="diary-difficulty__tasks-task">
      <div className="diary-difficulty__tasks-task__name">
        {complete ? (
          <YesIcon mr="0.5rem" />
        ) : hasQuests && hasSkills && (special == null || special.isMet) ? (
          <WarnIcon mr="0.5rem" />
        ) : (
          <NoIcon mr="0.5rem" />
        )}
        {task.description}
      </div>
      <div>
        {task.quests.length === 0 &&
        Object.keys(task.skills).length === 0 &&
        task.test == null ? null : (
          <div className="diary-difficulty__tasks-requirements">
            {task.quests.map((q) => (
              <div
                key={q}
                className="diary-difficulty__tasks-requirements__req"
              >
                {hasQuest(q) ? <YesIcon mr="0.5rem" /> : <NoIcon mr="0.5rem" />}
                {q}
              </div>
            ))}
            {Object.keys(task.skills).map((skillName) => (
              <div
                key={skillName}
                className="diary-difficulty__tasks-requirements__req"
              >
                {hasSkill(skillName) ? (
                  <YesIcon mr="0.5rem" />
                ) : (
                  <NoIcon mr="0.5rem" />
                )}
                {task.skills[skillName]} {skillName}
              </div>
            ))}
            {special && (
              <div className="diary-difficulty__tasks-requirements__req">
                {special.isMet ? (
                  <YesIcon mr="0.5rem" />
                ) : (
                  <NoIcon mr="0.5rem" />
                )}
                {special.description}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskRow;
