import Filter from "./Filter";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";

function App() {

  return (
    <div className="relative flex flex-col gap-y-6 mx-auto p-4 w-full md:max-w-[70%] lg:max-w-[50%]">
      <Filter />
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
