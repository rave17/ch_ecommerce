import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
                    
                        <Nav.Link as={Link} to="/"> Home </Nav.Link> 
                        <Nav.Link as={Link} to="/products"> Products </Nav.Link>  
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link> 
                        
                    </Nav>
                    <Nav.Link href="cart"><FontAwesomeIcon icon={faShoppingCart} onClick={goToCart} quantity={quantity}/></Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>)
}
