import React, { useEffect } from "react";
import ProductList from "./components/ProductList";
import { Spinner } from "react-bootstrap/Spinner";
import { URL } from "../constants";

const Homepage = ({ searchQuery }) => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  useEffect(() => {
    const productFetch = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        const filteredData = data.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filteredData.length == 0) {
          setProducts(data);
          setLoading(false);
        }
        setProducts(filteredData);
        setLoading(false);
      } catch (error) {
        console.error("Error while fetching products", error);
      }
    };
    productFetch();
  }, [searchQuery]);
  return (
    <div className="home-page">
      {isLoading === true ? (
        <div className="loading-container">
          <Spinner animation="border" role="status"></Spinner>
          <span>Loading...</span>
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default Homepage;
