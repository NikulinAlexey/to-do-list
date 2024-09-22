"use client";

import { useState } from "react";

import { cn } from "../libs/utils";
import { FilterProps } from "../types";
import PriorityMark from "./PriorityMark";

function Filter({ onFilter }: FilterProps) {
  const [activeBtn, setActiveBtn] = useState<string>("all");

  function setActiveTab(tag: string, event: React.MouseEvent<HTMLElement>) {
    setActiveBtn(event.currentTarget.id)
    onFilter(tag);
  }

  return (
    <ul className="flex gap-4 justify-center px-4 mb-8">
      <li className="flex items-center justify-center ">
        <button
          id="all"
          onClick={(event) => setActiveTab(event.currentTarget.id, event)}
          type="button"
          className={cn("p-2 border-b-transparent border-b-2 rounded-tl-md rounded-tr-md h-full", {
            "text-[red] border-b-second": activeBtn === "all",

          })}
        >
          Все
        </button>
      </li>
      <li className="flex items-center justify-center ">
        <button
          id="active"
          onClick={(event) => setActiveTab(event.currentTarget.id, event)}
          type="button"
          className={cn("p-2 border-b-transparent border-b-2 rounded-tl-md rounded-tr-md h-full", {
            "text-[red] border-b-second": activeBtn === "active",

          })}
        >
          Активные
        </button>
      </li>
      <li className="flex items-center justify-center ">
        <button
          id="finished"
          onClick={(event) => setActiveTab(event.currentTarget.id, event)}
          type="button"
          className={cn("p-2 border-b-transparent border-b-2 rounded-tl-md rounded-tr-md h-full", {
            "text-[red] border-b-second": activeBtn === "finished",

          })}
        >
          Завершенные
        </button>
      </li>
      <li className="flex items-center justify-center ">
        <button
          id="normal"
          onClick={(event) => setActiveTab(event.currentTarget.id, event)}
          type="button"
          className={cn("p-2 border-b-transparent border-b-2 rounded-tl-md rounded-tr-md h-full", {
            "text-[red] border-b-second": activeBtn === "normal",

          })}
        >
          <PriorityMark priority="normal" className="static rounded-full w-4 h-4" />
        </button>
      </li>
      <li className="flex items-center justify-center ">
        <button
          id="medium"
          onClick={(event) => setActiveTab(event.currentTarget.id, event)}
          type="button"
          className={cn("p-2 border-b-transparent border-b-2 rounded-tl-md rounded-tr-md h-full", {
            "text-[red] border-b-second": activeBtn === "medium",

          })}
        >
          <PriorityMark priority="medium" className="static rounded-full w-4 h-4" />
        </button>
      </li>
      <li className="flex items-center justify-center ">
        <button
          id="high"
          onClick={(event) => setActiveTab(event.currentTarget.id, event)}
          type="button"
          className={cn("p-2 border-b-transparent border-b-2 rounded-tl-md rounded-tr-md h-full", {
            "text-[red] border-b-second": activeBtn === "high",

          })}
        >
          <PriorityMark priority="high" className="static rounded-full w-4 h-4" />
        </button>
      </li>
    </ul>
  );
}

export default Filter;
