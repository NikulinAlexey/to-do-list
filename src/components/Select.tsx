import { SelectProps } from "../types";

function Select({ value, handleChange }: SelectProps) {
  return (
    <select
      name="priority"
      id="priority-select"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      className="border rounded-md bg-transparent p-2"
    >
      <option value="normal" className="bg-first">Обычный</option>
      <option value="medium" className="bg-first">Средний</option>
      <option value="high" className="bg-first">Высокий</option>
    </select>
  );
}

export default Select;
