interface InputProps {
  name?: string;
  type?: string;
  value?: string;
  checked?: boolean;
  ariaLabel?: string;
  className?: string;
  placeholder?: string;
  handleChange: (value: string | React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  name,
  value,
  checked,
  className,
  ariaLabel,
  placeholder,
  handleChange,
  type = "text",
}: InputProps) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      className={className}
      aria-label={ariaLabel}
      placeholder={placeholder}
      checked={Boolean(checked)}
      onChange={(e) => handleChange(e)}
    />
  );
}

export default Input;
