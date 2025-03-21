interface SelectProps {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const optionList = [
  {
    value: "normal",
    text: "Обычный",
    "aria-label": "Обычный приоритет",
  },
  {
    value: "medium",
    text: "Средний",
    "aria-label": "Средний приоритет",
  },
  {
    value: "high",
    text: "Высокий",
    "aria-label": "Высокий приоритет",
  },
];

function Select({ value, handleChange }: SelectProps) {
  return (
    <select
      value={value}
      name="priority"
      id="priority-select"
      aria-label="Выбрать приоритет"
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        handleChange(event)
      }
      className="border rounded-md bg-transparent p-2"
    >
      {optionList.map((optionItem, i) => (
        <option
          key={i}
          value={optionItem.value}
          className="bg-primary"
          aria-label={optionItem["aria-label"]}
        >
          {optionItem.text}
        </option>
      ))}
    </select>
  );
}

export default Select;


