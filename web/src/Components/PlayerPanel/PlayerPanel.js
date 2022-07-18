import React, { useState } from "react";
import { usePlayer } from "../../Context/AccountContext";

import NameHeader from "@components/NameHeader";
import HiScoresTable from "@components/HiScoresTable";
import DiariesTable from "@components/DiariesTable";

import "./PlayerPanel.css";
import DiaryIndicator from "../DiaryIndicator";
import DiaryPanel from "../DiaryPanel";

const PlayerPanel = ({ playerName }) => {
  const player = usePlayer(playerName);

  const [tab, setTab] = useState("stats");

  return (
    <div className="player-panel">
      <NameHeader name={playerName} />

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
        <HiScoresTable skills={player?.skills} overall={player?.Overall} />
      )}
      {tab === "diaries" && (
        <DiaryPanel player={player} />
      )}
    </div>
  );
};

export default PlayerPanel;
