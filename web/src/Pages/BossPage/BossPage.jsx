import React from "react";
import { Routes, Route } from "react-router-dom";
import BossTracker from "../../Components/BossTracker";
import BossList from "./BossList";

const bosses = [
  {
    path: "wintertodt",
    bossName: "Wintertodt",
    primarySkill: "Firemaking",
    secondarySkills: ["Fletching", "Construction"],
    hiScoresName: "Wintertodt",
  },
  {
    path: "guardians-of-the-rift",
    bossName: "Guardians of the Rift",
    primarySkill: "Runecraft",
    secondarySkills: ["Crafting", "Mining"],
    hiScoresName: "RiftsClosed",
  },
  {
    path: "tempoross",
    bossName: "Tempoross",
    primarySkill: "Fishing",
    secondarySkills: ["Construction", "Cooking"],
    hiScoresName: "Tempoross",
  },
];

const BossPage = () => {
  return (
    <Routes>
      {bosses.map(({ path, ...boss }) => (
        <Route key={path} path={path} element={<BossTracker {...boss} />} />
      ))}

      <Route path="" element={<BossList />} />
    </Routes>
  );
};

export default BossPage;
