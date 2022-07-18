import completedQuests from "@data/completedQuests.json";

const useNumberOfReadyTasks = (player, tasks) => {
  if (player == null) return 0;

  const lowerCasePlayerName = player.name.toLowerCase();

  const incompleteTasks = tasks.filter(
    (task) => !task.players.some((p) => p === player.name)
  );

  const hasRequiredSkills = (task) =>
    Object.keys(task.skills).every(
      (sk) => player.skills[sk].level >= task.skills[sk]
    );

  const hasRequiredQuests = (task) =>
    task.quests.every((q) => completedQuests[lowerCasePlayerName]?.includes(q));

  const hasSpecialRequirements = (task) =>
    task.test == null ? true : task.test(player).isMet;

  const result = incompleteTasks.filter(
    (task) =>
      hasRequiredSkills(task) &&
      hasRequiredQuests(task) &&
      hasSpecialRequirements(task)
  );

  return result.length;
};

export default useNumberOfReadyTasks;
