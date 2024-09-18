"use client";

import { cn } from "../libs/utils";

import Input from "./Input";
import { FormEvent, useEffect, useState } from "react";

interface AddFormProps {
  className?: string;
  addTask: () => void;
}

function AddForm({ className, addTask }: AddFormProps) {
  const [taskValue, setTaskValue] = useState<string>("");

  function handleAddTask(e: Event) {
    alert("Task added");
    addTask();
    setTaskValue("");
  }

  useEffect(() => {
    console.log(taskValue);
  }, [taskValue]);
  return (
    <form
      className={cn("flex mb-8 justify-center gap-x-4", className)}
      onSubmit={(e: FormEvent) => handleAddTask(e)}
    >
      {/* <Input /> */}
      <Input value={taskValue} handleChange={setTaskValue} />
      <button
        disabled={taskValue?.length === 0}
        type="submit"
        aria-label="Добавить задание"
        className={cn("", {
          "opacity-50 cursor-not-allowed": taskValue?.length === 0,
        })}
      >
        Добавить
      </button>
    </form>
  );
}

export default AddForm;
