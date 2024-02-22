import React, { useState, useEffect } from 'react';
import '../styles/PomodoroTimer.css';

const PomodoroTimer = () => {
  const [countdown, setCountdown] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timerDisplay, setTimerDisplay] = useState('');

  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => clearInterval(countdown);
  }, [countdown]);

  useEffect(() => {
    if (!endTime) return;

    const updateDisplay = () => {
      const now = new Date().getTime();
      const countdownTime = endTime - now;

      if (countdownTime < 0) {
        clearInterval(countdown);
        setTimerDisplay("Session Complete!");
        return;
      }

      const minutes = Math.floor(
        (countdownTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

      setTimerDisplay(`${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`);
    };

    // Synchronize countdown with full seconds
    const timeUntilNextSecond = 1000 - (new Date().getTime() % 1000);
    const timeout = setTimeout(() => {
      updateDisplay();
      const interval = setInterval(updateDisplay, 1000);
      setCountdown(interval);
    }, timeUntilNextSecond);

    return () => {
      clearTimeout(timeout);
    };
  }, [endTime]);

  const startCountdown = () => {
    setEndTime(new Date(new Date().getTime() + 25 * 60000));
  };

  return (
    <div id="container">
      <div id="clock">
        <div id="timer" className={timerDisplay === "Session Complete!" ? 'complete' : ''}>
          {timerDisplay || '25m 00s'}
        </div>
      </div>
      <div id="start-button">
        <button id="startButton" onClick={startCountdown}>Start Clock</button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
