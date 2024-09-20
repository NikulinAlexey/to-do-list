"use client";

import { useState } from "react";

import { cn } from "../libs/utils";

function Filter() {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <ul className="flex gap-4 justify-center px-4 mb-8">
      <li>
        <button
          id="0"
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            setActiveBtn(Number(event.currentTarget.id))
          }
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
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            setActiveBtn(Number(event.currentTarget.id))
          }
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
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            setActiveBtn(Number(event.currentTarget.id))
          }
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
