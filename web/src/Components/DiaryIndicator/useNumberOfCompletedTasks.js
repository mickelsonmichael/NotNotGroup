const useNumberOfCompletedTasks = (player, tasks) => {
  if (player == null) return 0;

  return tasks.filter((task) => task.players.includes(player.name)).length;
};

export default useNumberOfCompletedTasks;
