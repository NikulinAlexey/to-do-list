import { RootState } from "../state/store";
import { useSelector, useDispatch } from "react-redux";

import { cn } from "../libs/utils";
import { refreshPriorityTag } from "../state/filterSlice";
import PriorityMark from "./PriorityMark";

function PriorityFilter() {
  const dispatch = useDispatch();

  const priorityTag = useSelector(
    (state: RootState) => state.filterSlice.priorityTag,
  );

  const priorityFilters = [
    {
      button: {
        id: "all-priorities",
        "aria-label": "Все задания",
      },
      mark: {
        priority: null,
      },
    },
    {
      button: {
        id: "normal",
        "aria-label": "Задания с обычным приоритетом",
      },
      mark: {
        priority: "normal",
      },
    },
    {
      button: {
        id: "medium",
        "aria-label": "Задания со средним приоритетом",
      },
      mark: {
        priority: "medium",
      },
    },
    {
      button: {
        id: "high",
        "aria-label": "Задания с высоким приоритетом",
      },
      mark: {
        priority: "high",
      },
    },
  ];

  return (
    <ul className="flex flex-wrap gap-x-2 items-center justify-center">
      {priorityFilters.map((filterItem) => (
        <li key={filterItem.button.id}>
          <button
            type="button"
            id={filterItem.button.id}
            aria-label={filterItem.button["aria-label"]}
            onClick={(event) =>
              dispatch(refreshPriorityTag(event.currentTarget.id))
            }
            className={cn(
              "p-2 border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-thirdly lg:transition-colors lg:active:!border-thirdly",
              {
                "border-b-secondary":
                  String(priorityTag) === filterItem.button.id,
              },
            )}
          >
            <PriorityMark
              aria-hidden
              className="static rounded-sm w-8 h-4"
              priority={filterItem.mark.priority || ""}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PriorityFilter;
