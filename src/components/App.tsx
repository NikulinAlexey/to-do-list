"use client";

import { TaskProps } from "../types";
import { RootState } from "../state/store";
import { refreshStatusTag } from "../state/statusTag";
import { refreshPriorityTag } from "../state/priorityTag";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Filter from "./Filter";
import AddForm from "./AddForm";
import TaskList from "./TaskList";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);
  const statusTag = useSelector((state: RootState) => state.statusTag);
  const priorityTag = useSelector((state: RootState) => state.priorityTag);
  const filterTasks = (
    tasks: TaskProps[],
    statusTag: string,
    priorityTag: string
  ): TaskProps[] => {
    if (!tasks || !Array.isArray(tasks)) return [];

    const filteredByStatus = filterByStatus(tasks, statusTag);
    const filteredByPriority = filterByPriority(filteredByStatus, priorityTag);

    return filteredByPriority;
  };

  const filterByStatus = (
    tasks: TaskProps[],
    statusTag: string
  ): TaskProps[] => {
    if (statusTag === "all") return tasks;
    if (statusTag === "finished") return tasks.filter((task) => task.finished);
    if (statusTag === "active") return tasks.filter((task) => !task.finished);
    return tasks;
  };

  function filterByPriority(array: TaskProps[], priorityTag: string) {
    if (priorityTag === "all-priorities") return array;
    return array.filter((task) => task.priority === priorityTag);
  }

  const setFilteredTasks = (
    array: TaskProps[],
    statusTag: string,
    priorityTag: string
  ) => {
    const filteredTasks = filterTasks(array, statusTag, priorityTag);
    setTasksToShow(filteredTasks);

    dispatch(refreshStatusTag(statusTag));
    dispatch(refreshPriorityTag(priorityTag));
  };
  const [tasksToShow, setTasksToShow] = useState<TaskProps[]>(
    () => filterTasks(tasks, statusTag, priorityTag) || []
  );

  useEffect(() => {
    setFilteredTasks(tasks, statusTag, priorityTag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks, statusTag, priorityTag]);

  return (
    <div className="relative flex flex-col gap-y-6 mx-auto p-4 w-full md:max-w-[70%] lg:max-w-[50%]">
      <Filter onFilter={setFilteredTasks} />
      <AddForm />
      <TaskList tasks={tasksToShow} />
    </div>
  );
}

export default App;
