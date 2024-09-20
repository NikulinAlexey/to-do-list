import Task from "./Task";

import { TaskListProps } from "../types";

function TaskList({tasks, deleteTask}: TaskListProps) {
  return (
    <ul className="flex flex-col gap-4">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} deleteTask={deleteTask} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
