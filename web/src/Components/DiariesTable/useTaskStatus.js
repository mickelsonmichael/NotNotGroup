import { useQuests } from "../../Context/AccountContext";

const useTaskStatus = (task, player) => {
  if (player == null)
    return {
      complete: false,
      hasQuests: false,
      hasSkills: false,
      hasRequirements: false,
      special: null,
      hasQuest: () => false,
      hasSkill: () => false
    };

  const isComplete = task.players.includes(player.name);
    const hasRequirements =
      task.quests.length > 0 || Object.keys(task.skills).length > 0 || task.test;

  if (isComplete)
    return {
      complete: true,
      hasQuests: true,
      hasSkills: true,
      hasRequirements,
      special: null,
      hasQuest: () => true,
      hasSkill: () => true,
    };


    const hasQuest =  q => player.quests.includes(q);
    const hasSkill = sk => player.skills[sk].level >= task.skills[sk];
    
  return {
    isComplete: false,
    hasRequirements,
    hasQuests: task.quests.every(hasQuest),
    hasQuest,
    hasSkills: Object.keys(task.skills).every(hasSkill),
    hasSkill,
    special: task.test != null && player != null ? task.test(player) : null,
  };
};

export default useTaskStatus;
