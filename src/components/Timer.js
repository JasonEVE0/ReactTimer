import React, { useState, useEffect } from "react";

import TimerDisplay from "./TimerDisplay";
import StartToggle from "./StartToggle";
import ResetButton from "./ResetButton";
import CountdownButton from "./CountdownButton";
import CountdownInputs from "./CountdownInputs";

import '../styles/timer.css';

function Timer(){

  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timerInterval, setTimerInterval] = useState();
  const [countdownActive, setCountdownActive] = useState(false);

  useEffect(() => {
    if (timerActive){
      setTimerInterval(setInterval(() => {
        setTime(time => time + 1);
      }, 1000));
    } else {
      clearInterval(timerInterval);
    }
  }, [timerActive]);

  function toggleTimer(){
    timerActive ? setTimerActive(false) : setTimerActive(true);
  }

  function resetTimer(){
    setTimerActive(false);
    setTime(0);
  }

  function displayCountdownWindow(){
    setCountdownActive(true);
  }

  function closeCountdownWindow(){
    setCountdownActive(false);
  }

  function setCountdown(hours, minutes, seconds){
    let totalSeconds = (hours * (60**2)) + (minutes * 60) + seconds;
    setTime(totalSeconds);
    setTimerActive(true);
  }

  return (
    <div className="timer-container">
      <div className="display-container">
        <TimerDisplay time={time} />
      </div>
      { countdownActive ? (
          <CountdownInputs setCountdown={setCountdown} turnOffCountdown={closeCountdownWindow} />
      ) : (
      <div className="button-container">
        <StartToggle onClickToggle={toggleTimer} isTimerActive={timerActive} />
        <ResetButton reset={resetTimer} />
        <CountdownButton countdownActiveOnClick={displayCountdownWindow}/>
      </div>
      )}
    </div>
  );
}

export default Timer;