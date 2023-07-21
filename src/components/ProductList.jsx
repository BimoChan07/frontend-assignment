import React from "react";
import { Link } from "react-router-dom";
import Product from "./Products";
import "../App.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <Product product={product} key={index} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
