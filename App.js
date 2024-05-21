import React, { useState } from 'react';
import Calendar from './components/Calendar';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  const handleTaskClick = (task) => {
    // Handle task click event
    console.log('Task clicked:', task);
  };

  return (
    <div>
      <h1>Task Scheduler</h1>
      <TaskForm onAddTask={handleAddTask} />
      <Calendar tasks={tasks} onTaskClick={handleTaskClick} />
    </div>
  );
};

export default App;
