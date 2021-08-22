import React, {  useState } from "react";
import "./Pomodoro.css";

const Pomodoro = () => {
  let [minute, setMinute] = useState(24);
  let [sec, setSecond] = useState(59);
  let [rest, setRest] = useState(4);

  let minutes_interval;
  let seconds_interval;

  function handleTimer() {
    // Start the countdown
    minutes_interval = setInterval(minutesTimer, 60000);
    seconds_interval = setInterval(secondsTimer, 1000);
  }

  function clearIntervals() {
    clearInterval(minutes_interval);
    clearInterval(seconds_interval);
  }

  function minutesTimer() {
    if (sec <= 0 && minute <= 0) {
      takeBreak()
      clearIntervals();
    } else {
      minute = minute - 1;
      setMinute(minute);
      console.log(minute);
    }
  }

  function secondsTimer() {
    

    if (sec <= 0) {
      sec = 60;
      setSecond(sec);
      console.log("sec");
    } else {
      sec = sec - 1;
      setSecond(sec);
      if (sec <= 0 && minute <= 0) {
        console.log("running sec ");
        takeBreak()
        clearIntervals();
        return;
      }
    }

    console.log("run");
  }

  function takeBreak(){
    setMinute(rest)
    setSecond(60)
    handleTimer();
  }

  function incrementSessions() {
    minute = minute + 25;
    setMinute(minute);
  }

  function decrementSessions() {
    if (minute >= 1) {
      minute = minute - 1;
      setMinute(minute);
    }
  }
    function incrementBreakTime() {
      rest = rest + 5;
      setRest(rest);
    }

    function decrementBreakTime() {
      if (rest >= 1) {
        rest = rest - 1;
        setRest(rest);
      }
    }
  
  return (
    <div className="pomoContainer">
      <div className="pomocycle">
        <div className="row1">
          <h3>BreakTime: {rest}</h3>
        </div>
        <div className="row2">
          <h1>{minute}:</h1>
          <h1>{sec}</h1>
        </div>
      </div>

      <div className="rowContainer">
        <div className="leftchildpart">
          <div className="arrow">
            <i className="fas fa-arrow-up" onClick={incrementSessions}></i>
            <h3>Sessions</h3>
            <i className="fas fa-arrow-down" onClick={decrementSessions}></i>
          </div>
        </div>
        <button className="btn" onClick={handleTimer}>
          <i className="fas fa-play fa-2x"></i>
        </button>
        <div className="rightchildpart">
          <div className="arrow">
            <i className="fas fa-arrow-up" onClick={incrementBreakTime}></i>
            <h3>Break</h3>
            <i className="fas fa-arrow-down" onClick={decrementBreakTime}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
