import React from "react";
import { Table, TableBody, TableRow, TableCell, Box } from "@mui/material";

import YesIcon from "@common/YesIcon";
import NoIcon from "@common/NoIcon";

const QuestList = ({ quests, players }) =>
  quests.map((questName) => (
    <TableRow key={questName}>
      <TableCell>{questName}</TableCell>
      {players.map((player) => (
        <TableCell
          key={player.name}
          style={{ textAlign: "center" }}
          width="15%"
        >
          <Box display="flex" alignItems="center">
            {player.quests.includes(questName) ? (
              <YesIcon mr="0.25rem" />
            ) : (
              <NoIcon mr="0.25rem" />
            )}
            {player.name}
          </Box>
        </TableCell>
      ))}
    </TableRow>
  ));

const SkillList = ({ skills, players }) =>
  Object.keys(skills).map((skill) => (
    <TableRow key={skill}>
      <TableCell>
        {skills[skill]} {skill}
      </TableCell>
      {players.map((player) => (
        <TableCell
          key={player.name}
          style={{ textAlign: "center" }}
          width="15%"
        >
          <Box display="flex" alignItems="center">
            {skills[skill] <= player.skills[skill]?.level ? (
              <YesIcon mr="0.25rem" />
            ) : (
              <NoIcon mr="0.25rem" />
            )}
            {player.name}
          </Box>
        </TableCell>
      ))}
    </TableRow>
  ));

const DiaryRequirements = ({ task, players }) => (
  <>
    {Object.keys(task.skills).length > 0 || task.quests.length > 0 ? (
      <Table>
        <TableBody>
          <QuestList quests={task.quests} players={players} />
          <SkillList skills={task.skills} players={players} />
        </TableBody>
      </Table>
    ) : (
      <Box textAlign="center" padding="1rem">
        There are no requirements
      </Box>
    )}
  </>
);

export default DiaryRequirements;
