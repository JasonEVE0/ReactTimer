import React from "react";

function StopwatchButton(props) {
  return (
    <button className="widget-button" onClick={props.startStopwatch}>
      Stopwatch
    </button>
  );
}

export default StopwatchButton;
