import Task from "./Task";
import { TaskProps } from "../types";

interface TaskListProps {
  tasks: TaskProps[];
}

function TaskList({ tasks }: TaskListProps) {

  return (
    <ul className="flex flex-col-reverse gap-4 w-full">
      {tasks ? (
        tasks.map((task) => (
          <li key={task.id} className="w-full">
            <Task taskItem={task} />
          </li>
        ))
      ) : (
        <div className="">Список пуст</div>
      )}
    </ul>
  );
}

export default TaskList;
