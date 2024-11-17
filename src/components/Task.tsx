import { cn } from "../libs/utils";
import { TaskProps } from "../types";
import { useDispatch } from "react-redux";
import { deleteTask, finishTask } from "../state/taskListSlice";

import SvgIcon from "./SvgIcon";
import PriorityMark from "./PriorityMark";
import { useRef } from "react";

export interface TaskItemProps {
  taskItem: TaskProps;
}

function Task({ taskItem }: TaskItemProps) {
  const { text, priority, finished, id, createdAt } = taskItem;
  const dispatch = useDispatch();
  const taskRef = useRef<HTMLDivElement>(null);

  function handleDeleteTask() {
    const taskElement = taskRef.current;

    if (taskElement) {
      const taskHeight = taskElement.offsetHeight;

      taskElement.className =
        "-z-[1] opacity-0 invisible grow pointer-events-none relative bg-first rounded-2xl shadow-primary overflow-hidden w-full transition-[transform,visibility,box-shadow,opacity,margin-top] duration-300";
      taskElement.style.marginTop = `-${taskHeight+24}px`;
      setTimeout(() => dispatch(deleteTask(id)), 300);
    }
  }

  return (
    <div
      ref={taskRef}
      className={cn(
        "relative bg-first rounded-2xl grow shadow-primary overflow-hidden w-full transition-[transform,visibility,box-shadow,opacity,margin-top] duration-300",
        { "shadow-secondary -translate-y-[1px] opacity-50": finished }
      )}
    >
      <PriorityMark priority={priority} />
      <div className="flex flex-col gap-x-2 gap-y-4 pl-6 py-3 pr-3">
        <p className="text-lg break-words">{text}</p>
        <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center min-h-6 gap-y-1 gap-x-8">
          <p className="h-full text-xs text-[gray]">{createdAt}</p>
          <div className="text-third flex text-sm shrink-0 gap-4 h-full items-center justify-end">
            <label className="flex items-center gap-2 cursor-pointer select-none h-full lg:hover:opacity-80 active:!opacity-50 transition-opacity">
              {finished ? "Сделать активным" : "Завершить"}
              <input
                aria-label="Отметить задание как выполненное"
                checked={finished}
                type="checkbox"
                className="h-6 w-6 cursor-pointer"
                onChange={() =>
                  dispatch(finishTask({ id, finished: !finished }))
                }
              />
            </label>
            <button
              type="button"
              className="w-6 h-6 lg:hover:opacity-80 active:!opacity-50 transition-opacity"
              aria-label="Удалить задание"
              onClick={handleDeleteTask}
            >
              <SvgIcon name="trash" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
