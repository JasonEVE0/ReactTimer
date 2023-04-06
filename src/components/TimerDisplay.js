import React, { useEffect, useState } from "react";

function TimerDisplay(props) {
  // computes the hours, minutes and seconds from total seconds
  let hours = Math.trunc(props.time / 60 ** 2);
  let minutes = Math.trunc((props.time % 60 ** 2) / 60);
  let seconds = Math.trunc(props.time % 60);

  // if the hour, minute or second is only one digit then add a leading zero
  let hoursStringFormat = hours < 10 ? "0" + hours : hours;
  let minutesStringFormat = minutes < 10 ? "0" + minutes : minutes;
  let secondsStringFormat = seconds < 10 ? "0" + seconds : seconds;

  const [lapListDisplay, setLapListDisplay] = useState(props.lapList);

  useEffect(() => {
    let latestLap = props.lapList.slice(
      props.lapList.length - 8,
      props.lapList.length
    );
    lapListDisplay.push(latestLap);
  }, [props.lapList]);

  useEffect(() => {
    setLapListDisplay([]);
  }, [props.resetLaps]);

  return (
    <>
      <h2>
        {hoursStringFormat}:{minutesStringFormat}:{secondsStringFormat}
      </h2>
      <ul className="lap-list">
        {lapListDisplay.map((value) => (
          <li key={value + Math.random()}>{value}</li>
        ))}
      </ul>
    </>
  );
}

export default TimerDisplay;
