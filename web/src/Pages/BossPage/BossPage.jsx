import React from "react";
import { Routes, Route } from "react-router-dom";
import BossTracker from "../../Components/BossTracker";
import BossList from "./BossList";

const BossPage = () => {
  return (
    <Routes>
      <Route
        path="wintertodt"
        element={
          <BossTracker
            bossName="Wintertodt"
            primarySkill="Firemaking"
            secondarySkills={["Fletching", "Construction"]}
            hiScoresName="Wintertodt"
          />
        }
      />

      <Route
        path="guardians-of-the-rift"
        element={
          <BossTracker
            bossName="Guardians of the Rift"
            primarySkill="Runecraft"
            secondarySkills={["Crafting", "Mining"]}
            hiScoresName="RiftsClosed"
          />
        }
      />
      <Route path="" element={<BossList />} />
    </Routes>
  );
};

export default BossPage;
