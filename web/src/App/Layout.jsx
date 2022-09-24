import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Navigation from "@components/Navigation";
import HomePage from "../Pages/HomePage";
import QuestPage from "../Pages/QuestPage";
import TreasureTrailsPage from "../Pages/TreasureTrailsPage";
import AnagramHelperPage from "../Pages/AnagramHelperPage";
import DiariesPage from "../Pages/DiariesPage";
import SkillBossPage from "../Pages/SkillBossPage";
import MemoriesPage from "../Pages/MemoriesPage";

const Layout = () => (
  <Box
    backgroundColor="primary.main"
    sx={{
      height: "100%",
      overflowY: "auto",
      maxHeight: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Navigation />

    <Box sx={{ padding: "1rem", flexGrow: 1 }}>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/skill-bosses/*" element={<SkillBossPage />} />
        <Route path="/quests" element={<QuestPage />} />
        <Route
          path="/treasure-trails/anagrams"
          element={<AnagramHelperPage />}
        />
        <Route path="/treasure-trails" element={<TreasureTrailsPage />} />
        <Route path="/diaries/*" element={<DiariesPage />} />
        <Route path="/memories" element={<MemoriesPage />} />
        <Route path="">Page Not Found</Route>
      </Routes>
    </Box>
  </Box>
);

export default Layout;
