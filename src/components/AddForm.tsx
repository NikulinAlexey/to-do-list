import { useState } from "react";
import { cn } from "../libs/utils";
import { useDispatch } from "react-redux";
import useGetTime from "../hooks/useGetTime";

import Input from "./Input";
import Select from "./Select";
import { addTask } from "../state/taskListSlice";

function AddForm() {
  const createdAt = useGetTime();
  const dispatch = useDispatch();

  const [taskTextValue, setTaskTextValue] = useState<string>("");
  const [priorityValue, setPriorityValue] = useState("normal");

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    dispatch(
      addTask({
        priority: priorityValue,
        createdAt,
        text: taskTextValue,
        finished: false,
        id: Math.random().toString(16).slice(2),
      })
    );

    setPriorityValue("normal");
    setTaskTextValue("");
  }

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleAddTask(event)
      }
      className="flex flex-col lg:grid lg:grid-cols-form bg-primary justify-center gap-3"
    >
      <Select value={priorityValue} handleChange={setPriorityValue} />
      <Input value={taskTextValue} handleChange={setTaskTextValue} />
      <button
        type="submit"
        aria-label="Добавить задание"
        disabled={taskTextValue?.length === 0}
        className={cn("border-secondary border rounded-md p-2", {
          "opacity-50 cursor-not-allowed": taskTextValue?.length === 0,
        })}
      >
        Добавить
      </button>
    </form>
  );
}

export default AddForm;
