import { SelectProps } from "../types";

function Select({ value, handleChange }: SelectProps) {
  return (
    <select
      name="priority"
      id="priority-select"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value="normal">Обычный</option>
      <option value="medium">Средний</option>
      <option value="high">Высокий</option>
    </select>
  );
}

export default Select;
