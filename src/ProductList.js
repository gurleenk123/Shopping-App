import React, { useContext } from "react";
import { CartContext } from "./CartContext";
const products = [
  { id: "p1", name: "Product 1", price: 10 },
  { id: "p2", name: "Product 2", price: 20 },
];

export default function ProductList() {
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = (product) => {
    addItemToCart(product);
  };


  return (
    <div>
      <h1>hii</h1>
      {products.map((product) => {
        return (
          <div>
            <h3>{product.name}</h3>
            <p>Rs {product.price}</p>
            <button onClick={() => addToCartHandler(product)}>
              Add to Cart
            </button>
         
          </div>
        );
      })}
    </div>
  );
}
