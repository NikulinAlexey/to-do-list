"use client";

import { useState } from "react";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";

import { cn } from "../libs/utils";
import { FilterProps } from "../types";

function StatusFilter({ onFilter }: FilterProps) {
  const tasks = useSelector((state: RootState) => state.tasks);
  const statusTag = useSelector((state: RootState) => state.statusTag);
  const priorityTag = useSelector((state: RootState) => state.priorityTag);
  const [activeBtn, setActiveBtn] = useState(statusTag);

  function setActiveTab(tag: string) {
    setActiveBtn(tag);
    onFilter(tasks, tag, priorityTag);
  }

  return (
    <div className="flex flex-col flex-wrap gap-y-1 gap-x-4 justify-center px-4">
      <div className="flex items-center gap-x-2 justify-center">
        <button
          id="all"
          aria-label="Все задания"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 font-semibold border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-third lg:transition-colors lg:active:!border-third",
            {
              "border-b-second": activeBtn === "all",
            }
          )}
        >
          Все
        </button>
        <button
          id="active"
          aria-label="Активные задания"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 font-semibold border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-third lg:transition-colors lg:active:!border-third",
            {
              "border-b-second": activeBtn === "active",
            }
          )}
        >
          Активные
        </button>
        <button
          id="finished"
          aria-label="Завершенные задания"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 font-semibold border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-third lg:transition-colors lg:active:!border-third",
            {
              "border-b-second": activeBtn === "finished",
            }
          )}
        >
          Завершенные
        </button>
      </div>
    </div>
  );
}

export default StatusFilter;
