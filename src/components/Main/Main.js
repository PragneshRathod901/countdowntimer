import React, { useEffect, useState } from "react";
import "./index.css";
import CountdownForm from "../ContdownForm";
import { checkIfDateIsValid } from "../../Utility";
import CoundownTimer from "../CountdownTimer";

function Main() {
  let [dateTime, setDateTime] = useState();
  let [validationError, setvalidationError] = useState("");
  let [countdownDate, setCountDownDate] = useState("");
  //saving count down timerto local storage  when value changed
  useEffect(() => {
    if (localStorage.getItem("countedown", dateTime)) {
      let _dateTime = new Date(localStorage.getItem("countedown"));
      setDateTime(_dateTime);
      setCountDownDate(_dateTime);
    }
  }, []);

  //validating Input time
  useEffect(() => {
    let { error } = checkIfDateIsValid(dateTime);
    setvalidationError(error);
  }, [dateTime]);

  //set Date on Submit action
  let setCountDownTimerFn = (dateTimeInput) => {
    let { timer } = checkIfDateIsValid(new Date(dateTimeInput));
    if (timer) {
      localStorage.setItem("countedown", dateTime);
      setCountDownDate(new Date(dateTimeInput));
    } else {
      resetTimer();
    }
  };

  //reset count down date time and reset local storage
  const resetTimer = () => {
    localStorage.removeItem("countedown");
    setCountDownDate("");
  };

  const resetLocalStorage = () => localStorage.removeItem("countedown");

  return (
    <div className="CountDown_Main">
      <div className="flex f-column r-gap1 align-item-centre">
        <h1 className="primary">
          Countdown <span className="secondary">Timer</span>
        </h1>
        <CountdownForm
          dateTime={dateTime}
          setDateTime={setDateTime}
          setCountDownTimerFn={setCountDownTimerFn}
        />
        <div className="secondary message">{validationError}</div>
        {countdownDate && (
          <CoundownTimer
            targetDate={countdownDate}
            resetTimer={resetTimer}
            resetLocalStorage={resetLocalStorage}
          />
        )}
      </div>
    </div>
  );
}

export default Main;
