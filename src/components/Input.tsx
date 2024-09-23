import { InputProps } from "../types";

function Input({ value, handleChange }: InputProps) {
  return (
    <input
      required
      value={value}
      type="text"
      placeholder="Задание..."
      onChange={(e) => handleChange(e.target.value)}
      className="w-full h-full bg-transparent border-second border rounded-md p-2 placeholder:text-sm"
    />
  );
}

export default Input;
