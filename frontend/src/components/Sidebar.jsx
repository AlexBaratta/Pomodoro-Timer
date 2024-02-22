// Sidebar.jsx
import React from 'react';
import '../styles/Sidebar.css'
const Sidebar = ({ setActiveComponent }) => {
  return (
    <div className="sidebar">
      <button onClick={() => setActiveComponent('tasks')}>Tasks</button>
      <button onClick={() => setActiveComponent('pomodoro')}>Pomodoro Timer</button>
    </div>
  );
};

export default Sidebar;
