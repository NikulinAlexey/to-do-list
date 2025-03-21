import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../types/taskTypes/ITask";

interface TasksState {
  loading: boolean;
  items: ITask[];
  error: string;
}

const initialState: TasksState = {
  loading: false,
  items: [],
  error: "",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTaskRequest(state) {
      state.loading = true;
      state.error = "";
    },
    addTaskSuccess(state, action: PayloadAction<ITask>) {
      state.loading = false;
      state.items.push(action.payload);
    },
    addTaskFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // Action для начала обновления задачи
    toggleTaskRequest(state) {
      state.loading = true;
      state.error = "";
    },
    // Action для успешного обновления задачи
    toggleTaskSuccess(state, action: PayloadAction<ITask>) {
      state.loading = false;
      const updatedTask = action.payload;
      const index = state.items.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.items[index] = updatedTask; // Обновляем задачу в списке
      }
    },
    // Action для ошибки при обновлении задачи
    toggleTaskFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchTasksRequest(state) {
      state.loading = true;
      state.error = "";
    },
    fetchTasksSuccess(state, action: PayloadAction<ITask[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchTasksFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteTaskRequest(state) {
      state.loading = true;
      state.error = "";
    },
    deleteTaskSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.items = state.items.filter((task) => task.id !== action.payload);
    },
    deleteTaskFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addTaskRequest,
  addTaskSuccess,
  addTaskFailure,
  toggleTaskRequest,
  toggleTaskSuccess,
  toggleTaskFailure,
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskFailure,
} = tasksSlice.actions;

export default tasksSlice.reducer;
