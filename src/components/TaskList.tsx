import Task from "./Task";

interface TaskListProps {
  tasks: {
    text: string;
    id: number;
    priority: string;
  }[];
  deleteTask: (id:number) => void;
}

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
