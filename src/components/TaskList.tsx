import Task from "./Task";

interface TaskListProps {
  tasks: {
    text: string;
    id: number;
    priority: string;
  }[];
}

function TaskList({tasks}: TaskListProps) {
  return (
    <ul className="flex flex-col gap-4">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
