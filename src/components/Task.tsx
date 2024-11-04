import { TaskProps } from "../types";
import { cn } from "../libs/utils";

import SvgIcon from "./SvgIcon";
import PriorityMark from "./PriorityMark";
import { useDispatch } from "react-redux";
import { deleteTask, finishTask } from "../state/taskListSlice";

export interface TaskItemProps {
  taskItem: TaskProps;
}

function Task({ taskItem }: TaskItemProps) {
  const { text, priority, finished, id, createdAt } = taskItem;
  const dispatch = useDispatch();

  function handleCheck() {
    dispatch(finishTask({ id, finished: !finished }));
  }

  function handleDeleteTask() {
    dispatch(deleteTask({ id }));
  }

  return (
    <div
      className={cn(
        "relative rounded-2xl shadow-primary overflow-hidden w-full transition-[transform,box-shadow] duration-300",
        { "shadow-secondary -translate-y-[1px]": finished }
      )}
    >
      <PriorityMark priority={priority} />
      <div className="flex flex-col gap-x-2 gap-y-4 pl-6 py-3 pr-3">
        <p className="text-lg break-words">{text}</p>
        <div className="flex justify-between items-center min-h-6 gap-x-8">
          <p className="h-full text-xs text-[gray]">{createdAt}</p>
          <div className="text-third flex text-sm shrink-0 gap-4 h-full items-center justify-end">
            {!finished ? (
              <>
                <label className="flex items-center gap-2 cursor-pointer select-none h-full lg:hover:opacity-80 active:!opacity-50 transition-opacity">
                  Завершить
                  <input
                    aria-label="Отметить задание как выполненное"
                    checked={finished}
                    type="checkbox"
                    className="h-6 w-6 cursor-pointer absolute opacity-0"
                    onChange={handleCheck}
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
              </>
            ) : (
              "Задание выполнено"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
