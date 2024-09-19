import PriorityMark from "./PriorityMark";
import TrashIcon from "./TrashIcon";

interface TaskProps {
  task: {
    priority: string;
    text: string;
    id: number;
    finished: boolean;
    createdAt: {
      minutes: number;
      hours: number;
      seconds: number;
      dayOfWeek: string;
      month: string;
      year: number;
      dayOfMonth: number;
    };
  };
  deleteTask: (id: number) => void;
}
function Task({ task, deleteTask }: TaskProps) {
  // const time = useGetTime();
  // const { dayOfMonth, monthOfYear } = time;

  const { text, priority, id, createdAt } = task;
  const { minutes, hours, seconds, dayOfWeek, month, year, dayOfMonth } = createdAt;

  return (
    <div className="relative rounded-2xl shadow-primary overflow-hidden ">
      <PriorityMark priority={priority} />
      <div className="flex justify-between items-center pl-6 py-3 pr-3">
        <div className="flex flex-col gap-y-2 grow">
          <div className="text-lg">{text}</div>
          <div className="text-xs text-[gray]">
            {`${dayOfMonth} ${month} ${year}, ${dayOfWeek}, ${hours}:${minutes}:${seconds}`}
          </div>
        </div>
        <div className="flex gap-4 items-center ml-4">
          <input type="checkbox" className="h-6 w-6" />
          <button
            type="button"
            className=""
            aria-label="Удалить задание"
            onClick={() => deleteTask(id)}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
