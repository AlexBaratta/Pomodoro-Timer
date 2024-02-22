// App.jsx
import React, { useState } from 'react';
import './styles/App.css'; 
import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';
import PomodoroTimer from './components/PomodoroTimer';

function App() {
  const [activeComponent, setActiveComponent] = useState('tasks');

  return (
    <div className="App">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="content">
        {activeComponent === 'tasks' && <Tasks />}
        {activeComponent === 'pomodoro' && <PomodoroTimer />}
      </div>
    </div>
  );
}

export default App;
