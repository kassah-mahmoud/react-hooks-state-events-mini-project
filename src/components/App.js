import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasks, setTasks] = useState(TASKS);

  const deleteTask = (deletedTask) => setTasks((prevTasks) => [...prevTasks.filter(task => task.text !== deletedTask)]);

  const addTask = (newTask) => setTasks(prevTasks => [...prevTasks, newTask]);
  
  const [selectedCategory, setSelectedCategory] = useState('All');


  const [all, ...newTaskFormCategories] = CATEGORIES;

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onCategoryClick={setSelectedCategory} />
      <NewTaskForm categories={newTaskFormCategories} onTaskFormSubmit={addTask} />
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
