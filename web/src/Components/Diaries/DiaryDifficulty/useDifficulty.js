import diaries from "@data/diaries";
import QuestData from "@data/questData.json";
import { useMemo } from "react";
import { useAccounts } from "../../../Context/AccountContext";

const hasSkill = (acct, skill) => acct.skills != null && acct.skills[skill.name]?.level >= skill.level;

const hasQuest = (acct, quest) => acct.quests != null && acct.quests.includes(quest);

const hasRequirementsForQuest = (acct, quest) => {
    const questData = QuestData.quests.find(q => q.name === quest);

    if (questData == null) return false;

    return questData.skills.every(sk => hasSkill(acct, sk))
        && questData.quests.every(rq => hasQuest(acct, rq));
}

const useDifficulty = (regionName, difficultyName) => {
    const region = diaries[regionName.toLowerCase()];

    const difficulty = region[difficultyName.toLowerCase()];

    const { accounts } = useAccounts();

    const tasks = useMemo(() => difficulty.map(task => ({
        ...task,
        quests: task.quests.map(quest => ({
            name: quest,
            players: accounts.map((acct) => ({
                name: acct.name,
                complete: acct.quests?.includes(quest),
                hasRequirements: hasRequirementsForQuest(acct, quest)
            }))
        })),
        skills: Object.keys(task.skills).map(skillName => ({ name: skillName, level: task.skills[skillName] })).map(skill => ({
            ...skill,
            players: accounts.map((acct) => ({
                name: acct.name,
                currentLevel: acct.skills ? acct.skills[skill.name]?.level ?? 1 : 1,
                hasSkill: hasSkill(acct, skill)
            }))
        })),
    })), [accounts]);

    return tasks;
}

export default useDifficulty;
