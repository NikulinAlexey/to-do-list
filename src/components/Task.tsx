import { useRef } from "react";
import { cn, formateTime } from "../libs/utils";
import { useDispatch } from "react-redux";
import { ITask } from "../types/taskTypes/ITask";
import {finishTask} from "../state/taskSlice";
import { deleteTask, toggleTask } from "../api/tasksApi";

import Input from "./Input";
import SvgIcon from "./SvgIcon";
import PriorityMark from "./PriorityMark";

interface TaskItemProps {
  taskItem: ITask;
}

function Task({ taskItem }: TaskItemProps) {
  const { text, priority, finished, id, createdAt } = taskItem;
  const formattedTime = formateTime(createdAt);
  const dispatch = useDispatch();
  const taskRef = useRef<HTMLDivElement>(null);

const handleDelete = (taskId: string) => {
  deleteTask(dispatch, taskId);
  console.log('Удаление в Task.tsx')
};
  return (
    <div
      ref={taskRef}
      className={cn(
        "relative bg-primary rounded-2xl grow shadow-active overflow-hidden w-full transition-[transform,visibility,box-shadow,opacity,margin-top] duration-300",
        { "shadow-disabled -translate-y-[1px] opacity-50": finished }
      )}
    >
      <PriorityMark priority={priority} />
      <div className="flex flex-col gap-x-2 gap-y-4 pl-6 py-3 pr-3">
        <p className="text-lg break-words">{text}</p>
        <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center min-h-6 gap-y-1 gap-x-8">
          <p className="h-full text-xs text-[gray]">{formattedTime}</p>
          <div className="text-thirdly w-full flex text-sm shrink-0 gap-4 sm:w-fit h-full items-center justify-end">
            <label className="flex items-center gap-2 cursor-pointer select-none h-full lg:hover:opacity-80 active:!opacity-50 transition-opacity">
              {finished ? "Сделать активным" : "Завершить"}
              <Input
                type="checkbox"
                checked={finished}
                className="h-6 w-6 cursor-pointer"
                aria-label="Отметить задание как выполненное"
                handleChange={() => toggleTask(dispatch, id, !finished )}
              />
            </label>
            <button
              type="button"
              onClick={() => handleDelete(id)}
              aria-label="Удалить задание"
              className="w-6 h-6 lg:hover:opacity-80 active:!opacity-50 transition-opacity"
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
