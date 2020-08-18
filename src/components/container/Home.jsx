import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../login/Login';
import Register from '../registerForm/Register';


function Home(children) {
  
  return (
    <>
    <Container fluid className="row d-flex justify-content-between mt-5">
      <Jumbotron className="col-md-8 p-5 mx-auto">
        <h1 className="display-4">Ecommmerce CoderHouse</h1>  
        <hr/>
        <p>All products in one page, heres you gone find all what you need </p>
        <p>
          <Register/>
        </p>
      </Jumbotron>
      <Login/>
    </Container>
    
    </>
  );
}

export default Home;
