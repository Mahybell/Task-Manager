import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task details"
        className="task-input"
      />
      <button type="submit" className="task-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
