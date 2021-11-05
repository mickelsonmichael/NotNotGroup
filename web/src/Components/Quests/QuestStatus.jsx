import React from "react";
import { CheckOutlined, CancelOutlined, ErrorOutlineOutlined } from "@mui/icons-material";
import { Chip } from "@mui/material"

const YesIcon = () => (<CheckOutlined sx={{ color: "#33DD66", marginLeft: "5px", marginRight: "-6px" }} />);
const NoIcon = () => (<CancelOutlined sx={{ color: "#DD3366", marginLeft: "5px", marginRight: "-6px" }} />);
const WarnIcon = () => (<ErrorOutlineOutlined sx={{ color: "#DDDD66", marginLeft: "5px", marginRight: "-6px" }} />);

const QuestStatus = ({ quest, player }) => (
    <Chip
        icon={
            player != null && player.quests.includes(quest.name)
                ? <YesIcon />
                : (
                    player != null && quest.skills.every(skill => player.skills[skill.name].level >= skill.level)
                        ? <WarnIcon />
                        : <NoIcon />
                )
        }
        label={player?.name}
        sx={{ marginRight: "5px" }}
        size="small"
    />
);

export default QuestStatus;
