import React from "react";
import { Typography } from "@mui/material";

import TaskRow from "./TaskRow";
import "./DiariesTable.css";

const DiariesTable = ({ player }) => (
  <div className="diaries-table">
    {Object.keys(difficulties).map((diffKey) => (
      <div key={diffKey} className="diary-difficulty">
        <Typography
          sx={{
            typography: { xs: "h4", sm: "h3" },
            textTransform: "capitalize",
          }}
          textAlign="center"
        >
          {diffKey}
        </Typography>
        <div className="diary-difficulty__tasks">
          {difficulties[diffKey].map((task) => (
            <TaskRow key={task.description} player={player} task={task} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default DiariesTable;
