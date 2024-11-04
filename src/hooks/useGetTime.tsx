export default function useGetTime() {
  const date = new Date();

  const formatter = new Intl.DateTimeFormat("ru", {
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "UTC",
  });

  return formatter.format(date);
}

