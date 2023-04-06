import React from "react";

function LapTrackingButton(props) {
  function addLapTime() {
    // computes the hours, minutes and seconds from total seconds
    let hours = Math.trunc(props.time / 60 ** 2);
    let minutes = Math.trunc((props.time % 60 ** 2) / 60);
    let seconds = Math.trunc(props.time % 60);

    // if the hour, minute or second is only one digit then add a leading zero
    let hoursStringFormat = hours < 10 ? "0" + hours : hours;
    let minutesStringFormat = minutes < 10 ? "0" + minutes : minutes;
    let secondsStringFormat = seconds < 10 ? "0" + seconds : seconds;
    let finalFormat = `${hoursStringFormat}:${minutesStringFormat}:${secondsStringFormat}`;

    props.setLapList(props.lapList + finalFormat);
  }

  return <button className="widget-button" onClick={addLapTime}>Track Lap</button>;
}

export default LapTrackingButton;
