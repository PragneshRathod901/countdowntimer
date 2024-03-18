import React from "react";
import { formateDateString } from "../../Utility";

function CountdownForm({ dateTime, setDateTime, setCountDownTimerFn }) {
  let handleForm = (e) => {
    e.preventDefault();
    setCountDownTimerFn(dateTime);
  };
  let ondateChanged = (e) => {
    setDateTime(new Date(e.target.value));
  };
  return (
    <form
      className="flex f-column r-gap1 align-item-centre"
      onSubmit={handleForm}
    >
      <input
        type="datetime-local"
        className="primary"
        value={dateTime ? formateDateString(dateTime) : ""}
        onChange={ondateChanged}
      ></input>
      <input type="submit" value="Start Countdown" className="primary"></input>
    </form>
  );
}

export default CountdownForm;
