import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../styles/PomodoroTimer.css';

const PomodoroTimer = () => {
  const [endTime, setEndTime] = useState(null);
  const [timerDisplay, setTimerDisplay] = useState('25m 00s');
  const [timerActive, setTimerActive] = useState(false); // State to track if the timer is active
  const intervalRef = useRef(null);

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const countdownTime = endTime ? endTime - now : 0;
    return countdownTime;
  }, [endTime]);

  useEffect(() => {
    const updateDisplay = () => {
      const countdownTime = calculateTimeLeft();

      if (countdownTime <= 0) {
        setTimerDisplay("Session Complete!");
        setEndTime(null);
        setTimerActive(false); // Reset timerActive when the countdown completes
        clearInterval(intervalRef.current);
        return;
      }

      const minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

      setTimerDisplay(`${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`);
    };

    if (endTime) {
      updateDisplay(); // Immediate update before the interval starts

      intervalRef.current = setInterval(updateDisplay, 1000);
    } else {
      setTimerDisplay('25m 00s'); // Reset display when there's no endTime
    }

    return () => clearInterval(intervalRef.current);
  }, [endTime, calculateTimeLeft]);

  const startCountdown = () => {
    const newEndTime = new Date(new Date().getTime() + 25 * 60000); // 25 minutes from now
    setEndTime(newEndTime);
    setTimerActive(true); // Set timerActive to true when starting the countdown
  };

  return (
    <div id="container">
      <div id="clock">
        <div id="timer" className={timerDisplay === "Session Complete!" ? 'complete' : ''}>
          {timerDisplay}
        </div>
      </div>
      <div id="start-button">
        <button id="startButton" onClick={startCountdown}>
          {timerActive ? 'Restart Timer' : 'Start Clock'} {/* Change button text based on timerActive */}
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
