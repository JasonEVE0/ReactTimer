import React from "react";

function TimerButton(props) {
  return (
    <button className="timer-button" onClick={props.timerActiveOnClick}>
      Timer
    </button>
  );
}

export default TimerButton;
