// src/context/CartContext.js

import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    // totalQuantity: 0,
    // totalAmount: 0,
  });
  const addItemToCart = (product) => {
    setCart((prevCart) => {
      console.log("prev cart", prevCart);

      //find method will return the first matching element
      const existingItem = prevCart.items.find(
        (item) => item.id === product.id
      );

      let updatedItems;
      if (existingItem) {
        updatedItems = prevCart.items.map((item) => {
          //   item.id === product.id
          //     ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + product.price }
          //     : item
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + product.price,
            };
          } else {
            return item;
          }
        });
      } else {
        updatedItems = [
          ...prevCart.items,
          { ...product, quantity: 1, totalPrice: product.price },
        ];
      }

      console.log("updated item", updatedItems);

      return { ...prevCart, items: updatedItems };
    });
  };

  const removeItemFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex(
        (item) => item.id === productId
      );
      const existingItem = prevCart.items[existingItemIndex];
      
    //   if (!existingItem) return prevCart;

      let updatedItems;

      //if quantity is 1 then remove this item from cart
      if (existingItem.quantity === 1) {
        updatedItems = prevCart.items.filter((item) => item.id !== productId);
      }
      //else check for its quantity and decrement  
      else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
          totalPrice: existingItem.totalPrice - existingItem.price,
        };

        //update the items quantity in main cart so the index we have found for item
        //there we can put updated item
        updatedItems = [...prevCart.items];
        updatedItems[existingItemIndex] = updatedItem;
      }

      return { ...prevCart, items: updatedItems };
    });
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCart({
      items: [],
      totalQuantity: 0,
      totalAmount: 0,
    });
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart ,removeItemFromCart ,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
