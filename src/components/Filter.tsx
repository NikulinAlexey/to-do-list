import { FilterProps } from "../types";
import PriorityFilter from "./PriorityFilter";
import StatusFilter from "./StatusFilter";

function Filter({ onFilter }: FilterProps) {

  return (
    <div className="flex flex-col gap-y-1 justify-center px-4">
      <StatusFilter onFilter={onFilter} />
      <PriorityFilter onFilter={onFilter} />
    </div>
  );
}

export default Filter;
