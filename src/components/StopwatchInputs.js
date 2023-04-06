import React from "react";

import StartButton from "./StartButton";
import ResetButton from "./ResetButton";
import TimerButton from "./TimerButton";
import LapTrackingButton from "./LapTrackingButton";

function StopwatchInputs(props) {
  return (
    <div className="button-container">
      <StartButton
        isTimeActive={props.isTimeActive}
        turnTimeOn={props.turnTimeOn}
        turnTimeOff={props.turnTimeOff}
      />
      <ResetButton reset={props.resetTime} setResetLaps={props.setResetLaps} />
      <TimerButton
        setTimerSettingPanelActive={props.setTimerSettingPanelActive}
        setTimerActive={props.setTimerActive}
        setStopwatchActive={props.setStopwatchActive}
      />
      <LapTrackingButton
        time={props.time}
        lapList={props.lapList}
        setLapList={props.setLapList}
      />
    </div>
  );
}

export default StopwatchInputs;
