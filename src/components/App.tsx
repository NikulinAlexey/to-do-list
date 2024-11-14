"use client";

import { TaskProps } from "../types";
import { RootState } from "../state/store";
import { refreshTag } from "../state/currentTagSlice";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Filter from "./Filter";
import AddForm from "./AddForm";
import TaskList from "./TaskList";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);
  const currentTag = useSelector((state: RootState) => state.currentTag);

  const [tasksToShow, setTasksToShow] = useState<TaskProps[]>(() =>
    filterTasks(tasks, currentTag)
  );

  function filterTasks(array: TaskProps[], tag: string) {
    if (tag === "all") {
      return array;
    } else if (tag === "active" || tag === "finished") {
      switch (tag) {
        case "active":
          return array.filter((task) => task.finished === false);

        case "finished":
          return array.filter((task) => task.finished === true);

        default:
          return array;
      }
    } else {
      return array.filter((task) => task.priority === tag);
    }
  }

  const setFilteredTasks = useCallback(
    (array: TaskProps[], tag: string) => {
      const filteredTasks = filterTasks(array, tag);
      setTasksToShow(filteredTasks);

      dispatch(refreshTag(tag));
    },
    [dispatch]
  );

  useEffect(() => {
    setFilteredTasks(tasks, currentTag);
  }, [tasks, currentTag, setFilteredTasks]);

  return (
    <div className="relative flex flex-col gap-y-6 mx-auto p-4 w-full md:max-w-[70%] lg:max-w-[50%]">
      <Filter onFilter={setFilteredTasks} />
      <AddForm />
      <TaskList tasks={tasksToShow} />
    </div>
  );
}

export default App;
