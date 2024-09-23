"use client";

import { useState } from "react";

import { cn } from "../libs/utils";
import { FilterProps } from "../types";
import PriorityMark from "./PriorityMark";

function Filter({ onFilter }: FilterProps) {
  const [activeBtn, setActiveBtn] = useState<string>("all");

  function setActiveTab(tag: string, event: React.MouseEvent<HTMLElement>) {
    setActiveBtn(event.currentTarget.id);
    onFilter(tag);

    localStorage.setItem("currentTag", JSON.stringify(tag));
  }

  return (
    <div className="flex flex-wrap gap-y-1 gap-x-4 justify-center px-4 mb-8">
      <div className="flex items-center justify-center ">
        <button
          id="all"
          aria-label="Все задания"
          onClick={(event) => setActiveTab(event.currentTarget.id, event)}
          type="button"
          className={cn(
            "p-2 border-b-transparent border-b-2 rounded-tl-md rounded-tr-md h-full",
            {
              "border-b-second": activeBtn === "all",
            }
          )}
        >
          Все
        </button>
      </div>
      <div className="flex items-center justify-center ">
        <button
          id="active"
          aria-label="Активные задания"
          onClick={(event) => setActiveTab(event.currentTarget.id, event)}
          type="button"
          className={cn(
            "p-2 border-b-transparent border-b-2 rounded-tl-md rounded-tr-md h-full",
            {
              "border-b-second": activeBtn === "active",
            }
          )}
        >
          Активные
        </button>
      </div>
      <div className="flex items-center justify-center ">
        <button
          id="finished"
          aria-label="Завершенные задания"
          onClick={(event) => setActiveTab(event.currentTarget.id, event)}
          type="button"
          className={cn(
            "p-2 border-b-transparent border-b-2 rounded-tl-md rounded-tr-md h-full",
            {
              "border-b-second": activeBtn === "finished",
            }
          )}
        >
          Завершенные
        </button>
      </div>

      <div className="flex gap-x-2 justify-center">
        <div className="flex items-center justify-center ">
          <button
            id="normal"
            aria-label="Задания с обычным приоритетом"
            onClick={(event) => setActiveTab(event.currentTarget.id, event)}
            type="button"
            className={cn(
              "py-2 px-[15px] border-b-transparent border-b-2 rounded-tl-md rounded-tr-md h-full",
              {
                "border-b-second": activeBtn === "normal",
              }
            )}
          >
            <PriorityMark
              priority="normal"
              className="static rounded-full w-4 h-4"
            />
          </button>
        </div>
        <div className="flex items-center justify-center ">
          <button
            id="medium"
            aria-label="Задания со средним приоритетом"
            onClick={(event) => setActiveTab(event.currentTarget.id, event)}
            type="button"
            className={cn(
              "py-2 px-[15px] border-b-transparent border-b-2 rounded-tl-md rounded-tr-md h-full",
              {
                "border-b-second": activeBtn === "medium",
              }
            )}
          >
            <PriorityMark
              priority="medium"
              className="static rounded-full w-4 h-4"
            />
          </button>
        </div>
        <div className="flex items-center justify-center ">
          <button
            id="high"
            aria-label="Задания с высоким приоритетом"
            onClick={(event) => setActiveTab(event.currentTarget.id, event)}
            type="button"
            className={cn(
              "py-2 px-[15px] border-b-transparent border-b-2 rounded-tl-md rounded-tr-md h-full",
              {
                "border-b-second": activeBtn === "high",
              }
            )}
          >
            <PriorityMark
              priority="high"
              className="static rounded-full w-4 h-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
