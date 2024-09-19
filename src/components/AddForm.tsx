"use client";

import { cn } from "../libs/utils";
import { useState } from "react";

import useGetTime from "../hooks/useGetTime";

import Input from "./Input";

interface AddFormProps {
  className?: string;
  addTask: (newTask) => void;
  tasks: {
    priority: string;
    text: string;
    id: number;
    finished: boolean;
    crearedAt: {
      minutes: number;
      hours: number;
      seconds: number;
      dayOfWeek: string;
      month: string;
      year: number;
      dayOfMonth: number;
    };
  }[];
}

function AddForm({ className, addTask, tasks }: AddFormProps) {
  const createdAt = useGetTime();
  const [taskValue, setTaskValue] = useState<string>("");
  const [priority, setPriority] = useState("normal");

  function handleAddTask(e: Event) {
    e.preventDefault();

    addTask({
      text: taskValue,
      id: tasks?.length + 1,
      priority,
      finished: false,
      createdAt,
    });

    setTaskValue("");
    // e.target.reset();
  }

  return (
    <form
      className={cn("flex mb-8 justify-center gap-x-4", className)}
      onSubmit={(e: never) => handleAddTask(e)}
    >
      <select
        name="priority"
        id="priority-select"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="normal">Обычный</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
      </select>
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
