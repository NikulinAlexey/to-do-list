"use client";

import { useState, MouseEvent } from "react";

import { cn } from "../libs/utils";

interface FilterProps {
  className?: string;
}

function Filter({ className }: FilterProps) {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <ul className={cn("flex gap-4 justify-center px-4 mb-8", className)}>
      <li>
        <button
          id="0"
          onClick={(e) => setActiveBtn(Number(e.target.id))}
          type="button"
          className={cn("", {
            "text-[red]": activeBtn === 0,
          })}
        >
          Все
        </button>
      </li>
      <li>
        <button
          id="1"
          onClick={(e) => setActiveBtn(Number(e.target.id))}
          type="button"
          className={cn("", {
            "text-[red]": activeBtn === 1,
          })}
        >
          Активные
        </button>
      </li>
      <li>
        <button
          id="2"
          onClick={(e) => setActiveBtn(Number(e.target.id))}
          type="button"
          className={cn("", {
            "text-[red]": activeBtn === 2,
          })}
        >
          Завершенные
        </button>
      </li>
    </ul>
  );
}

export default Filter;
