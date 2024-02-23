import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../styles/PomodoroTimer.css';

const PomodoroTimer = () => {
  const [endTime, setEndTime] = useState(null);
  const [timerDisplay, setTimerDisplay] = useState('25m 00s');
  const [timerActive, setTimerActive] = useState(false); 
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
        setTimerActive(false); 
        clearInterval(intervalRef.current);
        return;
      }

      const minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

      setTimerDisplay(`${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`);
    };

    if (endTime) {
      updateDisplay(); 

      intervalRef.current = setInterval(updateDisplay, 1000);
    } else {
      setTimerDisplay('25m 00s'); 
    }

    return () => clearInterval(intervalRef.current);
  }, [endTime, calculateTimeLeft]);

  const startCountdown = () => {
    const newEndTime = new Date(new Date().getTime() + 25 * 60000); 
    setEndTime(newEndTime);
    setTimerActive(true); 
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
          {timerActive ? 'Restart Timer' : 'Start Clock'}         </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
