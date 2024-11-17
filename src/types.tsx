export interface TaskProps {
  priority: string;
  text: string;
  id: string;
  finished: boolean;
  createdAt: string;
}

export interface TaskListProps {
  tasks: TaskProps[];
}

export interface SelectProps {
  value: string;
  handleChange: (value: string) => void;
}

export interface TaskItemProps {
  taskItem: TaskProps;
}

export interface InputProps {
  value: string;
  handleChange: (value: string) => void;
}

export interface FilterProps {
  onFilter: (
    tasks: TaskProps[],
    statusTag: string,
    priorityTag: string
  ) => void;
}
