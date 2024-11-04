// export interface TaskProps {
//   priority: string;
//   text: string;
//   id: string;
//   finished: boolean;
//   createdAt: {
//     minutes: number;
//     hours: number;
//     seconds: number;
//     dayOfWeek: string;
//     month: string;
//     year: number;
//     dayOfMonth: number;
//   };
// }

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

// export interface AddFormProps {
//   addTask: (newTask: TaskProps) => void;
// }

export interface InputProps {
  value: string;
  handleChange: (value: string) => void;
}

export interface FilterProps {
  onFilter: (tag: string) => void;
}