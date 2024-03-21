// App.js
import React from "react";
import { CartProvider } from "./CartButton/CartContext";
import ProductComponent from "./CartButton/ProductComponent";
import CartIcon from "./CartButton/CartIcon";

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>My E-commerce App</h1>
        <CartIcon />
        <ProductComponent />
      </div>
    </CartProvider>
  );
};

export default App;
