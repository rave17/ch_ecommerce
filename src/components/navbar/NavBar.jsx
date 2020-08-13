import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function MenuBar() {

    const goToCart = () => {
        
        console.log("shopping cart");
        return true;
        }
    

    return (
        <>
            <Navbar bg="light" expand="lg" className="mx-auto d-flex justify-content-around">
                <Navbar.Brand href="#home" className="mx-0">CoderHouse</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#link">Products</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                    <Nav.Link href="cart"><FontAwesomeIcon icon={faShoppingCart} onClick={goToCart}/></Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>)
}
