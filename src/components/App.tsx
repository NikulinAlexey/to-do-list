import AddForm from "./AddForm";
import Filter from "./Filter";
import TaskList from "./TaskList";

const tasks = [
  {
    text: "Сделать дело",
    id: 0,
    priority: "normal",
  },
  {
    text: "Гулять смело",
    id: 1,
    priority: "high",
  },
  {
    text: "Покушац",
    id: 2,
    priority: "medium",
  },
];

function App() {
  function addTask(e: Event) {
    e.preventDefault();
    alert("Task added");
  }
  function deleteTask(id: number) {
    alert(`Task ${id} deleted`);
  }
  return (
    <div className="h-full w-[50%] mx-auto mt-6">
      <Filter />
      <AddForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
