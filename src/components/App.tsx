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

  return (
    <div className='h-full w-[50%] mx-auto mt-6'>
      <Filter />
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App
