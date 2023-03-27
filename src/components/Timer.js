import React, { useState } from "react";

import TimerDisplay from "./TimerDisplay";
import StartToggle from "./StartToggle";
import ResetButton from "./ResetButton";
import CountdownButton from "./CountdownButton";

import '../styles/timer.css';

function Timer(){

  let [time, setTime] = useState(0);
  let [timerActive, setTimerActive] = useState(false);
  let [timerInterval, setTimerInterval] = useState();

  // this function executes everytime the start/pause button is clicked, if the start button is clicked a
  // new interval will begin to increment the time every second. If the pause button is cliciked the interval
  // will be cleared.
  function toggleTimer(){
    if (timerActive){
      clearInterval(timerInterval);
      setTimerActive(false);
    } else {
      setTimerInterval(setInterval(() => setTime(++time), 1000));
      setTimerActive(true);
    }
  }

  return (
    <div className="timer-container">
      <div className="display-container">
        <TimerDisplay time={time} />
      </div>
      <div className="button-container">
        <StartToggle onClickToggle={toggleTimer} isTimerActive={timerActive} />
        <ResetButton />
        <CountdownButton />
      </div>
    </div>
  );
}

export default Timer;