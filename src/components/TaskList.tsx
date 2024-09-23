import Task from "./Task";
import { TaskListProps } from "../types";

function TaskList({ tasks, deleteTask, finishTask }: TaskListProps) {
  return (
    <ul className="flex flex-col gap-4 w-full">
      {tasks.length !== 0 ? (tasks.map((task) => (
        <li key={task.id} className="w-full">
          <Task
            taskItem={task}
            deleteTask={deleteTask}
            finishTask={finishTask}
          />
        </li>
      ))) : (
          <div className="">Список пуст</div>
      )}
    </ul>
  );
}

export default TaskList;
