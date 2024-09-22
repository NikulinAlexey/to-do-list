import { InputProps } from "../types";

function Input({ value, handleChange }: InputProps) {
  return (
    <input
      required
      value={value}
      type="text"
      onChange={(e) => handleChange(e.target.value)}
      className="w-full bg-transparent border-second border rounded-md p-2"
    />
  );
}

export default Input;
