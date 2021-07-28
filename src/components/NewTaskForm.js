import React, { useState } from "react";

function NewTaskForm({categories = [], onTaskFormSubmit}) {
  const [data, setData] = useState({
    text : '',
    category: categories[0],
  })

  function handleChange(event) {
    const {name, value} = event.target;

    setData(prevData => ({
      ...prevData,
      [name] : value
    }))
  }

  return (
    <form className="new-task-form" onSubmit={(e) => {
      e.preventDefault(); 
      onTaskFormSubmit(data)
      }}>
      <label>
        Details
        <input type="text" name="text" value={data.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={data.category} onChange={handleChange}>
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
