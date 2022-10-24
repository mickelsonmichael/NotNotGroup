import React from "react";
import {YesIcon, WarnIcon, NoIcon } from "@common/Icons";

const playerLevelExceedsRequirement = (skill) => skill.playerLevel >= skill.requiredLevel;

const DiaryStatusIcon = ({ player, diary, mr }) => {
  // Complete
  if (player != null && player.diaries.includes(diary.description)) {
    return <YesIcon mr={mr} />;
  }

  const hasEverySkill = Object.keys(diary.skills)
    .filter((skillName) => diary.skills[skillName] !== undefined)
    .map((skillName) => ({
      skillName,
      playerLevel: Number(player.skills[skillName]?.level ?? 0),
      requiredLevel: Number(diary.skills[skillName]),
    }))
    .every(playerLevelExceedsRequirement);

  const hasEveryQuest = diary.quests.every((q) => player.quests.includes(q));

  // Has Requirements
  if (hasEverySkill && hasEveryQuest) {
    return <WarnIcon mr={mr} />;
  }

  // Has missing requirements
  return <NoIcon mr={mr} />;
};

export default DiaryStatusIcon;
