import StatusFilter from "./StatusFilter";
import PriorityFilter from "./PriorityFilter";

function Filter() {
  return (
    <div className="flex flex-col gap-y-1 justify-center px-4">
      <StatusFilter />
      <PriorityFilter />
    </div>
  );
}

export default Filter;
