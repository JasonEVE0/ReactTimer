import React from "react";

function CountdownButton(props) {
  return (
    <button className="timer-button" onClick={props.countdownActiveOnClick}>
      Countdown
    </button>
  );
}

export default CountdownButton;
