import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "../App.css";

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <Product product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
