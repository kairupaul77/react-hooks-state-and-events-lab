import React, { useState } from 'react';

function Item({ name }) {
  // State to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Event handler to toggle the cart state
  const toggleCart = () => {
    setInCart(prevState => !prevState);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {name}
      <button onClick={toggleCart}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
