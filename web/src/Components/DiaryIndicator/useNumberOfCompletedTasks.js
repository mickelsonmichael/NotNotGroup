const useNumberOfCompletedTasks = (player, tasks) =>
  tasks.filter((task) => player?.diaries.includes(task.description)).length;

export default useNumberOfCompletedTasks;
