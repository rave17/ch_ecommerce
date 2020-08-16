import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


function Footer({link}){
    return <>
  <Navbar bg="dark" variant="dark" className="d-flex justify-content-between mt-5"> 
  <h3 class="my-auto">CoderHouse</h3>     
  <Nav className="col-md-3  justify-content-between p-0" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home" link="uno">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1"  link={"uno"}>Products</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"  link={"uno"}>Contact</Nav.Link>
    </Nav.Item>
  </Nav>
  <Nav bg="dark" variant="dark" className="flex-column" activeKey="/home">
  <Nav.Item className="col-md-3 ml-1">
      <Nav.Link eventKey="link-2"  link={"uno"}>Location</Nav.Link>
  </Nav.Item>
  </Nav>
  </Navbar>
 
    </>
}

export default Footer;