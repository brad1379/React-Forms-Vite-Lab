import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  // Category filter selected in the Filter dropdown ("All" shows everything).
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Search text typed into the Filter input, used for the controlled search field.
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Apply both the category filter and the search filter (case-insensitive)
  // before rendering the list of items.
  const itemsToDisplay = items
    .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;