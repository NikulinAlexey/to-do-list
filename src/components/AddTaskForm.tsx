import { useState } from "react";
import { useDispatch } from "react-redux";
import { cn } from "../libs/utils";

import Input from "./Input";
import Select from "./Select";
import { addTask } from "../api/tasksApi";

function AddForm() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    priority: "normal",
    "task-text": "",
  });

  const isSubmitAllowed = data["task-text"]?.length > 0;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event?.target;

    setData({ ...data, [target.name]: target.value });
  }

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitAllowed) {
      addTask(dispatch, {
        finished: false,
        text: data["task-text"],
        priority: data.priority,
        createdAt: String(new Date().getTime()),
        id: Math.random().toString(16).slice(2),
      });
    }

    setData({
      priority: "normal",
      "task-text": "",
    });
  }

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleAddTask(event)
      }
      className="flex flex-col lg:grid lg:grid-cols-form bg-primary justify-center gap-3"
    >
      <Select
        value={data.priority}
        handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(event)
        }
      />
      <Input
        name="task-text"
        value={data["task-text"]}
        handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(event)
        }
        className="w-full h-full bg-transparent border-secondary border rounded-md p-2 placeholder:text-sm"
      />
      <button
        type="submit"
        disabled={!isSubmitAllowed}
        aria-label="Добавить задание"
        className={cn("border-secondary border rounded-md p-2", {
          "opacity-50 cursor-not-allowed": !isSubmitAllowed,
        })}
      >
        Добавить
      </button>
    </form>
  );
}

export default AddForm;
