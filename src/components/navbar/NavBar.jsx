import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function MenuBar(quantity) {


    const goToCart = () => {

        console.log("shopping cart");
        return true;
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="mx-auto d-flex justify-content-around">
                <Navbar.Brand href="#home" className="mx-0">CoderHouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Router>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item >T-shirt</NavDropdown.Item>
                            <NavDropdown.Item  >Hoodies</NavDropdown.Item>
                            <NavDropdown.Item >Trousers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="faq">Questions?</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Router>
                    </Nav>
                    <Nav.Link href="cart"><FontAwesomeIcon icon={faShoppingCart} onClick={goToCart} quantity={quantity}/></Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>)
}
