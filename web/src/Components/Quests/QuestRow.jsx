import React from "react";
import { Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, AccordionDetails, styled } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CheckOutlined, CancelOutlined, ErrorOutlineOutlined } from "@mui/icons-material";

const Accordion = styled((props) => (
    <MuiAccordion {...props} />
))(() => ({
    backgroundColor: "#222255"
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />
))(() => ({
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: "white"
    }
}))

const List = ({ children }) => (
    <ul style={{ listStyle: "none" }}>{children}</ul>
);

const ListItem = ({ children }) => (
    <li style={{ display: "flex", alignItems: "center" }}>{children}</li>
);

const YesIcon = () => (<CheckOutlined sx={{ marginRight: "0.5rem", color: "#33DD66" }} />);
const NoIcon = () => (<CancelOutlined sx={{ marginRight: "0.5rem", color: "#DD3366" }} />);
const WarnIcon = () => (<ErrorOutlineOutlined sx={{ marginRight: "1rem", color: "#DDDD66" }} />);

const QuestStatus = ({ quest, player }) => (
    player != null && player.quests.includes(quest.name)
        ? <YesIcon />
        : (
            player != null && quest.skills.every(skill => player.skills[skill.name].level >= skill.level)
                ? <WarnIcon />
                : <NoIcon />
        )
);

const QuestList = ({ quests, player }) => (
    quests.map(questName => (
        <ListItem key={questName}>
            {
                player != null && player.quests.includes(questName)
                    ? <YesIcon />
                    : <NoIcon />
            }
            {questName}
        </ListItem>
    ))
);

const SkillList = ({ skills, player }) => (
    skills.map(skill => (
        <ListItem key={skill.name}>
            {
                player != null && skill.level <= player.skills[skill.name].level
                    ? <YesIcon />
                    : <NoIcon />
            }<span>{skill.level} {skill.name}</span>
        </ListItem>
    ))
);

const QuestRow = ({ quest, player }) => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ display: "flex", flexDirection: "row", paddingX: "1rem" }}>
            <QuestStatus quest={quest} player={player} />
            <strong>{quest.name}</strong>
        </AccordionSummary>
        <AccordionDetails>
            <div>"{quest.description}"</div>
            {
                quest.notes && (
                    <ul>
                        {quest.notes.map(n => (<li>{n}</li>))}
                    </ul>
                )
            }
            <List>
                <QuestList quests={quest.quests} player={player} />
                <SkillList skills={quest.skills} player={player} />
            </List>
        </AccordionDetails>
    </Accordion>
);

export default QuestRow;
