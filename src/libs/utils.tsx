import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formateTime(timeStamp: string) {
  let result = "";

  const monthsOfYear = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const daysOfWeek = [
    "воскресение",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  const date = new Date(Number(timeStamp));

  const hours =
    String(date.getHours()).length === 1
      ? `0${String(date.getHours())}`
      : `${String(date.getHours())}`;
  const minutes =
    String(date.getMinutes()).length === 1
      ? `0${String(date.getMinutes())}`
      : `${String(date.getMinutes())}`;
  const seconds =
    String(date.getSeconds()).length === 1
      ? `0${String(date.getSeconds())}`
      : `${String(date.getSeconds())}`;

  const dayOfWeek = daysOfWeek[date.getDay()]; // Индес "0" у вс
  const dayOfMonth = date.getDate();
  const month = monthsOfYear[date.getMonth()]; // Индес "0" у Января
  const year = date.getFullYear();

  result = `${dayOfWeek}, ${dayOfMonth} ${month} ${year} г. в ${hours}:${minutes}:${seconds}`;

  return result;
}
