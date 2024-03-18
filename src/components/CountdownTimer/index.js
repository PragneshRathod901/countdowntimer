import React from "react";
import useCountdown from "../../hooks/useCountdown";
import TimerCard from "../TimerCard";
import "./index.css";
import congo from "../../assets/party-hat-color-icon.png";

const CoundownTimer = ({ targetDate, resetTimer, resetLocalStorage }) => {
  let [day, hour, min, sec] = useCountdown(targetDate);
  if (targetDate && day + hour + min + sec <= 0) {
    resetLocalStorage();
  }
  const handleStopTimer = (e) => {
    resetTimer();
  };
  return (
    <div className="flex f-column r-gap1">
      {day + hour + min + sec > 0 ? (
        <div className="grid">
          <TimerCard timer={day} timerText={"Days"} />
          <TimerCard timer={hour} timerText={"Hours"} />
          <TimerCard timer={min} timerText={"Min"} />
          <TimerCard timer={sec} timerText={"Seconds"} />
        </div>
      ) : (
        <div className="secondary message flex">
          <img src={congo} alt="" />
          <div>The Countdown is over! What's next in your adventure?</div>
          <img src={congo} alt="" />
        </div>
      )}
      {day + hour + min + sec > 0 && (
        <button className="stopButton" onClick={handleStopTimer}>
          Stop Timer
        </button>
      )}
    </div>
  );
};

export default CoundownTimer;
