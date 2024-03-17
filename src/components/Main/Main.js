import React, { useEffect, useState } from "react";
import "./index.css";
import CountdownForm from "../ContdownForm";
import { checkIfDateIsValid } from "../../Utility";

function Main() {
  let [dateTime, setDateTime] = useState();
  let [validationError, setvalidationError] = useState("");

  //saving count down timerto local storage  when value changed
  useEffect(() => {
    if (localStorage.getItem("countedown", dateTime)) {
      setDateTime(new Date(localStorage.getItem("countedown")));
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
    }
  };

  return (
    <div className="CountDown_Main">
      <div className="flex f-column r-gap1">
        <h1 className="primary">
          Countdown <span className="secondary">Timer</span>
        </h1>
        <CountdownForm
          dateTime={dateTime}
          setDateTime={setDateTime}
          setCountDownTimerFn={setCountDownTimerFn}
        />
        <div className="secondary">{validationError}</div>
      </div>
    </div>
  );
}

export default Main;
