// src/components/Cart.js

import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, removeItemFromCart, clearCart } = useContext(CartContext);
  const removeFromCartHandler = (productid) => {
    removeItemFromCart(productid);
  };

  const clearCartHandler = () => {
    clearCart();
  };

  console.log("cart", cart);
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.items.length > 0 ? (
        <button onClick={() => clearCartHandler()}>Clear Cart</button>
      ) : null}
      <ul>
        {cart.items.map((item) => (
          <>
            <li key={item.id}>
              {item.name} - Item price is : {item.price}, Quantity :  {item.quantity} , Total price : Rs{item.totalPrice}
            </li>
            <button onClick={() => removeFromCartHandler(item.id)}>
              Remove from cart
            </button>
          </>
        ))}
      </ul>

    </div>
  );
};

export default Cart;
