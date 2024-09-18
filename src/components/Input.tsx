"use client";


import { cn } from "../libs/utils";

interface InputProps {
  className?: string;
  type?: string;
  value: string | undefined;
  handleChange: (value: string) => void;
}

function Input({ className, type, value, handleChange }: InputProps) {
  return (
    <div
      className={cn(
        "h-14 border-second border-2 rounded-md p-2 focus-within",
        className
      )}
    >
      <input
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        type={type || "text"}
        className="h-full w-full bg-transparent"
      />
    </div>
  );
}

export default Input;
