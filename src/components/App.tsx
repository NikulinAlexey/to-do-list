import Filter from "./Filter";
import AddForm from "./AddForm";
import TaskList from "./TaskList";
import { RootState } from "../state/store";

import { useSelector } from "react-redux";

function App() {
  const tasks = useSelector((state: RootState) => state.todos);

  function filterTasks(tag: string) {
    if (tag === "all") {
      return tasks;
    } else if (tag === "active" || tag === "finished") {
      switch (tag) {
        case "active":
          return tasks.filter((task) => task.finished === false);

        case "finished":
          return tasks.filter((task) => task.finished === true);

        default:
          return tasks;
      }
    } else {
      return tasks.filter((task) => task.priority === tag);
    }
  }

  function setFilteredTasks(tag: string) {
    const filteredTasks = filterTasks(tag);

    setTasksToShow(filteredTasks);
  }

  return (
    <div className="relative p-4 w-full md:max-w-[70%] lg:max-w-[50%]">
      <Filter onFilter={setFilteredTasks} />
      <AddForm />
      <TaskList
        key={tasks.length}
        tasks={tasks}
        // tasks={tasksToShow}
      />
      <ul className="fixed text-[black] top-0 left-0 flex flex-col gap-4 p-10 max-w-[300px]">
        <li className="bg-[aqua] p-4 rounded-lg">1. Прикрутить Redux</li>
      </ul>
    </div>
  );
}

export default App;
