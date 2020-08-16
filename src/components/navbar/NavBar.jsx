import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
                        <Nav.Link href="/" >Home</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="product/tshirt">T-shirt</NavDropdown.Item>
                            <NavDropdown.Item href="product/hoodies">Hoodies</NavDropdown.Item>
                            <NavDropdown.Item href="product/trousers">Trousers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="faq">Questions?</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="contact">Contact</Nav.Link>
                    </Nav>
                    <Nav.Link href="cart"><FontAwesomeIcon icon={faShoppingCart} onClick={goToCart} quantity={quantity}/></Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>)
}
