import { cn } from "../libs/utils";

interface PriorityMarkProps {
  priority: string;
  className?: string;
}

function PriorityMark({ priority, className }: PriorityMarkProps) {

  return (
    <span
      className={cn("absolute block w-3 inset-y-0 bg-normal", className,
        {
        "bg-medium": priority === "medium",
        "bg-high": priority === "high",
        }
      )}
    ></span>
  );
}

export default PriorityMark;
