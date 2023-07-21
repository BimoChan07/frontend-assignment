import React from "react";
import ProductList from "./components/ProductList";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import "./App.css";

const App = () => {
  return (
    <div className>
      <Navbar
        expand="lg"
        variant="light"
        bg="light"
        className="bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand href="#">Ecommerce Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="product-list">
        <ProductList />
      </div>
    </div>
  );
};

export default App;
