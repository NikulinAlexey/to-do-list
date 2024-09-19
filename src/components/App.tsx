import { useEffect, useState } from "react";
import AddForm from "./AddForm";
import Filter from "./Filter";
import TaskList from "./TaskList";



function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Сделать дело",
      id: 0,
      priority: "normal",
      finished: true,
      createdAt: {
        minutes: 10,
        hours: 4,
        seconds: 12,
        dayOfWeek: "Вторник",
        month: "Сент",
        year: 2024,
        dayOfMonth: 2,
      },
    },
    {
      text: "Гулять смело",
      id: 1,
      priority: "high",
      finished: true,
      createdAt: {
        minutes: 10,
        hours: 4,
        seconds: 12,
        dayOfWeek: "Вторник",
        month: "Сент",
        year: 2024,
        dayOfMonth: 2,
      },
    },
    {
      text: "Покушац",
      id: 2,
      priority: "medium",
      finished: false,
      createdAt: {
        minutes: 10,
        hours: 4,
        seconds: 12,
        dayOfWeek: "Вторник",
        month: "Сент",
        year: 2024,
        dayOfMonth: 2,
      },
    },
  ]);

  function addTask(newTask) {
    console.log(newTask, "added")
    setTasks(tasks.concat([newTask]));
  }
  function deleteTask(id: number) {
    setTasks(tasks.filter((task => task.id !== id)))
  }
  
  return (
    <div className="h-full w-[50%] mx-auto mt-6">
      <Filter />
      <AddForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <span>Сделать функцию-генератор уникального id</span>
    </div>
  );
}

export default App;
