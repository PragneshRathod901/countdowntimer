import { useEffect, useState } from "react";
/**
 * custome hook that calculate remaining days. hours, min and sec from target date
 * @param {Date} targetDate
 * @returns [Day,Hour,min,sec]
 */
const useCountdown = (targetDate) => {
  let [countdownTimer, SetCountDownTime] = useState(targetDate - new Date());
  useEffect(() => {
    let interval = setTimeout(() => {
      SetCountDownTime(targetDate - new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownTimer, targetDate]);
  return calculateValue(countdownTimer);
};
/**
 *
 * @param {number} milisec
 * @returns [Day,Hour,min,sec]
 */
const calculateValue = (milisec) => {
  milisec /= 1000;
  let sec = Math.floor(milisec) % 60;
  let min = Math.floor(milisec / 60) % 60;
  let hour = Math.floor(milisec / 3600) % 24;
  let day = Math.floor(milisec / (3600 * 24));
  return [
    day.toString(),
    hour < 10 ? "0" + hour : hour.toString(),
    min < 10 ? "0" + min : min.toString(),
    sec < 10 ? "0" + sec : sec.toString(),
  ];
};

export default useCountdown;
