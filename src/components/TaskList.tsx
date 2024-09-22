import Task from "./Task";
import { TaskListProps } from "../types";

function TaskList({ tasks, deleteTask, finishTask }: TaskListProps) {
  return (
    <ul className="flex flex-col gap-4">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            taskItem={task}
            deleteTask={deleteTask}
            finishTask={finishTask}
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
