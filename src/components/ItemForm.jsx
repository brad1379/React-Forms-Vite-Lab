import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, onSearchChange, search}) {
  // Controlled state for the new item's name and category fields.
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    // Prevent the default page reload caused by form submission.
    e.preventDefault();

    // Build a new item object from the current form state and a fresh id.
    const newItem = {
      id: uuid(),
      name: name,
      category: category,
    }

    // Hand the new item up to ShoppingList/App so it can be added to the list.
    onItemFormSubmit(newItem);
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) =>  setCategory(e.target.value)} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;