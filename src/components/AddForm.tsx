"use client";

import { useState } from "react";
import { cn } from "../libs/utils";
import { AddFormProps } from "../types";

import useGetTime from "../hooks/useGetTime";

import Input from "./Input";
import Select from "./Select";

function AddForm({ addTask }: AddFormProps) {
  const createdAt = useGetTime();

  const [priorityValue, setPriorityValue] = useState("normal");
  const [taskValue, setTaskValue] = useState<string>("");

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    addTask({
      priority: priorityValue,
      createdAt,
      text: taskValue,
      finished: false,
      id: Math.random().toString(16).slice(2),
    });

    setPriorityValue("normal");
    setTaskValue("");
  }

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        handleAddTask(event)
      }
      className="grid grid-cols-form mb-8 justify-center gap-x-4"
    >
      <Select value={priorityValue} handleChange={setPriorityValue} />
      <Input value={taskValue} handleChange={setTaskValue} />
      <button
        type="submit"
        aria-label="Добавить задание"
        disabled={taskValue?.length === 0}
        className={cn("border-second border rounded-md", {
          "opacity-50 cursor-not-allowed": taskValue?.length === 0,
        })}
      >
        Добавить
      </button>
    </form>
  );
}

export default AddForm;
