"use client";

import { useState } from "react";

import { cn } from "../libs/utils";
import { FilterProps } from "../types";

function Filter({ onFilter }: FilterProps) {
  const [activeBtn, setActiveBtn] = useState<string>("all");

  function setActiveTab(tag: string, event: React.MouseEvent<HTMLElement>) {
    setActiveBtn(event.currentTarget.id)
    onFilter(tag);
  }

  return (
    <ul className="flex gap-4 justify-center px-4 mb-8">
      <li>
        <button
          id="all"
          onClick={(event) => setActiveTab(event.currentTarget.id, event)}
          type="button"
          className={cn("", {
            "text-[red]": activeBtn === "all",
          })}
        >
          Все
        </button>
      </li>
      <li>
        <button
          id="active"
          onClick={(event) => setActiveTab(event.currentTarget.id, event)}
          type="button"
          className={cn("", {
            "text-[red]": activeBtn === "active",
          })}
        >
          Активные
        </button>
      </li>
      <li>
        <button
          id="finished"
          onClick={(event) => setActiveTab(event.currentTarget.id, event)}
          type="button"
          className={cn("", {
            "text-[red]": activeBtn === "finished",
          })}
        >
          Завершенные
        </button>
      </li>
    </ul>
  );
}

export default Filter;
