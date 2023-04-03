import React from "react";

function StartButton(props) {
  let buttonString = props.isTimeActive ? "Pause" : "Start";

  /**
   * Toggles the time between a paused state and continuous state
   */
  function toggleTime(){
    if (props.isTimeActive){
      props.turnTimeOff();
    } else {
      props.turnTimeOn();
    }
  }

  return (
    <button className="widget-button" onClick={toggleTime}>
      {buttonString}
    </button>
  );
}

export default StartButton;
