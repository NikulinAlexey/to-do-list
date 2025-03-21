import { RootState } from "../state/store";
import { useSelector, useDispatch } from "react-redux";

import { cn } from "../libs/utils";
import { refreshStatusTag } from "../state/filterSlice";

function StatusFilter() {
  const dispatch = useDispatch();

  const statusTag = useSelector(
    (state: RootState) => state.filterSlice.statusTag,
  );

  const statusFilters = [
    {
      id: "all",
      "aria-label": "Все задания",
      text: "Все",
    },
    {
      id: "active",
      "aria-label": "Активные задания",
      text: "Активные",
    },
    {
      id: "finished",
      "aria-label": "Завершенные задания",
      text: "Завершенные",
    },
  ];

  return (
    <ul className="flex flex-wrap items-center gap-x-2 justify-center">
      {statusFilters.map((filter) => (
        <li key={filter.id}>
          <button
            id={filter.id}
            type="button"
            onClick={(event) =>
              dispatch(refreshStatusTag(event.currentTarget.id))
            }
            aria-label={filter["aria-label"]}
            className={cn(
              "p-2 font-semibold border-2 border-transparent rounded-tl-md rounded-tr-md h-full lg:hover:border-b-thirdly lg:transition-colors lg:active:!border-thirdly",
              {
                "border-b-secondary": String(statusTag) === filter.id,
              },
            )}
          >
            {filter.text}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default StatusFilter;
