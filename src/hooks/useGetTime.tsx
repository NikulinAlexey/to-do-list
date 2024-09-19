// import { useState } from "react";
const daysOfWeek = {
  0: "Вс",
  1: "Пн",
  2: "Вт",
  3: "Ср",
  4: "Чт",
  5: "Пт",
  6: "Сб",
};
const monthList = {
  0: "Янв",
  1: "Фев",
  2: "Март",
  3: "Апр",
  4: "Май",
  5: "Июн",
  6: "Июл",
  7: "Авг",
  8: "Сен",
  9: "Окт",
  10: "Ноя",
  11: "Дек",
};
export default function useGetTime() {
  const date = new Date();

  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = monthList[date.getMonth()];
  const year = date.getFullYear();
  const dayOfMonth = date.getDate();


  return {
    minutes,
    hours,
    seconds,
    dayOfWeek,
    month,
    year,
    dayOfMonth,
  };
}
