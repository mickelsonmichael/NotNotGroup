const useNumberOfCompletedTasks = (player, tasks) => {
  if (player == null) return 0;

  return tasks.filter((task) => player.diaries.includes(task.description)).length;
};

export default useNumberOfCompletedTasks;
