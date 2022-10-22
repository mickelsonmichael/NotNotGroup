import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import useNumberOfReadyTasks from "./useNumberOfReadyTasks";
import useNumberCompletedTasks from "./useNumberOfCompletedTasks";
import DiaryIndicatorSegment from "./DiaryIndicatorSegment";
import "./DiaryIndicator.css";

const DiaryIndicator = ({ name, player, difficulties }) => {
  const navigate = useNavigate();

  return (
    <div className="diary-indicator">
      <div
        className="diary-indicator__name"
        onClick={() => navigate(`/diaries/${name}`)}
      >
        {name}
      </div>
      <div className="diary-indicator__progress">
        {Object.keys(difficulties).map((diffKey) => {
          const numberOfTasks = difficulties[diffKey].length;

          const completedTasks = useNumberCompletedTasks(
            player,
            difficulties[diffKey]
          );

          const readyTasks = useNumberOfReadyTasks(
            player,
            difficulties[diffKey]
          );

          const notReadyTasks = useMemo(() => numberOfTasks - (completedTasks + readyTasks), [numberOfTasks, completedTasks, readyTasks]);

          return (
            <div key={diffKey} className="diary-indicator__progress-wrapper">
              <DiaryIndicatorSegment
                color="rgba(0, 200, 0, 0.3)"
                value={completedTasks}
                total={numberOfTasks}
              />

              <DiaryIndicatorSegment
                color="rgb(255,255,50, 0.6)"
                value={readyTasks}
                total={numberOfTasks}
              />

              <DiaryIndicatorSegment
                color="rgba(200, 0, 0, 0.5)"
                value={notReadyTasks}
                total={numberOfTasks}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiaryIndicator;
