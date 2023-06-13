import React from 'react';

const TaskItem = ({ task, deleteTask, markTaskCompleted }) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleComplete = () => {
    markTaskCompleted(task.id);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.task}</span>
      <div className="task-buttons">
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
      {!task.completed && (
        <button className="complete-button" onClick={handleComplete}>
            Completed
        </button>
         )}
      </div>
    </li>
  );
};

export default TaskItem;
