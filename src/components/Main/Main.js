import React from "react";
import "./index.css";
import CountdownForm from "../ContdownForm";

function Main() {
  return (
    <div className="CountDown_Main">
      <div className="flex f-column r-gap1">
        <h1 className="primary">Countdown <span className="secondary">Timer</span></h1>
        <CountdownForm/>
      </div>
    </div>
  );
}

export default Main;
