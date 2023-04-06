import React from "react";

import StartButton from "./StartButton";
import ResetButton from "./ResetButton";
import StopwatchButton from "./StopwatchButton";

function TimerInputs(props) {
  return (
    <div className="button-container">
      <StartButton
        isTimeActive={props.isTimeActive}
        turnTimeOn={props.turnTimeOn}
        turnTimeOff={props.turnTimeOff}
      />
      <ResetButton reset={props.resetTime} setResetLaps={props.setResetLaps} />
      <StopwatchButton
        setTimerSettingPanelActive={props.setTimerSettingPanelActive}
        setTimerActive={props.setTimerActive}
        setStopwatchActive={props.setStopwatchActive}
        startStopwatch={props.startStopwatch}
      />
    </div>
  );
}

export default TimerInputs;
