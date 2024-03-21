import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductScreen = () => {
  return (
    <Container>
      <h1 className="text-center">Products</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                {/* Add any additional information you want to display */}
                {/* For example, you can add a button to view more details */}
                {/* <Button variant="primary">View Details</Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductScreen;
