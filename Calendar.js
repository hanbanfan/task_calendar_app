import React from 'react';

const Calendar = ({ tasks, onTaskClick }) => {
  // Render calendar UI here
  return (
    <div>
      {/* Calendar UI goes here */}
      <h1>Calendar</h1>
      {tasks.map(task => (
        <div key={task.id} onClick={() => onTaskClick(task)}>
          {task.title}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
