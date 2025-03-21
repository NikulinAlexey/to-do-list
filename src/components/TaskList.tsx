import Task from "./Task";
import { useEffect } from "react";
import { RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "../api/tasksApi";
import Error from "./Error";
import Loader from "./Loader";
import { ITask } from "../types/taskTypes/ITask";

function TaskList() {
  const dispatch = useDispatch();
  const { loading, items, error } = useSelector(
    (state: RootState) => state.tasks
  );

  useEffect(() => {
    fetchTasks(dispatch);
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  console.log(items);
  return (
    <ul className="flex flex-col gap-4 w-full">
      {items.length !== 0 ? (
        items.map((task: ITask) => (
          <li key={task.id} className="w-full">
            <Task taskItem={task} />
          </li>
        ))
      ) : (
        <div className="">Список пуст, измените параметры фильтрации</div>
      )}
    </ul>
  );
}

export default TaskList;
