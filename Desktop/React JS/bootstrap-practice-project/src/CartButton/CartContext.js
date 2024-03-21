// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProductIndex = cartItems.findIndex(
      (item) => item.title === product.title
    );
    if (existingProductIndex !== -1) {
      // Product already exists in the cart, increase the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // Product is not in the cart, add it
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
