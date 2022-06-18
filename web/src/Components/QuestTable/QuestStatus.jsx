import React from "react";
import { CheckOutlined, CancelOutlined, ErrorOutlineOutlined } from "@mui/icons-material";

const YesIcon = () => (<CheckOutlined sx={{ color: "#33DD66" }} />);
const NoIcon = () => (<CancelOutlined sx={{ color: "#DD3366" }} />);
const WarnIcon = () => (<ErrorOutlineOutlined sx={{ color: "#DDDD66" }} />);

const QuestStatus = ({ quest, player }) => (
    player != null && player.quests.includes(quest.name)
        ? <YesIcon />
        : (
            player != null && quest.skills.every(skill => player.skills[skill.name].level >= skill.level)
                ? <WarnIcon />
                : <NoIcon />
        )
);

export default QuestStatus;
