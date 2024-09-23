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
    <div className="relative rounded-2xl shadow-primary overflow-hidden w-full">
      <PriorityMark priority={priority} />
      <div className="flex justify-between items-center pl-6 py-3 pr-3">
        <div className="flex flex-col gap-y-2 grow max-w-[calc(100%-100%/6-16px)]">
          <div className="text-lg break-words">{text}</div>
          <div className="text-xs text-[gray]">
            {`${dayOfMonth} ${month} ${year}, ${dayOfWeek}, ${hours}:${minutes}:${seconds}`}
          </div>
        </div>
        <div className="flex gap-4 items-center pl-4 justify-end">
          {!finished ? (
            <>
              <input
                aria-label="Отметить задание как выполненное"
                checked={checked}
                type="checkbox"
                className="relative h-6 w-6 after:absolute after:inset-[-6px]"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheck(e)}
              />
              <button
                type="button"
                className="relative after:absolute after:inset-[-2px]"
                aria-label="Удалить задание"
                onClick={() => deleteTask(id)}
              >
                <TrashIcon />
              </button>
            </>
          ) : (
            <div className="">Задание выполнено</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
