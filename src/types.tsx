export interface TaskProps {
  priority: string;
  text: string;
  id: string;
  finished: boolean;
  createdAt: string;
}

export interface TaskListProps {
  tasks: TaskProps[];
  finishTask: (id: string) => void;
  deleteTask: (id: string) => void;
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
  onFilter: (tasks: TaskProps[], tag: string) => void;
}
