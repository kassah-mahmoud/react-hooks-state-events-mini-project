import React from "react";
import Task from "./Task";

function TaskList({tasks, selectedCategory, onDeleteTask}) {
  const displayedTasks = tasks.filter(task => !selectedCategory || selectedCategory === 'All' || task.category === selectedCategory);

  return (
    <div className="tasks">
      {
        displayedTasks.map(task => <Task key={task.text} {...task} onDeleteTask={onDeleteTask} />)
      }
    </div>
  );
}

export default TaskList;
