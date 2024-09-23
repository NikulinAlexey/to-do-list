import { SelectProps } from "../types";

function Select({ value, handleChange }: SelectProps) {
  return (
    <select
      aria-label="Выбрать приоритет"
      name="priority"
      id="priority-select"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      className="border rounded-md bg-transparent p-2"
    >
      <option value="normal" className="bg-first" aria-label="Обычный приоритет">
        Обычный
      </option>
      <option value="medium" className="bg-first" aria-label="Средний приоритет">
        Средний
      </option>
      <option value="high" className="bg-first" aria-label="Высокий приоритет">
        Высокий
      </option>
    </select>
  );
}

export default Select;
