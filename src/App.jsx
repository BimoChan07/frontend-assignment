import React, { useState } from "react";
// import ProductList from "./components/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Homepage from "./pages/Homepage";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Await } from "react-router-dom";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e, searchQuery) => {
    e.preventDefault();
    console.log("event", e);
  };
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">E-commerce Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Form
              className="d-flex"
              onSubmit={(e) => handleSearch(e, searchQuery)}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage searchQuery={searchQuery} />} />
          <Route
            path="/product/:id"
            element={
              <Await>
                <ProductDetails />
              </Await>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
