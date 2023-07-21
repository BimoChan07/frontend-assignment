import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Spinner from "react-bootstrap/Spinner";
import { URL } from "../constants";

const Homepage = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);

        const filteredData = data.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filteredData.length === 0) {
          setProducts(data);
          setLoading(false);
        }
        setProducts(filteredData);
        setLoading(false);
      } catch (error) {
        console.error("Error while fetching products", error);
      }
    };
    fetchProducts();
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
