import React from "react";
import { Box } from "@mui/material";

import { useAccounts } from "../../Context/AccountContext";
import HiScoresTable from "../HiScoresTable";
import NameHeader from "../NameHeader";

const wrapperStyle = {
  borderColor: "text.primary",
  textAlign: "center",
};

const Home = () => {
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
        <Box padding={1}>
          <NameHeader name={account.name} />
          <Box sx={wrapperStyle}>
            <HiScoresTable
              skills={account?.skills}
              overall={account?.Overall}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Home;
