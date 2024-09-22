import { TaskProps } from "../types";
import { useState, ChangeEvent } from "react";

import TrashIcon from "./TrashIcon";
import PriorityMark from "./PriorityMark";

export interface TaskItemProps {
  taskItem: TaskProps;
  finishTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

function Task({ deleteTask, finishTask, taskItem }: TaskItemProps) {
  const [checked, setChecked] = useState(false);
  const { text, priority, finished, id, createdAt } = taskItem;
  const { minutes, hours, seconds, dayOfWeek, month, year, dayOfMonth } =
    createdAt;

  function handleCheck(e: ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
    finishTask(id);
  }

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
          {!finished ? (
            <>
              <input
                checked={checked}
                type="checkbox"
                className="h-6 w-6"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheck(e)}
              />
              <button
                type="button"
                className=""
                aria-label="Удалить задание"
                onClick={() => deleteTask(id)}
              >
                <TrashIcon />
              </button>
            </>
          ) : (
            "Задание выполнено"
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
