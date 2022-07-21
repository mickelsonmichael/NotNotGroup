import React from "react";
import NoIcon from "../NoIcon";
import YesIcon from "../YesIcon";
import WarnIcon from "../WarnIcon";

const DiaryStatusIcon = ({ player, diary, mr }) =>
  player != null && player.diaries.includes(diary.description) ? (
    <YesIcon mr={mr} />
  ) : player != null &&
    Object.keys(diary.skills).every(
      (skillName) => (player.skills[skillName]?.level ?? 0) >= diary[skillName]
    ) &&
    diary.quests.every((q) => player.quests.includes(q)) ? (
    <WarnIcon mr={mr} />
  ) : (
    <NoIcon mr={mr} />
  );

export default DiaryStatusIcon;
