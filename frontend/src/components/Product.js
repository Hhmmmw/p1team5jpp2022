import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="mt-3 p-0">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          loading="lazy"
          className="product-image"
          src={product.image}
          variant="top"
          alt={product.name}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          {product && product.rating && (
            <Rating
              value={product.rating.rate}
              text={`${product.rating.count} reviews`}
            />
          )}
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
