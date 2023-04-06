import React from "react";

let counter = 1;

function ResetButton(props) {
  function reset() {
    props.setResetLaps(++counter);
    props.reset();
  }
  
  return (
    <button className="widget-button" onClick={reset}>
      Reset
    </button>
  );
}

export default ResetButton;
