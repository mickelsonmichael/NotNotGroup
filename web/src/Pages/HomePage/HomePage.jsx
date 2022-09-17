import React from "react";
import { Box } from "@mui/material";

import PlayerPanel from "../../Components/PlayerPanel/PlayerPanel";
import { useAccounts } from "../../Context/AccountContext";

const HomePage = () => {
  const { accounts } = useAccounts();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {accounts.map((account) => (
        <Box padding={1} key={account.name}>
          <PlayerPanel player={account} />
        </Box>
      ))}
    </Box>
  );
};

export default HomePage;
