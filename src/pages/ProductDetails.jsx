import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { URL } from "../constants";

const ProductDetails = () => {
  const [product, setProductDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const url = "https://fakestoreapi.com/";
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const res = await fetch(`${URL}/${id}`);
        const data = await res.json();
        setProductDetail(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error while fetching products", error);
      }
    };
    fetchProductById(id, url);
  }, [id]);
  return isLoading ? (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-img" />
      <Spinner animation="border" role="status"></Spinner>
      <span>Loading...</span>
    </div>
  ) : (
    <div className="product-detail-container">
      <div className="product-wrapper">
        <h2>{product.title}</h2>
        <p>Description: {product.description}</p>
        <h4>Price: ${product.price}</h4>
      </div>
    </div>
  );
};

export default ProductDetails;
