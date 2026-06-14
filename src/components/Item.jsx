import React, { useState } from "react";

function Item({ name, category }) {
  // Tracks whether this individual item has been added to the cart.
  const [isInCart, setIsInCart] = useState(false);

  // Toggle the cart status between "in cart" and "not in cart".
  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;