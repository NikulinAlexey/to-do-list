import { useState } from "react";
import { TaskProps } from "../types";

import Filter from "./Filter";
import AddForm from "./AddForm";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function addTask(newTask: TaskProps) {
    setTasks(tasks.concat(newTask));
  }
  function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function setFilteredTasks(tag: string) {
    switch (tag) {
      case "active":
        setTasks(tasks.filter((task) => task.finished === false));
        break;

      case "finished":
        setTasks(tasks.filter((task) => task.finished === true));
        break;

      case "normal":
        setTasks(tasks.filter((task) => task.priority === "normal"));
        break;

      case "medium":
        setTasks(tasks.filter((task) => task.priority === "medium"));
        break;

      case "high":
        setTasks(tasks.filter((task) => task.priority === "high"));
        break;
      
      default:
        setTasks(tasks);
    }
  }

  return (
    <div className="relative h-full w-[50%] mx-auto mt-6">
      <Filter onFilter={setFilteredTasks} />
      <AddForm addTask={addTask} key={tasks.length} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <ul className="fixed text-[black] top-0 left-0 flex flex-col gap-4 p-10 max-w-[300px]">
        <li className="bg-[aqua] p-4 rounded-lg">
          Сделать функция-фильтры для выбора всех, активных, завершенных
        </li>
        <li className="bg-[aqua] p-4 rounded-lg">Сделать работающий чекбокс</li>
        <li className="bg-[aqua] p-4 rounded-lg">Сделать адаптив</li>
      </ul>
    </div>
  );
}

export default App;
