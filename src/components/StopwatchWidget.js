import React, { useState, useEffect, useRef } from "react";

import TimerDisplay from "./TimerDisplay";
import TimerInputs from "./TimerInputs";
import StopwatchInputs from "./StopwatchInputs";
import TimerSetting from "./TimerSetting";

import "../styles/timer.css";
import alarm from "../soundfiles/alarm.mp3";

function StopwatchWidget() {
  const [time, setTime] = useState(0); // stores the value of the time
  const [isTimeActive, setIsTimeActive] = useState(false); // stores whether the time is paused or continuing
  const [direction, setDirection] = useState(1); // stores the time direction, forward or backward
  const [stopwatchActive, setStopwatchActive] = useState(true); // stores whether the stopwatch is currently active
  const [timerActive, setTimerActive] = useState(false); // stores whether the timer is currently active
  const [timerSettingPanelActive, setTimerSettingPanelActive] = useState(false); // stores status of timer setting panel
  const [timerStartingValue, setTimerStartingValue] = useState(0); // stores the set time of the timer
  const [timerInterval, setTimerInterval] = useState(); // this state holds the time setInterval() so it can be cleared
  const audio = useRef(null); // references the timer alarm
  const [lapList, setLapList] = useState([]); // stores the tracked laps
  const [resetLaps, setResetLaps] = useState();

  /**
   * useEffect hook that will put the timer in a pause or continuous state.
   */
  useEffect(() => {
    if (isTimeActive) {
      setTimerInterval(
        setInterval(() => {
          if (direction > 0) {
            setTime((time) => time + 1);
          } else {
            setTime((time) => time - 1);
          }
        }, 1000)
      );
    } else {
      clearInterval(timerInterval);
    }
  }, [isTimeActive]);

  /**
   * useEffect hook that will signal when the timer has ticked down to 0
   */
  useEffect(() => {
    if (time <= 0 && timerActive) {
      audio.current.play();
      setTime(0);
      setIsTimeActive(false);
    }
  }, [time]);

  function turnTimeOn() {
    setIsTimeActive(true);
  }

  function turnTimeOff() {
    setIsTimeActive(false);
  }

  function resetTime() {
    if (stopwatchActive) {
      setTime(0);
      setIsTimeActive(false);
    } else if (timerActive) {
      setTime(timerStartingValue);
      setIsTimeActive(false);
    }
  }

  function startTimer(hours, minutes, seconds) {
    let totalSeconds = hours * 60 ** 2 + minutes * 60 + seconds;
    setResetLaps(totalSeconds);
    setIsTimeActive(false);
    setTimerStartingValue(totalSeconds);
    setTime(totalSeconds);
    setDirection(-1);
    setStopwatchActive(false);
    setTimerSettingPanelActive(false);
    setTimerActive(true);
  }

  function startStopwatch() {
    setIsTimeActive(false);
    setTime(0);
    setDirection(1);
    setStopwatchActive(true);
    setTimerSettingPanelActive(false);
    setTimerActive(false);
  }

  return (
    <div className="timer-container">
      <div className="display-container">
        <TimerDisplay time={time} lapList={lapList} resetLaps={resetLaps} />
      </div>

      <audio src={alarm} ref={audio} />

      {timerSettingPanelActive && <TimerSetting startTimer={startTimer} />}

      {timerActive && (
        <TimerInputs
          isTimeActive={isTimeActive}
          turnTimeOn={turnTimeOn}
          turnTimeOff={turnTimeOff}
          resetTime={resetTime}
          startStopwatch={startStopwatch}
          setResetLaps={setResetLaps}
        />
      )}

      {stopwatchActive && (
        <StopwatchInputs
          isTimeActive={isTimeActive}
          turnTimeOn={turnTimeOn}
          turnTimeOff={turnTimeOff}
          resetTime={resetTime}
          setTimerSettingPanelActive={setTimerSettingPanelActive}
          setTimerActive={setTimerActive}
          setStopwatchActive={setStopwatchActive}
          time={time}
          lapList={lapList}
          setLapList={setLapList}
          setResetLaps={setResetLaps}
        />
      )}
    </div>
  );
}

export default StopwatchWidget;
