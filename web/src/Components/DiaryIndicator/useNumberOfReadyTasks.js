const useNumberOfReadyTasks = (player, tasks) => {
  if (player == null) return 0;

  const incompleteTasks = tasks.filter(
    ({ description }) => !player.diaries.includes(description)
  );

  const hasRequiredSkills = (task) =>
    Object.keys(task.skills).every((sk) =>
      player.skills != null && player.skills[sk] != undefined
        ? player.skills[sk].level >= task.skills[sk]
        : false
    );

  const hasRequiredQuests = (task) =>
    task.quests.every((q) => player.quests.includes(q));

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
