import React from "react";

const TimerCard = ({ timer, timerText }) => {
  return (
    <div className="timerPallate flex f-column align-item-centre">
      <div>{timer}</div>
      <div>{timerText}</div>
    </div>
  );
};

export default TimerCard;
