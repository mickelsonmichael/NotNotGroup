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
    id: 72,
  },
  {
    path: "guardians-of-the-rift",
    bossName: "Guardians of the Rift",
    primarySkill: "Runecraft",
    secondarySkills: ["Crafting", "Mining"],
    id: 16,
  },
  {
    path: "tempoross",
    bossName: "Tempoross",
    primarySkill: "Fishing",
    secondarySkills: ["Construction", "Cooking"],
    id: 56,
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
