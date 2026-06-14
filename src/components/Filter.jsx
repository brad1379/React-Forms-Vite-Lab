import React from "react";

function Filter({ onCategoryChange, search, onSearchChange}) {
  return (
    <div className="Filter">
      {/* Controlled search input: value comes from ShoppingList's state, and
          onSearchChange updates that state on every keystroke. */}
      <input type="text" name="search" placeholder="Search..." value={search} onChange={onSearchChange}/>
      {/* Category dropdown: notifies ShoppingList so it can filter the list
          by the selected category. */}
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;