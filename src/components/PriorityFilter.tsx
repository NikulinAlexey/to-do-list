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
    <ul className="flex flex-wrap gap-x-2 items-center justify-center">
      <li>
        <button
          id="all-priorities"
          aria-label="Все задания"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-thirdly lg:transition-colors lg:active:!border-thirdly",
            {
              "border-b-secondary": activeBtn === "all-priorities",
            }
          )}
        >
          <PriorityMark className="static rounded-sm w-8 h-4" aria-hidden />
        </button>
      </li>
      <li>
        <button
          id="normal"
          aria-label="Задания с обычным приоритетом"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-thirdly lg:transition-colors lg:active:!border-thirdly",
            {
              "border-b-secondary": activeBtn === "normal",
            }
          )}
        >
          <PriorityMark
            aria-hidden
            priority="normal"
            className="static rounded-sm w-8 h-4"
          />
        </button>
      </li>
      <li>
        <button
          id="medium"
          aria-label="Задания со средним приоритетом"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-thirdly lg:transition-colors lg:active:!border-thirdly",
            {
              "border-b-secondary": activeBtn === "medium",
            }
          )}
        >
          <PriorityMark
            aria-hidden
            priority="medium"
            className="static rounded-sm w-8 h-4"
          />
        </button>
      </li>
      <li>
        <button
          id="high"
          aria-label="Задания с высоким приоритетом"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-thirdly lg:transition-colors lg:active:!border-thirdly",
            {
              "border-b-secondary": activeBtn === "high",
            }
          )}
        >
          <PriorityMark priority="high" className="static rounded-sm w-8 h-4" />
        </button>
      </li>
    </ul>
  );
}

export default PriorityFilter;
