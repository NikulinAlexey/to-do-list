// import { useState } from "react";

export default function useGetTime() {
  // const [currentTime, setCurrentTime] = useState({
  //   hours: 10,
  //   minutes: 23,
  //   dayOfWeek: 0,
  //   dayOfMonth: 18,
  //   monthOfYear: 4,
  // });
  const currentTime = {
    hours: 10,
    minutes: 23,
    dayOfWeek: 0,
    dayOfMonth: 18,
    monthOfYear: 4,
  };

  return currentTime;
}
