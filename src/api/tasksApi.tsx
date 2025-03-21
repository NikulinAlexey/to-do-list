import { Dispatch } from "redux";

const BASE_URL = "https://1029709af45de65b.mokky.dev";
import {
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
} from "../state/taskSlice";
import { ITask } from "../types/taskTypes/ITask";

export const fetchTasks = (dispatch: Dispatch) => {
  dispatch(fetchTasksRequest());

  fetch(`${BASE_URL}/tasks`)
    .then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    )
    .then((data) => dispatch(fetchTasksSuccess(data)))
    .catch((error) => {
      if (error instanceof Error) {
        dispatch(fetchTasksFailure(error.message));
      } else if (typeof error === "string") {
        dispatch(fetchTasksFailure(error));
      } else {
        dispatch(fetchTasksFailure("Неизвестная ошибка"));
      }
    });
};

export const deleteTask = (dispatch: Dispatch, taskId: string) => {
  dispatch(deleteTaskRequest());

  fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
      }
    })
    .then((data) => {
      console.log(data);
      dispatch(deleteTaskSuccess(taskId));
    })
    .catch((error) => {
      if (error instanceof Error) {
        dispatch(deleteTaskFailure(error.message));
      } else {
        dispatch(deleteTaskFailure("Неизвестная ошибка"));
      }
    });
};

export const addTask = (dispatch: Dispatch, task: ITask) => {
  dispatch(addTaskRequest());

  fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task), // Отправляем данные на сервер
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
      }
      return res.json(); // Ожидаем, что сервер вернёт созданную задачу
    })
    .then((data) => {
      dispatch(addTaskSuccess(data)); // Добавляем задачу в состояние Redux
    })
    .catch((error) => {
      if (error instanceof Error) {
        dispatch(addTaskFailure(error.message));
      } else {
        dispatch(addTaskFailure("Неизвестная ошибка"));
      }
    });
};

export const toggleTask = (
  dispatch: Dispatch,
  taskId: string,
  finished: boolean
) => {
  dispatch(toggleTaskRequest()); // Начинаем процесс обновления

  fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: "PATCH", // Используем метод PATCH для частичного обновления
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ finished }), // Отправляем новое значение completed
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
      }
      return res.json(); // Ожидаем, что сервер вернёт обновлённую задачу
    })
    .then((data) => {
      dispatch(toggleTaskSuccess(data)); // Обновляем задачу в состоянии Redux
    })
    .catch((error) => {
      if (error instanceof Error) {
        dispatch(toggleTaskFailure(error.message));
      } else {
        dispatch(toggleTaskFailure("Неизвестная ошибка"));
      }
    });
};
