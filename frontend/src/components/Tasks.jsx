import React, { useState } from 'react';
import axios from 'axios';

const Tasks = ({ tasks = [], fetchTasks }) => {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask) return;
    axios.post('/api/tasks', { title: newTask })
      .then(() => {
        setNewTask('');
        fetchTasks(); 
      })
      .catch(error => {
        console.error('There was an error adding the task:', error);
      });
  };

  const updateTask = (taskId, completed) => {
    axios.put(`/api/tasks/${taskId}`, { completed })
      .then(() => {
        fetchTasks(); 
      })
      .catch(error => {
        console.error('There was an error updating the task:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => updateTask(task.id, !task.completed)}
            />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
