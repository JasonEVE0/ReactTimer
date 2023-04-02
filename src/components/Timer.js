import React, { useState, useEffect } from "react";

import TimerDisplay from "./TimerDisplay";
import CountdownInputs from "./CountdownInputs";
import StopwatchInputs from "./StopwatchInputs";

import '../styles/timer.css';

function Timer(){

  const [time, setTime] = useState(0);
  const [stopwatchActive, setStopwatchActive] = useState(false);
  const [timerInterval, setTimerInterval] = useState();
  const [countdownActive, setCountdownActive] = useState(false);
  const [direction, setDirection] = useState(1);

  /**
   * useEffect hook that will put the timer in a incrementing/decrementing state or pause state.
   * When the direction variable is greater than zero the timer will move forwards, when the direction 
   * variable is less than zero it will move backwards.
   */
  useEffect(() => {
    if (stopwatchActive){
      setTimerInterval(setInterval(() => {
        if (direction > 0){
          setTime(time => time + 1);
        } else {
          setTime(time => time - 1);
        }
      }, 1000));
    } else {
      clearInterval(timerInterval);
    }
  }, [stopwatchActive]);

  /**
   * Use effect hook that will signal when the timer has ticked down to 0
   */
  useEffect(() => {
    if (time <= 0) {
      console.log("stopwatch complete")
      setStopwatchActive(false);
      setDirection(1);
    }
  }, [time]);

  /**
   * Toggles the timer between a incrementing/decrementing state or pause state.
   */
  function toggleTimer(){
    stopwatchActive ? setStopwatchActive(false) : setStopwatchActive(true);
  }

  /**
   * Pauses the timer and sets the time to 00:00:00
   */
  function resetTime(){
    setStopwatchActive(false);
    setTime(0);
    setDirection(1);
  }

  /**
   * Displays the countdown input menu
   */
  function displayCountdownWindow(){
    setCountdownActive(true);
    setStopwatchActive(false);
  }

  /**
   * Closes the countdown input menu
   */
  function closeCountdownWindow(){
    setCountdownActive(false);
  }

  /**
   * Sets the timer from the countdown inputs and flips the timer direction
   */
  function setCountdown(hours, minutes, seconds){
    let totalSeconds = (hours * (60**2)) + (minutes * 60) + seconds;
    setTime(totalSeconds);
    setDirection(-1);
    setStopwatchActive(true);
  }

  return (
    <div className="timer-container">
      <div className="display-container">
        <TimerDisplay time={time} />
      </div>
      { countdownActive ? (
        <CountdownInputs 
          setCountdown={setCountdown} 
          turnOffCountdown={closeCountdownWindow} 
        />
      ) : (
        <StopwatchInputs 
          toggleTimer={toggleTimer} 
          stopwatchActive={stopwatchActive} 
          resetTime={resetTime}
          displayCountdownWindow={displayCountdownWindow}
        />
      )}
    </div>
  );
}

export default Timer;