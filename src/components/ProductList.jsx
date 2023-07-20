import React, { useState, useEffect } from "react";
import Product from "./Products";
import "../App.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productFetch();
  }, []);

  const productFetch = async () => {
    try {
      const res = await fetch("http://localhost:8000/products");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Error while fetching products", error);
    }
  };
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
