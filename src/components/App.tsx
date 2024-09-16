import TaskList from "./TaskList"
const tasks = [
  {
    text: "Сделать дело",
    id: 0,
    priority: "red",
  },
  {
    text: "Гулять смело",
    id: 1,
    priority: "green",
  },
];
function App() {

  return (
    <div className='h-full w-[50%] mx-auto mt-6'>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App
