// ProductComponent.js
import React from "react";
import { useCart } from "./CartContext";

const ProductComponent = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} alt={product.title} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductComponent;
