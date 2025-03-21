import { cn } from "../libs/utils";

interface PriorityMarkProps {
  priority?: string;
  className?: string;
}

function PriorityMark({ priority, className }: PriorityMarkProps) {
  return (
    <span
      className={cn(
        "absolute block w-3 inset-y-0 bg-all-priorities",
        className,
        {
          "bg-high": priority === "high",
          "bg-medium": priority === "medium",
          "bg-normal": priority === "normal",
        },
      )}
    ></span>
  );
}

export default PriorityMark;
