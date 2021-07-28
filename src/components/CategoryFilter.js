import React from "react";

function CategoryFilter({categories = [] , selectedCategory, onCategoryClick}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
     {
       categories.map(category => <button className={selectedCategory === category? "selected" : ""} 
       onClick={() => onCategoryClick(category)} key={category}>{category}</button>)
     }
    </div>
  );
}

export default CategoryFilter;
