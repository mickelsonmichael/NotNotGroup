import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import useDifficulty from "./useDifficulty";
import { useAccounts } from "../../../Context/AccountContext";
import YesIcon from "@common/YesIcon";
import NoIcon from "@common/NoIcon";
import WarnIcon from "@common/WarnIcon";
import { Box } from "@mui/system";

const backgroundDark = "rgba(0, 0, 0, 0.15)";

const DiaryDifficulty = ({ region, difficulty }) => {
  const tasks = useDifficulty(region, difficulty);
  const { accounts } = useAccounts();

  return (
    <Box border="1px solid white" borderRadius="4px" paddingTop={2} marginY={4} backgroundColor={backgroundDark}>
      <Typography
        sx={{
          typography: { xs: "h4", sm: "h3" },
          textTransform: "capitalize",
        }}
        textAlign="center"
        marginBottom={2}
      >
        {difficulty}
      </Typography>

      <Box sx={{ overflowX: "auto", maxWidth: "100%" }}>
        <Table style={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell />
              {accounts.map((p) => (
                <TableCell key={p.name} sx={{ textAlign: "center" }}>
                  {p.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {tasks.map((task) => (
              <React.Fragment key={task.description}>
                <TableRow sx={{ backgroundColor: backgroundDark }}>
                  <TableCell colSpan={42}>
                    <Typography>{task.description}</Typography>
                  </TableCell>
                </TableRow>
                {task.quests.map((quest) => (
                  <TableRow key={`${task.description}-${quest.name}`}>
                    <TableCell>{quest.name}</TableCell>
                    {quest.players.map((player) => (
                      <TableCell
                        key={`${task.description}-${quest.name}-${player.name}`}
                        sx={{ textAlign: "center" }}
                      >
                        {player.complete ? (
                          <YesIcon />
                        ) : player.hasRequirements ? (
                          <WarnIcon />
                        ) : (
                          <NoIcon />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                {task.skills.map((skill) => (
                  <TableRow key={`${task.description}-${skill.name}`}>
                    <TableCell>
                      {skill.level} {skill.name}
                    </TableCell>
                    {skill.players.map((player) => (
                      <TableCell
                        key={`${task.description}-${skill.name}-${player.name}`}
                        sx={{ textAlign: "center" }}
                      >
                        {player.hasSkill ? <YesIcon /> : <NoIcon />}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default DiaryDifficulty;
