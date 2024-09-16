import useGetTime from "../hooks/useGetTime";
import Priority from "./Priority";

interface TaskProps {
  task: {
    priority: string;
    text: string;
    id: number;
  };
}
function Task({ task }: TaskProps) {
  const time = useGetTime();
  const { dayOfMonth, monthOfYear } = time;

  const { text, priority } = task;

  return (
    <div className="p-4 flex justify-between items-center rounded-2xl shadow-task-active">
      <Priority priority={priority} />
      <div>{`День ${dayOfMonth}, месяц ${monthOfYear}, `}</div>
      <div>{text}</div>
      <input type="checkbox" />
      <button type="button">Удалить</button>
    </div>
  );
}

export default Task;
