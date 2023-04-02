import React from "react";

import StartToggle from "./StartToggle";
import ResetButton from "./ResetButton";
import TimerButton from "./TimerButton";

function StopwatchInputs(props) {
  return (
    <div className="button-container">
      <StartToggle
        onClickToggle={props.toggleTimer}
        isStopwatchActive={props.stopwatchActive}
      />
      <ResetButton reset={props.resetTime} />
      <TimerButton timerActiveOnClick={props.displayCountdownWindow} />
    </div>
  );
}

export default StopwatchInputs;
