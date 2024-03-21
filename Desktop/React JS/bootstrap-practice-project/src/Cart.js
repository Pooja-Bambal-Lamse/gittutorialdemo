import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = ({ showCart, setShowCart }) => {
  const removeFromCart = (index) => {
    // Create a new cart array excluding the item to be removed
    const updatedCart = [
      ...cartElements.slice(0, index),
      ...cartElements.slice(index + 1),
    ];
    // Update the cart
    // You can use state management like React Context or Redux for updating the cart state
    console.log(updatedCart);
  };

  return (
    <Container className={`cart-container ${showCart ? "show" : ""}`}>
      <div className="cart-header">
        <h3>Cart</h3>
        <Button variant="secondary" onClick={() => setShowCart(false)}>
          Close
        </Button>
      </div>
      <div className="cart-items">
        {cartElements.map((item, index) => (
          <Card key={index} className="mb-3">
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>Price: ${item.price}</Card.Text>
              <Card.Text>Quantity: {item.quantity}</Card.Text>
              <Button variant="danger" onClick={() => removeFromCart(index)}>
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Cart;
