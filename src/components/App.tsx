import { useState } from "react";
import { TaskProps } from "../types";

import Filter from "./Filter";
import AddForm from "./AddForm";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      priority: "normal",
      createdAt: {
        minutes: 16,
        hours: 21,
        seconds: 8,
        dayOfWeek: "Вс",
        month: "Сен",
        year: 2024,
        dayOfMonth: 22,
      },
      text: "asdasd",
      finished: false,
      id: "460626daff936",
    },
    {
      priority: "medium",
      createdAt: {
        minutes: 16,
        hours: 21,
        seconds: 11,
        dayOfWeek: "Вс",
        month: "Сен",
        year: 2024,
        dayOfMonth: 22,
      },
      text: "asdasdasd",
      finished: false,
      id: "21e7df052c75a",
    },
    {
      priority: "high",
      createdAt: {
        minutes: 16,
        hours: 21,
        seconds: 14,
        dayOfWeek: "Вс",
        month: "Сен",
        year: 2024,
        dayOfMonth: 22,
      },
      text: "asdasdasd",
      finished: false,
      id: "ddc28b744682a",
    },
    {
      priority: "medium",
      createdAt: {
        minutes: 16,
        hours: 21,
        seconds: 16,
        dayOfWeek: "Вс",
        month: "Сен",
        year: 2024,
        dayOfMonth: 22,
      },
      text: "asdasdasd",
      finished: false,
      id: "33bd159f307f9",
    },
    {
      priority: "normal",
      createdAt: {
        minutes: 16,
        hours: 21,
        seconds: 18,
        dayOfWeek: "Вс",
        month: "Сен",
        year: 2024,
        dayOfMonth: 22,
      },
      text: "asdasd",
      finished: false,
      id: "1a4b83e868d46",
    },
    {
      priority: "high",
      createdAt: {
        minutes: 16,
        hours: 21,
        seconds: 21,
        dayOfWeek: "Вс",
        month: "Сен",
        year: 2024,
        dayOfMonth: 22,
      },
      text: "asdasdasd",
      finished: false,
      id: "fe8905aeff0e4",
    },
  ]);
  const [tasksToShow, setTasksToShow] = useState<TaskProps[]>(tasks);

  function addTask(newTask: TaskProps) {
    setTasksToShow(tasksToShow.concat(newTask));
    setTasks(tasks.concat(newTask));
  }
  function deleteTask(id: string) {
    setTasksToShow(tasks.filter((task) => task.id !== id));

    setTasks(tasks.filter((task) => task.id !== id));
  }

  function finishTask(id: string) {
    const resultToAll = tasks.filter((task) => {
      if (task.id !== id) return task;
      else {
        task.finished = true;

        return task;
      }
    });

    const resultToShow = tasksToShow.filter((task) => {
      if (task.id !== id) return task;
      else {
        task.finished = true;

        return task;
      }
    });

    setTasks(resultToAll);
    setTasksToShow(resultToShow);
  }

  function filterTasks(tag: string) {
    switch (tag) {
      case "active":
        return tasks.filter((task) => task.finished === false);

      case "finished":
        return tasks.filter((task) => task.finished === true);

      case "normal":
        return tasks.filter((task) => task.priority === "normal");

      case "medium":
        return tasks.filter((task) => task.priority === "medium");

      case "high":
        return tasks.filter((task) => task.priority === "high");

      default:
        return tasks;
    }
  }
  function setFilteredTasks(tag: string) {
    const filteredTasks = filterTasks(tag);

    setTasksToShow(filteredTasks);
  }

  return (
    <div className="relative h-full w-[50%] mx-auto mt-6">
      <Filter onFilter={setFilteredTasks} />
      <AddForm addTask={addTask} />
      <TaskList
        key={tasksToShow.length}
        tasks={tasksToShow}
        deleteTask={deleteTask}
        finishTask={finishTask}
      />
      <ul className="fixed text-[black] top-0 left-0 flex flex-col gap-4 p-10 max-w-[300px]">
        <li className="bg-[aqua] p-4 rounded-lg">Сделать адаптив</li>
        <li className="bg-[aqua] p-4 rounded-lg">Подумать как отображать таски, если я добавляю ее в активные или в завершенные</li>
      </ul>
    </div>
  );
}

export default App;
