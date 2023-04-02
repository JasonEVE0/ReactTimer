import React from "react";

function StartToggle(props) {
  let buttonString = props.isStopwatchActive ? "Pause" : "Start";

  return (
    <button className="timer-button" onClick={props.onClickToggle}>
      {buttonString}
    </button>
  );
}

export default StartToggle;
