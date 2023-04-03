import React from "react";

import "../styles/timer.css";

function TimerSetting(props) {
  function submitTimer() {
    let hours = Number(document.querySelector("#hours").value);
    let minutes = Number(document.querySelector("#minutes").value);
    let seconds = Number(document.querySelector("#seconds").value);

    props.startTimer(hours, minutes, seconds);
  }

  return (
    <div className="countdown-container">
      <form>
        <label htmlFor="hours">hours:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text" name="hours" id="hours"></input>
        <br />

        <label htmlFor="minutes">minutes: </label>
        <input type="text" name="minutes" id="minutes"></input>
        <br />

        <label htmlFor="seconds">seconds: </label>
        <input type="text" name="seconds" id="seconds"></input>
        <br />

        <input
          className="countdown-submit"
          onClick={submitTimer}
          type="button"
          value="Start Countdown"
        ></input>
      </form>
    </div>
  );
}

export default TimerSetting;
