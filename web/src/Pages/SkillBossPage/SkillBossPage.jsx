import React from "react";
import { Routes, Route } from "react-router-dom";
import SkillBossTracker from "../../Components/SkillBossTracker";
import SkillBossList from "./SkillBossList";

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

const SkillBossPage = () => {
  return (
    <Routes>
      {bosses.map(({ path, ...boss }) => (
        <Route key={path} path={path} element={<SkillBossTracker {...boss} />} />
      ))}

      <Route path="" element={<SkillBossList />} />
    </Routes>
  );
};

export default SkillBossPage;
