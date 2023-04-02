import React from "react";

import StartToggle from "./StartToggle";
import ResetButton from "./ResetButton";
import CountdownButton from "./CountdownButton";

function StopwatchInputs(props) {
  return (
    <div className="button-container">
      <StartToggle
        onClickToggle={props.toggleTimer}
        isStopwatchActive={props.stopwatchActive}
      />
      <ResetButton reset={props.resetTime} />
      <CountdownButton countdownActiveOnClick={props.displayCountdownWindow} />
    </div>
  );
}

export default StopwatchInputs;
