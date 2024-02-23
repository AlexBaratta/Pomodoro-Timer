import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchTasks = () => {
    axios.get('/api/tasks/')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks:', error);
      });
  };

  const addTask = () => {
    console.log('test')
    if (!newTask) return;
    axios.post('/api/tasks/', { title: newTask })
      .then(() => {
        setNewTask('');
        fetchTasks(); // Fetch tasks again to refresh the list
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

  useEffect(() => {
    fetchTasks();
  }, []);

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
          <li key={task._id}> 
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => updateTask(task._id, !task.completed)} 
            />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
