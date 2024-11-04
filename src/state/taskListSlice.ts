import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      priority: "normal",
      createdAt: "вс, 03.11.2024 г., 13:49:32",
      text: "Получить Кольцо от Бильбо — забрать Кольцо у дяди Бильбо в Шире и понять, что оно опасно.",
      finished: false,
      id: "460626daff936",
    },
    {
      priority: "medium",
      createdAt: "вс, 03.11.2024 г., 13:49:32",
      text: "Уведомить Гендальфа — рассказать Гендальфу о Кольце и его истинной природе, чтобы получить советы и поддержку.",
      finished: false,
      id: "21e7df052c75a",
    },
    {
      priority: "high",
      createdAt: "вс, 03.11.2024 г., 13:49:32",
      text: "Покинуть Шир — начать путешествие в безопасное место, избегая внимания Назгулов и других врагов.",
      finished: false,
      id: "ddc28b744682a",
    },
    {
      priority: "medium",
      createdAt: "вс, 03.11.2024 г., 13:49:32",
      text: "Найти компанию — встретиться с союзниками (Сэмом, Мерри и Пиппином) и собрать команду для поддержки.",
      finished: false,
      id: "33bd159f307f9",
    },
    {
      priority: "normal",
      createdAt: "вс, 03.11.2024 г., 13:49:32",
      text: "Достигнуть Ривенделла — добраться до Ривенделла, где состоится совет Элронда, чтобы решить, что делать с Кольцом.",
      finished: false,
      id: "1a4b83e868d46",
    },
    {
      priority: "high",
      createdAt: "вс, 03.11.2024 г., 13:49:32",
      text: "Участвовать в Совете Элронда — принять участие в обсуждении и решить, что Кольцо должно быть уничтожено в Огненной Горе.",
      finished: false,
      id: "fe8905aeff0e4",
    },
    {
      priority: "high",
      createdAt: "вс, 03.11.2024 г., 13:49:32",
      text: "Пересечь Морию — пройти через Морию, столкнувшись с опасностями, включая орков иBalrog.",
      finished: false,
      id: "fe8905a4ff0e4",
    },
    {
      priority: "high",
      createdAt: "вс, 03.11.2024 г., 13:49:32",
      text: "Добраться до Дол Гулдура — завершить своё путешествие до Мордор и, наконец, достичь Ородруина, чтобы уничтожить Кольцо.",
      finished: false,
      id: "fe89052eff0e4",
    },
  ],
  reducers: {
    addTask: (state, action) => {
      const task = action.payload;
      // setTasks(tasks.concat(newTask));

      // setTasksToShow(tasksToShow.concat(newTask));
      state.push(task);
    },
    finishTask: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].finished = action.payload.finished;

      // return state.filter((todo) => {
      //   if (todo.id !== action.payload.id) return todo;
      //   else {
      //     todo.finished = true;

      //     return todo;
      //   }
      // });
    },
    deleteTask: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTask, deleteTask, finishTask } = todoSlice.actions;

export default todoSlice.reducer;
