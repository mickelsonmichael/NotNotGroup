import React from "react";
import { TableRow, TableCell, Box } from "@mui/material";

import { YesIcon, NoIcon } from "@common/Icons";

const backgroundColor = "rgba(0, 0, 0, 0.1)";

const QuestList = ({ quests, players }) =>
  quests.map((questName) => (
    <TableRow key={questName} sx={{ backgroundColor: backgroundColor }}>
      <TableCell colSpan={3}>{questName}</TableCell>
      {players.map((player) => (
        <TableCell key={player.name} style={{ textAlign: "center" }}>
          {player.quests.includes(questName) ? <YesIcon /> : <NoIcon />}
        </TableCell>
      ))}
    </TableRow>
  ));

const SkillList = ({ skills, players }) =>
  Object.keys(skills).map((skill) => (
    <TableRow key={skill} sx={{ backgroundColor: backgroundColor }}>
      <TableCell colSpan={3}>
        {skills[skill]} {skill}
      </TableCell>
      {players.map((player) => (
        <TableCell key={player.name} style={{ textAlign: "center" }}>
          {skills[skill] <= player.skills[skill]?.level ? (
            <YesIcon />
          ) : (
            <NoIcon />
          )}
        </TableCell>
      ))}
    </TableRow>
  ));

const DiaryRequirements = ({ task, players }) => (
  <>
    {Object.keys(task.skills).length > 0 || task.quests.length > 0 ? (
      <>
        <QuestList quests={task.quests} players={players} />
        <SkillList skills={task.skills} players={players} />
      </>
    ) : (
      <TableRow sx={{ backgroundColor: backgroundColor }}>
        <TableCell colSpan={420}>
          <Box textAlign="center" padding="1rem">
            There are no requirements
          </Box>
        </TableCell>
      </TableRow>
    )}
  </>
);

export default DiaryRequirements;
