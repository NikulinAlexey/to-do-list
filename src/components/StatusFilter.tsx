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
    <ul className="flex flex-wrap items-center gap-x-2 justify-center">
      <li>
        <button
          id="all"
          aria-label="Все задания"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 font-semibold border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-thirdly lg:transition-colors lg:active:!border-thirdly",
            {
              "border-b-secondary": activeBtn === "all",
            }
          )}
        >
          Все
        </button>
      </li>
      <li>
        <button
          id="active"
          aria-label="Активные задания"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 font-semibold border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-thirdly lg:transition-colors lg:active:!border-thirdly",
            {
              "border-b-secondary": activeBtn === "active",
            }
          )}
        >
          Активные
        </button>
      </li>
      <li>
        <button
          id="finished"
          aria-label="Завершенные задания"
          onClick={(event) => setActiveTab(event.currentTarget.id)}
          type="button"
          className={cn(
            "p-2 font-semibold border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-thirdly lg:transition-colors lg:active:!border-thirdly",
            {
              "border-b-secondary": activeBtn === "finished",
            }
          )}
        >
          Завершенные
        </button>
      </li>
    </ul>
  );
}

export default StatusFilter;
