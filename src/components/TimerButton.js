import React from "react";

function TimerButton(props) {
  function displaySettingPanel() {
    props.setTimerActive(false);
    props.setStopwatchActive(false);
    props.setTimerSettingPanelActive(true);
  }

  return (
    <button className="widget-button" onClick={displaySettingPanel}>
      Timer
    </button>
  );
}

export default TimerButton;
