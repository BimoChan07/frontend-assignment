import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";

const Product = ({ product }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button
            style={{ display: "flex", justifyContent: "center" }}
            variant="dark"
          >
            {product.price}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
