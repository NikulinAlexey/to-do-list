"use client";

import { useState } from "react";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";

import { cn } from "../libs/utils";
import { FilterProps } from "../types";
import PriorityMark from "./PriorityMark";

function PriorityFilter({ onFilter }: FilterProps) {
  const tasks = useSelector((state: RootState) => state.tasks);
  const statusTag = useSelector((state: RootState) => state.statusTag);
  const priorityTag = useSelector((state: RootState) => state.priorityTag);
  const [activeBtn, setActiveBtn] = useState(priorityTag);

  function setActiveTab(tag: string) {
    setActiveBtn(tag);
    onFilter(tasks, statusTag, tag);
  }

  return (
    <div className="flex flex-col flex-wrap gap-y-1 gap-x-4 justify-center px-4">
      <div className="flex gap-x-2 items-center justify-center ">
        <button
          id="all-priorities"
          aria-label="Все задания"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-third lg:transition-colors lg:active:!border-third",
            {
              "border-b-second": activeBtn === "all-priorities",
            }
          )}
        >
          <PriorityMark className="static rounded-sm w-8 h-4" />
        </button>
        <button
          id="normal"
          aria-label="Задания с обычным приоритетом"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-third lg:transition-colors lg:active:!border-third",
            {
              "border-b-second": activeBtn === "normal",
            }
          )}
        >
          <PriorityMark
            priority="normal"
            className="static rounded-sm w-8 h-4"
          />
        </button>
        <button
          id="medium"
          aria-label="Задания со средним приоритетом"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-third lg:transition-colors lg:active:!border-third",
            {
              "border-b-second": activeBtn === "medium",
            }
          )}
        >
          <PriorityMark
            priority="medium"
            className="static rounded-sm w-8 h-4"
          />
        </button>
        <button
          id="high"
          aria-label="Задания с высоким приоритетом"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-third lg:transition-colors lg:active:!border-third",
            {
              "border-b-second": activeBtn === "high",
            }
          )}
        >
          <PriorityMark priority="high" className="static rounded-sm w-8 h-4" />
        </button>
      </div>
    </div>
  );
}

export default PriorityFilter;
