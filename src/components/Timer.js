import React from "react";

import TimerDisplay from "./TimerDisplay";
import StartToggle from "./StartToggle";
import ResetButton from "./ResetButton";
import CountdownButton from "./CountdownButton";

import '../styles/timer.css';

function Timer(){
    return (
        <div className="timer-container">
            <div className="display-container">
                <TimerDisplay />
            </div>
            <div className="button-container">
                <StartToggle />
                <ResetButton />
                <CountdownButton />
            </div>
        </div>
    );
}

export default Timer;