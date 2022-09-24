import React, { useState } from "react";

import NameHeader from "@components/NameHeader";
import HiScoresTable from "@components/HiScoresTable";

import "./PlayerPanel.css";
import DiaryPanel from "../DiaryPanel";

const PlayerPanel = ({ player }) => {
  const [tab, setTab] = useState("stats");

  return (
    <div className="player-panel">
      <NameHeader
        name={player.name}
        loading={player.isLoading || player.isRefetching}
        color={player.color}
      />

      <ul className="player-panel__tab">
        <li
          onClick={() => setTab("stats")}
          className={
            "player-panel__tab-btn" + (tab === "stats" ? " active" : "")
          }
        >
          Stats
        </li>
        <li
          onClick={() => setTab("diaries")}
          className={
            "player-panel__tab-btn" + (tab === "diaries" ? " active" : "")
          }
        >
          Diaries
        </li>
      </ul>

      {tab === "stats" && (
        <HiScoresTable
          skills={player?.skills}
          overall={player?.Overall}
          combatLevel={player?.combatLevel ?? 3}
        />
      )}
      {tab === "diaries" && <DiaryPanel player={player} />}
    </div>
  );
};

export default PlayerPanel;
