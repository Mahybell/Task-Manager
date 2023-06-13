import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, markTaskCompleted }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          markTaskCompleted={markTaskCompleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;
