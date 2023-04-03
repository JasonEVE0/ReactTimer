import React from "react";

function ResetButton(props) {
  return (
    <button className="widget-button" onClick={props.reset}>
      Reset
    </button>
  );
}

export default ResetButton;
