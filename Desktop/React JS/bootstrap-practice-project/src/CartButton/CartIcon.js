// CartIcon.js
import React from "react";
import { useCart } from "./CartContext";

const CartIcon = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <img src="cart-icon.svg" alt="Cart" />
      <span>{totalItems}</span>
    </div>
  );
};

export default CartIcon;
